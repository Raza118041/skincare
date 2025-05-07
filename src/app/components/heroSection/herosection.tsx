import Image from 'next/image'
import React from 'react'
import women from "../../../../public/Images/girl.jpg"
import vector from "../../../../public/Images/Vector.svg"
import phone from "../../../../public/Images/phone-1.svg"
import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/Typography'

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
                <div className="flex flex-col justify-center p-20 text-white bg-black/20 w-full backdrop-blur-sm">
                    {/* <div>
                        <Image
                            src={vector}
                            alt="logo"
                            width={30}
                            height={30}
                            className="w-32 object-cover mb-10"
                        />
                    </div> */}
                    <H1 className='text-[#FF835A]/80 mb-3 text-4xl'>Glow naturally with skin care</H1>
                    <P className="w-full">Our skincare line is crafted with pure,</P>
                    <P className="mb-6">high-quality ingredients for visible results.</P>
                    <div className="w-auto">
                        <Button
                            className="px-8 bg-[#FF835A] text-[#512729] py-6 rounded-none rounded-tr-xl hover:bg-[#FF835A] cursor-pointer flex items-center gap-2"
                        >
                            <Image
                                src={phone}
                                alt="phone"
                                width={20}
                                height={20}
                            />
                            Book an appointment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection