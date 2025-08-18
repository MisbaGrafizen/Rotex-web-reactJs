// CartDrawer.jsx
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Tag, CreditCard, Truck, Shield, Check, X, Star, Lock, Award, Clock } from "lucide-react"

const fmtINR = (n) => Number(n || 0).toLocaleString("en-IN");

export default function CartDrawer({
  open,
  onClose,
  lineItem,          // { id, title, price, image, colorName, colorHex, quantity }
  onQtyChange,       // (qty) => void
  onProceed,         // () => void
}) {
  const [qty, setQty] = useState(lineItem?.quantity || 1);
  const [errors, setErrors] = useState({})
    const [couponCode, setCouponCode] = useState("")

    const [couponError, setCouponError] = useState("")
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    setQty(lineItem?.quantity || 1);
  }, [lineItem]);

  const subtotal = useMemo(() => (lineItem?.price || 0) * qty, [lineItem, qty]);

  const dec = () => {
    const next = Math.max(1, qty - 1);
    setQty(next);
    onQtyChange?.(next);
  };
  const inc = () => {
    const next = qty + 1;
    setQty(next);
    onQtyChange?.(next);
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

      const [appliedCoupon, setAppliedCoupon] = useState(null)


          const availableCoupons = [
        {
            code: "SAVE200",
            discount: 200,
            type: "flat",
            minOrder: 2000,
            title: "Flat ₹200 Off",
            description: "On orders offer for above ₹2000",
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
        },]


            const applyCoupon = () => {
        setCouponError("")
        const coupon = availableCoupons.find((c) => c.code === couponCode.toUpperCase())

        if (!coupon) {
            setCouponError("Invalid coupon code")
            return
        }

        const subtotal = calculateSubtotal()
        if (subtotal < coupon.minOrder) {
            setCouponError(`Minimum order value ₹${coupon.minOrder} required`)
            return
        }

        setAppliedCoupon(coupon)
        setCouponCode("")
    }

    const removeCoupon = () => {
        setAppliedCoupon(null)
        setCouponError("")
    }

    const calculateSubtotal = () => {
       
    }

    const calculateDiscount = () => {
        if (!appliedCoupon) return 0
        const subtotal = calculateSubtotal()
        return appliedCoupon.type === "flat"
            ? appliedCoupon.discount
            : Math.round((subtotal * appliedCoupon.discount) / 100)
    }

    const calculateTotal = () => {
        const subtotal = calculateSubtotal()
        const shipping = subtotal > 2000 ? 0 : 100
        const discount = calculateDiscount()
        return subtotal + shipping - discount
    }
  return (
    <div
      className={`fixed inset-0 font-Poppins z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      onClick={handleBackdrop}
      aria-hidden={!open}
    >
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl
        transition-transform duration-200 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#025da8] grid place-items-center">
              <i className="fa-solid fa-cart-shopping text-white text-[14px]" />
            </div>
            <h3 className="text-lg font-semibold">Added to Cart</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 w-[40px] h-[40px] rounded-full hover:bg-gray-100">✕</button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-10 overflow-y-auto h-[55vh]">
          {lineItem ? (
            <>
              {/* <div className="flex items-start border rounded-[10px] shadow-sm border-[#025da857] p-[13px] gap-4">
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                <img src={lineItem.image} alt={lineItem.title} className="w-full h-full object-contain" />
              </div>

              <div className="flex-1">
                <h4 className="text-[15px] font-[600] text-gray-900 leading-5 line-clamp-2">
                  {lineItem.title}
                </h4>

                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-4 rounded-full ring-1 ring-gray-300"
                    style={{ backgroundColor: lineItem.colorHex }}
                    title={lineItem.colorName}
                  />
                  <span className="text-[12px] font-[500] text-gray-600">{lineItem.colorName}</span>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={dec}
                      className="w-9 h-8 grid place-items-center text-gray-700 hover:bg-gray-50"
                      aria-label="Decrease quantity"
                    >
                      –
                    </button>
                    <input
                      readOnly
                      value={qty}
                      className="w-12 h-8  text-[14px] font-[500] text-center border-x outline-none"
                    />
                    <button
                      onClick={inc}
                      className="w-9 h-8 grid place-items-center text-gray-700 hover:bg-gray-50"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="ml-auto  gap-[10px]  items-center flex text-right">
                    <div className="text-sm text-gray-500">Price: </div>
                    <div className="text-[18px] font-semibold text-gray-900">
                      ₹{fmtINR(lineItem.price)}
                    </div>
                  </div>
                </div>

              
              </div>
            </div> */}

              <div

                className=" items-start  p-4 border-[1.3px] border-blue-100 rounded-xl bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-[20px] ">


                  <img
                    src={lineItem.image || "/placeholder.svg"}
                    alt={lineItem.name}
                    className="w-20 h-20 border object-cover rounded-xl shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-[600] text-slate-900  leading-[19px] mb-1">{lineItem.title}</h3>
                    <p className="text-[13px] text-slate-600 mb-1">{lineItem.description}</p>

      {/* <div className="mt-2 flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-4 rounded-full ring-1 ring-gray-300"
                    style={{ backgroundColor: lineItem.colorHex }}
                    title={lineItem.colorName}
                  />
                  <span className="text-[12px] font-[500] text-gray-600">{lineItem.colorName}</span>
                </div> */}
                  </div>
                </div>
                <div className=" flex flex-col ">
                  <div className="flex items-center  space-x-4 text-sm text-slate-600">

                    <div className="mt-1 flex items-center gap-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={dec}
                          className="w-9 h-8 grid place-items-center text-gray-700 hover:bg-gray-50"
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <input
                          readOnly
                          value={qty}
                          className="w-12 h-8  text-[14px] font-[500] text-center border-x outline-none"
                        />
                        <button
                          onClick={inc}
                          className="w-9 h-8 grid place-items-center text-gray-700 hover:bg-gray-50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="ml-auto   pt-[3px] gap-[10px]  items-center flex text-right">
                      {/* <div className="text-sm text-gray-500">Price: </div> */}
                      <div className="text-[18px] font-semibold text-gray-900">
                        ₹{fmtINR(lineItem.price)}
                      </div>
                      <span className="text-sm text-slate-500 line-through">
                        ₹4500
                      </span>
                      <span className="text-[13px] text-green-600 font-[600] bg-green-100 px-2 py-1 rounded-lg">
                        30% off
                      </span>
                    </div>

                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <span className="text-xl font-[600] text-slate-900">₹{lineItem.salePrice.toLocaleString()}</span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{lineItem.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[13px] text-green-600 font-[600] bg-green-100 px-2 py-1 rounded-lg">
                      {lineItem.discount}% off
                    </span>
                  </div> */}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-600">No items in the cart.</div>
          )}
        </div>

        <div className="flex items-center px-[20px]  border-b justify-between">
          <span className="text-sm text-gray-500">Subtotal</span>
          <span className="text-[18px] font-semibold text-gray-900">₹{fmtINR(subtotal)}</span>
        </div>

           <div className="p-3 border-blue-100">
                                    {/* <div className="flex items-center mb-3">
                                        <Tag className="w-6 h-6 mr-3" style={{ color: "#025da8" }} />
                                        <span className="font-[600] text-slate-900">Available Coupons</span>
                                    </div> */}

                                    {appliedCoupon ? (
                                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-[1.4px] border-green-200 rounded-xl">
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
                                                        className={`relative p-4 rounded-lg border-[1.3px] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${calculateSubtotal() >= coupon.minOrder
                                                            ? "border-blue-200 hover:border-blue-400 bg-gradient-to-br from-white to-blue-50"
                                                            : "border-gray-200 hover:border-blue-400 bg-gradient-to-br from-white to-blue-50"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`absolute top-2 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-[600] bg-gradient-to-r ${coupon.color}`}
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

                                     
                                        </div>
                                    )}
                                </div>

        {/* Sticky Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <button
            onClick={onProceed}
            className="w-full h-12 rounded-md bg-[#025da8] hover:opacity-95 transition font-semibold text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
