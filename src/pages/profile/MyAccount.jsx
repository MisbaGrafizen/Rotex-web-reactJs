
// import { useState, react } from "react"

// import {
//     User,
//     Package,
//     Heart,
//     Download,
//     Eye,
//     Edit2,
//     Phone,
//     Mail,
//     MapPin,
//     LogOut,
//     Star,
//     ShoppingCart,
//     Trash2,
// } from "lucide-react"
// import main from "../../../public/images/productDetails/main.jpg"


// import { Link } from "react-router-dom"
// import Header from "../../component/Header"

// export default function MyAccount() {
//     const [activeTab, setActiveTab] = useState("profile")

//     // Sample data
//     const userProfile = {
//         name: "Rajesh Kumar",
//         email: "rajesh.kumar@email.com",
//         phone: "+91 98765 43210",
//         address: "123 MG Road, Bangalore, Karnataka 560001",
//     }

//     const orders = [
//         {
//             id: "ORD001",
//             fanName: "Renesa Halo BLDC+ Ceiling Fan",
//             details: "1200mm, Remote Control, LED Indicators",
//             qty: 1,
//             color: "Blaze Brown",
//             totalPrice: 3199,
//             paymentStatus: "Paid",
//             deliveryStatus: "Delivered",
//             orderDate: "2024-01-15",
//             invoiceUrl: "#",
//         },
//         {
//             id: "ORD002",
//             fanName: "Epic Pro BLDC+ Ceiling Fan",
//             details: "1400mm, Smart Control, Energy Efficient",
//             qty: 2,
//             color: "Pearl White",
//             totalPrice: 6398,
//             paymentStatus: "Paid",
//             deliveryStatus: "In Transit",
//             orderDate: "2024-01-20",
//             invoiceUrl: "#",
//         },
//         {
//             id: "ORD003",
//             fanName: "Stealth Neo BLDC+ Ceiling Fan",
//             details: "1200mm, Silent Operation, Premium Design",
//             qty: 1,
//             color: "Matte Black",
//             totalPrice: 4299,
//             paymentStatus: "Pending",
//             deliveryStatus: "Processing",
//             orderDate: "2024-01-25",
//             invoiceUrl: "#",
//         },
//     ]

//     const wishlist = [
//         {
//             id: "W001",
//             fanName: "Albus Underlight Smart BLDC+ Ceiling Fan",
//             shortDescription: "Premium BLDC motor with smart controls and LED underlight",
//             features: ["Smart Control", "LED Underlight", "Energy Efficient", "Silent Operation"],
//             image: main,
//             price: 5499,
//             originalPrice: 7999,
//             discount: 31,
//             rating: 4.8,
//             reviews: 245,
//             availability: "In Stock",
//         },
//         {
//             id: "W002",
//             fanName: "Crista BLDC+ Ceiling Fan",
//             shortDescription: "Elegant design with superior air delivery and remote control",
//             features: ["Remote Control", "High Air Delivery", "Premium Finish", "3 Year Warranty"],
//             image: "/placeholder.svg?height=300&width=300",
//             price: 4199,
//             originalPrice: 5999,
//             discount: 30,
//             rating: 4.6,
//             reviews: 189,
//             availability: "In Stock",
//         },
//         {
//             id: "W003",
//             fanName: "Elio BLDC+ Ceiling Fan",
//             shortDescription: "Modern aesthetics with advanced BLDC technology",
//             features: ["BLDC Motor", "Modern Design", "Energy Saving", "Low Maintenance"],
//             image: "/placeholder.svg?height=300&width=300",
//             price: 3799,
//             originalPrice: 5299,
//             discount: 28,
//             rating: 4.7,
//             reviews: 156,
//             availability: "Limited Stock",
//         },
//     ]

//     const tabs = [
//         { id: "profile", label: "Profile", icon: User },
//         { id: "orders", label: "My Orders", icon: Package },
//         { id: "wishlist", label: "My Wishlist", icon: Heart },
//     ]

//     const getStatusColor = (status) => {
//         switch (status.toLowerCase()) {
//             case "delivered":
//             case "paid":
//                 return "text-green-600 bg-green-50 border-[1.2px] border-green-400 "
//             case "in transit":
//             case "processing":
//                 return "text-blue-600 bg-blue-50  border-[1.2px] border-blue-400 "
//             case "pending":
//                 return "text-orange-600 bg-orange-50 border-[1.2px] border-orange-400 "
//             default:
//                 return "text-gray-600 bg-gray-50"
//         }
//     }

//     return (
//         <>
//             <Header />
//             <div className=" font-Poppins min-h-screen bg-[#f0f0f0] pt-[100px] w-[100%]">


//                 <div className="w-[93%] mx-auto px-4 flex gap-[30px] justify-between sm:px-6 py-8">
//                     <div className="bg-white rounded-2xl shadow-xl md11:w-[71%] overflow-hidden">
//                         {/* Tab Navigation */}
//                         <div className="border-b border-gray-200">
//                             <nav className="flex space-x-8 px-8 pt-6">
//                                 {tabs.map((tab) => {
//                                     const Icon = tab.icon
//                                     return (
//                                         <button
//                                             key={tab.id}
//                                             onClick={() => setActiveTab(tab.id)}
//                                             className={`flex items-center space-x-2 pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
//                                                 ? "border-[#025da8] text-[#025da8]"
//                                                 : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                                                 }`}
//                                         >
//                                             <Icon className="w-5 h-5" />
//                                             <span>{tab.label}</span>
//                                         </button>
//                                     )
//                                 })}
//                             </nav>
//                         </div>

//                         {/* Tab Content */}
//                         <div className="px-6 overflow-y-auto max-h-[72vh] pb-8 pt-[15px]">
//                             {/* Profile Tab */}
//                             {activeTab === "profile" && (
//                                 <div className="space-y-5">
//                                     <div className="flex items-center justify-between">
//                                         <h2 className="text-2xl font-[600] text-gray-900">Profile Information</h2>
//                                         <div className="flex items-center space-x-3">
//                                             <button className="flex items-center space-x-2 px-4 py-2 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200">
//                                                 <Edit2 className="w-4 h-4" />
//                                                 <span>Edit Profile</span>
//                                             </button>
//                                             <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
//                                                 <LogOut className="w-4 h-4" />
//                                                 <span>Log Out</span>
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                         {/* Personal Information */}
//                                         <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Details</h3>
//                                             <div className="space-y-4">
//                                                 <div className="flex items-center space-x-3">
//                                                     <User className="w-5 h-5 text-[#025da8]" />
//                                                     <div>
//                                                         <p className="text-sm text-gray-500">Full Name</p>
//                                                         <p className="font-medium text-gray-900">{userProfile.name}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flex items-center space-x-3">
//                                                     <Mail className="w-5 h-5 text-[#025da8]" />
//                                                     <div>
//                                                         <p className="text-sm text-gray-500">Email Address</p>
//                                                         <p className="font-medium text-gray-900">{userProfile.email}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flex items-center space-x-3">
//                                                     <Phone className="w-5 h-5 text-[#025da8]" />
//                                                     <div>
//                                                         <p className="text-sm text-gray-500">Phone Number</p>
//                                                         <p className="font-medium text-gray-900">{userProfile.phone}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Address Information */}
//                                         <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-6">Address Information</h3>
//                                             <div className="flex items-start space-x-3">
//                                                 <MapPin className="w-5 h-5 text-[#025da8] mt-1" />
//                                                 <div>
//                                                     <p className="text-sm text-gray-500">Primary Address</p>
//                                                     <p className="font-medium text-gray-900">{userProfile.address}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Orders Tab */}
//                             {activeTab === "orders" && (
//                                 <>


//                                     <div className=" flex gap-[40px] w-[100%]">
//                                         <div className="space-y-1 ">
//                                             <div className="flex items-center justify-between">


//                                             </div>

//                                             <div className="   grid  grid-cols-2 gap-[30px] ">
//                                                 {orders.map((order, index) => (
//                                                     <div
//                                                         key={order.id}
//                                                         className="bg-white rounded-2xl min-h-[440px] w-[420px] border-[1px] border-gray-100 border-[#025da8]/30 transition-all duration-300 overflow-hidden group shadow-md"
//                                                     >
//                                                         {/* Order Header */}
//                                                         <div className="bg-gradient-to-r from-[#025da8] to-[#086597cc] px-4 py-[7px]">
//                                                             <div className="flex items-center justify-between text-white">
//                                                                 <div className="flex items-center space-x-4">
//                                                                     <div className="bg-white/20 backdrop-blur-sm px-3 h-[23px]  flex  justify-center items-center rounded-full">
//                                                                         <span className=" text-[10px] font-[500]">#{order.id}</span>
//                                                                     </div>
//                                                                     <div>
//                                                                         <p className="text-[10px] opacity-90">Order Date</p>
//                                                                         <p className="font-semibold text-[13px]">
//                                                                             {new Date(order.orderDate).toLocaleDateString("en-IN", {
//                                                                                 year: "numeric",
//                                                                                 month: "long",
//                                                                                 day: "numeric",
//                                                                             })}
//                                                                         </p>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="text-right flex justify-end items-center gap-[10px]">
//                                                                     {/* <p className="text-sm opacity-90">Total Amount :</p> */}
//                                                                     <p className="text-xl font-[600]">₹{order.totalPrice.toLocaleString()}</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                         {/* Order Content */}
//                                                         <div className="px-5 pt-5 flex flex-col  justify-between w-[100%]">
//                                                             <div className="flex flex-col w-[100%] gap-[30px]   justify-between lg:items-start   space-y-6 lg:space-y-0 ">
//                                                                 {/* Product Image & Basic Info */}
//                                                                 <div className="flex items-center md77:items-start space-x-4   ">
//                                                                     <div className="relative">
//                                                                         <img
//                                                                             src={main}
//                                                                             alt={order.fanName}
//                                                                             className="w-[120px] h-[120px] object-cover rounded-xl border-[1px] shadow-md border-gray-300"
//                                                                         />

//                                                                     </div>
//                                                                     <div className="flex-1">
//                                                                         <h3 className="font-[600] text-[16px] text-gray-900 mb-1">{order.fanName}</h3>
//                                                                         <p className="text-gray-600 text-[13px] mb-1">{order.details}</p>
//                                                                         <div className="flex items-center space-x-4">
//                                                                             <div className="flex items-center space-x-2">
//                                                                                 <div
//                                                                                     className="w-8 h-8 rounded-full border-[1px] border-gray-500"
//                                                                                     style={{
//                                                                                         backgroundColor:
//                                                                                             order.color === "Blaze Brown"
//                                                                                                 ? "#8B4513"
//                                                                                                 : order.color === "Pearl White"
//                                                                                                     ? "#F8F8FF"
//                                                                                                     : "#000000",
//                                                                                     }}
//                                                                                 ></div>
//                                                                                 <span className="text-sm font-medium text-gray-700">{order.color}</span>
//                                                                             </div>
//                                                                             <span className="text-sm text-gray-500">•</span>
//                                                                             <span className="text-sm text-gray-500"><b className="  text-gray-700 font-[500]">Quantity:</b> {order.qty}</span>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>

//                                                                 {/* Status Section */}
//                                                                 <div className="flex flex-col w-[100%] space-y-3">
//                                                                     <div className=" flex  gap-10">
//                                                                         <div className="">
//                                                                             <p className="text-xs text-gray-500 mb-2">Payment Status</p>
//                                                                             <span
//                                                                                 className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(order.paymentStatus)}`}
//                                                                             >
//                                                                                 {order.paymentStatus}
//                                                                             </span>
//                                                                         </div>
//                                                                         <div className="">
//                                                                             <p className="text-xs text-gray-500 mb-2">Delivery Status</p>
//                                                                             <span
//                                                                                 className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(order.deliveryStatus)}`}
//                                                                             >
//                                                                                 {order.deliveryStatus}
//                                                                             </span>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Progress Bar */}
//                                                                     <div className="space-y-2">
//                                                                         <div className="flex justify-between text-xs text-gray-500">
//                                                                             <span>Order Progress</span>
//                                                                             <span className=" font-[600] text-[#000]">
//                                                                                 {order.deliveryStatus === "Delivered"
//                                                                                     ? "100%"
//                                                                                     : order.deliveryStatus === "In Transit"
//                                                                                         ? "75%"
//                                                                                         : order.deliveryStatus === "Processing"
//                                                                                             ? "25%"
//                                                                                             : "0%"}
//                                                                             </span>
//                                                                         </div>
//                                                                         <div className="w-full bg-gray-200 rounded-full h-2">
//                                                                             <div
//                                                                                 className="bg-gradient-to-r from-[#025da8] to-[#0369a1] h-2 rounded-full transition-all duration-500"
//                                                                                 style={{
//                                                                                     width:
//                                                                                         order.deliveryStatus === "Delivered"
//                                                                                             ? "100%"
//                                                                                             : order.deliveryStatus === "In Transit"
//                                                                                                 ? "75%"
//                                                                                                 : order.deliveryStatus === "Processing"
//                                                                                                     ? "25%"
//                                                                                                     : "0%",
//                                                                                 }}
//                                                                             ></div>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Action Buttons */}
//                                                                     <div className="flex space-x-3">
//                                                                         <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0f5f8e] transition-all duration-200 transform hover:scale-105 shadow-lg group">
//                                                                             <Download className="w-4 h-4 group-hover:animate-bounce" />
//                                                                             <span className="font-medium">Invoice</span>
//                                                                         </button>
//                                                                         <button className="px-3 py-2 border-[1.6px] border-[#025da8] text-[#025da8] rounded-[8px] hover:bg-[#025da8] hover:text-white transition-all duration-200 transform hover:scale-105">
//                                                                             <Eye className="w-5 h-5" />
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                             {/* Order Timeline */}
//                                                             <div className="mt-4 pt-3 border-t border-dashed border-[#025da8]">
//                                                                 <div className="flex items-center justify-between text-sm">
//                                                                     <div className="flex items-center space-x-2">
//                                                                         <div
//                                                                             className={`w-3 h-3 rounded-full ${order.deliveryStatus === "Processing" ? "bg-orange-500" : "bg-green-500"}`}
//                                                                         ></div>
//                                                                         <span className="text-gray-600">
//                                                                             {order.deliveryStatus === "Delivered"
//                                                                                 ? "Delivered successfully"
//                                                                                 : order.deliveryStatus === "In Transit"
//                                                                                     ? "Package is on the way"
//                                                                                     : order.deliveryStatus === "Processing"
//                                                                                         ? "Order is being processed"
//                                                                                         : "Order placed"}
//                                                                         </span>
//                                                                     </div>
//                                                                     <span className="text-gray-500">
//                                                                         {order.deliveryStatus === "Delivered"
//                                                                             ? "Completed"
//                                                                             : order.deliveryStatus === "In Transit"
//                                                                                 ? "Expected in 2-3 days"
//                                                                                 : order.deliveryStatus === "Processing"
//                                                                                     ? "Processing"
//                                                                                     : "Pending"}
//                                                                     </span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>

//                                             {/* Empty State */}
//                                             {orders.length === 0 && (
//                                                 <div className="text-center py-16">
//                                                     <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                                                     <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
//                                                     <p className="text-gray-600 mb-6">When you place orders, they'll appear here</p>
//                                                     <Link
//                                                         href="/"
//                                                         className="inline-flex items-center space-x-2 px-6 py-3 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200"
//                                                     >
//                                                         <span>Start Shopping</span>
//                                                     </Link>
//                                                 </div>
//                                             )}
//                                         </div>

//                                     </div>
//                                 </>
//                             )}

//                             {/* Wishlist Tab */}
//                             {activeTab === "wishlist" && (
//                                 <div className="space-y-5">
//                                     <div className="flex items-center justify-between">
//                                         <h2 className="text-2xl font-[600] text-gray-900">My Wishlist</h2>
//                                         <p className="text-gray-600">{wishlist.length} items saved</p>
//                                     </div>

//                                     <div className=" flex gap-4">
//                                         {wishlist.map((item) => (
//                                             <></>
//                                         ))}
//                                     </div>

//                                     {/* Empty State */}
//                                     {wishlist.length === 0 && (
//                                         <div className="text-center py-16">
//                                             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
//                                             <p className="text-gray-600 mb-6">Save items you love to view them later</p>
//                                             <Link
//                                                 href="/"
//                                                 className="inline-flex items-center space-x-2 px-6 py-3 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200"
//                                             >
//                                                 <span>Continue Shopping</span>
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                     <div className="w-[330px]  bg-white border  min-h-[500px] rounded-[15px]">

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useEffect, useMemo, useState } from "react";
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
  Wrench,
  AlertCircle,
} from "lucide-react"
import main from "../../../public/images/productDetails/main.jpg"
import RegisterWarranty from "../../component/myAccount/RegisterWarranty"
import QuickFix from "../../component/myAccount/Quickfix"
import NewComplaint from "../../component/myAccount/NewComplaint"
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import { ApiGet, ApiPost, ApiPut } from "../../helper/axios"; 

export default function MyAccount() {
  // ---------- LocalStorage Keys ----------
  const LOCAL_USER_ID_KEY = "auth_user_id";
  const LOCAL_PROFILE_KEY = "auth_user_profile";

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // ---------- UserId from localStorage ----------
  const [userId, setUserId] = useState(
    () => localStorage.getItem(LOCAL_USER_ID_KEY) || ""
  );

  // ---------- Profile state (hydrate from cache immediately) ----------
  const [profile, setProfile] = useState(() => {
    try {
      const cached = localStorage.getItem(LOCAL_PROFILE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState("");

  // ---------- Orders state ----------
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  // ---------- Edit form ----------
  const [editing, setEditing] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "wishlist", label: "My Wishlist", icon: Heart },

    { id: "orders", label: "My Orders", icon: Package },
    { id: "warranty", label: "Register Warranty", icon: Edit2 },
    { id: "quickfix", label: "Quick Fix", icon: Wrench },
    { id: "complaint", label: "New Complaint", icon: AlertCircle },
  ]

  // ---------- Effects ----------
  useEffect(() => {
    const id = localStorage.getItem(LOCAL_USER_ID_KEY) || "";
    setUserId(id);
  }, []);


  useEffect(() => {
    if (!userId) return;
    fetchProfile(userId);
    fetchOrders(userId);
  }, [userId]);

  // ---------- API Calls (using ApiGet / ApiPost) ----------
  async function fetchProfile(uid) {
    setProfileLoading(true);
    setProfileError("");
    try {
      // Expecting { success, data } or { status: 200, data }
      const res = await ApiGet(`/user/${uid}`);
      const ok = res?.success || res?.status === 200;
      if (ok) {
        const data = res?.data ?? res;
        setProfile(data);
        try {
          localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(data));
        } catch {}
      } else {
        setProfileError(res?.message || "Failed to load profile");
      }
    } catch (err) {
      console.error("Profile fetch error", err);
      setProfileError("Unable to fetch profile. Showing cached data if available.");
    } finally {
      setProfileLoading(false);
    }
  }

  async function fetchOrders(uid) {
    setOrdersLoading(true);
    setOrdersError("");
    try {
      const res = await ApiGet(`/order-list/${uid}`);
      if (res?.status === 200) {
        setOrders(Array.isArray(res.data) ? res.data : []);
      } else {
        setOrdersError(res?.message || "Failed to load orders");
      }
    } catch (err) {
      console.error("Orders fetch error", err);
      setOrdersError("Unable to fetch orders.");
    } finally {
      setOrdersLoading(false);
    }
  }

  // ---------- Edit Profile Integration ----------
  const startEditing = () => {
    // Prefill from current profile
    const name =
      profile?.name ||
      [profile?.firstName, profile?.lastName].filter(Boolean).join(" ") ||
      "";
    const email = profile?.email || "";
    const phone = profile?.mobileNumber || profile?.phone || "";
    const address =
      profile?.address ||
      profile?.customerDetails?.streetAddress ||
      "";

    setEditForm({ name, email, phone, address });
    setEditing(true);
  };

  const validateEditForm = () => {
    if (!editForm.name.trim()) return "Name is required";
    if (!editForm.email.trim()) return "Email is required";
    // optionally: Email regex check
    // optionally: Phone length check
    return "";
  };

  async function saveProfile() {
    if (!userId) return;
    const err = validateEditForm();
    if (err) return alert(err);

    setSavingProfile(true);
    try {
      // Payload your backend expects
      const payload = {
        userId,
        name: editForm.name.trim(),
        email: editForm.email.trim(),
        mobileNumber: editForm.phone.trim(),
        address: editForm.address.trim(),
      };

      // POST update
      const res = await ApiPut(`/auth/user/${userId}`, payload);
      console.log('res', res)
      const ok = res?.user?.user || res?.status === 200;

      if (ok) {
        const updated = res?.data ?? {
          ...profile,
          name: payload.name,
          email: payload.email,
          mobileNumber: payload.mobileNumber,
          address: payload.address,
        };

        setProfile(updated);
        try {
          localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(updated));
        } catch {}

        setEditing(false);
      } else {
        alert(res?.message || "Failed to update profile");
      }
    } catch (err) {
      console.error("Profile update error", err);
      alert("Something went wrong while updating your profile");
    } finally {
      setSavingProfile(false);
    }
  }

  // ---------- Helpers ----------
  const safeProfile = useMemo(
    () => profile || { name: "", email: "", mobileNumber: "", address: "" },
    [profile]
  );
  
    const userProfile = {
    name:
      safeProfile.name ||
      [safeProfile.firstName, safeProfile.lastName].filter(Boolean).join(" "),
    email: safeProfile.email || "",
    phone: safeProfile.mobileNumber || safeProfile.phone || "",
    address:
      safeProfile.address || safeProfile?.customerDetails?.streetAddress || "",
  };

  const niceDate = (d) =>
    d
      ? new Date(d).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  const getStatusColor = (status = "") => {
    const s = String(status).toLowerCase();

    if (["delivered", "paid", "success", "completed"].includes(s)) {
      return "text-green-600 bg-green-50 border-[1.2px] border-green-400";
    }
    if (
      [
        "in transit",
        "shipped",
        "shipping",
        "dispatched",
        "out for delivery",
        "processing",
      ].includes(s)
    ) {
      return "text-blue-600 bg-blue-50 border-[1.2px] border-blue-400";
    }
    if (["pending", "unpaid"].includes(s)) {
      return "text-orange-600 bg-orange-50 border-[1.2px] border-orange-400";
    }
    if (["cancelled", "canceled", "failed", "refunded"].includes(s)) {
      return "text-red-600 bg-red-50 border-[1.2px] border-red-400";
    }
    return "text-gray-600 bg-gray-50 border-[1.2px] border-gray-300";
  };

         
  return (
    <>
      <Header />
      <div className="font-Poppins min-h-screen bg-[#f0f0f0] pt-[100px] w-full">
        <div className="w-[93%] mx-auto px-4 flex gap-6 justify-between py-8">
          <div className="bg-white rounded-2xl shadow-xl md:w-[72%] overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8 pt-6">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center space-x-2 pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === id
                        ? "border-[#025da8] text-[#025da8]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="px-6 overflow-y-auto max-h-[72vh] pb-8 pt-4">
              {/* PROFILE TAB */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-[600] text-gray-900">
                      Profile Information
                    </h2>
                    <div className="flex items-center gap-3">
                      {!editing ? (
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a]"
                          onClick={startEditing}
                          disabled={profileLoading}
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Edit Profile</span>
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            className="px-4 py-2 rounded-md border text-gray-700 bg-white hover:bg-gray-50"
                            onClick={() => setEditing(false)}
                            disabled={savingProfile}
                          >
                            Cancel
                          </button>
                          <button
                            className="px-4 py-2 rounded-md text-white bg-[#025da8] hover:bg-[#024a8a] disabled:opacity-60"
                            onClick={saveProfile}
                            disabled={savingProfile}
                          >
                            {savingProfile ? "Saving..." : "Save"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {profileLoading && (
                    <div className="p-4 rounded-md bg-blue-50 text-blue-700">
                      Loading profile…
                    </div>
                  )}
                  {profileError && (
                    <div className="p-4 rounded-md bg-orange-50 text-orange-700">
                      {profileError}
                    </div>
                  )}

                  {!editing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Personal Details
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-[#025da8]" />
                            <div>
                              <p className="text-sm text-gray-500">Full Name</p>
                              <p className="font-medium text-gray-900">
                                {safeProfile.name ||
                                  [safeProfile.firstName, safeProfile.lastName]
                                    .filter(Boolean)
                                    .join(" ") ||
                                  "—"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#025da8]" />
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium text-gray-900">
                                {safeProfile.email || "—"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#025da8]" />
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="font-medium text-gray-900">
                                {safeProfile.mobileNumber ||
                                  safeProfile.phone ||
                                  "—"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Address
                        </h3>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#025da8] mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Primary Address
                            </p>
                            <p className="font-medium text-gray-900 whitespace-pre-line">
                              {safeProfile.address ||
                                safeProfile?.customerDetails?.streetAddress ||
                                "—"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Full Name</span>
                        <input
                          className="border rounded-md px-3 py-2"
                          value={editForm.name}
                          onChange={(e) =>
                            setEditForm((f) => ({ ...f, name: e.target.value }))
                          }
                          disabled={savingProfile}
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Email</span>
                        <input
                          className="border rounded-md px-3 py-2"
                          value={editForm.email}
                          onChange={(e) =>
                            setEditForm((f) => ({
                              ...f,
                              email: e.target.value,
                            }))
                          }
                          disabled={savingProfile}
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Phone</span>
                        <input
                          className="border rounded-md px-3 py-2"
                          value={editForm.phone}
                          onChange={(e) =>
                            setEditForm((f) => ({
                              ...f,
                              phone: e.target.value,
                            }))
                          }
                          disabled={savingProfile}
                        />
                      </label>
                      <label className="flex flex-col gap-1 md:col-span-2">
                        <span className="text-sm text-gray-600">Address</span>
                        <textarea
                          rows={3}
                          className="border rounded-md px-3 py-2"
                          value={editForm.address}
                          onChange={(e) =>
                            setEditForm((f) => ({
                              ...f,
                              address: e.target.value,
                            }))
                          }
                          disabled={savingProfile}
                        />
                      </label>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      className="flex items-center gap-2 px-4 py-2 border text-red-600 border-red-300 rounded-lg hover:bg-red-50"
                      onClick={() => {
                        try {
                          localStorage.removeItem(LOCAL_USER_ID_KEY);
                        } catch {}
                        try {
                          localStorage.removeItem(LOCAL_PROFILE_KEY);
                        } catch {}
                        window.location.reload();
                      }}
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </div>
              )}

              {/* ORDERS TAB */}
              {activeTab === "orders" && (
                <>
                  <div className="flex gap-[40px] w-[100%]">
                    <div className="space-y-1 ">
                      <div className="flex items-center justify-between"></div>

                      {ordersLoading && (
                        <div className="p-6 text-gray-500">Loading orders…</div>
                      )}
                      {ordersError && (
                        <div className="p-6 text-red-600">{ordersError}</div>
                      )}

                      {!ordersLoading && !ordersError && (
                        <>
                          <div className="grid grid-cols-2 gap-[30px] ">
                            {orders.map((order) => {
                              const first = order?.orderItems?.[0] || {};
                              const product = first?.productId || {};
                              const fanName =
                                product?.title || "Rotex BLDC Ceiling Fan";
                              const details =
                                product?.subTitle ||
                                (Array.isArray(product?.description)
                                  ? product.description.join(", ")
                                  : "");
                              const qty = first?.quantity || 1;
                              const color = first?.selectedColor || "—";
                              const cover = first?.selectedColorImage || "";
                              const paymentStatus =
                                order?.paymentStatus || "Pending";
                              const deliveryStatus =
                                order?.orderStatus || "Pending";
                              const orderDate = order?.createdAt;
                              const totalPrice =
                                Number(order?.totalPrice || order?.finalAmount || 0) || 0;

                              return (
                                <div
                                  key={order._id}
                                  className="bg-white rounded-2xl min-h-[440px] w-[420px] border-[1px] border-gray-100 border-[#025da8]/30 transition-all duration-300 overflow-hidden group shadow-md"
                                >
                                  {/* Order Header */}
                                  <div className="bg-gradient-to-r from-[#025da8] to-[#086597cc] px-4 py-[7px]">
                                    <div className="flex items-center justify-between text-white">
                                      <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 backdrop-blur-sm px-3 h-[23px]  flex  justify-center items-center rounded-full">
                                          <span className=" text-[10px] font-[500]">
                                            #{String(order._id).slice(-8)}
                                          </span>
                                        </div>
                                        <div>
                                          <p className="text-[10px] opacity-90">
                                            Order Date
                                          </p>
                                          <p className="font-semibold text-[13px]">
                                            {niceDate(orderDate)}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="text-right flex justify-end items-center gap-[10px]">
                                        <p className="text-xl font-[600]">
                                          ₹{totalPrice.toLocaleString("en-IN")}
                                        </p>
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
                                            src={cover}
                                            alt={fanName}
                                            className="w-[120px] h-[120px] object-cover rounded-xl border-[1px] shadow-md border-gray-300"
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="font-[600] text-[16px] text-gray-900 mb-1">
                                            {fanName}
                                          </h3>
                                          {details && (
                                            <p className="text-gray-600 text-[13px] mb-1">
                                              {details}
                                            </p>
                                          )}
                                          <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-2">
                                              <div
                                                className="w-8 h-8 rounded-full border-[1px] border-gray-500"
                                                style={{ backgroundColor: color }}
                                                title={color}
                                              />
                                              <span className="text-sm font-medium text-gray-700">
                                                {color}
                                              </span>
                                            </div>
                                            <span className="text-sm text-gray-500">•</span>
                                            <span className="text-sm text-gray-500">
                                              <b className="text-gray-700 font-[500]">
                                                Quantity:
                                              </b>{" "}
                                              {qty}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Status Section */}
                                      <div className="flex flex-col w-[100%] space-y-3">
                                        <div className=" flex  gap-10">
                                          <div className="">
                                            <p className="text-xs text-gray-500 mb-2">
                                              Payment Status
                                            </p>
                                            <span
                                              className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(
                                                paymentStatus
                                              )}`}
                                            >
                                              {paymentStatus}
                                            </span>
                                          </div>
                                          <div className="">
                                            <p className="text-xs text-gray-500 mb-2">
                                              Delivery Status
                                            </p>
                                            <span
                                              className={`inline-flex px-4 py-[1px] rounded-full text-[14px] font-[500] ${getStatusColor(
                                                deliveryStatus
                                              )}`}
                                            >
                                              {deliveryStatus}
                                            </span>
                                          </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="space-y-2">
                                          <div className="flex justify-between text-xs text-gray-500">
                                            <span>Order Progress</span>
                                            <span className=" font-[600] text-[#000]">
                                              {deliveryStatus.toLowerCase() === "delivered"
                                                ? "100%"
                                                : deliveryStatus
                                                    .toLowerCase()
                                                    .includes("in transit")
                                                ? "75%"
                                                : deliveryStatus
                                                    .toLowerCase()
                                                    .includes("processing")
                                                ? "25%"
                                                : "0%"}
                                            </span>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                              className="bg-gradient-to-r from-[#025da8] to-[#0369a1] h-2 rounded-full transition-all duration-500"
                                              style={{
                                                width:
                                                  deliveryStatus.toLowerCase() === "delivered"
                                                    ? "100%"
                                                    : deliveryStatus
                                                        .toLowerCase()
                                                        .includes("in transit")
                                                    ? "75%"
                                                    : deliveryStatus
                                                        .toLowerCase()
                                                        .includes("processing")
                                                    ? "25%"
                                                    : "0%",
                                              }}
                                            ></div>
                                          </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3">
                                          <button
                                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#025da8] to-[#0369a1] text-white rounded-[8px] hover:from-[#024a8a] hover:to-[#0f5f8e] transition-all duration-200 transform hover:scale-105 shadow-lg group"
                                            onClick={() => alert("Hook this to your invoice endpoint.")}
                                          >
                                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                                            <span className="font-medium">Invoice</span>
                                          </button>
                                          <button
                                            className="px-3 py-2 border-[1.6px] border-[#025da8] text-[#025da8] rounded-[8px] hover:bg-[#025da8] hover:text-white transition-all duration-200 transform hover:scale-105"
                                            onClick={() =>
                                              navigate(`/order/${order._id}`, { state: { order } })
                                            }
                                          >
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
                                            className={`w-3 h-3 rounded-full ${
                                              deliveryStatus.toLowerCase() === "processing"
                                                ? "bg-orange-500"
                                                : deliveryStatus.toLowerCase() === "delivered"
                                                ? "bg-green-500"
                                                : "bg-blue-500"
                                            }`}
                                          ></div>
                                          <span className="text-gray-600">
                                            {deliveryStatus.toLowerCase() === "delivered"
                                              ? "Delivered successfully"
                                              : deliveryStatus
                                                  .toLowerCase()
                                                  .includes("in transit")
                                              ? "Package is on the way"
                                              : deliveryStatus
                                                  .toLowerCase()
                                                  .includes("processing")
                                              ? "Order is being processed"
                                              : "Order placed"}
                                          </span>
                                        </div>
                                        <span className="text-gray-500">
                                          {deliveryStatus.toLowerCase() === "delivered"
                                            ? "Completed"
                                            : deliveryStatus.toLowerCase().includes("in transit")
                                            ? "Expected in 2-3 days"
                                            : deliveryStatus.toLowerCase().includes("processing")
                                            ? "Processing"
                                            : "Pending"}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Empty State */}
                          {orders.length === 0 && (
                            <div className="text-center py-16">
                              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No orders yet
                              </h3>
                              <p className="text-gray-600 mb-6">
                                When you place orders, they&apos;ll appear here
                              </p>
                              <Link
                                to="/"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#025da8] text-white rounded-lg hover:bg-[#024a8a] transition-colors duration-200"
                              >
                                <span>Start Shopping</span>
                              </Link>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* WISHLIST TAB (stub) */}
              {activeTab === "wishlist" && (
                <div className="text-center py-16 text-gray-600">
                  Wishlist coming soon…
                </div>
              )}
              

                              {/* Register Warranty Tab */}
            {activeTab === "warranty" && <RegisterWarranty />}

            {/* Quick Fix Tab */}
            {activeTab === "quickfix" && <QuickFix />}

            {/* New Complaint Tab */}
            {activeTab === "complaint" && <NewComplaint />}
            </div>
          </div>

          <aside className="w-[330px] bg-white border min-h-[300px] rounded-[15px] p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Account</h3>
              <span className="text-xs text-gray-500">User ID</span>
            </div>
            <div className="p-3 rounded-md bg-gray-50 border text-xs break-all">
              {userId}
            </div>

            <div className="mt-4 space-y-2">
              <button
                className="w-full px-4 py-2 rounded-md border bg-white hover:bg-gray-50"
                onClick={() => fetchProfile(userId)}
                disabled={profileLoading}
              >
                {profileLoading ? "Refreshing Profile…" : "Refresh Profile"}
              </button>
              <button
                className="w-full px-4 py-2 rounded-md border bg-white hover:bg-gray-50"
                onClick={() => fetchOrders(userId)}
                disabled={ordersLoading}
              >
                {ordersLoading ? "Refreshing Orders…" : "Refresh Orders"}
              </button>
            </div>
          </aside>
        </div>
      </div>
      
    </>
  );
}
