import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/Images/SliderImage3.png"
import img2 from "../../../../public/Images/SliderImage1.png"
import img3 from "../../../../public/Images/SliderImage2.png"
import { H1, P } from '@/components/ui/Typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Service = () => {
    const SliderImages = [img1, img2, img3]
    return (
        <div className='bg-[#512729] flex md:flex-row flex-col p-16 gap-10 md:gap-32 justify-center w-full'>
            <div className='flex flex-col gap-5 md:gap-10 w-full md:w-1/2 justify-center'>
                <H1 className='text-[#FF835A] md:text-5xl'>Our Skin Care Services</H1>
                <P className='text-white'>Whether you're new to skincare or a seasoned pro, our services are here to help you achieve your healthiest skin. Explore our tailored offerings below.</P>
                <Link href={"https://calendly.com/"} target='_blank'>
                    <Button
                        className="px-4 md:px-8 group bg-white text-[#512729] py-6 rounded-none rounded-tr-xl hover:bg-[#FF835A] hover:text-white cursor-pointer flex items-center gap-2"
                    >
                        View all services
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                        >
                            <path d="M9 18L15 12L9 6" />
                        </svg>
                    </Button>
                </Link>
            </div>
            <div className=' flex justify-center md:justify-end'>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {SliderImages.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 w-full">
                                    <Image
                                        src={_}
                                        alt=''
                                        className=''
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

export default Service
