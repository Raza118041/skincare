import { H1, P } from '@/components/ui/Typography'
import React from 'react'
import ImageSlider from "../../../../public/Images/SlideImage.png"
import img1 from "../../../../public/Images/before.png"
import img2 from "../../../../public/Images/after.png"
import Image from "next/image"
import img3 from "../../../../public/Images/before1.png"
import img4 from "../../../../public/Images/after1.png"
import Badge from "../../../../public/Images/badge.svg"
import Certificate1 from "../../../../public/Images/image 6.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonial = () => {
    const SliderImages = [
        {
            reviews: "⭐⭐⭐⭐",
            description: "I’m so grateful I found Glisten! My skin has never looked this good. The anti-aging treatments are gentle but powerful. I finally feel comfortable in my skin again!",
            name: "Emma T.",
            image: img1
        },
        {
            reviews: "⭐⭐⭐⭐⭐",
            description: "I’m so grateful I found Glisten! My skin has never looked this good. The anti-aging treatments are gentle but powerful. I finally feel comfortable in my skin again!",
            name: "Emma T.",
            image: img2
        },
        {
            reviews: "⭐⭐⭐",
            description: "I’m so grateful I found Glisten! My skin has never looked this good. The anti-aging treatments are gentle but powerful. I finally feel comfortable in my skin again!",
            name: "Emma T.",
            image: img3
        },
        {
            reviews: "⭐⭐⭐⭐",
            description: "I’m so grateful I found Glisten! My skin has never looked this good. The anti-aging treatments are gentle but powerful. I finally feel comfortable in my skin again!",
            name: "Emma T.",
            image: img4
        }
    ]
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='md:w-full lg:w-3/5 py-7 bg-[#FCF3EE] flex justify-center flex-col items-center'>
                <H1 className='mb-7'>Our clients love their results</H1>
                <div className=' bg-[#FFEFD7]'>
                    <Carousel className="w-[250px] sm:w-sm md:w-xl lg:w-md xl:w-xl p-6">
                        <CarouselContent>
                            {SliderImages.map((_, index) => (
                                <CarouselItem key={index} className='flex flex-col-reverse md:flex-row'>
                                    <div className='flex flex-col gap-20'>
                                        <div className='flex flex-col'>
                                            <H1>{_.reviews}</H1>
                                            <P>{_.description}</P>
                                        </div>
                                        <div>
                                            <H1>{_.name}</H1>
                                        </div>
                                    </div>
                                    <div className="p-1 w-full">
                                        <Image
                                            src={_.image}
                                            alt=''
                                            width={60}
                                            height={60}
                                            className='w-full object-cover'
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
            <div className='w-full lg:w-2/5 bg-[#512729] md:rounded-br-[100px] p-5'>
                <div className='flex flex-row items-center mb-4'>
                    <Image src={Badge} alt='' width={40} height={40} />
                    <H1 className='text-[#FF835A]'>Certifications</H1>
                </div>
                <div className='flex gap-5 flex-col mb-7'>
                    <Image
                        src={Certificate1}
                        alt=''
                        className='w-full md:w-40 md:h-32'
                    />
                    <Image
                        src={Certificate1}
                        alt=''
                        className='w-full md:w-40 md:h-32'
                    />

                </div>
                <h1
                    className='text-[#FF835A] cursor-pointer items-center text-sm flex gap-1 underline underline-offset-4'
                >
                    View all certification
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-arrow-right-icon lucide-arrow-right">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </h1>
            </div>
        </div>
    )
}

export default Testimonial
