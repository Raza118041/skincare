import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../../public/Images/footerLogo.svg"
import phone from "../../../../public/Images/phone-1.svg"
import { H1, P } from '@/components/ui/Typography'

const Footer = () => {
    const footerLinks = [
        {
            title: "Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "Home 2", path: "/home2" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Feature", path: "/feature" },
                { name: "pricing", path: "/pricing" },
                { name: "Blogs", path: "/blogs" },
            ]
        },
        {
            title: "",
            links: [
                { name: "Blog detail", path: "/blogdetail" },
                { name: "Locations", path: "/locations" },
                { name: "Services", path: "/services" },
                { name: "FAQs", path: "/faqs" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Custom facials", path: "/customfacials" },
                { name: "Anti-aging treatments", path: "/anti-angingtreatments" },
                { name: "Acne solutions", path: "/acnesolutions" },
                { name: "Hyderation therapy", path: "/hyderationtherapy" },
                { name: "Skin resurfacing", path: "/skinresurfaing" },
                { name: "Specialty treatments", path: "/specialtytreatments" },
            ]
        },
        {
            title: "Socials",
            links: [
                { icon: "", name: "Instagram", path: "https://www.instagram.com/" },
                { icon: "", name: "Facebook", path: "https://web.facebook.com/?_rdc=1&_rdr#" },
                { icon: "", name: "Twitter", path: "https://x.com/" },
                { icon: "", name: "Printerest", path: "https://www.pinterest.com/" },
            ]
        },
        {
            title: "Contact us",
            links: [
                { icon: "", name: "(123) 456-7890", path: "tel:+923011339381" },
                { icon: "", name: "info@example.com", path: "mailto:aliraza118041@gmail.com" },
                { icon: "", name: "123 Skincare Street, Wellness City, NY 10001", path: "#" },
            ]
        },
    ]
    return (
        <>
            <div className='bg-[#572B2C] flex flex-col md:flex-row gap-7 md:gap-10 p-10 md:p-16'>
                <div className='logo'>
                    <Image
                        src={logo}
                        alt='logo'
                        width={100}
                        height={100}
                        className='md:w-full md:h-full'
                    />
                </div>
                <div className='paragraph'>
                    <P className='text-white'>At Glisten, we’re dedicated to helping you achieve radiant, healthy skin through personalized skincare treatments and expert guidance.</P>
                </div>
                <div className=''>
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
                            Schedule appointment
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='bg-[#572B2C] px-5 md:px-16 py-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-24'>
                    {footerLinks.map((section, index) => (
                        <div key={index} className=''>
                            <span className='text-white font-extrabold'>{section.title || '\u00A0'}</span>
                            {
                                section.links.map((link, index) => (
                                    <div className='' key={index}>
                                        {(link as any).icon && (
                                            <Image src={(link as any).icon} alt={link.name} width={16} height={16} />
                                        )}
                                        <Link href={link.path} className='text-white font-light hover:underline underline-offset-4'>{link.name}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer
