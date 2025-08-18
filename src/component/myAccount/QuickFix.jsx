// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronDown, Wrench } from "lucide-react"
// import DropDownFloting from "../otherFolder/DropDownFloting"

// export default function QuickFix() {
//   const [selectedProduct, setSelectedProduct] = useState("")
//   const [selectedProblem, setSelectedProblem] = useState("")
//   const [showSolution, setShowSolution] = useState(false)

//   const products = [
//     "Rotex Eco Advance BLDC Ceiling Fan",
//     "Rotex PHI BLDC Ceiling Fan",
//     "Eco High Speed 600mm Ceiling Fan",
//   ]

//   const problems = {
//     "Rotex Eco Advance BLDC Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
//     "Rotex PHI BLDC Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
//     "Eco High Speed 600mm Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
//   }

//   const solutions = {
//     Noise: {
//       title: "Fan making noise?",
//       steps: [
//         {
//           step: "01",
//           description: "All screws on blade, canopy, down-rod and blade kit must be tightened properly.",
//           image: "/placeholder.svg?height=100&width=100",
//         },
//         {
//           step: "02",
//           description: "Ensure that canopy not touching the top part of ceiling fan body.",
//           image: "/placeholder.svg?height=100&width=100",
//         },
//       ],
//     },
//     "Not Working": {
//       title: "Fan not working?",
//       steps: [
//         {
//           step: "01",
//           description: "Check if the power supply is connected properly and switch is ON.",
//           image: "/placeholder.svg?height=100&width=100",
//         },
//         {
//           step: "02",
//           description: "Verify that all electrical connections are secure and not loose.",
//           image: "/placeholder.svg?height=100&width=100",
//         },
//       ],
//     },
//   }

//   const handleProductChange = (product) => {
//     setSelectedProduct(product)
//     setSelectedProblem("")
//     setShowSolution(false)
//   }

//   const handleProblemChange = (problem) => {
//     setSelectedProblem(problem)
//     setShowSolution(true)
//   }

//   return (
//     <div className="space-y-5 h-[100%] min-h-[460px]">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-[600] text-gray-900">Quick Fix</h2>
//         {/* <p className="text-gray-600">Get instant solutions</p> */}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Product Selection */}
//   <DropDownFloting
//     label="Select Product"
//     options={products}
//     value={selectedProduct}
//     onChange={(val) => handleProductChange(val)}
//   />
//         {/* Problem Selection */}
//         <DropDownFloting
//     label="Select Problem"
//     options={selectedProduct ? problems[selectedProduct] || [] : []}
//     value={selectedProblem}
//     onChange={(val) => handleProblemChange(val)}
//   />
//       </div>

//       {/* Solution Display */}
//       <AnimatePresence>
//         {showSolution && selectedProblem && solutions[selectedProblem] && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className=" text-white  rounded-[10px]  overflow-hidden"
//           >
//           <img  className="  w-[300px] rounded-[10px]  h-[300px]" src="" />

      
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench } from "lucide-react";
import DropDownFloting from "../otherFolder/DropDownFloting";
import { ApiGet } from "../../helper/axios";

/** 🔧 UPDATE THESE to your backend */
const PRODUCTS_URL = "/products";                 // returns { status, data: { products: [...] } }
const PROBLEMS_URL = "/problems";                 // GET ?productId=...
const QUICKFIX_DETAIL_URL = "/quick-fix";         // GET ?productId=...&problemId=...

/* ---------- Normalizers (tolerant to shape) ---------- */
const normalizeProduct = (p) => ({
  id: p?._id || p?.id || "",
  title: p?.title || p?.name || "",
});

const normalizeProblem = (row) => ({
  id: row?._id || row?.id || "",
  name: row?.problem || row?.name || row?.problemName || "",
});

/* Build a tiny helper to read axios-like responses safely */
const payloadOf = (res) => res?.data ?? res ?? {};

export default function QuickFix() {
  // selections
  const [selectedProductTitle, setSelectedProductTitle] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedProblemName, setSelectedProblemName] = useState("");
  const [selectedProblemId, setSelectedProblemId] = useState("");

  // data
  const [products, setProducts] = useState([]);   // [{id,title}]
  const [problems, setProblems] = useState([]);   // [{id,name}]
  const [detail, setDetail] = useState(null);     // { banner, ... }

  // loading / error
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingProblems, setLoadingProblems] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [error, setError] = useState("");

  /* 1) Fetch products on mount */
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingProducts(true);
      setError("");
      try {
        const res = await ApiGet(PRODUCTS_URL);
        const payload = payloadOf(res);
        // your sample looked like: res = { status:200, data: { products:[...] } }
        const list = payload?.data?.products ?? payload?.products ?? [];
        const normalized = list.map(normalizeProduct).filter(p => p.id && p.title);
        if (mounted) setProducts(normalized);
      } catch (e) {
        console.error("Fetch products error:", e);
        if (mounted) setError("Unable to load products.");
      } finally {
        if (mounted) setLoadingProducts(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  /* Map title -> id for the dropdown’s string value */
  const productTitleToId = useMemo(() => {
    const map = new Map();
    products.forEach(p => map.set(p.title, p.id));
    return map;
  }, [products]);

  /* 2) When product changes, resolve id, reset problem, fetch problems */
  useEffect(() => {
    const pid = productTitleToId.get(selectedProductTitle) || "";
    setSelectedProductId(pid);
    setSelectedProblemName("");
    setSelectedProblemId("");
    setDetail(null);
    setProblems([]);

    if (!pid) return; // don’t fetch problems if no product

    let mounted = true;
    (async () => {
      setLoadingProblems(true);
      setError("");
      try {
        const res = await ApiGet(`${PROBLEMS_URL}?productId=${encodeURIComponent(pid)}`);
        const payload = payloadOf(res);
        // tolerate { data:{problems:[]} } OR { problems:[] } OR just []
        const list = payload?.data?.problems ?? payload?.problems ?? payload ?? [];
        const normalized = (Array.isArray(list) ? list : []).map(normalizeProblem)
          .filter(pr => pr.id && pr.name);
        if (mounted) setProblems(normalized);
      } catch (e) {
        console.error("Fetch problems error:", e);
        if (mounted) setError("Unable to load problems for this product.");
      } finally {
        if (mounted) setLoadingProblems(false);
      }
    })();

    return () => { mounted = false; };
  }, [selectedProductTitle, productTitleToId]);

  /* Map problem name -> id */
  const problemNameToId = useMemo(() => {
    const map = new Map();
    problems.forEach(pr => map.set(pr.name, pr.id));
    return map;
  }, [problems]);

  /* 3) When problem changes, resolve id and fetch quick-fix detail (only if both ids exist) */
  useEffect(() => {
    const probId = problemNameToId.get(selectedProblemName) || "";
    setSelectedProblemId(probId);
    setDetail(null);

    if (!selectedProductId || !probId) return; // ⛔️ guard to avoid 400

    let mounted = true;
    (async () => {
      setLoadingDetail(true);
      setError("");
      try {
        const url = `${QUICKFIX_DETAIL_URL}?productId=${encodeURIComponent(
          selectedProductId
        )}&problemId=${encodeURIComponent(probId)}`;

        const res = await ApiGet(url);
        const payload = payloadOf(res);
        // your sample: { quickFixes: [ { banner, productId:{}, problemId:{} } ] }
        const arr = payload?.quickFixes ?? payload?.data?.quickFixes ?? [];
        const node = Array.isArray(arr) ? arr[0] : arr;

        if (mounted) {
          setDetail(node || null);
        }
      } catch (e) {
        console.error("Fetch quick-fix detail error:", e);
        if (mounted) setError("Unable to load the solution for this selection.");
      } finally {
        if (mounted) setLoadingDetail(false);
      }
    })();

    return () => { mounted = false; };
  }, [selectedProblemName, selectedProductId, problemNameToId]);

  /* Dropdown options (strings) */
  const productOptions = useMemo(() => products.map(p => p.title), [products]);
  const problemOptions = useMemo(() => problems.map(pr => pr.name), [problems]);

  return (
    <div className="space-y-6 min-h-[460px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-[600] text-gray-900 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#025da8]" />
          Quick Fix
        </h2>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-orange-50 text-orange-700 text-sm">
          {error}
        </div>
      )}

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DropDownFloting
          label={loadingProducts ? "Loading products…" : "Select Product"}
          options={productOptions}
          value={selectedProductTitle}
          onChange={setSelectedProductTitle}
          disabled={loadingProducts || productOptions.length === 0}
        />

        <DropDownFloting
          label={
            !selectedProductId
              ? "Select a product first"
              : loadingProblems
              ? "Loading problems…"
              : "Select Problem"
          }
          options={problemOptions}
          value={selectedProblemName}
          onChange={setSelectedProblemName}
          disabled={!selectedProductId || loadingProblems || problemOptions.length === 0}
        />
      </div>

      {/* Solution */}
      <AnimatePresence>
        {selectedProductId && selectedProblemId && (
          <motion.div
            key={`${selectedProductId}-${selectedProblemId}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="rounded-[12px] border border-gray-200 bg-white p-4"
          >
            {loadingDetail ? (
              <div className="text-sm text-gray-500">Loading solution…</div>
            ) : detail ? (
              <div className="flex flex-col md:flex-row gap-5 items-start">
                {detail.banner ? (
                  <img
                    className="w-[320px] h-[320px] object-cover rounded-[10px] border"
                    src={detail.banner}
                    alt={`${selectedProblemName}`}
                  />
                ) : (
                  <div className="w-[320px] h-[320px] rounded-[10px] border grid place-items-center text-gray-400">
                    No image
                  </div>
                )}

                {/* <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedProblemName}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Product ID: {selectedProductId}
                  </p>
                  {Array.isArray(detail.steps) && detail.steps.length > 0 ? (
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-800">
                      {detail.steps.map((s, idx) => (
                        <li key={idx} className="leading-snug">
                          {s?.description || s?.text || `Step ${s?.step || idx + 1}`}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-sm text-gray-500">No additional steps provided.</p>
                  )}
                </div> */}
              </div>
            ) : (
              <div className="text-sm text-gray-500">No solution found for this selection.</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
