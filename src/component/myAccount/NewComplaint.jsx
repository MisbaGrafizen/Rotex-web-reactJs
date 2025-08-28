// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ChevronDown, Send } from "lucide-react"
// import DropDownFloting from "../otherFolder/DropDownFloting"
// import FloatingInput from "../otherFolder/FloatingInput"
// import FloatingTextarea from "../otherFolder/FloatingTextarea"

// export default function NewComplaint() {
//     const [selectedFan, setSelectedFan] = useState("")
//     const [formData, setFormData] = useState({
//         complaintCategory: "",
//         customerName: "",
//         phoneNumber: "",
//         alternateNumber: "",
//         email: "",
//         pinCode: "",
//         serialNo: "",
//         address: "",
//         message: "",
//     })

//     const fanOptions = [
//         "Rotex Eco Advance BLDC Ceiling Fan",
//         "Rotex PHI BLDC Ceiling Fan",
//         "Eco High Speed 600mm Ceiling Fan",
//         "Renesa Halo BLDC+ Ceiling Fan",
//         "Epic Pro BLDC+ Ceiling Fan",
//     ]

//     const complaintCategories = [
//         "Product Quality Issue",
//         "Installation Problem",
//         "Warranty Claim",
//         "Service Request",
//         "Technical Support",
//         "Other",
//     ]

//     const handleInputChange = (field, value) => {
//         setFormData((prev) => ({ ...prev, [field]: value }))
//     }

//     const handleSubmit = () => {
//         console.log("Submitting complaint:", { selectedFan, ...formData })
//         // Handle complaint submission
//     }

//     return (
//         <div className="space-y-4 min-h-[500px]">
//             <div className="flex items-center justify-between">
//                 <h2 className="text-2xl  font-[600] text-gray-900">New Complaint</h2>

//             </div>

//             <div className="rounded-xl p-5 border border-gray-200">
//                 <div className="space-y-6 ">
//                     {/* Fan Selection */}
//                     <div className="space-y-2 shadow-sm rounded-[10px]">

//                         <DropDownFloting
//                             label="Choose your fan model"
//                             options={fanOptions}
//                             value={selectedFan}
//                             onChange={(val) => setSelectedFan(val)}
//                         />
//                     </div>

//                     {/* Show form fields only after fan selection */}
//                     {selectedFan && (
//                         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
//                             {/* Complaint Category and Customer Name */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="space-y-2 shadow-sm rounded-[10px]">
//                                     <DropDownFloting
//                                         label="Complaint Category"
//                                         options={complaintCategories}
//                                         value={formData.complaintCategory}
//                                         onChange={(val) => handleInputChange("complaintCategory", val)}
//                                     />
//                                 </div>

//                                 <div className="space-y-2 shadow-sm rounded-[10px]">

//                                     <FloatingInput
//                                         type="text"
//                                         label=" Full name"
//                                         iconClass=" fa-regular fa-user"
//                                     />

//                                 </div>



//                             </div>

//                             {/* Phone Numbers */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               



//                                     <FloatingInput
//                                         type="number"
//                                         value={formData.phoneNumber}
//                                         label="phone number"
//                                         iconClass="fa-solid fa-phone-volume"
//                                     />
                        


//                                 <FloatingInput
//                                     type="number"
//                                     value={formData.alternateNumber}
//                                     label="Alternate number"
//                                iconClass="fa-light fa-phone-volume"
//                                 />
//                             </div>

//                             {/* Email and Pin Code */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
//                                 <FloatingInput
//                                     type="email"
//                                     onChange={(e) => handleInputChange("email", e.target.value)}
//                                     value={formData.email}
//                                     label="Email address"
//                                     iconClass="fa-regular fa-envelope"

//                                 />
                       

//                                            <FloatingInput
//                                     type="text"
//                                         value={formData.pinCode}
//                                         onChange={(e) => handleInputChange("pinCode", e.target.value)}
//                                     label=" pin code"
//                                     iconClass="fa-solid fa-map-pin"

//                                 />
//                             </div>

//                             {/* Serial Number */}
//                             <div className="space-y-2">
            
                                      

//                                            <FloatingInput
//                                     type="text"
                                    
//                                        value={formData.serialNo}
//                                     onChange={(e) => handleInputChange("serialNo", e.target.value)}
//                                     label="Serial number"
//                                     iconClass="fa-solid fa-map-pin"

//                                 />
//                             </div>

//                             {/* Address */}
//                             <div className="space-y-2">
                      





//                                               <FloatingInput
//                                                 value={formData.address}
//                                     onChange={(e) => handleInputChange("address", e.target.value)}
//                                     type="text"
                                    
                   
//                                     label="Complete Address"
//                                     iconClass="fa-regular fa-location-dot"

//                                 />
//                             </div>

                           
                      

//                             <FloatingTextarea
//                             label="Message"
//                             iconClass="fa-regular fa-comment" />

//                             {/* Submit Button */}
//                             <motion.button
//                                 onClick={handleSubmit}
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="w-full flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg"
//                             >
//                                 <Send className="w-5 h-5" />
//                                 <span>Submit Complaint</span>
//                             </motion.button>
//                         </motion.div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import DropDownFloting from "../otherFolder/DropDownFloting";
import FloatingInput from "../otherFolder/FloatingInput";
import FloatingTextarea from "../otherFolder/FloatingTextarea";
import { ApiGet, ApiPost } from "../../helper/axios";

/** 🔧 Adjust to your backend routes */
const PRODUCTS_URL = "/products";     // GET -> { data: { products: [...] } } or { products: [...] }
const COMPLAINTS_URL = "/complaint"; // POST -> create complaint

const LOCAL_USER_ID_KEY = "auth_user_id";

/** Normalize product to {id,title} */
const normalizeProduct = (p) => ({
  id: p?._id || p?.id || "",
  title: p?.title || p?.name || "",
});

export default function NewComplaint() {
  // -------- Products ----------
  const [products, setProducts] = useState([]); // [{id,title}]
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [productsError, setProductsError] = useState("");
  const [errors, setErrors] = useState({})

  // -------- Selection ----------
  const [selectedProductTitle, setSelectedProductTitle] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");

  // -------- Form ----------
  const [formData, setFormData] = useState({
    complaintCategory: "",
    customerName: "",
    phoneNumber: "",
    alternateNumber: "",
    email: "",
    pinCode: "",
    serialNo: "",      // optional; your schema has "warranty" (string). We'll map this to warranty below.
    address: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const userId =
    typeof window !== "undefined" ? localStorage.getItem(LOCAL_USER_ID_KEY) || "" : "";

  const complaintCategories = [
    "Product Quality Issue",
    "Installation Problem",
    "Warranty Claim",
    "Service Request",
    "Technical Support",
    "Other",
  ];

  // -------- Fetch products on mount ----------
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingProducts(true);
      setProductsError("");
      try {
        const res = await ApiGet(PRODUCTS_URL);
        const list = res?.data?.products ?? res?.products ?? [];
        const normalized = list.map(normalizeProduct).filter((p) => p.id && p.title);
        if (mounted) setProducts(normalized);
      } catch (e) {
        console.error("Fetch products error:", e);
        if (mounted) setProductsError("Unable to load products.");
      } finally {
        if (mounted) setLoadingProducts(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // title -> id mapping for the dropdown
  const productTitleToId = useMemo(() => {
    const m = new Map();
    products.forEach((p) => m.set(p.title, p.id));
    return m;
  }, [products]);

  // keep selectedProductId in sync with dropdown title
  useEffect(() => {
    setSelectedProductId(productTitleToId.get(selectedProductTitle) || "");
  }, [selectedProductTitle, productTitleToId]);

  const productOptions = useMemo(() => products.map((p) => p.title), [products]);

  // -------- Form helpers ----------
    const handleInputChange = (e, fieldName = null) => {
    if (typeof e === "string" && fieldName) {
      setFormData((prev) => ({ ...prev, [fieldName]: e }))
      if (errors[fieldName]) {
        setErrors((prev) => ({ ...prev, [fieldName]: "" }))
      }
    } else {
      const { name, value } = e?.target || {}
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }))
      }
    }
  }

  // Strict validation to satisfy your Mongoose "required" fields
  const validate = () => {
    if (!selectedProductId) return "Please choose a product.";
    if (!formData.customerName.trim()) return "Full name is required.";
    const phone = String(formData.phoneNumber || "").replace(/\D/g, "");
    if (phone.length !== 10) return "Phone number must be 10 digits.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) return "Please enter a valid email.";
    if (!formData.address.trim()) return "Address is required.";
    return "";
  };

  // -------- Submit ----------
  const handleSubmit = async () => {
    setSubmitError("");
    setSubmitSuccess("");

    const err = validate();
    if (err) {
      setSubmitError(err);
      return;
    }

    setSubmitting(true);
    try {
      // Build payload EXACTLY as your schema expects
      const payload = {
        productId: selectedProductId,                    // required
        customerName: formData.customerName.trim(),     // required
        phoneNumber: String(formData.phoneNumber).replace(/\D/g, ""), // required
        alternateNumber: String(formData.alternateNumber || "").replace(/\D/g, ""),
        email: formData.email.trim(),                   // required
        warranty: formData.serialNo?.trim() || undefined, // schema has "warranty" (string). Map from serialNo if needed.
        pinCode: formData.pinCode ? Number(String(formData.pinCode).replace(/\D/g, "")) : undefined,
        address: formData.address.trim(),               // required
        message: formData.message?.trim() || undefined,
        userId: userId || undefined,                    // optional in schema, include if present
      };

      // Helpful for debugging if backend still complains:
      console.log("Complaint payload:", payload);

      const res = await ApiPost(COMPLAINTS_URL, payload); // ensure ApiPost sets JSON headers

      const ok =
        res?.status === 201 ||
        res?.success === true ||
        String(res?.message || "").toLowerCase().includes("created");

      if (ok) {
        setSubmitSuccess(res?.message || "Complaint submitted successfully.");
        // Reset
        setSelectedProductTitle("");
        setSelectedProductId("");
        setFormData({
          complaintCategory: "",
          customerName: "",
          phoneNumber: "",
          alternateNumber: "",
          email: "",
          pinCode: "",
          serialNo: "",
          address: "",
          message: "",
        });
      } else {
        setSubmitError(res?.message || "Failed to submit complaint.");
      }
    } catch (e) {
      console.error("Submit complaint error:", e);
      setSubmitError("Something went wrong while submitting your complaint.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 min-h-[500px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-[600] text-gray-900">New Complaint</h2>
      </div>

      {/* Alerts */}
      {productsError && (
        <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">{productsError}</div>
      )}
      {submitError && (
        <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">{submitError}</div>
      )}
      {submitSuccess && (
        <div className="p-3 rounded-md bg-green-50 text-green-700 text-sm">{submitSuccess}</div>
      )}

      <div className="rounded-xl p-3 md77:p-5 border border-gray-200">
        <div className="space-y-6">
          {/* Product Selection */}
          <div className="space-y-2 shadow-sm rounded-[10px]">
            <DropDownFloting
              label={loadingProducts ? "Loading products…" : "Choose your fan model"}
              options={productOptions}
              value={selectedProductTitle}
              onChange={setSelectedProductTitle} // DropDownFloting should pass the chosen string
              disabled={loadingProducts || productOptions.length === 0}
            />
          </div>

          {/* Show form fields only after product selection */}
          {selectedProductId && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Complaint Category + Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 shadow-sm rounded-[10px]">
                  <DropDownFloting
                    label="Complaint Category"
                    options={complaintCategories}
                    value={formData.complaintCategory}
                    onChange={(val) => handleInputChange(val, "complaintCategory")}
                  />
                </div>

                <div className="space-y-2 shadow-sm rounded-[10px]">
                  <FloatingInput
                    type="text"
                    value={formData.customerName}
                    onChange={(v) => handleInputChange(v, "customerName")}
                    label="Full name"
                    iconClass="fa-regular fa-user"
                  />
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(v) => handleInputChange(v, "phoneNumber")}
                  label="Phone number"
                  iconClass="fa-solid fa-phone-volume"
                  inputMode="numeric"
                  maxLength={10}
                />
                <FloatingInput
                  type="tel"
                  value={formData.alternateNumber}
                  onChange={(v) => handleInputChange(v, "alternateNumber")}
                  label="Alternate number (optional)"
                  iconClass="fa-light fa-phone-volume"
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>

              {/* Email + Pin Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleInputChange(v, "email")}
                  label="Email address"
                  iconClass="fa-regular fa-envelope"
                />
                <FloatingInput
                  type="text"
                  value={formData.pinCode}
                  onChange={(v) => handleInputChange(v, "pinCode")}
                  label="PIN code"
                  iconClass="fa-solid fa-map-pin"
                  inputMode="numeric"
                  maxLength={6}
                />
              </div>

              {/* Serial Number (maps to "warranty" in backend) */}
              <div className="space-y-2">
                <FloatingInput
                  type="text"
                  value={formData.serialNo}
                  onChange={(v) => handleInputChange(v, "serialNo")}
                  label="Warranty / Serial number (optional)"
                  iconClass="fa-solid fa-hashtag"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <FloatingInput
                  type="text"
                  value={formData.address}
                  onChange={(v) => handleInputChange(v, "address")}
                  label="Complete Address"
                  iconClass="fa-regular fa-location-dot"
                />
              </div>

              {/* Message */}
              <FloatingTextarea
                label="Message (optional)"
                          id="message"
                                            name="message"
                value={formData?.message}
                onChange={(v) => handleInputChange(v, "message")}
                iconClass="fa-regular fa-comment"
                rows={6}
              />

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                <span>{submitting ? "Submitting…" : "Submit Complaint"}</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
