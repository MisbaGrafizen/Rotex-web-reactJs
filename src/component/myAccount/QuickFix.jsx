"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Wrench } from "lucide-react"
import DropDownFloting from "../otherFolder/DropDownFloting"

export default function QuickFix() {
  const [selectedProduct, setSelectedProduct] = useState("")
  const [selectedProblem, setSelectedProblem] = useState("")
  const [showSolution, setShowSolution] = useState(false)

  const products = [
    "Rotex Eco Advance BLDC Ceiling Fan",
    "Rotex PHI BLDC Ceiling Fan",
    "Eco High Speed 600mm Ceiling Fan",
  ]

  const problems = {
    "Rotex Eco Advance BLDC Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
    "Rotex PHI BLDC Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
    "Eco High Speed 600mm Ceiling Fan": ["Noise", "Not Working", "Remote", "Wobbling"],
  }

  const solutions = {
    Noise: {
      title: "Fan making noise?",
      steps: [
        {
          step: "01",
          description: "All screws on blade, canopy, down-rod and blade kit must be tightened properly.",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          step: "02",
          description: "Ensure that canopy not touching the top part of ceiling fan body.",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
    },
    "Not Working": {
      title: "Fan not working?",
      steps: [
        {
          step: "01",
          description: "Check if the power supply is connected properly and switch is ON.",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          step: "02",
          description: "Verify that all electrical connections are secure and not loose.",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
    },
  }

  const handleProductChange = (product) => {
    setSelectedProduct(product)
    setSelectedProblem("")
    setShowSolution(false)
  }

  const handleProblemChange = (problem) => {
    setSelectedProblem(problem)
    setShowSolution(true)
  }

  return (
    <div className="space-y-5 h-[100%] min-h-[460px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-[600] text-gray-900">Quick Fix</h2>
        {/* <p className="text-gray-600">Get instant solutions</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Selection */}
  <DropDownFloting
    label="Select Product"
    options={products}
    value={selectedProduct}
    onChange={(val) => handleProductChange(val)}
  />
        {/* Problem Selection */}
        <DropDownFloting
    label="Select Problem"
    options={selectedProduct ? problems[selectedProduct] || [] : []}
    value={selectedProblem}
    onChange={(val) => handleProblemChange(val)}
  />
      </div>

      {/* Solution Display */}
      <AnimatePresence>
        {showSolution && selectedProblem && solutions[selectedProblem] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className=" text-white  rounded-[10px]  overflow-hidden"
          >
          <img  className="  w-[300px] rounded-[10px]  h-[300px]" src="" />

      
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
