"use client"

import React, { useEffect } from "react"
import { useState } from "react"
import { ArrowLeft, Tag, CreditCard, Truck, Shield, Check, X, Star, Lock, Award, Clock } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import FloatingInput from "../../component/otherFolder/FloatingInput"
import FloatingTextarea from "../../component/otherFolder/FloatingTextarea.jsx"
import Header from "../../component/Header.jsx"
// import main from "../../../public/images/productDetails/main.jpg"
import logoRotex from "../../../public/images/Logo/image.png";



export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        apartment: "",
        pinCode: "",
        city: "",
        state: "",
    });

    const userId = localStorage.getItem("auth_user_id");


    const [errors, setErrors] = useState({});
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const location = useLocation();
    const shipping = 100;

    const lineItemFromState = location.state?.lineItem || null;
    const couponFromState = location.state?.coupon || null;

    console.log('lineItemFromState', lineItemFromState)

    const [orderItems, setOrderItems] = useState(
        lineItemFromState
            ? [
                {
                    id: lineItemFromState.productId || 1,
                    title: lineItemFromState.title,
                    description: lineItemFromState.description,
                    colorName: lineItemFromState.colorName,
                    quantity: lineItemFromState.quantity,
                    mrp: lineItemFromState.mrp,
                    price: lineItemFromState.price,
                         discount:
                      Math.round(
                          ((lineItemFromState.mrp - lineItemFromState.price) /
                              lineItemFromState.mrp) *
                              100
                      ) || 0,
                    image: lineItemFromState.image,
                },
            ]
            : []
    );

    useEffect(() => {
        if (couponFromState) {
            setAppliedCoupon(couponFromState);
        }
    }, [couponFromState]);


    const availableCoupons = [
        {
            code: "SAVE200",
            discount: 200,
            type: "flat",
            minOrder: 2000,
            title: "Flat ₹200 Off",
            description: "On orders above ₹2000",
            color: "from-blue-500 to-blue-600",
        },
        {
            code: "WELCOME15",
            discount: 15,
            type: "percentage",
            minOrder: 1000,
            title: "15% Off",
            description: "Welcome offer for new users",
            color: "from-green-500 to-green-600",
        },
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Phone number must be 10 digits";
        // if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.pinCode.trim()) newErrors.pinCode = "PIN code is required";
        else if (!/^\d{6}$/.test(formData.pinCode)) newErrors.pinCode = "PIN code must be 6 digits";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state.trim()) newErrors.state = "State is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const applyCoupon = () => {
        const coupon = availableCoupons.find((c) => c.code === couponCode.toUpperCase());
        if (!coupon) return setCouponError("Invalid coupon code");
        if (calculateSubtotal() < coupon.minOrder) return setCouponError(`Minimum order value ₹${coupon.minOrder} required`);
        setAppliedCoupon(coupon);
        setCouponError("");
    };

    const calculateSubtotal = () => orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const calculateDiscount = () => {
        if (!appliedCoupon) return 0;
        const subtotal = calculateSubtotal();
        return appliedCoupon.type === "flat" ? appliedCoupon.discount : Math.round((subtotal * appliedCoupon.discount) / 100);
    };
    const calculateTotal = () => calculateSubtotal() + shipping - calculateDiscount();

    
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const total = calculateTotal();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;

    //     setIsProcessing(true);
    //     const gst = 0;
    //     const finalAmount = (calculateTotal() + parseFloat(gst)).toFixed(2);

    //     const payload = {
    //         userId,
    //         customerDetails: {
    //             firstName: formData.firstName,
    //             lastName: formData.lastName,
    //             country: formData.country,
    //             streetAddress: formData.address,
    //             state: formData.state,
    //             pinCode: formData.pinCode,
    //             phone: formData.phone,
    //             email: formData.email,
    //         },
    //         orderItems: orderItems.map((item) => ({
    //             productId: item.productId,
    //             quantity: item.quantity,
    //             price: item.price,
    //             selectedColor: item.color,
    //             selectedColorImage: item.image,
    //         })),
    //         totalPrice: calculateSubtotal(),
    //         gst,
    //         finalAmount,
    //         paymentMethod:
    //             paymentMethod === "card" ? "credit_card" : paymentMethod === "cod" ? "COD" : "razorpay",
    //     };

    //     try {
    //         const res = await fetch("http://localhost:5000/api/order/create", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(payload),
    //         });

    //         const data = await res.json();

    //         if (data.success) {
    //             alert("Order placed successfully!");
    //         } else {
    //             alert("Failed to place order");
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occurred.");
    //     } finally {
    //         setIsProcessing(false);
    //     }
    // };


    const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const handleRazorpayPayment = async () => {
  const isValid = validateForm();
  if (!isValid) return;

  setIsProcessing(true);
  try {
    const amount = calculateTotal();

    // 1) Create Razorpay order (SERVER)
    const orderRes = await fetch("http://localhost:3000/api/v2/rotex/create-razorpay-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const { order } = await orderRes.json();
    console.log('order', order)

    if (!order?.id) {
      alert("Failed to create Razorpay order");
      setIsProcessing(false);
      return;
    } else {
        setIsProcessing(false);
    }

    // 2) Load Razorpay SDK
    const sdkOk = await loadRazorpayScript();
    if (!sdkOk) {
      alert("Razorpay SDK failed to load");
      setIsProcessing(false);
      return;
    }

    // 3) Open Razorpay Checkout
    const options = {
      key: "rzp_live_qsoDiKx5JVucN2",
      amount: order.amount,
      currency: "INR",
      name: "Rotex Fans",
      description: "Secure Payment for Rotex BLDC Ceiling Fans",
      image: logoRotex,
      order_id: order.id,

      // ✅ SUCCESS HANDLER — ONLY HERE WE CREATE THE ORDER
      handler: async function (response) {
        // Show ALL fields Razorpay returned (success)
        // response has: razorpay_order_id, razorpay_payment_id, razorpay_signature (and sometimes more)
        console.log("Razorpay SUCCESS response:", response);
        console.table(response);
        alert(
          "Payment Success Details:\n" +
          JSON.stringify(response, null, 2)
        );
        setPaymentInfo({ status: "success", data: response });

        // Prepare payload for your server (create/verify order AFTER success)
        const payload = {
          userId,
          customerDetails: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            country: formData.country,
            streetAddress: formData.address,
            state: formData.state,
            pinCode: formData.pinCode,
            phone: formData.phone,
            email: formData.email,
          },
          orderItems: orderItems.map((item) => ({
            productId: item.id,                // ensure you pass the actual productId from DB
            quantity: item.quantity,
            price: item.price,
            selectedColor: item.colorName,
            selectedColorImage: item.image,
          })),
          totalPrice: calculateSubtotal(),
          gst: 0,
          finalAmount: (calculateTotal() * 1.18).toFixed(2),
          paymentMethod: "razorpay",

          // Razorpay proofs to verify on backend
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        // ✅ Create + verify order on your server now
        try {
          const verifyRes = await fetch("http://localhost:3000/api/v2/rotex/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const result = await verifyRes.json();

          if (verifyRes.ok && result.success) {
            alert("Order placed successfully!");
            // TODO: navigate to success/thankyou page
          } else {
            alert(result.message || "Failed to verify payment");
          }
        } catch (err) {
          console.error("Create/Verify order error:", err);
          alert("Something went wrong while creating your order.");
        } finally {
          setIsProcessing(false);
        }
      },

      // Prefill
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },

      theme: { color: "#025da8" },
    };

    const rzp = new window.Razorpay(options);

    // ❌ FAILURE HANDLER — DO NOT CREATE ORDER
    rzp.on("payment.failed", (response) => {
      // response.error carries many fields: code, description, source, step, reason, metadata, etc.
      console.log("Razorpay FAILURE response:", response);
      console.table(response?.error || {});
      alert(
        "Payment Failed Details:\n" +
        JSON.stringify(response, null, 2)
      );
      setPaymentInfo({ status: "failed", data: response });
      setIsProcessing(false);
    });

    rzp.open();
  } catch (e) {
    console.error(e);
    alert("Unexpected error. Please try again.");
    setIsProcessing(false);
  }
};


const createOrder = async () => {
  if (!validateForm()) return;

  setIsProcessing(true);
  try {
    // numbers you already compute
    const subtotal = calculateSubtotal();              // items total
    const discount = calculateDiscount();              // from appliedCoupon (if any)
    const shippingCharge = 100;                        // your fixed shipping
    const total = subtotal + shippingCharge - discount;

    const payload = {
      userId,
      customerDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        streetAddress: formData.address,
        state: formData.state,
        pinCode: formData.pinCode,
        phone: formData.phone,
        email: formData.email,
      },
      orderItems: orderItems.map((item) => ({
        productId: item.id,                 // ensure this is your DB ID
        quantity: item.quantity,
        price: item.price,                  // use item.price (you used price in your UI)
        selectedColor: item.colorName,
        selectedColorImage: item.image,
      })),
      totalPrice: subtotal,
      discountAmount: discount || 0,
      shippingCharge,
      gst: 0,                               // you have GST = 0 right now
      finalAmount: total,
      paymentMethod: "razorpay",                 // or "manual" / "offline" as you prefer
    };

    console.log('payload', payload)

    const res = await fetch("http://localhost:3000/api/v2/rotex/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });


    const data = await res.json();
    console.log('data', data)
    if ( data?._id) {
      alert("Order placed successfully!");
      // e.g. navigate("/thank-you", { state: { order: data.order } });
    } else {
      alert(data.message || "Failed to place order");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong placing the order.");
  } finally {
    setIsProcessing(false);
  }
};



    return (
        <>
            <Header />

            <div className="min-h-screen  pt-[80px] font-Poppins bg-[#f0f0f0]">




                {/* Main Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


                    <div className="flex  w-[100%] gap-5">
                        {/* Billing Form - Takes 3 columns */}
                        <div className=" w-[60%]">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-7 hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center mb-6">

                                    <div>
                                        <h2 className="text-2xl font-[600] text-slate-900">Billing Information</h2>
                                        <p className="text-slate-600">Enter your details for secure checkout</p>
                                    </div>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FloatingInput
                                            label="First Name"
                                            iconClass="fa-regular fa-user"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(v) => handleInputChange("firstName", v)}

                                        />
                                        <FloatingInput

                                            label="Last Name"
                                            iconClass="fa-regular fa-user"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(v) => handleInputChange("lastName", v)}

                                        />
                                    </div>

                                    {/* Contact Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FloatingInput
                                            label="Email Address"
                                            iconClass="fa-regular fa-envelopes"
                                            type="text"

                                            value={formData.email}
                                            onChange={(v) => handleInputChange("email", v)}
                                        />

                                        <FloatingInput
                                            label="Number"
                                            iconClass="fa-regular fa-phone-volume"
                                            type="number"
                                            inputMode="numeric"
                                            maxLength={10}
                                            value={formData.phone}
                                            onChange={(v) => handleInputChange("phone", v)}
                                        />
                                    </div>



                                    <FloatingTextarea
                                        label="Address"
                                        iconClass="fa-regular fa-comment"
                                        value={formData.address}
                                        onChange={(v) => handleInputChange("address", v)}
                                        maxLength={500}
                                        rows={5}
                                    />



                                    <FloatingInput
                                        label="Apartment, suite, unit, etc. (optional)"
                                        iconClass="fa-regular fa-building"
                                        value={formData.apartment}
                                        onChange={(v) => handleInputChange("apartment", v)}
                                    />


                                    <div className="grid grid-cols-1 md:grid-cols-3 pt-[5px] gap-6">
                                        {/* PIN Code */}
                                        <div className="group">
                                            <FloatingInput
                                                label="PIN Code *"
                                                iconClass="fa-solid fa-map-pin"
                                                type="number"
                                                inputMode="numeric"
                                                maxLength={6}
                                                value={formData.pinCode}
                                                onChange={(v) => handleInputChange("pinCode", v)}
                                                error={errors.pinCode || ""}
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="group">
                                            <FloatingInput
                                                label="City *"
                                                iconClass="fa-solid fa-city"
                                                value={formData.city}
                                                onChange={(v) => handleInputChange("city", v)}
                                                error={errors.city || ""}
                                            />
                                        </div>

                                        {/* State */}
                                        <div className="group">
                                            <FloatingInput
                                                label="State *"
                                                iconClass="fa-solid fa-flag"
                                                value={formData.state}
                                                onChange={(v) => handleInputChange("state", v)}
                                                error={errors.state || ""}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-blue-100">
                                        <div className="flex items-center mb-5">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                                                style={{ background: "linear-gradient(135deg, #025da8, #0369a1)" }}
                                            >
                                                <CreditCard className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-xl font-[600] text-slate-900">Payment Method</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {/* <label className="flex items-center p-3 border-[1.6px] border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="card"
                                                    checked={paymentMethod === "card"}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="w-5 h-5 "
                                                    style={{ color: "#025da8", accentColor: "#025da8" }}
                                                />
                                                <CreditCard className="w-6 h-6 ml-4 mr-3 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                                                <span className="text-[14px] font-[600] text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                                                    Credit/Debit Card
                                                </span>
                                            </label> */}
                                            <label className="flex items-center p-3 border-[1.6px] border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="upi"
                                                    checked={paymentMethod === "upi"}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="w-5 h-5 "
                                                    style={{ color: "#025da8", accentColor: "#025da8" }}
                                                />
                                                <div className="w-6 h-6 ml-4 mr-3 bg-gradient-to-br from-slate-600 to-slate-800 rounded text-white text-sm flex items-center justify-center font-[600] group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                                                    U
                                                </div>
                                                <span className="text-[14px] font-[600] text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                                                    UPI Payment
                                                </span>
                                            </label>
                                            {/* <label className="flex items-center p-3 border-[1.6px] border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="cod"
                                                    checked={paymentMethod === "cod"}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="w-5 h-5 "
                                                    style={{ color: "#025da8", accentColor: "#025da8" }}
                                                />
                                                <Truck className="w-6 h-6 ml-4 mr-3 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                                                <span className="text-[14px] font-[600] text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                                                    Cash on Delivery
                                                </span>
                                            </label> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Order Summary - Takes 2 columns */}
                        <div className=" w-[48%]">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-5 sticky top-8 hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                                        style={{ background: "linear-gradient(135deg, #025da8, #0369a1)" }}
                                    >
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-[600] text-slate-900">Order Summary</h2>
                                        <p className="text-slate-600">Review your purchase</p>
                                    </div>
                                </div>

                                <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100">
                                    <div className="flex items-center mb-3">
                                        <Tag className="w-6 h-6 mr-3" style={{ color: "#025da8" }} />
                                        <span className="font-[600] text-slate-900">Available Coupons</span>
                                    </div>

                                    {appliedCoupon ? (
                                        <div className="flex items-center justify-between p-2 bg-gradient-to-r from-green-50 to-emerald-50 border-[1.4px] border-green-200 rounded-xl">
                                            <div className="flex items-center">
                                                <Check className="w-6 h-6 text-green-600 mr-3" />
                                                <div>
                                                    <p className="font-[600] text-green-800">{appliedCoupon.code}</p>
                                                    <p className="text-[12px] text-green-600 font-medium">
                                                        {appliedCoupon.type === "flat"
                                                            ? `₹${appliedCoupon.discount} off`
                                                            : `${appliedCoupon.discount}% off`}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={removeCoupon}
                                                className="text-green-600 hover:text-green-800 hover:bg-green-100 p-2 rounded-lg transition-all duration-300"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {availableCoupons.map((coupon) => (
                                                    <div
                                                        key={coupon.code}
                                                        onClick={() => {
                                                            const subtotal = calculateSubtotal()
                                                            if (subtotal >= coupon.minOrder) {
                                                                setAppliedCoupon(coupon)
                                                                setCouponError("")
                                                            } else {
                                                                setCouponError(`Minimum order value ₹${coupon.minOrder} required for ${coupon.code}`)
                                                            }
                                                        }}
                                                        className={`relative p-3 rounded-lg border-[1.3px] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${calculateSubtotal() >= coupon.minOrder
                                                            ? "border-blue-200 hover:border-blue-400 bg-gradient-to-br from-white to-blue-50"
                                                            : "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-[600] bg-gradient-to-r ${coupon.color}`}
                                                        >
                                                            <Tag className="w-4 h-4" />
                                                        </div>
                                                        <div className="pr-10">
                                                            <div className="font-[600] text-[14px] text-slate-900 ">{coupon.title}</div>
                                                            <div className="text-[10px] text-slate-600 mb-2">{coupon.description}</div>
                                                            <div className="text-xs font-mono border bg-gray-100 px-2 py-1 rounded text-gray-700 inline-block">
                                                                {coupon.code}
                                                            </div>
                                                            {calculateSubtotal() < coupon.minOrder && (
                                                                <div className="text-xs text-red-500 mt-1">Min. order: ₹{coupon.minOrder}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {couponError && (
                                                <p className="text-sm text-red-600 font-medium bg-red-50 p-2 rounded-lg">{couponError}</p>
                                            )}

                                            {/* Manual coupon input */}
                                            <div className="pt-2 border-t border-blue-100">
                                                <p className="text-sm text-slate-600 mb-3 font-medium">Have a different coupon code?</p>
                                                <div className="flex gap-3">
                                                    <input
                                                        type="text"
                                                        value={couponCode}
                                                        onChange={(e) => setCouponCode(e.target.value)}
                                                        placeholder="Enter coupon code"
                                                        className="flex-1 px-4 py-2 text-[13px] border-[1.3px] border-blue-200 rounded-lg focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/50"
                                                        style={{ focusBorderColor: "#025da8" }}
                                                    />
                                                    <button
                                                        onClick={applyCoupon}
                                                        disabled={!couponCode.trim()}
                                                        className="px-6 py-1 text-white font-[500] text-[15px] rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                                                        style={{
                                                            background: !couponCode.trim() ? "#9ca3af" : "linear-gradient(135deg, #025da8, #0369a1)",
                                                            ...(couponCode.trim() && { boxShadow: "0 4px 15px rgba(2, 93, 168, 0.3)" }),
                                                        }}
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Order Items */}
                                <div className="space-y-6 mb-5">
                                    {orderItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className=" items-start  p-4 border-[1.3px] border-blue-100 rounded-xl bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex gap-[20px] ">


                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.title}
                                                    className="w-20 h-20 border object-cover rounded-xl shadow-md"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-[600] text-slate-900 mb-1">{item.title}</h3>
                                                    <p className="text-[13px] text-slate-600 mb-1">{item.description}</p>

                                                </div>
                                            </div>
                                            <div className=" flex mt-[5px] flex-col ">
                                                <div className="flex  space-x-4 text-sm text-slate-600">
                                                    <span className="bg-white   py-1 rounded-lg font-medium">Color: {item.colorName}</span>
                                                    {/* <span className="bg-white px-2 py-1 rounded-lg font-medium">Size: {item.size}</span> */}
                                                    <span className="bg-white px-2 py-1 rounded-lg font-medium">Qty: {item.quantity}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-xl font-[600] text-slate-900">₹{item.price?.toLocaleString()}</span>
                                                    <span className="text-sm text-slate-500 line-through">
                                                        ₹{item.mrp?.toLocaleString()}
                                                    </span>
                                                    <span className="text-[13px] text-green-600 font-[600] bg-green-100 px-2 py-1 rounded-lg">
                                                        {item.discount}% off
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y- py-4 border-t-[1.3px] border-blue-100">
                                    <div className="flex justify-between text-slate-600 text-lg">
                                        <span className="font-[500] text-[14px]">Subtotal</span>
                                        <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between mb-[6px] text-slate-600 text-lg">
                                        <span className=" font-[500] text-[14px]">Shipping</span>
                                        <span className="font-semibold">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-600 text-lg">
                                            <span>Discount</span>
                                            <span className="font-[600]">-₹{discount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-2xl font-[600] text-slate-900 pt-2 border-t-2 border-blue-100">
                                        <span className=" text-[14px]">Total</span>
                                        <span style={{ color: "#025da8" }}>₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={createOrder}
                                    disabled={isProcessing}
                                    className="w-full  px-5 py-2 text-white font-[600] text-md rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                                    style={{
                                        background: isProcessing ? "#6b7280" : "linear-gradient(135deg, #025da8, #0369a1)",
                                        ...(isProcessing ? {} : { boxShadow: "0 10px 25px rgba(2, 93, 168, 0.3)" }),
                                    }}
                                >
                                    {isProcessing ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                            Processing...
                                        </div>
                                    ) : (
                                        `Complete Your Order - ₹${total.toLocaleString()}`
                                    )}
                                </button>

                                {/* Trust Indicators */}
                                {/* <div className="mt-8 pt-6 border-t-2 border-blue-100">
                                    <div className="text-center mb-4">
                                        <p className="text-sm font-semibold text-slate-700">
                                            100% Secure Checkout | Fast Delivery | 30-Day Return Policy
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 text-center">
                                        <div className="flex flex-col items-center group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-2 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                                                <Shield className="w-6 h-6 text-green-600" />
                                            </div>
                                            <span className="text-xs text-slate-600 font-medium">Secure Payment</span>
                                        </div>
                                        <div className="flex flex-col items-center group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-2 group-hover:from-blue-200 group-hover:to-sky-200 transition-all duration-300">
                                                <Truck className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <span className="text-xs text-slate-600 font-medium">Free Shipping</span>
                                        </div>
                                        <div className="flex flex-col items-center group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-2 group-hover:from-purple-200 group-hover:to-violet-200 transition-all duration-300">
                                                <Award className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <span className="text-xs text-slate-600 font-medium">Quality Assured</span>
                                        </div>
                                        <div className="flex flex-col items-center group">
                                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-2 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300">
                                                <Clock className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <span className="text-xs text-slate-600 font-medium">24/7 Support</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
