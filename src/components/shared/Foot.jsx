import linkedin from "@/assets/logo/linkedin.png"
import fb from "@/assets/logo/linkedin.png"
import instagram from "@/assets/logo/linkedin.png"
import email from "@/assets/logo/linkedin.png"
import github from "@/assets/logo/linkedin.png"
import { FaLongArrowAltRight, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import logo from "@/assets/logo_blue.png"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
      
            <footer className="footer items-center justify-center md:justify-between px-7 py-16 bg-neutral text-neutral-content">
                <aside className="items-center  md:grid-flow-col">
                    <div className="flex items-center w-full">
                        <Image className="w-8 h-8 " src={logo} alt="logo" />
                        <h1 className="text-4xl  font-semibold">Ri<span className="text-amber-500" >doy</span></h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-2"><FaWhatsapp /><p>+8801751437915</p></div>
                        <div className="flex items-center gap-2"> <FaMailBulk /><p>mdridoyislamr@gmail.com</p></div>
                    </div>
                </aside>
                <p className="hidden md:block">Copyright © 2023 - All right reserved</p>
                <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
                    <div className="text-base mt-1 flex items-center gap-1" ><p>Follow Me on</p><FaLongArrowAltRight /></div>
                    <Link href="https://www.linkedin.com/in/md-ridoy-islam-7a3b39280/" ><Image className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={linkedin} /></Link>
                    <Link href="https://www.facebook.com/mdridoy.raj.355" ><Image className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={fb} /></Link>
                    <Link href="https://www.instagram.com/mdridoy.raj.355/?hl=bn" ><Image className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={instagram} /></Link>
                    <Link href="mailto:mdridoyislamr@gmail.com" ><Image className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={github} /></Link>
                    <Link href="https://github.com/mdridoyali" ><Image className="w-7 h-7 md:w-8 md:h-8   rounded-lg" src={email} /></Link>
                </nav>
                <p className="block md:hidden">Copyright © 2023 - All right reserved</p>
            </footer>
   
    );
};

export default Footer;