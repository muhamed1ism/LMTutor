import { SafeUser } from "@/app/types"
import { User } from "@/app/constants"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signOut } from "next-auth/react"

interface UserMenuProps {
    currentUser: SafeUser | null
    closeUserMenu: () => void
}

export default function UserMenu({currentUser,closeUserMenu}:UserMenuProps) {
    const router = useRouter()

  return (
    <div className="
    flex flex-col h-100 bg-zinc-900 shadow-lg right-0 rounded-xl px-4 py-2 gap-6
    ">
        <div className="flex items-center gap-4 hover:opacity-80" onClick={() => router.push('/user')}>

                    <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer" >
                                <span>{currentUser?.name?.at(0)?.toUpperCase()}</span>
                                <span>{currentUser?.name?.at(1)?.toUpperCase()}</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-zinc-200">{currentUser?.name}</span>
                        <span className="text-zinc-400">{currentUser?.email}</span>
                    </div>
                
        </div>

        <div className="flex flex-col gap-3 font-light text-zinc-200">
            {User.map((item) => (
                <div key={item.name} onClick={closeUserMenu}>
                    <Link className="hover:opacity-80" href={item.link}>{item.name}</Link>
                </div>
            ))}
        </div>

        <div className="border-zinc-950 bg-zinc-700 text-zinc-200 text-center rounded-xl border-[1px] py-2 px-2 mt-auto hover:opacity-80">
           <button onClick={() => signOut()}>Odjavi se</button>
        </div>
    </div>
  )
}
