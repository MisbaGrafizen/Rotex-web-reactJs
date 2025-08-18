"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Send } from "lucide-react"
import DropDownFloting from "../otherFolder/DropDownFloting"
import FloatingInput from "../otherFolder/FloatingInput"
import FloatingTextarea from "../otherFolder/FloatingTextarea"

export default function NewComplaint() {
    const [selectedFan, setSelectedFan] = useState("")
    const [formData, setFormData] = useState({
        complaintCategory: "",
        customerName: "",
        phoneNumber: "",
        alternateNumber: "",
        email: "",
        pinCode: "",
        serialNo: "",
        address: "",
        message: "",
    })

    const fanOptions = [
        "Rotex Eco Advance BLDC Ceiling Fan",
        "Rotex PHI BLDC Ceiling Fan",
        "Eco High Speed 600mm Ceiling Fan",
        "Renesa Halo BLDC+ Ceiling Fan",
        "Epic Pro BLDC+ Ceiling Fan",
    ]

    const complaintCategories = [
        "Product Quality Issue",
        "Installation Problem",
        "Warranty Claim",
        "Service Request",
        "Technical Support",
        "Other",
    ]

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = () => {
        console.log("Submitting complaint:", { selectedFan, ...formData })
        // Handle complaint submission
    }

    return (
        <div className="space-y-4 min-h-[500px]">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl  font-[600] text-gray-900">New Complaint</h2>

            </div>

            <div className="rounded-xl p-5 border border-gray-200">
                <div className="space-y-6 ">
                    {/* Fan Selection */}
                    <div className="space-y-2 shadow-sm rounded-[10px]">

                        <DropDownFloting
                            label="Choose your fan model"
                            options={fanOptions}
                            value={selectedFan}
                            onChange={(val) => setSelectedFan(val)}
                        />
                    </div>

                    {/* Show form fields only after fan selection */}
                    {selectedFan && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            {/* Complaint Category and Customer Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 shadow-sm rounded-[10px]">
                                    <DropDownFloting
                                        label="Complaint Category"
                                        options={complaintCategories}
                                        value={formData.complaintCategory}
                                        onChange={(val) => handleInputChange("complaintCategory", val)}
                                    />
                                </div>

                                <div className="space-y-2 shadow-sm rounded-[10px]">

                                    <FloatingInput
                                        type="text"
                                        label=" Full name"
                                        iconClass=" fa-regular fa-user"
                                    />

                                </div>



                            </div>

                            {/* Phone Numbers */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               



                                    <FloatingInput
                                        type="number"
                                        value={formData.phoneNumber}
                                        label="phone number"
                                        iconClass="fa-solid fa-phone-volume"
                                    />
                        


                                <FloatingInput
                                    type="number"
                                    value={formData.alternateNumber}
                                    label="Alternate number"
                               iconClass="fa-light fa-phone-volume"
                                />
                            </div>

                            {/* Email and Pin Code */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
                                <FloatingInput
                                    type="email"
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    value={formData.email}
                                    label="Email address"
                                    iconClass="fa-regular fa-envelope"

                                />
                       

                                           <FloatingInput
                                    type="text"
                                        value={formData.pinCode}
                                        onChange={(e) => handleInputChange("pinCode", e.target.value)}
                                    label=" pin code"
                                    iconClass="fa-solid fa-map-pin"

                                />
                            </div>

                            {/* Serial Number */}
                            <div className="space-y-2">
            
                                      

                                           <FloatingInput
                                    type="text"
                                    
                                       value={formData.serialNo}
                                    onChange={(e) => handleInputChange("serialNo", e.target.value)}
                                    label="Serial number"
                                    iconClass="fa-solid fa-map-pin"

                                />
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                      





                                              <FloatingInput
                                                value={formData.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    type="text"
                                    
                   
                                    label="Complete Address"
                                    iconClass="fa-regular fa-location-dot"

                                />
                            </div>

                           
                      

                            <FloatingTextarea
                            label="Message"
                            iconClass="fa-regular fa-comment" />

                            {/* Submit Button */}
                            <motion.button
                                onClick={handleSubmit}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0c4a6e] transition-all duration-200 font-semibold text-lg shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                <span>Submit Complaint</span>
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}
