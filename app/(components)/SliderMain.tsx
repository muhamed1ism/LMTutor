'use client';

import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


interface CarouselProps {
    images:string[];
}
export default function SliderMain({images}:CarouselProps) {

    const [current,setCurrent] = useState(0)

    const currentImage = images[current]

    const prevImage = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? images.length - 1 : current - 1;
        setCurrent(newIndex)
    }

    const nextImage = () => {
        const isLastSlide = current === images.length - 1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex)

    }


  return (
    <div className="relative">
        <div>
            <button onClick={prevImage} className="absolute left-[2%] top-[50%] z-[40] text-white"><BsArrowLeft/></button>
            <img src={currentImage} alt={`Image ${current + 1}`} className="h-[500px] object-cover w-full bg-zinc-600"/>
            {current === 1 && (
                <div className="absolute top-[20%] right-[10%] rounded-xl bg-zinc-800 p-8 max-w-[500px]">
                     <h1 className="my-4 text-[2rem] font-bold text-zinc-200">Learning that gets you</h1>
                    <h4 className="text-[1.2rem] text-zinc-400">Skills for your present (and your future). Get started with us.</h4>
                </div>
            )}


            {current === 0 && (
                <div className="absolute top-[20%] right-[10%] rounded-xl bg-zinc-800 p-8 max-w-[500px]">
                   <h1 className="my-4 text-[2rem] font-bold text-zinc-200">Learn to program</h1>
                    <h4 className="text-[1.2rem] text-zinc-400">Learn to code with our tutorials and examples tailored for beginners.</h4>
                </div>
            )}

            <button onClick={nextImage} className="absolute right-[2%] top-[50%] z-[40] text-white"><BsArrowRight/></button>


        </div>
    </div>
  )
}
