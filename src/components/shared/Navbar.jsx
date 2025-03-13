"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logo.png'
import { FaHome, FaServicestack, FaArrowRight } from "react-icons/fa";
import { MdRoundaboutRight, MdAddCall, MdLogin } from "react-icons/md";
import { usePathname } from "next/navigation";



import { useEffect } from "react";
import Script from "next/script";
import NavLink from "./NavLink";


export default function Navbar() {

    const pathname = usePathname();

    return (
        <div className="border-b shadow-md border">
            <nav className="w-10/12 flex justify-between items-center mx-auto py-2  ">
                {/* Logo */}
                <div className="w-10 md:w-6 flex">
                    <Link className="flex gap-2 items-center justify-center" href={'/'}> <Image className="" src={logo} alt="logo" width={60} /><h1 className="text-5xl font-semibold">Ri<span className="text-blue-600">doy</span></h1></Link>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-9 h-9 md:hidden" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-5 mt-10">
                            <SheetClose asChild>
                                <Link href="/" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><FaHome />Home</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/projects" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/contact' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><MdAddCall />Projects</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/contact" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/contact' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><MdAddCall />Contact Us</span><FaArrowRight /></Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <NavLink href="/" currentPath={pathname}>Home</NavLink>
                    <NavLink href="/projects" currentPath={pathname}>Projects</NavLink>
                    <NavLink href="/contact" currentPath={pathname}>Contact Us</NavLink>
                </div>

            </nav>
        </div>
    );
}



// export const AosInit = () => {
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
//         }
//     }, []);

//     return (
//         <Script
//             src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
//             strategy="afterInteractive"
//         />
//     );
// };
