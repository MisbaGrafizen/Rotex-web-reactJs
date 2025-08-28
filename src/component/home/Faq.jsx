import React, { useState } from 'react'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    Users,
    Award,
    Shield,
    Headphones,
    MessageCircle,
    Globe,
    Star,
    Plus,
    Minus,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react"

export default function Faq() {

       const faqs = [
        {
            question: "What is the warranty period for rotex products?",
            answer:
                "Most rotex products come with a 2-year comprehensive warranty. Specific warranty terms may vary by product category.",
        },
        {
            question: "How can I register my product for warranty?",
            answer:
                "You can register your product through our website, mobile app, or by visiting any authorized service center with your purchase receipt.",
        },
        {
            question: "Do you provide installation services?",
            answer:
                "Yes, we provide professional installation services for most of our products through our network of certified technicians.",
        },
        {
            question: "How can I find the nearest service center?",
            answer:
                "Use our service center locator on the website or contact our customer support team for assistance in finding the nearest center.",
        },
    ]

    const [expandedFaq, setExpandedFaq] = useState(null)


  return (
 <>

                   <section className="pt-10 font-Poppins mb-[50px] bg-white">
                    <div className="container mx-auto md77:px-6 md11:px-4">
                        <div className=" mb-7">
                            <h2 className="text-4xl  md77:text-center  font-[600] text-gray-800 mb-3">Frequently Asked Questions</h2>
                            <p className="text-md text-gray-600 md77:text-center  max-w-2xl mx-auto">
                                Find answers to common questions about our products and services
                            </p>
                        </div>

                        <div className="md11:max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl border-[0.5px] overflow-hidden shadow-lg">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full  px-5 md77:px-8 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <h3 className="md77:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                                        {expandedFaq === index ? (
                                            <Minus className="w-6 h-6 text-[#025da8] flex-shrink-0" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-[#025da8] flex-shrink-0" />
                                        )}
                                    </button>
                                    {expandedFaq === index && (
                                        <div className="px-8 pb-6">
                                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
 </>
  )
}
