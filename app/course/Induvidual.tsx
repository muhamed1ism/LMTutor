'use client'

import { SafeUser } from "../types"
import Button from "../(components)/Button"
import Image from "next/image"
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
    <div>
        <div className="h-[60vh] bg-zinc-900 flex justify-between text-white px-14 items-center">
            <div>
                <h1 className="text-[4rem]">{name}</h1>
                <p>{author}</p>
                <p>{description}</p>
                <p>{price}</p>  
            </div>

            <div className="w-[400px] bg-zinc-700 rounded-xl p-1 text-zinc-200">
                <img src={imageSrc} alt="Image" width={200} height={200} className="w-full object-cover"/>

                <div>
                    <p>$ {price}</p>
                    
                    <div className="flex flex-col gap-1 mt-4">
                        <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Ukloni iz korpe' : 'Dodaj u korpu'}`}/>
                        <Button  type='button' label="Kupi" outline/>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
