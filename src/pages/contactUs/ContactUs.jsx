"use client"


import { useState, React } from "react"
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

import Header from "../../component/Header"
import FloatingInput from "../../component/otherFolder/FloatingInput"
import FloatingTextarea from "../../component/otherFolder/FloatingTextarea"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [expandedFaq, setExpandedFaq] = useState(null)

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

    const socialLinks = [
        { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
        { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
        { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
        { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" },
        { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-600" },
    ]

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required"
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ""))) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: "",
                mobile: "",
                email: "",
                subject: "",
                message: "",
            })
        }, 3000)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    return (
        <div className="font-Poppins bg-gray-50">
            <Header />

            <main className=" pt-[100px]">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#025da8] to-[#024a8a] rounded-lg w-[80%] mx-auto text-white py-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center">
                            <h1 className="text-3xl    font-[600] mb-1">Contact Us</h1>
                            <p className="text-[15px]  text-blue-100 max-w-xl  leading-5 mx-auto mb-4">
                                Get in touch with our expert team for all your electrical needs. We're here to power your world.
                            </p>
                            <div className=" flex border-t-[1px] w-[85%] mx-auto border-dashed border-[#fff] mt-[10px] mb-[10px]">

                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-17">
                                <div className="text-center">
                                    <div className="text-3xl   font-[600] mb-2">60+</div>
                                    <div className="text-blue-200 text-sm">Years of Excellence</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl   font-[600] mb-2">500+</div>
                                    <div className="text-blue-200 text-sm">Service Centers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl   font-[600] mb-2">24/7</div>
                                    <div className="text-blue-200 text-sm">Customer Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl   font-[600] mb-2">10M+</div>
                                    <div className="text-blue-200 text-sm">Happy Customers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information & Form Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex gap-10">
                            {/* Contact Information */}
                            <div className="space-y-3 w-[60%]">
                                <div>
                                    <h2 className="text-3xl   font-[600] text-gray-800 mb-1">Get In Touch</h2>
                                    <p className="text-[14px] text-gray-600 mb-4">
                                        We're here to help you with all your electrical product needs. Reach out to us through any of the
                                        following channels and experience our commitment to excellence.
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className="space-y-3 grid grid-cols">
                                <div className=" grid justify-end gap-[10px] grid-cols-2">

                       
                                    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-start space-x-6">
                                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] p-2 rounded-[7px]">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl   font-[600] text-gray-800 mb-">Phone Support</h3>
                                                {/* <p className="text-gray-600 mb-2 leading-4 text-[14px]">Call us for immediate assistance and expert guidance</p> */}
                                                <div className="space-y-   mt-[10px]">
                                                    {/* <p className="text-[#025da8]   font-[500] text-[13px]">+91 1800-103-1800</p> */}
                                                    <p className="text-[#025da8]   font-[500] text-[13px]">+ 91 9099093903</p>
                                                </div>
                                                <p className="text-[11px] font-[500] text-gray-500 mt-">Toll-free numbers available 24/7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-start space-x-6">
                                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] p-2 rounded-[7px]">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl   font-[600] text-gray-800 mb-">Email Support</h3>
                                                {/* <p className="text-gray-600 leading-4  mb-2 text-[14px]">Send us your queries and get detailed responses</p> */}
                                                <div className=" mt-[10px]">
                                                    <p className="text-[#025da8]   font-[500] text-[13px]">info@rotexfans.com</p>
                                                 
                                                </div>
                                                <p className="font-[500] text-gray-500  text-[11px] ">Response within 24 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                             </div>

                                    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200  transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-start space-x-6">
                                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] p-2 rounded-[7px]">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl   font-[600] text-gray-800 mb-">Head Office</h3>
                                                <p className="text-gray-600 mb-2 text-[12px]">Visit our corporate headquarters</p>
                                                <p className=" text-[#025da8]   font-[500] text-[13px] ">
                                                Plot No:40-41, Sub Plot : C/D/E, Power Industrial, Near Kothariya <br/>  Railway Station, Dhebar Road, Kothariya Solvant, Rajkot, Gujarat-360002
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-start space-x-6">
                                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] p-2 rounded-[7px]">
                                                <Clock className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl   font-[600] text-gray-800 mb-">Business Hours</h3>
                                                <p className="text-gray-600 mb-2 text-[14px]">We're available during these hours</p>
                                                <div className="space-y-2 text-gray-700">
                                                    <p>
                                                        <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Saturday:</span> 9:00 AM - 2:00 PM
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold">Sunday:</span> Closed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
                                    <h3 className="text-xl   font-[600] text-gray-800 mb-1 flex items-center">
                                        <Globe className="w-6 h-6 text-[#025da8] mr-3" />
                                        Follow Us
                                    </h3>
                                    <p className="text-gray-600 text-[12px] mb-3">Stay connected with us on social media for latest updates</p>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className={`bg-gray-100 hover:bg-gray-200 p-2 rounded-[5px] transition-all duration-300 ${social.color} hover:scale-110`}
                                                title={social.name}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white mt-[10px] rounded-3xl h-fit max-w-[550px]  p-7 shadow-xl border border-gray-200">
                                <div className="mb-5">
                                    <h2 className="text-2xl   font-[600] text-gray-800 mb-4 flex items-center">
                                        <MessageCircle className="w-8 h-8 text-[#025da8]  mr-4" />
                                        Send us a Message
                                    </h2>
                                    <p className="text-gray-600 text-[16px]">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                {isSubmitted ? (
                                    <div className="text-center py-16">
                                        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h3 className="text-3xl   font-[600] text-gray-800 mb-6">Message Sent Successfully!</h3>
                                        <p className="text-gray-600 text-lg">
                                            Thank you for contacting us. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* <div>
                        <label htmlFor="name" className="block text-sm   font-[600] text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-200 text-lg ${
                            errors.name
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-200 focus:border-[#025da8] focus:shadow-lg"
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                      </div> */}

                                            <FloatingInput
                                                label=" Full Name "
                                                name="name"

                                                onChange={handleInputChange}
                                                iconClass="fa-regular fa-user"
                                            />

                                            {/* <div>
                        <label htmlFor="mobile" className="block text-sm   font-[600] text-gray-700 mb-3">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-200 text-lg ${
                            errors.mobile
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-200 focus:border-[#025da8] focus:shadow-lg"
                          }`}
                          placeholder="Enter your mobile number"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-2">{errors.mobile}</p>}
                      </div> */}

                                            <FloatingInput
                                                label="Mobile Number"
                                                type="number"
                                                id="mobile"
                                                name="mobile"

                                                onChange={handleInputChange}
                                                iconClass="fa-regular fa-phone-volume"
                                            />

                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* <div>
                                                <label htmlFor="email" className="block text-sm   font-[600] text-gray-700 mb-3">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-200 text-lg ${errors.email
                                                            ? "border-red-300 focus:border-red-500"
                                                            : "border-gray-200 focus:border-[#025da8] focus:shadow-lg"
                                                        }`}
                                                    placeholder="Enter your email address"
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                                            </div> */}

                                            <FloatingInput
                                                label="Email Address"
                                                     type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                iconClass="fa-regular fa-envelope"
                                            />


                                            {/* <div>
                                                <label htmlFor="subject" className="block text-sm   font-[600] text-gray-700 mb-3">
                                                    Subject *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    // value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-200 text-lg ${errors.subject
                                                            ? "border-red-300 focus:border-red-500"
                                                            : "border-gray-200 focus:border-[#025da8] focus:shadow-lg"
                                                        }`}
                                                    placeholder="Enter message subject"
                                                />
                                                {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
                                            </div> */}


                                            <FloatingInput
                                                label=" Subject"
                                                      type="text"
                                                    id="subject"
                                                    name="subject"
                                                    // value={formData.subject}
                                                    onChange={handleInputChange}
                                                iconClass="fa-regular fa-layer-group"
                                            />

                                        </div>

                                        {/* <div>
                                            <label htmlFor="message" className="block text-sm   font-[600] text-gray-700 mb-3">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-200 resize-none text-lg ${errors.message
                                                        ? "border-red-300 focus:border-red-500"
                                                        : "border-gray-200 focus:border-[#025da8] focus:shadow-lg"
                                                    }`}
                                                placeholder="Enter your message here..."
                                            />
                                            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                                        </div> */}


                                            <FloatingTextarea
                                                label=" Message"
                                            id="message"
                                                name="message"
                                                rows={6}
                                           
                                                onChange={handleInputChange}
                                        
                                                iconClass="fa-regular fa-phone-volume"
                                            />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-[#025da8] to-[#024a8a] hover:from-[#024a8a] hover:to-[#023d73] disabled:bg-gray-400 text-white   font-[600] py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center space-x-3 text-[16px] hover:shadow-xl hover:-translate-y-1"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-gray-50 to-white py-">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-6">
                            <h2 className="text-4xl   font-[600] text-gray-800 mb-2">Why Choose Rotex?</h2>
                            <p className="text-[14px] text-gray-600 max-w-4xl mx-auto">
                                With over 60 years of experience, we're committed to providing innovative electrical solutions that
                                power your world with reliability and excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center bg-white shadow-rotex border-[] rounded-2xl border  p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto mb-2">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl   font-[600] text-gray-800 mb-2">Quality Assurance</h3>
                                <p className="text-gray-600 text-[14px]">
                                    All our products undergo rigorous quality testing to ensure reliability and durability that exceeds
                                    industry standards.
                                </p>
                            </div>

                            <div className="text-center bg-white shadow-rotex rounded-2xl border  p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                              <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto mb-2">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl   font-[600] text-gray-800 mb-4">24/7 Support</h3>
                            <p className="text-gray-600 text-[14px]">
                                    Our dedicated customer support team is available round the clock to assist you with any queries or
                                    concerns.
                                </p>
                            </div>

                            <div className="text-center bg-white shadow-rotex rounded-2xl border  p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto mb-2">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl   font-[600] text-gray-800 mb-4">Pan India Presence</h3>
                            <p className="text-gray-600 text-[14px]">
                                    With over 500 service centers across India, we're always close to you when you need us most.
                                </p>
                            </div>

                            <div className="text-center bg-white shadow-rotex rounded-2xl border  p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-br from-[#025da8] to-[#024a8a] rounded-full w-[60px] h-[60px] flex items-center justify-center mx-auto mb-2">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl   font-[600] text-gray-800 mb-4">Trusted Brand</h3>
                            <p className="text-gray-600 text-[14px]">
                                    Trusted by millions of customers worldwide, we've been powering homes and businesses for over six
                                    decades.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 mb-[50px] bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-7">
                            <h2 className="text-4xl   font-[600] text-gray-800 mb-3">Frequently Asked Questions</h2>
                            <p className="text-md text-gray-600 max-w-2xl mx-auto">
                                Find answers to common questions about our products and services
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl border-[0.5px] overflow-hidden shadow-lg">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full px-8 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
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

            
            </main>
        </div>
    )
}
