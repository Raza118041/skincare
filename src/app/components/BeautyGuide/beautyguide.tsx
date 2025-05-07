import Image from 'next/image'
import React from 'react'
import Stars from "../../../../public/Images/stars.svg"
import { H1, P } from '@/components/ui/Typography'
import { Button } from '@/components/ui/button'
import Ingredients from "../../../../public/Images/ingredients.svg"
import Sustainable from "../../../../public/Images/sustainable.svg"
import Approved from "../../../../public/Images/approved.svg"

const BeautyGuide = () => {
    const skincare = [
        { image: Ingredients, title: "Clean ingredients", subTitle: "We prioritize high-quality, natural ingredients that are safe and effective for your skin." },
        { image: Sustainable, title: "Sustainable beauty", subTitle: "Our eco-conscious approach ensures that our products are kind to the environment and your skin." },
        { image: Approved, title: "Dermatologist-approved", subTitle: "Each formula is rigorously tested for purity and efficacy, so you can trust what goes on your skin." },
    ]

    const bgColors = ["bg-[#FFEFD7]", "bg-[#FEE0D9]", "bg-[#FCF3EE]"]
    return (
        <div className=''>
            <div className='flex justify-center items-center flex-col gap-5'>
                <Image src={Stars} alt='stars' className='' width={60} height={60} />
                <H1>The ultimate guide to radiant beauty</H1>
                <P className='text-center md:w-96'>At Skinn Care, we believe that healthy skin starts with pure, effective ingredients. Our journey began with a simple mission</P>
                <div className=''>
                    <Button
                        className="bg-[#FF835A] px-6 py-3 w-full text-[#512729] rounded-none rounded-tr-xl hover:bg-[#FF835A] cursor-pointer flex items-center gap-2"
                    >
                        Learn more
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
                </div>
            </div>
            <div className='flex flex-row justify-center items-center py-10 md:py-20 gap-[30px] max-md:overflow-scroll'>
                {skincare.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center h-150 md:h-[539px] md:w-[380px] rounded-full  ${bgColors[index % bgColors.length]}`}
                    >
                        <div className='flex flex-col justify-center items-center px-4 gap-5'>
                            <Image
                                src={item.image}
                                alt=''
                                className='w-10 h-10 md:w-14 md:h-14 object-contain rounded-md'
                            />
                            <H1 className='text-center'>{item.title}</H1>
                            <P className='text-center'>{item.subTitle}</P>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeautyGuide
