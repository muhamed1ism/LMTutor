'use client';

interface ButtonProps {
    label?:string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
    outline?:boolean
    small?:boolean
    type?:any
    disabled?:boolean;
}


export default function Button({label,onClick, type, outline, small,disabled}:ButtonProps) {
  return (
    <button onClick={onClick} type={type} disabled={disabled}
    
    className={`relative rounded-lg hover:opacity-80 transition disabled:cursor-not-allowed ${outline ? 'bg-zinc-100' : 'bg-blue-500 w-full'} ${outline ? 'text-black' : 'text-zinc-100'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-lg'} ${small ? ' border-[1px]' : 'border-1'}`}
    >
        {label}
    </button>
  )
}
