
import { useState, react } from "react"

import {
    User,
    Package,
    Heart,
    Download,
    Eye,
    Edit2,
    Phone,
    Mail,
    MapPin,
    LogOut,
    Star,
    ShoppingCart,
    Trash2,
} from "lucide-react"
import main from "../../../public/images/productDetails/main.jpg"


import { Link } from "react-router-dom"
import Header from "../../component/Header"

export default function MyAccount() {
    const [activeTab, setActiveTab] = useState("profile")

    // Sample data
    const userProfile = {
        name: "Rajesh Kumar",
        email: "rajesh.kumar@email.com",
        phone: "+91 98765 43210",
        address: "123 MG Road, Bangalore, Karnataka 560001",
    }

    const orders = [
        {
            id: "ORD001",
            fanName: "Renesa Halo BLDC+ Ceiling Fan",
            details: "1200mm, Remote Control, LED Indicators",
            qty: 1,
            color: "Blaze Brown",
            totalPrice: 3199,
            paymentStatus: "Paid",
            deliveryStatus: "Delivered",
            orderDate: "2024-01-15",
            invoiceUrl: "#",
        },
        {
            id: "ORD002",
            fanName: "Epic Pro BLDC+ Ceiling Fan",
            details: "1400mm, Smart Control, Energy Efficient",
            qty: 2,
            color: "Pearl White",
            totalPrice: 6398,
            paymentStatus: "Paid",
            deliveryStatus: "In Transit",
            orderDate: "2024-01-20",
            invoiceUrl: "#",
        },
        {
            id: "ORD003",
            fanName: "Stealth Neo BLDC+ Ceiling Fan",
            details: "1200mm, Silent Operation, Premium Design",
            qty: 1,
            color: "Matte Black",
            totalPrice: 4299,
            paymentStatus: "Pending",
            deliveryStatus: "Processing",
            orderDate: "2024-01-25",
            invoiceUrl: "#",
        },
    ]

    const wishlist = [
        {
            id: "W001",
            fanName: "Albus Underlight Smart BLDC+ Ceiling Fan",
            shortDescription: "Premium BLDC motor with smart controls and LED underlight",
            features: ["Smart Control", "LED Underlight", "Energy Efficient", "Silent Operation"],
            image: main,
            price: 5499,
            originalPrice: 7999,
            discount: 31,
            rating: 4.8,
            reviews: 245,
            availability: "In Stock",
        },
        {
            id: "W002",
            fanName: "Crista BLDC+ Ceiling Fan",
            shortDescription: "Elegant design with superior air delivery and remote control",
            features: ["Remote Control", "High Air Delivery", "Premium Finish", "3 Year Warranty"],
            image: "/placeholder.svg?height=300&width=300",
            price: 4199,
            originalPrice: 5999,
            discount: 30,
            rating: 4.6,
            reviews: 189,
            availability: "In Stock",
        },
        {
            id: "W003",
            fanName: "Elio BLDC+ Ceiling Fan",
            shortDescription: "Modern aesthetics with advanced BLDC technology",
            features: ["BLDC Motor", "Modern Design", "Energy Saving", "Low Maintenance"],
            image: "/placeholder.svg?height=300&width=300",
            price: 3799,
            originalPrice: 5299,
            discount: 28,
            rating: 4.7,
            reviews: 156,
            availability: "Limited Stock",
        },
    ]

    const tabs = [
        { id: "profile", label: "Profile", icon: User },
        { id: "orders", label: "My Orders", icon: Package },
        { id: "wishlist", label: "My Wishlist", icon: Heart },
    ]

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
            case "paid":
                return "text-green-600 bg-green-50 border-[1.2px] border-green-400 "
            case "in transit":
            case "processing":
                return "text-blue-600 bg-blue-50  border-[1.2px] border-blue-400 "
            case "pending":
                return "text-orange-600 bg-orange-50 border-[1.2px] border-orange-400 "
            default:
                return "text-gray-600 bg-gray-50"
        }
    }

    return (
        <>
            <Header />
            <div className=" font-Poppins min-h-screen bg-[#f0f0f0] pt-[100px] w-[100%]">


                <div className="w-[93%] mx-auto px-4 flex gap-[30px] justify-between sm:px-6 py-8">
                    <div className="bg-white rounded-2xl shadow-xl md11:w-[71%] overflow-hidden">
                        {/* Tab Navigation */}
                        <div className="border-b border-gray-200">
                            <nav className="flex space-x-8 px-8 pt-6">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center space-x-2 pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                                                ? "border-[#025da8] text-[#025da8]"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{tab.label}</span>
                                        </button>
                                    )
                                })}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="px-6 overflow-y-auto max-h-[72vh] pb-8 pt-[15px]">
                            {/* Profile Tab */}
                            {activeTab === "profile" && (
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-[600] text-gray-900">Profile Information</h2>
                                        <div className="flex items-center space-x-3">
                                            <button className="flex items-center space-x-2 px-4 py-2 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200">
                                                <Edit2 className="w-4 h-4" />
                                                <span>Edit Profile</span>
                                            </button>
                                            <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                                                <LogOut className="w-4 h-4" />
                                                <span>Log Out</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Personal Information */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Details</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <User className="w-5 h-5 text-[#025da8]" />
                                                    <div>
                                                        <p className="text-sm text-gray-500">Full Name</p>
                                                        <p className="font-medium text-gray-900">{userProfile.name}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <Mail className="w-5 h-5 text-[#025da8]" />
                                                    <div>
                                                        <p className="text-sm text-gray-500">Email Address</p>
                                                        <p className="font-medium text-gray-900">{userProfile.email}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <Phone className="w-5 h-5 text-[#025da8]" />
                                                    <div>
                                                        <p className="text-sm text-gray-500">Phone Number</p>
                                                        <p className="font-medium text-gray-900">{userProfile.phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Address Information */}
                                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Address Information</h3>
                                            <div className="flex items-start space-x-3">
                                                <MapPin className="w-5 h-5 text-[#025da8] mt-1" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Primary Address</p>
                                                    <p className="font-medium text-gray-900">{userProfile.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orders Tab */}
                            {activeTab === "orders" && (
                                <>


                                    <div className=" flex gap-[40px] w-[100%]">
                                        <div className="space-y-1 ">
                                            <div className="flex items-center justify-between">


                                            </div>

                                            <div className="   grid  grid-cols-2 gap-[30px] ">
                                                {orders.map((order, index) => (
                                                    <div
                                                        key={order.id}
                                                        className="bg-white rounded-2xl min-h-[440px] w-[420px] border-[1px] border-gray-100 border-[#025da8]/30 transition-all duration-300 overflow-hidden group shadow-md"
                                                    >
                                                        {/* Order Header */}
                                                        <div className="bg-gradient-to-r from-[#025da8] to-[#086597cc] px-4 py-[7px]">
                                                            <div className="flex items-center justify-between text-white">
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="bg-white/20 backdrop-blur-sm px-3 h-[23px]  flex  justify-center items-center rounded-full">
                                                                        <span className=" text-[10px] font-[500]">#{order.id}</span>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-[10px] opacity-90">Order Date</p>
                                                                        <p className="font-semibold text-[13px]">
                                                                            {new Date(order.orderDate).toLocaleDateString("en-IN", {
                                                                                year: "numeric",
                                                                                month: "long",
                                                                                day: "numeric",
                                                                            })}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-right flex justify-end items-center gap-[10px]">
                                                                    {/* <p className="text-sm opacity-90">Total Amount :</p> */}
                                                                    <p className="text-xl font-[600]">₹{order.totalPrice.toLocaleString()}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Order Content */}
                                                        <div className="px-5 pt-5 flex flex-col  justify-between w-[100%]">
                                                            <div className="flex flex-col w-[100%] gap-[30px]   justify-between lg:items-start   space-y-6 lg:space-y-0 ">
                                                                {/* Product Image & Basic Info */}
                                                                <div className="flex items-center md77:items-start space-x-4   ">
                                                                    <div className="relative">
                                                                        <img
                                                                            src={main}
                                                                            alt={order.fanName}
                                                                            className="w-[120px] h-[120px] object-cover rounded-xl border-[1px] shadow-md border-gray-300"
                                                                        />

                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h3 className="font-[600] text-[16px] text-gray-900 mb-1">{order.fanName}</h3>
                                                                        <p className="text-gray-600 text-[13px] mb-1">{order.details}</p>
                                                                        <div className="flex items-center space-x-4">
                                                                            <div className="flex items-center space-x-2">
                                                                                <div
                                                                                    className="w-8 h-8 rounded-full border-[1px] border-gray-500"
                                                                                    style={{
                                                                                        backgroundColor:
                                                                                            order.color === "Blaze Brown"
                                                                                                ? "#8B4513"
                                                                                                : order.color === "Pearl White"
                                                                                                    ? "#F8F8FF"
                                                                                                    : "#000000",
                                                                                    }}
                                                                                ></div>
                                                                                <span className="text-sm font-medium text-gray-700">{order.color}</span>
                                                                            </div>
                                                                            <span className="text-sm text-gray-500">•</span>
                                                                            <span className="text-sm text-gray-500"><b className="  text-gray-700 font-[500]">Quantity:</b> {order.qty}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Status Section */}
                                                                <div className="flex flex-col w-[100%] space-y-3">
                                                                    <div className=" flex  gap-10">
                                                                        <div className="">
                                                                            <p className="text-xs text-gray-500 mb-2">Payment Status</p>
                                                                            <span
                                                                                className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(order.paymentStatus)}`}
                                                                            >
                                                                                {order.paymentStatus}
                                                                            </span>
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-xs text-gray-500 mb-2">Delivery Status</p>
                                                                            <span
                                                                                className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(order.deliveryStatus)}`}
                                                                            >
                                                                                {order.deliveryStatus}
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Progress Bar */}
                                                                    <div className="space-y-2">
                                                                        <div className="flex justify-between text-xs text-gray-500">
                                                                            <span>Order Progress</span>
                                                                            <span className=" font-[600] text-[#000]">
                                                                                {order.deliveryStatus === "Delivered"
                                                                                    ? "100%"
                                                                                    : order.deliveryStatus === "In Transit"
                                                                                        ? "75%"
                                                                                        : order.deliveryStatus === "Processing"
                                                                                            ? "25%"
                                                                                            : "0%"}
                                                                            </span>
                                                                        </div>
                                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                                            <div
                                                                                className="bg-gradient-to-r from-[#025da8] to-[#0369a1] h-2 rounded-full transition-all duration-500"
                                                                                style={{
                                                                                    width:
                                                                                        order.deliveryStatus === "Delivered"
                                                                                            ? "100%"
                                                                                            : order.deliveryStatus === "In Transit"
                                                                                                ? "75%"
                                                                                                : order.deliveryStatus === "Processing"
                                                                                                    ? "25%"
                                                                                                    : "0%",
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Action Buttons */}
                                                                    <div className="flex space-x-3">
                                                                        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0f5f8e] transition-all duration-200 transform hover:scale-105 shadow-lg group">
                                                                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                                                                            <span className="font-medium">Invoice</span>
                                                                        </button>
                                                                        <button className="px-3 py-2 border-[1.6px] border-[#025da8] text-[#025da8] rounded-[8px] hover:bg-[#025da8] hover:text-white transition-all duration-200 transform hover:scale-105">
                                                                            <Eye className="w-5 h-5" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Order Timeline */}
                                                            <div className="mt-4 pt-3 border-t border-dashed border-[#025da8]">
                                                                <div className="flex items-center justify-between text-sm">
                                                                    <div className="flex items-center space-x-2">
                                                                        <div
                                                                            className={`w-3 h-3 rounded-full ${order.deliveryStatus === "Processing" ? "bg-orange-500" : "bg-green-500"}`}
                                                                        ></div>
                                                                        <span className="text-gray-600">
                                                                            {order.deliveryStatus === "Delivered"
                                                                                ? "Delivered successfully"
                                                                                : order.deliveryStatus === "In Transit"
                                                                                    ? "Package is on the way"
                                                                                    : order.deliveryStatus === "Processing"
                                                                                        ? "Order is being processed"
                                                                                        : "Order placed"}
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-gray-500">
                                                                        {order.deliveryStatus === "Delivered"
                                                                            ? "Completed"
                                                                            : order.deliveryStatus === "In Transit"
                                                                                ? "Expected in 2-3 days"
                                                                                : order.deliveryStatus === "Processing"
                                                                                    ? "Processing"
                                                                                    : "Pending"}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Empty State */}
                                            {orders.length === 0 && (
                                                <div className="text-center py-16">
                                                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
                                                    <p className="text-gray-600 mb-6">When you place orders, they'll appear here</p>
                                                    <Link
                                                        href="/"
                                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200"
                                                    >
                                                        <span>Start Shopping</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </>
                            )}

                            {/* Wishlist Tab */}
                            {activeTab === "wishlist" && (
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-[600] text-gray-900">My Wishlist</h2>
                                        <p className="text-gray-600">{wishlist.length} items saved</p>
                                    </div>

                                    <div className=" flex gap-4">
                                        {wishlist.map((item) => (
                                            <></>
                                        ))}
                                    </div>

                                    {/* Empty State */}
                                    {wishlist.length === 0 && (
                                        <div className="text-center py-16">
                                            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                                            <p className="text-gray-600 mb-6">Save items you love to view them later</p>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200"
                                            >
                                                <span>Continue Shopping</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-[330px]  bg-white border  min-h-[500px] rounded-[15px]">

                    </div>
                </div>
            </div>
        </>
    )
}
