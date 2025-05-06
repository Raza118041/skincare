"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import G from "../../../../public/Images/G.svg"
import phone from "../../../../public/Images/phone.svg"
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const navLinks = [
        { name: "Shop", path: "/shop" },
        { name: "Home", path: "/" },
        { name: "Our story", path: "/ourstory" }
    ]

const dropdownLinks = [
    {name: "About", path: "/about"},
    {name: "Service Detail", path: "/servicedetail"},
    {name: "Contact", path: "/contact"},

]


    return (
        <div className='w-full bg-white flex justify-between items-center p-7'>
            <div>
                <Image
                    src={G}
                    alt='logo'
                    width={100}
                    height={100}
                />
            </div>
            <div className='hidden md:flex gap-5'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.path}>{link.name}</Link>
                ))}
                <div 
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>Pages</span>
                        <ChevronDown size={16} />
                    </div>
                    {dropdown && (
                        <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40 z-10">
                            {dropdownLinks.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.path}
                                    className="block px-4 py-2 hover:underline underline-offset-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Image
                    src={phone}
                    alt='phone'
                    width={20}
                    height={20}
                />
                <span>+(123) 456-7890</span>
            </div>
        </div>
    )
}

export default Navbar
