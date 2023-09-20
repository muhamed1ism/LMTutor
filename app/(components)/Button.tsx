"use client"

interface ButtonProps {
  label?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  outline?: boolean
  small?: boolean
  type?: any
  disabled?: boolean
  hasBasket?: boolean
  relative?: boolean
}

export default function Button({
  label,
  onClick,
  type,
  outline,
  small,
  disabled,
  hasBasket,
  relative,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`rounded-full hover:opacity-80 transition disabled:cursor-not-allowed px-2 
    ${outline ? "bg-zinc-100" : hasBasket ? "bg-gradient-to-r from-red-600 to-rose-700" : "bg-gradient-to-r from-cyan-600 to-sky-700"} 
    ${outline ? "text-black" : "text-zinc-100"} 
    ${small ? "py-1" : "py-3"} 
    ${small ? "text-sm" : "text-lg"} 
    ${small ? " border-[1px]" : "border-1"}
    ${relative ? "px-64" : ""}
    `}
    
    >
      {label}
    </button>
  )
}
