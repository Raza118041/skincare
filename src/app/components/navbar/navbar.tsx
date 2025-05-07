"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import G from "../../../../public/Images/G.svg"
import phone from "../../../../public/Images/phone.svg"
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { P } from '@/components/ui/Typography'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Our story", path: "/ourstory" }
    ]

    const dropdownLinks = [
        { name: "About", path: "/about" },
        { name: "Service Detail", path: "/servicedetail" },
        { name: "Contact", path: "/contact" },

    ]

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='w-full sticky top-0 left-0 flex justify-between items-center p-4 md:p-7 z-50 md:backdrop-blur-lg md:bg-white/70 bg-white'>
            <div>
                <Image
                    src={G}
                    alt='logo'
                    width={100}
                    height={100}
                    className=''
                />
            </div>
            <div className='hidden md:flex gap-5'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.path} className='hover:text-[#FF835A] transition'>{link.name}</Link>
                ))}
                <div
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>Pages</span>
                        <ChevronDown size={16} className={dropdown ? 'rotate-180 transition' : 'transition'} />
                    </div>
                    {dropdown && (
                        <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 z-10 w-40">
                            {dropdownLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className="block px-4 py-1 hover:underline underline-offset-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='hidden md:flex items-center gap-2'>
                <Image
                    src={phone}
                    alt='phone'
                    width={20}
                    height={20}
                />
                <P>+1 212 555 4567</P>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMobileMenu} className='p-2'>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <>
                <div className='md:hidden fixed  overflow-y-hidden inset-0 h-[calc(100vh-72px)] top-[72px] bg-white p-5'>
                    <div className='flex flex-col gap-5'>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className='text-lg hover:text-[#FF835A] transition'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className='relative'>
                            <div
                                className="flex items-center gap-1 cursor-pointer text-lg"
                                onClick={() => setDropdown(!dropdown)}
                            >
                                <span>Pages</span>
                                <ChevronDown size={16} className={dropdown ? 'rotate-180 transition' : 'transition'} />
                            </div>
                            {dropdown && (
                                <div className="pl-4 mt-2 flex flex-col gap-2">
                                    {dropdownLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.path}
                                            className="hover:text-[#FF835A] transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='flex items-center gap-2 mt-4 pt-4 border-t'>
                            <Image
                                src={phone}
                                alt='phone'
                                width={20}
                                height={20}
                            />
                            <P>+1 212 555 4567</P>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar
