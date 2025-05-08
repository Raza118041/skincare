"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { H1 } from '@/components/ui/Typography'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import GraphoIcon from "../../../../public/Images/grapho.svg"
import Iconic from "../../../../public/Images/iconic.svg"
import Logique from "../../../../public/Images/logique.svg"
import Visually from "../../../../public/Images/Visually.svg"
import Wayline from "../../../../public/Images/wayline.svg"
import Optimal from "../../../../public/Images/optimal.svg"
import Women from "../../../../public/Images/women.svg"
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from 'antd';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

dayjs.extend(customParseFormat);

const Sponsors = () => {
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        phone: z.string().min(10, { message: "Phone number is required" }),
        email: z
            .string()
            .min(1, { message: "Email is required" })
            .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
                message: "Enter a valid email address",
            }),
        date: z.date({ required_error: "Date is required" }),
        time: z.string().min(1, { message: "Time is required" }),
        services: z.string().min(1, { message: "Please select a service" }),
        message: z.string().min(5, { message: "Message must be at least 5 characters" })
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            phone: "",
            email: "",
            date: undefined,
            time: "",
            services: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
       toast.success("Your form has been successfully submitted. We will get back to you shortly.")
    }

    const CompanyLogos = [
        {
            image: GraphoIcon
        },
        {
            image: Iconic
        },
        {
            image: Logique
        },
        {
            image: Visually
        },
        {
            image: Wayline
        },
        {
            image: Optimal
        }
    ]
    return (
        <div className='flex flex-col md:flex-row py-16'>
            <div className="w-full md:w-1/2 p-5 md:p-8">
                <H1 className='mb-4'>Our Sponsors</H1>
                <div className="md:h-screen flex flex-col justify-between">
                    <div className='grid grid-cols-3 '>
                        {
                            CompanyLogos.map((item, index) => (
                                <div key={index} className=''>
                                    <Image
                                        src={item.image}
                                        alt=''
                                        width={0}
                                        height={0}
                                        className='w-20 h-20'
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='my-0'>
                        <Image
                            src={Women}
                            alt=''
                            className=''
                        />
                    </div>
                </div>
            </div>
            <div className='bg-[#FEE0D9] w-full md:w-1/2 p-5 md:p-8'>
                <H1 className="mb-5">Book an appointment</H1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel className="text-[#512729]">Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} className="border-[1.4px] border-[#512729] solid focus:outline-none focus:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel className="text-[#512729]">Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone" {...field} className="border-[1.4px] border-[#512729] solid" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#512729]">Select Date</FormLabel>
                                    <FormControl>
                                        <DatePicker onChange={(date) => field.onChange(date?.toDate())} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#512729]">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} className="border-[1.4px] border-[#512729] solid focus:outline-none focus:ring-0" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="services"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Select
                                            value={field.value}
                                            onValueChange={(value) => field.onChange(value)}
                                        >
                                            <SelectTrigger className="w-[180px] border-[1.4px] border-black text-black">
                                                <SelectValue placeholder="Select a Service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Select Services</SelectLabel>
                                                    <SelectItem value="Facials & Skin Treatments">Facials & Skin Treatments</SelectItem>
                                                    <SelectItem value="Acne Treatment">Acne Treatment</SelectItem>
                                                    <SelectItem value="Anti-Aging Treatment">Anti-Aging Treatment</SelectItem>
                                                    <SelectItem value="HydraFacial">HydraFacial</SelectItem>
                                                    <SelectItem value="Chemical Peels">Chemical Peels</SelectItem>
                                                    <SelectItem value="Microneedling">Microneedling</SelectItem>
                                                    <SelectItem value="Laser Hair Removal">Laser Hair Removal</SelectItem>
                                                    <SelectItem value="Skin Brightening">Skin Brightening</SelectItem>
                                                    <SelectItem value="Pigmentation Treatment">Pigmentation Treatment</SelectItem>
                                                    <SelectItem value="Men’s Grooming Services">Men’s Grooming Services</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#512729]">Select Time</FormLabel>
                                    <FormControl>
                                        <TimePicker
                                            format="HH:mm"
                                            onChange={(time) => field.onChange(time?.format('HH:mm'))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="Type your message here."
                                            className="border-[1.4px] border-black text-black"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="cursor-pointer px-16 py-5">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Sponsors
