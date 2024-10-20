'use client'

import { SafeUser } from "../types"
import Button from "../(components)/Button"
import useBasket from "../hooks/useBasket"

interface Props {
    author?:string,
    price?:string,
    imageSrc?:string,
    name?:string,
    description?:string | null
    courseId:any,
    currentUser:SafeUser|null
}

export default function Induvidual({
    author, 
    price,
    imageSrc,
    name,
    courseId,
    description,
    currentUser
}:Props) {


    const {hasBasket, toggleBasket} = useBasket({
        currentUser,courseId
    })

  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-600">
        <section className="flex justify-center items-center h-screen">
        <div className="py-5 px-2">
            <div className="flex rounded-lg bg-opacity-85 bg-zinc-900">
                <div className="w-4/12">
                    <div className="bg-gradient-to-br from-zinc-300 to-zinc-400 rounded-l-lg h-full w-full flex items-center justify-center">
                        <img src={imageSrc} alt="Image" width={200} height={200} className="w-full object-cover"/>
                    </div>
                </div>

                <div className="w-8/12 flex flex-col justify-center">
                    <h1 className="text-center text-white px-4 py-3">{name}</h1>
                    <p className="text-center text-white text-opacity-70 px-4">{description}</p>
                    <p className="text-center text-white text-opacity-50 pb-3">Author: {author}</p>
                    <div className="flex flex-wrap justify-center items-center gap-3 py-4 px-3 text-white">
                        <p id="price">$ {price}</p>
                            
                        <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Remove from basket' : 'Add to basket'}`} hasBasket={hasBasket}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden lg:py-3 lg:block"></div>
        </section>
</div>
  )
}
