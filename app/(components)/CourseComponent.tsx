'use client'


import Image from "next/image"
import { SafeUser, safeCourse } from "../types"
import { useRouter } from "next/navigation";
import useBasket from "../hooks/useBasket";
import Button from "../(components)/Button"

interface CourseComponent {
    data:safeCourse,
    key:string,
    currentUser:SafeUser | null
}

export default function CourseComponent({data, key, currentUser}:CourseComponent) {

    const router = useRouter();
    const {hasBasket, toggleBasket} = useBasket({ courseId: data.id, currentUser});

  return (
    <div className="pt-4 bg-zinc-800 rounded-xl m-2">
        <div className="flex flex-col w-[300px] p-2 relative">
            <div>


                <div className="border-[1px] border-zinc-950 relative rounded-xl cursor-pointer hover:opacity-80"  key={key} onClick={() => router.push(`/course/${data.id}`)}>
                        <Image width={200} height={200}  src={data.imageSrc} alt="Image"
                        className="object-cover w-[320px] h-[150px]"
                        />
                </div>

                <div className="p-1">
                    <h3 className="text-[20px] text-zinc-200 cursor-pointer hover:opacity-80" key={key} onClick={() => router.push(`/course/${data.id}`)}>{data.name}</h3>
                    <span className="text-zinc-400 block text-[12px] font-normal">{data.author}</span>
                    <span className="text-white">{data.price} KM</span>
                </div>

            
                <div>
                    
                    <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Ukloni iz korpe' : 'Dodaj u korpu'}`}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
