import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/Typography'
import Image from 'next/image'
import phone from "../../../../public/Images/phone-1.svg"
import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-col lg:flex-row justify-between  items-center py-20 lg:py-10 mx-10 px-16 md:px-26 lg:px-32 gap-5 lg:gap-20 bg-[#F4EAE2] rounded-full'>
                <div className='flex flex-col'>
                    <H1>Ready for radiant skin?</H1>
                    <P>Book your personalized skincare session today and discover your natural glow.</P>
                </div>
                <div>
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
    )
}

export default CTA
