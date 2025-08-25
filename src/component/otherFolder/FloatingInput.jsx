// import { useState } from "react";

// export default function FloatingInput({
//   label,
//   iconClass,
//   type = "text",
//   value,
//   onChange,
//   maxLength,
//   inputMode,
//   disabled = false,
//   error = "",
// }) {
//   const [isFocused, setIsFocused] = useState(false);

//   const labelActive =
//     isFocused || (typeof value === "number" ? String(value) : value)?.length > 0;

//   return (
//     <label className="relative block w-full">
//       <span
//         className={`absolute transition-all duration-200
//         ${labelActive
//             ? "top-[-10px] left-[24px] px-[6px] bg-white border rounded-[10px] text-[10px] border-[#025da8] text-[#025da8]"
//             : "top-[10px] left-10 text-sm text-neutral-500"
//           }`}
//       >
//         {label}
//       </span>

//       {iconClass && (
//         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#025da8]">
//           <i className={iconClass} />
//         </span>
//       )}

//       <input
//         type={type}
//         value={value}
//         maxLength={maxLength}
//         inputMode={inputMode}
//         onChange={(e) => onChange(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         disabled={disabled}
//         className={`w-full h-[40px] rounded-[7px] border bg-white pl-10 pr-3 text-sm text-neutral-900
//         outline-none focus:ring-[1px] ${error ? "border-[#025da8] focus:ring-[#025da8]" : "border-neutral-300 focus:ring-[#025da8]"}`}
//       />

//       {error ? (
//         <span className="mt-1 block absolute text-xs text-red-600">{error}</span>
//       ) : null}
//     </label>
//   );
// }


import { useState } from "react";

export default function FloatingInput({
  label,
  iconClass,
  type = "text",
  value = "",
  onChange,
  maxLength,
  inputMode,
  disabled = false,
  error = "",
  name,
  id,
  placeholder,
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;
  const labelActive = isFocused || hasValue;

  return (
    <label className="relative block w-full">
      <span
        className={`absolute transition-all duration-200 ${
          labelActive
            ? "top-[-10px] left-[24px] px-[6px] bg-white border rounded-[10px] text-[10px] border-[#025da8] text-[#025da8]"
            : "top-[10px] left-10 text-sm text-neutral-500"
        }`}
      >
        {label}
      </span>

      {iconClass && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#025da8]">
          <i className={iconClass} />
        </span>
      )}

      <input
        {...rest}
        id={id || name}
        name={name}
        type={type}
        value={value}
        maxLength={maxLength}
        inputMode={inputMode}
        onChange={(e) => onChange?.(e)}      
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full h-[40px] rounded-[7px] border bg-white pl-10 pr-3 text-sm text-neutral-900 outline-none focus:ring-[1px] ${
          error ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-[#025da8]"
        }`}
      />

      {error ? (
        <span className="mt-1 block absolute text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}
