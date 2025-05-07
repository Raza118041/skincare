import React from 'react'
import img1 from "../../../../public/Images/before.png"
import img2 from "../../../../public/Images/after.png"
import img3 from "../../../../public/Images/before1.png"
import img4 from "../../../../public/Images/after1.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { H1 } from '@/components/ui/Typography'

const Transformation = () => {
    const SliderImages = [img1, img2, img3, img4]
    return (
        <div className='flex justify-center gap-8 md:gap-10 flex-col items-center py-10'>
            <H1>See the Transformation</H1>
            <div className='flex justify-center md:justify-end max-md:px-16'>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {SliderImages.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Image
                                        src={_}
                                        alt=''
                                        className='w-full'
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Transformation
