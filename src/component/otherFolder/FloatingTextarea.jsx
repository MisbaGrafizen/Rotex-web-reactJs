// import { useState } from "react";

// export default function FloatingTextarea({
//   label,
//   iconClass,
//   value,
//   onChange,
//   maxLength,
//   rows = 4,
//   disabled = false,
//   error = "",
// }) {
//   const [isFocused, setIsFocused] = useState(false);

//   const labelActive =
//     isFocused || (typeof value === "number" ? String(value) : value)?.length > 0;

//   return (
//     <label className="relative block w-full">
//       {/* Floating Label */}
//       <span
//         className={`absolute transition-all duration-200
//           ${
//             labelActive
//               ? "top-[-10px] left-[18px] px-[6px] bg-white border rounded-[10px] text-[10px] border-[#025da8] text-[#025da8]"
//               : "top-[10px] left-10 text-sm text-neutral-500"
//           }`}
//       >
//         {label}
//       </span>

//       {/* Optional Icon */}
//       {iconClass && (
//         <span className="absolute left-3 top-[8px] text-[#025da8]">
//           <i className={iconClass} />
//         </span>
//       )}

//       {/* Textarea */}
//       <textarea
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         disabled={disabled}
//         maxLength={maxLength}
//         rows={rows}
//         className={`w-full rounded-[7px] border bg-white pl-10 pr-3 py-2 text-sm text-neutral-900 resize-y
//           outline-none focus:ring-[1px] ${
//             error
//               ? "border-[#025da8] focus:ring-[#025da8]"
//               : "border-neutral-300 focus:ring-[#025da8]"
//           }`}
//       />

//       {/* Error */}
//       {error ? (
//         <span className="mt-1 block absolute text-xs text-red-600">{error}</span>
//       ) : null}
//     </label>
//   );
// }


import { useState } from "react";

export default function FloatingTextarea({
  label,
  iconClass,
  value = "",
  onChange,
  maxLength,
  rows = 4,
  disabled = false,
  error = "",
  name,
  id,
  placeholder,
  className = "",
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
            ? "top-[-10px] left-[18px] px-[6px] bg-white border rounded-[10px] text-[10px] border-[#025da8] text-[#025da8]"
            : "top-[10px] left-10 text-sm text-neutral-500"
        }`}
      >
        {label}
      </span>

      {iconClass && (
        <span className="absolute left-3 top-[8px] text-[#025da8]">
          <i className={iconClass} />
        </span>
      )}

      <textarea
        {...rest}
        id={id || name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e)}  
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        placeholder={placeholder}
        className={`w-full rounded-[7px] border bg-white pl-10 pr-3 py-2 text-sm text-neutral-900 resize-y outline-none focus:ring-[1px] ${
          error ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-[#025da8]"
        } ${className}`}
      />

      {error ? (
        <span className="mt-1 block absolute text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}
