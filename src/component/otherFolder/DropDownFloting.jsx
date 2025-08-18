"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function DropDownFloting({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const btnRef = useRef(null)
  const listRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Keyboard support
  function handleKeyDown(e) {
    if (e.key === "Escape") setOpen(false)
    if (e.key === "Enter" || e.key === " ") setOpen((v) => !v)
  }

  const labelActive = open || focused || !!value

  return (
    <div className="relative">
      {/* Floating Label */}
      <span
        className={`absolute transition-all duration-200 pointer-events-none
          ${labelActive
            ? "top-[-9px] left-[15px] px-[6px] bg-white border rounded-[10px] text-[10px] border-[#025da8] text-[#025da8] z-10"
            : "top-[10px] left-5 text-sm text-neutral-500"
          }`}
      >
        {label}
      </span>

      {/* Trigger Button (acts like the input) */}
      <button
        type="button"
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex justify-between items-center px-4 py-2 text-[14px] border rounded-lg bg-white outline-none
          ${open ? "border-[#025da8] ring-2 ring-[#025da8]/30" : "border-gray-300"}
        `}
      >
        <span className={value ? "text-gray-900" : "text-gray-700"}>
          {value || ""}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-gray-700" />
        </motion.div>
      </button>

      {/* Options */}
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            role="listbox"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.16 }}
            className="absolute z-20 w-full mt-2 max-h-56 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            {options.map((option) => (
              <li
                key={option}
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option)
                  setOpen(false)
                }}
                className={`px-4 py-[6px] text-[14px] cursor-pointer hover:bg-gray-100
                  ${value === option ? "bg-gray-100 font-medium" : ""}
                `}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
