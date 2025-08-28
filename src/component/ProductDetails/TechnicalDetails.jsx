"use client"

import { useState } from "react"
import { Lightbulb, Zap, VolumeX, Thermometer, Wind, Shield, Settings } from "lucide-react"
import remote from "../../../public/images/productDetails/remote.png"

export default function TechnicalDetails() {
  const [selectedOperation, setSelectedOperation] = useState(1)

  const technicalFeatures = [
    {
      title: "Night Lamp",
      description: "Integrated LED lighting with adjustable brightness",
      icon: <Lightbulb className="w-5 h-5" />,
      specification: "LED: 3W, Dimmable",
    },
    {
      title: "Energy Saving",
      description: "BLDC motor technology for 65% energy savings",
      icon: <Zap className="w-5 h-5" />,
      specification: "Efficiency: 65% savings",
    },
    {
      title: "Noise-Free",
      description: "Whisper-quiet operation below 35dB",
      icon: <VolumeX className="w-5 h-5" />,
      specification: "Noise Level: <35dB",
    },
    {
      title: "Less Heating",
      description: "Advanced thermal management system",
      icon: <Thermometer className="w-5 h-5" />,
      specification: "Temperature: Optimized",
    },
    {
      title: "Highest Air Delivery",
      description: "235 CMM airflow with aerodynamic blades",
      icon: <Wind className="w-5 h-5" />,
      specification: "Airflow: 235 CMM",
    },
    {
      title: "Anti Dust Coating",
      description: "Self-cleaning technology with dust resistance",
      icon: <Shield className="w-5 h-5" />,
      specification: "Coating: Anti-dust",
    },
  ]

  const remoteOperations = [
    { name: "Fan on/off", code: "ON/OFF" },
    { name: "LED on/off", code: "LED" },
    { name: "Speed Control", code: "SPD" },
    { name: "Boost Mode", code: "BOOST" },
    { name: "Smart Mode", code: "SMART" },
    { name: "Reverse Mode", code: "REVERSE" },
    { name: "Timer Mode", code: "TIMER" },
  ]

  return (
    <div className="w-full  mx-auto ">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Control Operations</h2>

        <p className="text-slate-600 text-[15px]">Comprehensive technical features and remote control functionality</p>
      </div>

      <div className="flex md11:flex-row  flex-col w-[100%] gap-8 ">
        {/* Technical Features - Left Side */}
        <div className="md11:w-[50%]">
          <div className="bg-white border rounded-lg overflow-hidden border-slate-200 shadow-sm">
            <div className="bg-[#025da8] text-white px-6 py-3">
              <h3 className="text-xl font-semibold flex items-center">
                <Settings className="w-5 h-5 mr-3" />
                Technical Features & Specifications
              </h3>
            </div>

            <div className="p-5">
              <div className="space-y-4">
                {technicalFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-[7px] hover:border-slate-300 transition-colors duration-200"
                  >
                    <div className="p-3 flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-[7px] bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <div className="text-slate-600">{feature.icon}</div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">
                            {feature.title}
                          </h4>
                          <span className="text-[10px] rounded-[15px]  font-mono text-slate-500 bg-slate-100 px-3 border py-1">
                            {feature.specification}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm mt-[-10px] leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Remote Control - Right Side */}
        <div className=" md11:w-[40%]">
          <div className="bg-white border rounded-[10px] overflow-hidden border-slate-200  w-[100%] shadow-sm">
            <div className="bg-[#025da8] text-white px-6 py-3">
              <h3 className="text-xl font-semibold">Remote Control Operations</h3>
            </div>


            <div className="p-6 flex  md77:flex-row flex-col gap-[50px] w-[100%] ">

              <img className=" md77:h-[500px] h-[600px] md77:object-fill object-contain" src={remote} />
              <div className="space-y-2 w-[100%]">
                <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">
                  Available Operations
                </h4>
                {remoteOperations.map((operation, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3  rounded-[7px] shadow-md border cursor-pointer transition-all duration-200 ${selectedOperation === index + 1
                        ? "border-[#025da86f] hover:border-slate-300 bg-white text-slate-700"
                        : "border-[#025da86f] hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    onClick={() => setSelectedOperation(index + 1)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 flex items-center justify-center text-xs font-bold ${selectedOperation === index + 1 ? "bg-slate-100 text-slate-600" : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        {index + 1}
                      </div>
                      <span className="font-medium text-sm">{operation.name}</span>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-1 ${selectedOperation === index + 1 ? "bg-slate-100 text-slate-600" : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      {operation.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
