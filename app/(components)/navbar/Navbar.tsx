'use client'

import { SafeUser } from "@/app/types";
import Link from "next/link"
import { FormEvent, useState } from "react";
import {MdOutlineShoppingCart} from 'react-icons/md'
import UserMenu from "./UserMenu";
import { useSearchParams } from "next/navigation";
import qs from 'query-string'
import { useRouter } from "next/navigation";

interface UserMenuProps {
    myUser:SafeUser | null;
    basketItems: any;
}

export default function Navbar({myUser,basketItems}:UserMenuProps) {

    const [userMenuOpen,setUserMenuOpen] = useState(false)
    const [searchQuery,setSearchQuery] = useState('')


    const router = useRouter();

    const params = useSearchParams();

    const closeUserMenu = () => {
        setUserMenuOpen(false)
    }

    const onSearch = (e:FormEvent) => {
        e.preventDefault();

        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery:any = {
            ...currentQuery,
            result:searchQuery
        }

        const url = qs.stringifyUrl({
            url:'/',
            query: updatedQuery
        }, {skipNull:true})
        router.push(`/search/${url}`)
    }

  return (
    <div className="shadow-xl bg-zinc-900 z-[99999] sticky">
        <div className="p-3 px-4">
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-6 flex-1 relative">
                    <Link href='#'><img src="/logo.png" alt="Logo" width={175} height={42}/></Link>




                    <form className="lg:flex-1 lg:flex hidden" onSubmit={onSearch}>
                        <input type="text" 
                        placeholder="Search ..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="
                        w-96 p-3 font-light bg-zinc-800 rounded-full border-black border-[1px] outline-none text-zinc-300
                        "
                        />
                    </form>
                </div>


                <div className="items-center text-zinc-300 gap-8 text-[1rem] px-2 hidden lg:flex">
                    <div>
                        <Link className="hover:opacity-80" href="#">Tutorials</Link>
                    </div>

                    <div>
                        <a className="hover:opacity-80" href={myUser ?  "/create" : '/login'}>Publish tutorial</a>
                    </div>

                    <div className="relative hover:opacity-80">
                       <Link  href='/basket'><MdOutlineShoppingCart className='h-6 w-10'/></Link>
                        <div className="absolute -right-1 -bottom-2 bg-blue-500 rounded-full w-6 h-6 flex justify-center items-center text-white">
                            {basketItems.length}
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-3">
                    {!myUser && (
                        <>
                            <div>
                              <Link  href='/login' className='py-2 px-6 rounded-xl text-zinc-200 bg-zinc-900 border-black border-[1px] hover:opacity-80'>Login</Link>
                            </div>

                            <div>
                               <Link href='/register' className='py-2 px-6 rounded-xl bg-zinc-300 text-zinc-900 border-[1px] border-black hover:opacity-80'>Register</Link>
                            </div>
                        </>
                    )}

                    {myUser && (
                        <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer" onClick={() => setUserMenuOpen(prev => !prev)}>
                            <span>{myUser.name.at(0)?.toUpperCase()}</span>
                            <span>{myUser.name.at(1)?.toUpperCase()}</span>
                        </div>
                    )}


                    {userMenuOpen && (
                        <div className="absolute bottom-0 top-20 right-2">
                            <UserMenu
                                currentUser={myUser}
                                closeUserMenu={closeUserMenu}
                            />
                        </div>
                    )}

                </div>

            </div>
        </div>
    </div>
  )
}
