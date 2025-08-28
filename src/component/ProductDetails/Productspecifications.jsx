"use client"

import { useState } from "react"
import { Ruler, Fan, Zap, Plug, RotateCw, Wind, BarChart3, Star } from "lucide-react"

export default function ProductSpecifications() {
  const [selectedSpec, setSelectedSpec] = useState(null)

  const specifications = [
    {
      key: "Sweep",
      value: "1200mm",
      icon: <Ruler className="w-5 h-5" />,
      description: "Optimal room coverage",
      unit: "millimeters",
    },
    {
      key: "No Of Blade",
      value: "3",
      icon: <Fan className="w-5 h-5" />,
      description: "Aerodynamic design",
      unit: "pieces",
    },
    {
      key: "Power",
      value: "28W",
      icon: <Zap className="w-5 h-5" />,
      description: "Energy efficient",
      unit: "watts",
    },
    {
      key: "Input Voltage",
      value: "120-290V",
      icon: <Plug className="w-5 h-5" />,
      description: "Wide voltage range",
      unit: "volts",
    },
    {
      key: "RPM",
      value: "380",
      icon: <RotateCw className="w-5 h-5" />,
      description: "Optimal speed",
      unit: "revolutions per minute",
    },
    {
      key: "Air Delivery",
      value: "235 CMM",
      icon: <Wind className="w-5 h-5" />,
      description: "Superior airflow",
      unit: "cubic meters per minute",
    },
    {
      key: "Power Factor",
      value: "0.98",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "High efficiency",
      unit: "ratio",
    },
    {
      key: "Service Value",
      value: "7.2",
      icon: <Star className="w-5 h-5" />,
      description: "Premium quality",
      unit: "rating",
    },
  ]

  return (
    <div className="w-full mx-auto  bg-white">
      <div className=" border-slate-200 pb-6 mb-2">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Technical Specifications</h2>
        <p className="text-slate-600 text-sm">Detailed product specifications and performance metrics</p>
      </div>
<div className=" flex overflow-x-auto flex-shrink-0">


      <div className="bg-slate-50 w-[900px] md:w-[100%] rounded-lg flex-shrink-0 border border-slate-200 overflow-x-auto">
        {/* Table Header */}
        <div className="bg-[#025da8] border border-[#025da8] text-white px-6 py-3">
          <div className="grid grid-cols-4 gap-4  flex-shrink-0 text-[18px] font-[500]">
            <div>Parameter</div>
            <div>Value</div>
            <div>Unit</div>
            <div>Description</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y flex-shrink-0 divide-slate-200">
          {specifications.map((spec, index) => (
            <div
              key={spec.key}
              className={`px-6 py-[10px] hover:bg-slate-100 transition-colors duration-200 cursor-pointer ${
                selectedSpec === spec.key ? "bg-slate-100 border-l-4 border-slate-800" : ""
              }`}
              onClick={() => setSelectedSpec(selectedSpec === spec.key ? null : spec.key)}
            >
              <div className="grid grid-cols-4 gap-4 flex-shrink-0 items-center">
                {/* Parameter */}
                <div className="flex items-center space-x-3">
                  <div className="text-slate-600">{spec.icon}</div>
                  <span className="font-medium text-slate-900">{spec.key}</span>
                </div>

                {/* Value */}
                <div className="font-semibold text-slate-800 text-[16px]">{spec.value}</div>

                {/* Unit */}
                <div className="text-slate-600 text-sm capitalize">{spec.unit}</div>

                {/* Description */}
                <div className="text-slate-600 text-sm">{spec.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
      {/* <div className="mt-8 bg-slate-800 text-white rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Certifications & Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">5★</div>
            <div className="text-slate-300 text-sm">BEE Energy Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">2 Years</div>
            <div className="text-slate-300 text-sm">Manufacturer Warranty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">ISI</div>
            <div className="text-slate-300 text-sm">Quality Certified</div>
          </div>
        </div>
      </div> */}

      <div className="mt-6 p-4 bg-slate-50 border-l-4  overflow-hidden border-[#025da8] rounded-l-lg">
        <p className="text-slate-700 text-sm">
          <span className="font-medium">Note:</span> All specifications are tested under standard operating conditions.
          Performance may vary based on environmental factors and usage patterns.
        </p>
      </div>
    </div>
  )
}
