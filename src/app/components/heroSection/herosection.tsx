import Image from 'next/image'
import React from 'react'
import women from "../../../../public/Images/girl.png"
import vector from "../../../../public/Images/Vector.svg"
import phone from "../../../../public/Images/phone-1.svg"
import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/Typography'

const HeroSection = () => {
    return (
        <div className='bg-[#FCF3EE] flex justify-between'>
            <div className='flex flex-col p-10'>
                <div>
                    <Image
                        src={vector}
                        alt='image'
                        width={30}
                        height={30}
                        className='w-32 object-cover mb-10'
                    />
                </div>
                <H1>Glow naturally with skinn care</H1>
                <P className='w-md'>Our skinncare line is crafted with pure, high-quality ingredients for visible results.</P>
                <div className='w-40 mt-3'>
                    <Button
                        className='px-8 bg-[#FF835A] text-[#512729] py-5 rounded-none rounded-tr-xl hover:bg-[#FF835A] cursor-pointer'>
                        <Image src={phone}
                            alt='phone'
                            className=''
                            width={20}
                            height={20}
                        />
                        Book an appointment
                    </Button>
                </div>
            </div>
            <div className='w-full'>
                <Image
                    src={women}
                    alt='image'
                    width={100}
                    height={100}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}

export default HeroSection
