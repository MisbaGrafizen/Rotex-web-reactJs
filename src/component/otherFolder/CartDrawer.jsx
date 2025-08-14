// CartDrawer.jsx
import { useEffect, useMemo, useState } from "react";

const fmtINR = (n) => Number(n || 0).toLocaleString("en-IN");

export default function CartDrawer({
  open,
  onClose,
  lineItem,          // { id, title, price, image, colorName, colorHex, quantity }
  onQtyChange,       // (qty) => void
  onProceed,         // () => void
}) {
  const [qty, setQty] = useState(lineItem?.quantity || 1);

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
        <div className="p-4 space-y-15 overflow-y-auto h-[calc(100%-72px-96px)]">
          {lineItem ? (
            <div className="flex items-start border rounded-[10px] shadow-sm border-[#025da857] p-[13px] gap-4">
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
            </div>
          ) : (
            <div className="text-center text-gray-600">No items in the cart.</div>
          )}
        </div>

          <div className="flex items-center px-[20px]  justify-between">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <span className="text-[18px] font-semibold text-gray-900">₹{fmtINR(subtotal)}</span>
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
