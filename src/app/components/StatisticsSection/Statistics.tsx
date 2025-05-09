'use client'

import React, { useEffect } from 'react'
import { P } from '@/components/ui/Typography'
import { animate, useMotionValue, useTransform, motion } from 'framer-motion'

const Statistics = () => {

    const Counter = ({ to }: { to: number }) => {
        const count = useMotionValue(0)
        const rounded = useTransform(count, Math.round)

        useEffect(() => {
            const controls = animate(count, to, { duration: 3 })
            return () => controls.stop()
        }, [to])

        return (
            <motion.span>
                {rounded}
            </motion.span>
        )
    }

    return (
        <div className='flex flex-col md:flex-row w-full gap-12 md:gap-32 p-16'>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row gap-1 font-bold'><Counter to={50000} />+</div>
                <P>Satisfied clients who trust us with their skincare.</P>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row gap-1 font-bold'><Counter to={10} />+</div>
                <P>Years providing expert skincare solutions</P>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row gap-1 font-bold '><Counter to={20000} />+</div>
                <P>Transformative treatments completed with care.</P>
            </div>
        </div>
    )
}

export default Statistics
