import Image from 'next/image'
import React from 'react'
import phone from "../../../../public/Images/phone-1.svg"
import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/Typography'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 animate-slow-motion"
            >
                <source src="/videos/4008327-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex justify-between h-full">
                <div className="flex flex-col justify-center px-10 py-20 md:px-20 md:py-20 text-white bg-black/20 w-full backdrop-blur-sm">
                    <H1 className='text-[#FF835A]/80 mb-4 md:mb-7 md:text-4xl'>Glow naturally with skin care</H1>
                    <P className="w-full">Our skincare line is crafted with pure,</P>
                    <P className="mb-3 md:mb-6">high-quality ingredients for visible results.</P>
                    <div className="w-auto">
                        <Link href={"https://calendly.com/"} target='_blank'>
                            <Button
                                className="px-4 md:px-8 group bg-[#FF835A] text-[#512729] py-6 rounded-none rounded-tr-xl hover:bg-[#FF835A] hover:text-white cursor-pointer flex items-center gap-2"
                            >
                                <Image
                                    src={phone}
                                    alt="phone"
                                    width={20}
                                    height={20}
                                    className='transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200'
                                />
                                Book an appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection