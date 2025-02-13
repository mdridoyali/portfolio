import about from "@/assets/aboutMe.jpg";
import ridoy from "@/assets/ridoy.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div id="about" className="relative text-white my-16 text-center pt-5">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${about.src})` }}
      />

      {/* Content Section */}
      <div className="relative w-11/12 md:w-10/12 mx-auto bg-black bg-opacity-50 p-10 rounded-lg">
        <Title heading={"About me"} />

        <div className="md:flex justify-between items-center md:px-10 mt-5 pb-14">
          {/* Left - Profile Image & Buttons */}
          <div className="w-full md:w-1/3 mx-auto text-center space-y-5">
            <Image
              className="w-24 h-24 bg-gray-50 rounded-full mx-auto"
              src={ridoy}
              alt="Profile Picture"
            />
            <div className="flex justify-center gap-3">
              <Link href={"/Ridoy-resume.pdf"} download>
                <Button className="bg-blue-500 flex items-center gap-2">
                  Download CV <FaCloudDownloadAlt className="text-xl" />
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="border-2 border-blue-500 bg-transparent text-white">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - About Text */}
          <p className="flex-1 mt-7 px-2 md:mt-0 text-lg text-left">
            Hi, I'm <span className=" font-semibold">Md Ridoy Ali</span>, a passionate and creative
            Frontend Web Developer. I enjoy turning complex problems into
            simple, beautiful, and intuitive designs. My goal is to create
            meaningful and user-friendly web experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
