import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaHeart } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white">
      <div className="w-10/12 mx-auto py-7 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Branding & Copyright */}
        <div className="text-center md:text-left space-y-2 flex flex-col justify-center items-center">
          <Link href="/" className="flex justify-center md:justify-start">
            <Image src={logo} alt="Md Ridoy Logo" width={80} height={80} />
          </Link>
          <p className="text-sm">© 2025 Md Ridoy. All rights reserved.</p>
        </div>

        {/* Right Side - Social Links */}
        <div className="text-center md:text-right">
          <p className="text-base flex justify-center  items-center gap-2">
            Follow Me on
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <Link href="https://www.linkedin.com/in/md-ridoy-islam-7a3b39280/" target="_blank">
              <FaLinkedin className="text-blue-500 w-7 h-7 hover:text-blue-400 transition-all" />
            </Link>
            <Link href="https://www.facebook.com/mdridoy.raj.355" target="_blank">
              <FaFacebook className="text-blue-600 w-7 h-7 hover:text-blue-500 transition-all" />
            </Link>
            <Link href="https://www.instagram.com/mdridoy.raj.355/?hl=bn" target="_blank">
              <FaInstagram className="text-pink-500 w-7 h-7 hover:text-pink-400 transition-all" />
            </Link>
            <Link href="mailto:mdridoyislamr@gmail.com" target="_blank">
              <FaEnvelope className="text-red-500 w-7 h-7 hover:text-red-400 transition-all" />
            </Link>
            <Link href="https://github.com/mdridoyali" target="_blank">
              <FaGithub className="text-gray-300 w-7 h-7 hover:text-gray-400 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm p-5 bg-[#333333]">
        Made with <FaHeart className="inline text-red-500" /> by Md Ridoy
      </div>
    </footer>
  );
};

export default Footer;
