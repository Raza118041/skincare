import Image from 'next/image'
import React from 'react'
import bgImage from "../../../../public/Images/flower.svg"
import { H1, P } from '@/components/ui/Typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Service = () => {
    return (
        <div className='bg-[#512729] relative flex flex-row justify-start items-start'>
            <div className='p-10 relative md:p-20 flex flex-col w-full gap-10'>
                <div className=''>
                    <Image
                        src={bgImage}
                        alt=''
                        width={100}
                        height={100}
                        className=''
                    />
                </div>
                <div className='flex absolute flex-col gap-5'>
                    <H1 className='text-[#FF835A]'>Our Skin Care Services</H1>
                    <P className='text-[#FF835A]'>Whether you're new to skincare or a seasoned pro, our services are here to help you achieve your healthiest skin. Explore our tailored offerings below.</P>
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
            </div>
        </div>
    )
}

export default Service
