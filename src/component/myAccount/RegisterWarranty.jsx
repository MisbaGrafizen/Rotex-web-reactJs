"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Trash2, ChevronDown } from "lucide-react"
import FloatingInput from "../otherFolder/FloatingInput"
import Dropdown from "../otherFolder/DropDownFloting"


export default function RegisterWarranty() {
  const [products, setProducts] = useState([
    { id: "1", productName: "", productColor: "", serialNo: "" },
  ])

  const productOptions = [
    "Rotex Eco Advance BLDC Ceiling Fan",
    "Rotex PHI BLDC Ceiling Fan",
    "Eco High Speed 600mm Ceiling Fan",
    "Renesa Halo BLDC+ Ceiling Fan",
    "Epic Pro BLDC+ Ceiling Fan",
    "Stealth Neo BLDC+ Ceiling Fan",
  ]

  const colorOptions = ["Blaze Brown", "Pearl White", "Matte Black", "Silver Grey", "Copper Bronze"]

  const addProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      productName: "",
      productColor: "",
      serialNo: "",
    }
    setProducts([...products, newProduct])
  }

  const removeProduct = (id) => {
    if (products.length > 1) {
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  const updateProduct = (id, field, value) => {
    setProducts(products.map((product) => (product.id === id ? { ...product, [field]: value } : product)))
  }

  const handleSubmit = () => {
    console.log("Registering warranty for products:", products)
    // Handle warranty registration
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-[600] text-gray-900">Register Warranty</h2>
        <p className="text-gray-600 text-[12px]">Activate warranty for your products</p>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className=" shadow-xl rounded-xl p-4 border border-gray-200"
          >


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Dropdown
                label="Product Name"
                options={productOptions}
                value={product.productName}
                onChange={(val) => updateProduct(product.id, "productName", val)}
              />

              {/* Product Color Dropdown */}
              <Dropdown
                label="Product Color"
                options={colorOptions}
                value={product.productColor}
                onChange={(val) => updateProduct(product.id, "productColor", val)}
              />

              {/* Serial Number */}
              <div className="md:col-span-2 space-y-2">
                <FloatingInput
                  type="text"
                  value={product.serialNo}
                  onChange={(e) => updateProduct(product.id, "serialNo", e.target.value)}
                  label="Serial Number"
                  iconClass="fa-solid fa-arrow-up-9-1"
                />
              </div>


            </div>

            {/* Progress Indicator */}
            {/* <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                <div className={`w-3 h-3 rounded-full ${product.productName ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
                <div className={`w-3 h-3 rounded-full ${product.productColor ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
                <div className={`w-3 h-3 rounded-full ${product.serialNo ? "bg-[#025da8]" : "bg-gray-300"}`}></div>
              </div>
            </div> */}

            {products.length > 1 && (
              <div className="  flex mt-[10px] w-[100%] justify-end">

                <button
                  onClick={() => removeProduct(product.id)}
                  className="flex items-center space-x-2 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            )}

          </motion.div>
        ))}

        {/* Add More Button */}
            <div className=" w-[100%] flex justify-end ">
        <motion.button
          onClick={addProduct}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className=" flex items-center w-[160px] justify-center shadow-lg bg-white space-x-2 px-2 py-1 text-[13px] border-[1.4px] border-dashed border-[#025da8] text-[#025da8] rounded-[6px] hover:bg-[#025da8] hover:text-white transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">Add More Product</span>
        </motion.button>
            </div>
          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[10px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg"
          >
            Register Warranty
          </motion.button>

      </div>
    </div>
  )
}
