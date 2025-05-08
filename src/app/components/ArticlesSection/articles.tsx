import { H1, P } from '@/components/ui/Typography'
import Image from 'next/image'
import React from 'react'
import SkinCare from "../../../../public/Images/SkinCare.png"
import Ingredients from "../../../../public/Images/ingredients.png"
import SkinCare1 from "../../../../public/Images/skincare1.png"

const Articles = () => {
    const articlesArray = [
        { image: SkinCare, title: "The ultimate guide to winter skincare", month: "November 3, 2024" },
        { image: Ingredients, title: "Top 5 anti-aging ingredients you need to know", month: "November 3, 2024" },
        { image: SkinCare1, title: "Common skincare myths – debunked!", month: "November 3, 2024" },
    ]
    return (
        <div className="container mx-auto py-8 px-4">
        <H1 className='text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12'>Skincare tips & insights</H1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {articlesArray.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col w-full h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'
            >
              <div className="relative w-full h-0 pb-[70%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <H1 className='text-lg md:text-xl font-semibold mb-2 line-clamp-2'>{item.title}</H1>
                <P className='text-sm text-gray-500 mt-auto'>{item.month}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Articles
