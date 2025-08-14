// import { useEffect, useMemo, useRef, useState } from "react";

// export default function LoginDrawer({ open, onClose, onSuccess }) {
//   const [step, setStep] = useState("phone"); // 'phone' | 'otp' | 'details'
//   const [phone, setPhone] = useState("");
//   const [sending, setSending] = useState(false);

//   const [otp, setOtp] = useState(Array(6).fill(""));
//   const inputsRef = useRef([]);
//   const [verifying, setVerifying] = useState(false);

//   const [resendIn, setResendIn] = useState(0);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const validPhone = useMemo(
//     () => /^[6-9]\d{9}$/.test(phone.trim()),
//     [phone]
//   );

//   useEffect(() => {
//     if (!open) return;
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);

//   useEffect(() => {
//     if (open) {
//       setStep("phone");
//       setPhone("");
//       setOtp(Array(6).fill(""));
//       setName("");
//       setEmail("");
//       setResendIn(0);
//       setSending(false);
//       setVerifying(false);
//     }
//   }, [open]);

//   useEffect(() => {
//     let t;
//     if (step === "otp" && resendIn > 0) {
//       t = setInterval(() => setResendIn((s) => Math.max(0, s - 1)), 1000);
//     }
//     return () => t && clearInterval(t);
//   }, [step, resendIn]);

//   const sendOtp = async () => {
//     if (!validPhone) return;
//     setSending(true);
//     await new Promise((r) => setTimeout(r, 800)); // TODO wire to API
//     setSending(false);
//     setStep("otp");
//     setResendIn(30);
//     setOtp(Array(6).fill(""));
//     setTimeout(() => inputsRef.current?.[0]?.focus(), 50);
//   };

//   const handleOtpChange = (idx, val) => {
//     if (!/^\d?$/.test(val)) return;
//     const next = [...otp];
//     next[idx] = val;
//     setOtp(next);
//     if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
//   };
//   const handleOtpKeyDown = (idx, e) => {
//     if (e.key === "Backspace" && !otp[idx] && idx > 0) {
//       inputsRef.current[idx - 1]?.focus();
//     }
//     if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
//     if (e.key === "ArrowRight" && idx < 5) inputsRef.current[idx + 1]?.focus();
//   };
//   const handleOtpPaste = (e) => {
//     const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     if (!text) return;
//     const next = Array(6)
//       .fill("")
//       .map((_, i) => text[i] ?? "");
//     setOtp(next);
//     const last = Math.min(text.length, 6) - 1;
//     inputsRef.current[last >= 0 ? last : 0]?.focus();
//     e.preventDefault();
//   };

//   const otpFilled = useMemo(() => otp.join("").length === 6, [otp]);

//   const verifyOtp = async () => {
//     if (!otpFilled) return;
//     setVerifying(true);
//     await new Promise((r) => setTimeout(r, 800)); // TODO verify with API
//     setVerifying(false);
//     setStep("details");
//   };

//   const resend = async () => {
//     if (resendIn > 0) return;
//     setSending(true);
//     await new Promise((r) => setTimeout(r, 700)); // TODO resend with API
//     setSending(false);
//     setResendIn(30);
//     setOtp(Array(6).fill(""));
//     inputsRef.current?.[0]?.focus();
//   };

//   const saveDetails = async () => {
//     // TODO: call your profile create/update API here
//     onSuccess?.({ phone, name: name.trim(), email: email.trim() });
//     onClose();
//   };

//   const handleBackdrop = (e) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   useEffect(() => {
//     const onEsc = (e) => e.key === "Escape" && onClose();
//     if (open) window.addEventListener("keydown", onEsc);
//     return () => window.removeEventListener("keydown", onEsc);
//   }, [open, onClose]);

//   return (
//     <div
//       className={`fixed inset-0 z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
//       aria-hidden={!open}
//       onClick={handleBackdrop}
//     >
//       <div
//         className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
//       />
//       <aside
//         className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl
//         transition-transform duration-200 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
//         role="dialog"
//         aria-modal="true"
//       >
//         <div className="flex items-center justify-between px-6 h-16 border-b">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-[#025da8] grid place-items-center">
//               <span className="text-white font-bold text-lg">✓</span>
//             </div>
//             <h3 className="text-lg font-semibold">Quick Login / Register</h3>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="p-2 rounded hover:bg-gray-100"
//           >
//             ✕
//           </button>
//         </div>

//         {/* CONTENT */}
//         <div className="p-6">
//           {step === "phone" && (
//             <div className="space-y-4">
//               {/* <label className="block text-sm font-medium text-gray-700">
//                 Enter your phone number
//               </label>
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                 placeholder="10-digit mobile number"
//                 className="w-full h-12 rounded-md border px-4 outline-none focus:ring-2 focus:ring-[#025da8]"
//               />
//               {!validPhone && phone.length > 0 && (
//                 <p className="text-xs text-red-600">Enter a valid 10-digit Indian mobile number starting with 6-9.</p>
//               )} */}
// <label className="relative block w-full">
//       {/* Floating Label */}
//       <span
//         className={`absolute transition-all duration-300 text-neutral-500 
//           ${isFocused || value
//             ? "top-[-10px] px-[6px] left-[18px]  border border-red-500 rounded-[10px] text-[10px] bg-white text-red-500"
//             : "top-[10px] left-10 cursor-text  text-sm"}`}
//       >
//         {label}
//       </span>



//         <span className="absolute left-3 top-1/2 text-[#ff4d4d] -translate-y-1/2 ">
//           <i className={iconClass}></i>
//         </span>


//       {/* Input */}
//       <input
//         type="number"

//         placeholder=""
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         className="w-full rounded-[10px] border border-neutral-300 bg-white pl-10 pr-3 h-[40px] text-sm text-neutral-900 focus:outline-none focus:ring-[1px] focus:ring-red-500"
//       />
//     </label>


//               <button
//                 disabled={!validPhone || sending}
//                 onClick={sendOtp}
//                 className={`w-full h-12 rounded-md font-semibold text-white transition
//                  ${validPhone && !sending ? "bg-[#025da8] hover:bg-emerald-700" : "bg-[#025da8] cursor-not-allowed"}`}
//               >
//                 {sending ? "Sending..." : "Send OTP"}
//               </button>

//               <p className="text-xs absolute w-[92%] bottom-4 text-gray-500">
//                 By continuing, you agree to our{" "}
//                 <a href="#" className="underline">Privacy Policy</a> and{" "}
//                 <a href="#" className="underline">Terms & Conditions</a>.
//               </p>
//             </div>
//           )}

//           {step === "otp" && (
//             <div className="space-y-5">
//               <div className="text-sm text-gray-700">
//                 OTP sent to <span className="font-semibold">+91 {phone}</span>
//               </div>

//               <div
//                 className="flex gap-2"
//                 onPaste={handleOtpPaste}
//               >
//                 {otp.map((d, i) => (
//                   <input
//                     key={i}
//                     ref={(el) => (inputsRef.current[i] = el)}
//                     inputMode="numeric"
//                     maxLength={1}
//                     value={d}
//                     onChange={(e) => handleOtpChange(i, e.target.value.replace(/\D/g, ""))}
//                     onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                     className="w-12 h-12 text-center text-lg font-semibold border rounded-md focus:ring-2 focus:ring-emerald-500"
//                   />
//                 ))}
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <button
//                   onClick={resend}
//                   disabled={resendIn > 0 || sending}
//                   className={`font-medium ${resendIn > 0 ? "text-gray-400 cursor-not-allowed" : "text-emerald-700 hover:underline"}`}
//                 >
//                   {resendIn > 0 ? `Resend OTP in ${resendIn}s` : "Resend OTP"}
//                 </button>
//                 <button
//                   onClick={() => setStep("phone")}
//                   className="text-gray-500 hover:underline"
//                 >
//                   Change number
//                 </button>
//               </div>

//               <button
//                 disabled={!otpFilled || verifying}
//                 onClick={verifyOtp}
//                 className={`w-full h-12 rounded-md font-semibold text-white transition
//                   ${otpFilled && !verifying ? "bg-[#025da8] hover:bg-emerald-700" : "bg-[#025da8] cursor-not-allowed"}`}
//               >
//                 {verifying ? "Verifying..." : "Verify & Continue"}
//               </button>
//             </div>
//           )}

//           {step === "details" && (
//             <div className="space-y-4">
//               <label className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your name"
//                 className="w-full h-12 rounded-md border px-4 outline-none focus:ring-2 focus:ring-emerald-500"
//               />
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full h-12 rounded-md border px-4 outline-none focus:ring-2 focus:ring-emerald-500"
//               />

//               <button
//                 onClick={saveDetails}
//                 disabled={!name.trim() || !/^\S+@\S+\.\S+$/.test(email)}
//                 className={`w-full h-12 rounded-md font-semibold text-white transition
//                   ${name.trim() && /^\S+@\S+\.\S+$/.test(email)
//                     ? "bg-[#025da8] hover:bg-emerald-700"
//                     : "bg-[#025da8] cursor-not-allowed"}`}
//               >
//                 Save
//               </button>
//             </div>
//           )}
//         </div>
//       </aside>
//     </div>
//   );
// }
import { useEffect, useMemo, useRef, useState } from "react";
import FloatingInput from "../../src/component/otherFolder/FloatingInput";
import logo from "../../public/images/Logo/moveLogo.gif"

export default function LoginDrawer({ open, onClose, onSuccess }) {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);

  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);
  const [verifying, setVerifying] = useState(false);
  const [resendIn, setResendIn] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validPhone = useMemo(() => /^[6-9]\d{9}$/.test(phone.trim()), [phone]);
  const phoneError =
    phone.length > 0 && !validPhone ? "Enter a valid 10-digit Indian mobile number starting with 6–9." : "";

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) {
      setStep("phone");
      setPhone("");
      setOtp(Array(6).fill(""));
      setName("");
      setEmail("");
      setResendIn(0);
      setSending(false);
      setVerifying(false);
    }
  }, [open]);

  useEffect(() => {
    let t;
    if (step === "otp" && resendIn > 0) {
      t = setInterval(() => setResendIn((s) => Math.max(0, s - 1)), 1000);
    }
    return () => t && clearInterval(t);
  }, [step, resendIn]);

  const sendOtp = async () => {
    if (!validPhone) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setStep("otp");
    setResendIn(30);
    setOtp(Array(6).fill(""));
    setTimeout(() => inputsRef.current?.[0]?.focus(), 50);
  };

  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
  };
  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < 5) inputsRef.current[idx + 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    const next = Array(6).fill("").map((_, i) => text[i] ?? "");
    setOtp(next);
    const last = Math.min(text.length, 6) - 1;
    inputsRef.current[last >= 0 ? last : 0]?.focus();
    e.preventDefault();
  };

  const otpFilled = useMemo(() => otp.join("").length === 6, [otp]);

  const verifyOtp = async () => {
    if (!otpFilled) return;
    setVerifying(true);
    await new Promise((r) => setTimeout(r, 800));
    setVerifying(false);
    setStep("details");
  };

  const resend = async () => {
    if (resendIn > 0) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setResendIn(30);
    setOtp(Array(6).fill(""));
    inputsRef.current?.[0]?.focus();
  };

  const saveDetails = async () => {
    onSuccess?.({ phone, name: name.trim(), email: email.trim() });
    onClose();
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
      onClick={handleBackdrop}
    >
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl
        transition-transform duration-200 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#025da8] grid place-items-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <h3 className="text-lg font-semibold">Quick Login / Register</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 w-[40px] h-[40px] rounded-full hover:bg-gray-100">✕</button>
        </div>

        <div className=" ">
<img className=" w-[180px] mt-[20px] mx-auto" src={logo} />
        </div>

        <div className="p-6 pb-20 ">
          {step === "phone" && (
            <div className="space-y-9">
              <FloatingInput
                label="Mobile number"
                iconClass="fa-regular fa-mobile"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(v) => setPhone(v.replace(/\D/g, "").slice(0, 10))}
                error={phoneError}
              />

              <button
                disabled={!validPhone || sending}
                onClick={sendOtp}
                className={`w-full h-12 rounded-md  font-semibold text-white transition
                 ${validPhone && !sending ? "bg-[#025da8] hover:brightness-110" : "bg-[#9bbbe2] cursor-not-allowed"}`}
              >
                {sending ? "Sending..." : "Send OTP"}
              </button>

              <p className="text-xs absolute w-[92%] bottom-4 text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="underline">Privacy Policy</a> and{" "}
                <a href="#" className="underline">Terms & Conditions</a>.
              </p>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-5 mx-auto">
              <div className="text-sm text-gray-700">
                OTP sent to <span className="font-semibold">+91 {phone}</span>
              </div>

              <div className="flex gap-4" onPaste={handleOtpPaste}>
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={(el) => (inputsRef.current[i] = el)}
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    onChange={(e) => handleOtpChange(i, e.target.value.replace(/\D/g, ""))}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border rounded-md focus:ring-2 focus:ring-emerald-500"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <button
                  onClick={resend}
                  disabled={resendIn > 0 || sending}
                  className={`font-medium ${resendIn > 0 ? "text-gray-400 cursor-not-allowed" : "text-emerald-700 hover:underline"}`}
                >
                  {resendIn > 0 ? `Resend OTP in ${resendIn}s` : "Resend OTP"}
                </button>
                <button onClick={() => setStep("phone")} className="text-gray-500 text-[13px] hover:underline">
                  Change number
                </button>
              </div>

              <button
                disabled={!otpFilled || verifying}
                onClick={verifyOtp}
                className={`w-full h-12 rounded-md font-semibold text-white transition
                  ${otpFilled && !verifying ? "bg-[#025da8] hover:brightness-110" : "bg-[#9bbbe2] cursor-not-allowed"}`}
              >
                {verifying ? "Verifying..." : "Verify & Continue"}
              </button>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-5">
              <FloatingInput
                label="Full name"
                iconClass="fa-regular fa-user"
                value={name}
                onChange={setName}
              />
              <FloatingInput
                label="Email"
                iconClass="fa-regular fa-envelope"
                type="email"
                value={email}
                onChange={setEmail}
                error={email && !/^\S+@\S+\.\S+$/.test(email) ? "Enter a valid email" : ""}
              />

              <button
                onClick={saveDetails}
                disabled={!name.trim() || !/^\S+@\S+\.\S+$/.test(email)}
                className={`w-full h-12 rounded-md font-semibold text-white transition
                  ${name.trim() && /^\S+@\S+\.\S+$/.test(email)
                    ? "bg-[#025da8] hover:brightness-110"
                    : "bg-[#9bbbe2] cursor-not-allowed"}`}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
