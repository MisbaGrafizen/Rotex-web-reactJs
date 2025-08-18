// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Plus, Trash2, ChevronDown } from "lucide-react"
// import FloatingInput from "../otherFolder/FloatingInput"
// import Dropdown from "../otherFolder/DropDownFloting"


// export default function RegisterWarranty() {
//   const [products, setProducts] = useState([
//     { id: "1", productName: "", productColor: "", serialNo: "" },
//   ])

//   const productOptions = [
//     "Rotex Eco Advance BLDC Ceiling Fan",
//     "Rotex PHI BLDC Ceiling Fan",
//     "Eco High Speed 600mm Ceiling Fan",
//     "Renesa Halo BLDC+ Ceiling Fan",
//     "Epic Pro BLDC+ Ceiling Fan",
//     "Stealth Neo BLDC+ Ceiling Fan",
//   ]

//   const colorOptions = ["Blaze Brown", "Pearl White", "Matte Black", "Silver Grey", "Copper Bronze"]

//   const addProduct = () => {
//     const newProduct = {
//       id: Date.now().toString(),
//       productName: "",
//       productColor: "",
//       serialNo: "",
//     }
//     setProducts([...products, newProduct])
//   }

//   const removeProduct = (id) => {
//     if (products.length > 1) {
//       setProducts(products.filter((product) => product.id !== id))
//     }
//   }

//   const updateProduct = (id, field, value) => {
//     setProducts(products.map((product) => (product.id === id ? { ...product, [field]: value } : product)))
//   }

//   const handleSubmit = () => {
//     console.log("Registering warranty for products:", products)
//     // Handle warranty registration
//   }

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-[600] text-gray-900">Register Warranty</h2>
//         <p className="text-gray-600 text-[12px]">Activate warranty for your products</p>
//       </div>

//       <div className="space-y-4">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className=" shadow-xl rounded-xl p-4 border border-gray-200"
//           >


//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <Dropdown
//                 label="Product Name"
//                 options={productOptions}
//                 value={product.productName}
//                 onChange={(val) => updateProduct(product.id, "productName", val)}
//               />

//               {/* Product Color Dropdown */}
//               <Dropdown
//                 label="Product Color"
//                 options={colorOptions}
//                 value={product.productColor}
//                 onChange={(val) => updateProduct(product.id, "productColor", val)}
//               />

//               {/* Serial Number */}
//               <div className="md:col-span-2 space-y-2">
//                 <FloatingInput
//                   type="text"
//                   value={product.serialNo}
//                   onChange={(e) => updateProduct(product.id, "serialNo", e.target.value)}
//                   label="Serial Number"
//                   iconClass="fa-solid fa-arrow-up-9-1"
//                 />
//               </div>


//             </div>

//             {/* Progress Indicator */}
//             {/* <div className="mt-6 flex items-center justify-center space-x-2">
//               <div className="flex space-x-1">
//                 <div className={`w-3 h-3 rounded-full ${product.productName ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
//                 <div className={`w-3 h-3 rounded-full ${product.productColor ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
//                 <div className={`w-3 h-3 rounded-full ${product.serialNo ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
//               </div>
//             </div> */}

//             {products.length > 1 && (
//               <div className="  flex mt-[10px] w-[100%] justify-end">

//                 <button
//                   onClick={() => removeProduct(product.id)}
//                   className="flex items-center space-x-2 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                   <span>Remove</span>
//                 </button>
//               </div>
//             )}

//           </motion.div>
//         ))}

//         {/* Add More Button */}
//             <div className=" w-[100%] flex justify-end ">
//         <motion.button
//           onClick={addProduct}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className=" flex items-center w-[160px] justify-center shadow-lg bg-white space-x-2 px-2 py-1 text-[13px] border-[1.4px] border-dashed border-[#025da8] text-[#025da8] rounded-[6px] hover:bg-[#025da8] hover:text-white transition-all duration-200"
//         >
//           <Plus className="w-4 h-4" />
//           <span className="font-medium">Add More Product</span>
//         </motion.button>
//             </div>
//           {/* Submit Button */}
//           <motion.button
//             onClick={handleSubmit}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[10px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg"
//           >
//             Register Warranty
//           </motion.button>

//       </div>
//     </div>
//   )
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import FloatingInput from "../otherFolder/FloatingInput";
import Dropdown from "../otherFolder/DropDownFloting";
import { ApiGet, ApiPost } from "../../helper/axios";

// ---------- API endpoints (adjust to your routes) ----------
const PRODUCT_LIST_URL = "/products?limit=100&page=1";
const WARRANTY_CREATE_URL = "/warranty";

// ---------- Color map: hex -> human name ----------
const colorNames = {
  "#dddcdc": "White",
  "#363636": "Matte Black",
  "#4b3933": "Chocolate Brown",
  "#dfdfdf": "White and Grey",
  "#311d1c": "Brown",
  "#191919": "Black",
  "#505a65": "Black and Grey",
  "#d2cabb": "Ivory",
  "#996a5a": "Dark Shade",
  "#b89455": "Light Shade",
  "#d4dadb": "Star White",
  "#e2e4e5": "Pearl White",
  "#3b2424": "Metalic Brown",
  "#ce9e4c": "Antique Ivory",
  "#735140": "Wood Ivory",
  "#213d5d": "Blue Ocean",
  "#2d2d2b": "Black and Gold",
};

// quick reverse lookup: name -> hex (unique names assumed)
const nameToHex = Object.fromEntries(
  Object.entries(colorNames).map(([hex, name]) => [name, hex])
);

export default function RegisterWarranty() {
  // ---------- user ----------
  const userId = useMemo(() => localStorage.getItem("auth_user_id") || "", []);

  // ---------- rows state ----------
  const [rows, setRows] = useState([
    { id: "1", productName: "", productColor: "", serialNo: "" },
  ]);

  // ---------- server state ----------
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  // ---------- product catalog ----------
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [productError, setProductError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingProducts(true);
      setProductError("");
      try {
        const res = await ApiGet(PRODUCT_LIST_URL);
        // support both axios {status,data} and direct
        const ok = res?.status === 200 || res?.success;
        const payload = res?.data ?? res;

        if (ok && payload?.data?.products) {
          if (mounted) setProducts(Array.isArray(payload.data.products) ? payload.data.products : []);
        } else if (ok && payload?.products) {
          if (mounted) setProducts(Array.isArray(payload.products) ? payload.products : []);
        } else {
          throw new Error(payload?.message || "Failed to load products");
        }
      } catch (e) {
        console.error("Products fetch error:", e);
        if (mounted) setProductError(e?.message || "Unable to fetch products.");
      } finally {
        if (mounted) setLoadingProducts(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // map: title -> product (so we can keep Dropdown options as strings)
  const productByTitle = useMemo(() => {
    const map = new Map();
    products.forEach((p) => map.set(p.title, p));
    return map;
  }, [products]);

  // build product options (titles)
  const productOptions = useMemo(() => products.map((p) => p.title), [products]);

  // product -> available hex colors
  const getColorHexesForProductTitle = (title) => {
    const p = productByTitle.get(title);
    if (!p || !Array.isArray(p.productImages)) return [];
    return p.productImages
      .map((img) => img?.color)
      .filter(Boolean)
      .filter((hex, idx, arr) => arr.indexOf(hex) === idx);
  };

  // product -> color **names** (shown to user)
  const getColorNamesForProductTitle = (title) => {
    const hexes = getColorHexesForProductTitle(title);
    const names = hexes.map((h) => colorNames[h] || h);
    // de-dupe names and keep order
    return names.filter((n, i, arr) => arr.indexOf(n) === i);
  };

  // ---------- row ops ----------
  const addRow = () => {
    setRows((r) => [
      ...r,
      { id: String(Date.now()), productName: "", productColor: "", serialNo: "" },
    ]);
  };

  const removeRow = (id) => {
    setRows((r) => (r.length > 1 ? r.filter((row) => row.id !== id) : r));
  };

  const setRowField = (id, field, value) => {
    setRows((all) =>
      all.map((row) => {
        if (row.id !== id) return row;
        // when product changes, reset color if it doesn't belong
        if (field === "productName") {
          const allowed = getColorHexesForProductTitle(value);
          const keepColor =
            row.productColor && allowed.includes(row.productColor)
              ? row.productColor
              : "";
          return { ...row, productName: value, productColor: keepColor };
        }
        return { ...row, [field]: value };
      })
    );
  };

  // ---------- submit ----------
  const handleSubmit = async () => {
    setServerError("");
    setServerSuccess("");

    if (!userId) {
      setServerError("You must be logged in to register warranty.");
      return;
    }

    // Trim + validate
    const prepared = rows.map((r) => ({
      ...r,
      productName: r.productName?.trim(),
      serialNo: r.serialNo?.trim(),
      productColor: r.productColor?.trim(), // hex
    }));

    const missing = prepared.find(
      (r) => !r.productName || !r.productColor || !r.serialNo
    );
    if (missing) {
      setServerError("Please fill Product, Color and Warranty Number for each row.");
      return;
    }

    const serials = prepared.map((r) => r.serialNo.toLowerCase());
    const hasDupes = serials.some((s, i) => serials.indexOf(s) !== i);
    if (hasDupes) {
      setServerError("Duplicate warranty numbers found. Each must be unique.");
      return;
    }

    // Optional: quick client-side check against known product.warrantyNumbers (if present)
    const conflicts = prepared.filter((r) => {
      const prod = productByTitle.get(r.productName);
      const already = prod?.warrantyNumbers || [];
      return already.map((x) => String(x).toLowerCase()).includes(r.serialNo.toLowerCase());
    });
    if (conflicts.length) {
      setServerError(
        `These warranty numbers already exist for the selected product: ${conflicts
          .map((c) => `"${c.serialNo}"`)
          .join(", ")}`
      );
      return;
    }

    // Build payloads per backend contract
    const payloads = prepared.map((r) => ({
      productName: r.productName,
      productColor: r.productColor, // hex to backend
      warrantyNumber: r.serialNo,   // serialNo -> warrantyNumber
      userId,
    }));

    try {
      setSubmitting(true);
      const results = await Promise.allSettled(
        payloads.map((p) => ApiPost(WARRANTY_CREATE_URL, p))
      );

      const successes = [];
      const failures = [];

      results.forEach((res, idx) => {
        if (res.status === "fulfilled") {
          const v = res.value;
          const ok =
            v?.status === 201 ||
            v?.data?.message === "Warranty created successfully" ||
            v?.success;
          if (ok) {
            successes.push(payloads[idx].warrantyNumber);
          } else {
            failures.push({
              wn: payloads[idx].warrantyNumber,
              reason: v?.data?.message || v?.message || "Unknown error",
            });
          }
        } else {
          failures.push({
            wn: payloads[idx].warrantyNumber,
            reason:
              res.reason?.response?.data?.message ||
              res.reason?.message ||
              "Network/Server error",
          });
        }
      });

      if (successes.length) {
        setServerSuccess(
          `Warranty created for ${successes.length} item(s): ${successes.join(", ")}.`
        );
      }
      if (failures.length) {
        setServerError(
          `Failed for ${failures.length} item(s): ` +
            failures.map((f) => `${f.wn} (${f.reason})`).join("; ")
        );
      }

      if (failures.length === 0) {
        setRows([{ id: "1", productName: "", productColor: "", serialNo: "" }]);
      }
    } catch (e) {
      console.error(e);
      setServerError("Something went wrong while registering warranty.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-[600] text-gray-900">Register Warranty</h2>
        <p className="text-gray-600 text-[12px]">Activate warranty for your products</p>
      </div>


      <div className="space-y-4">
        {rows.map((row) => {
          const colorNameOptions = getColorNamesForProductTitle(row.productName);
          const displayColorName = row.productColor
            ? (colorNames[row.productColor] || row.productColor)
            : "";

        return (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="shadow-xl rounded-xl p-4 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Product Name */}
              <Dropdown
                label="Product Name"
                options={productOptions}
                value={row.productName}
                onChange={(val) => setRowField(row.id, "productName", val)}
              />

              {/* Product Color (show human names, store hex) */}
              <Dropdown
                label="Product Color"
                options={colorNameOptions}
                value={displayColorName}
                onChange={(valName) => {
                  const hex = nameToHex[valName] || ""; // translate to hex to store
                  setRowField(row.id, "productColor", hex);
                }}
              />

              {/* Warranty Number */}
              <div className="md:col-span-2 space-y-2">
                <FloatingInput
                  type="text"
                  value={row.serialNo}
                  onChange={(v) => setRowField(row.id, "serialNo", v)}
                  label="Warranty Number"
                  iconClass="fa-solid fa-id-card"
                />
              </div>
            </div>

            {/* color swatch helper */}
            {row.productColor && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <span>Selected color:</span>
                <span
                  className="inline-block w-4 h-4 rounded border"
                  style={{ backgroundColor: row.productColor }}
                  title={row.productColor}
                />
                <span className="font-medium">{displayColorName}</span>
              </div>
            )}

            {rows.length > 1 && (
              <div className="flex mt-3 w-full justify-end">
                <button
                  onClick={() => removeRow(row.id)}
                  className="flex items-center space-x-2 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            )}
          </motion.div>
        )})}

        {/* Add More */}
        <div className="w-full flex justify-end">
          <motion.button
            onClick={addRow}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-[180px] justify-center shadow-lg bg-white space-x-2 px-2 py-1 text-[13px] border-[1.4px] border-dashed border-[#025da8] text-[#025da8] rounded-[6px] hover:bg-[#025da8] hover:text-white transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium">Add More Product</span>
          </motion.button>
        </div>

        {/* Submit */}
        <motion.button
          onClick={handleSubmit}
          disabled={submitting || loadingProducts}
          whileHover={{ scale: submitting || loadingProducts ? 1 : 1.02 }}
          whileTap={{ scale: submitting || loadingProducts ? 1 : 0.98 }}
          className="w-full px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[10px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Registering…" : "Register Warranty"}
        </motion.button>
      </div>
    </div>
  );
}
