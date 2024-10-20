'use client'


import Image from "next/image"
import { SafeUser, safeCourse } from "../types"
import { useRouter } from "next/navigation";
import useBasket from "../hooks/useBasket";
import Button from "./Button"

interface CourseComponent {
    data:safeCourse,
    key:string,
    currentUser:SafeUser | null
}

export default function CourseComponent({data, key, currentUser}:CourseComponent) {

    const router = useRouter();
    const {hasBasket, toggleBasket} = useBasket({ courseId: data.id, currentUser});

  return (
    <div className="bg-zinc-900 rounded-xl m-2 shadow-2xl">
        <div className="flex flex-col w-[300px] relative">
            <div>

                
                <div className="border-[1px] bg-gradient-to-br from-zinc-300 to-zinc-400 border-neutral-900 relative rounded-t-xl cursor-pointer hover:opacity-80"  key={key} onClick={() => router.push(`/course/${data.id}`)}>
                        <Image width={200} height={200}  src={data.imageSrc} alt="Image"
                        className="object-cover w-[320px] h-[150px]"
                        />
                </div>

                <div className="p-3">
                    <h3 className="text-[20px] text-zinc-200 cursor-pointer hover:opacity-80" key={key} onClick={() => router.push(`/course/${data.id}`)}>{data.name}</h3>
                    <span className="text-zinc-400 block text-[12px] font-normal">{data.author}</span>
                    <div className="flex justify-between items-center">
                    <span className="text-white text-xl">$ {data.price}</span>
                    <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Remove from basket' : 'Add to basket'}`} hasBasket={hasBasket}/>
                    </div>
                </div>

            
            </div>
        </div>
    </div>
  )
}
