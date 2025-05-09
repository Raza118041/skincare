import React from 'react'
import gallery1 from "../../../../public/Images/gallery1.png"
import gallery2 from "../../../../public/Images/gallery2.png"
import gallery3 from "../../../../public/Images/gallery3.png"
import gallery4 from "../../../../public/Images/gallery4.png"
import InstaIcon from "../../../../public/Images/instgramLink.svg"
import Image from 'next/image'
import { H1 } from '@/components/ui/Typography'


const Gallery = () => {
    const gallery = [gallery1, gallery2, gallery3, gallery4]
    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-10'>
            {
                gallery.map((item, index) => (
                    <div key={index} className='flex flex-row relative w-fit group'>
                        <Image
                            src={item}
                            alt=''
                            className='group-hover:blur-sm transition duration-300'
                        />
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 flex-col group-hover:opacity-100 transition duration-300'>
                            <Image
                                src={InstaIcon}
                                alt=''
                                className=''
                            />
                            <H1 className='text-white'>@glisten</H1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery
