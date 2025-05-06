import Image from 'next/image'
import React from 'react'
import G from "../../../../public/Images/G.svg"
import phone from "../../../../public/Images/phone.svg"
import Link from 'next/link'

const Navbar = () => {
    const navLinks = [
        { name: "Shop", path: "/shop" },
        { name: "Home", path: "/" },
        { name: "Our story", path: "/ourstory" },
        { name: "Pages", path: "/" },

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
