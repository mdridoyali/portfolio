
import vsc from "@/assets/Tools/vsc-removebg-preview.png"
import figma from "@/assets/Tools/figma-removebg-preview.png"
import git from "@/assets/Tools/git-removebg-preview.png"
import github from "@/assets/Tools/github-removebg-preview.png"
import surge from "@/assets/Tools/surge-removebg-preview.png"
import netlify from "@/assets/Tools/netlify-removebg-preview.png"
import vercel from "@/assets/Tools/vercel-removebg-preview (1).png"
import Title from "./Title"
import Image from "next/image"


const Tools = () => {
    return (
        <div className="mb-20 w-11/12 md:w-10/12 mx-auto">
            <Title heading={'Tools Used'} />
            <div  className="flex flex-wrap justify-center gap-5 mt-8 ">
                <div className="flex mt-4  items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md  -rotate-12 ">
                    <p className="font-semibold text-xl">VS Code</p>
                    <Image className="w-12 h-12" src={vsc} alt="" />
                </div>
                <div className="flex mt-4  items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold  text-xl">Git</p>
                    <Image className="w-12 h-12" src={git} alt="" />
                </div>
                <div className="flex mt-4  items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Github</p>
                    <Image className="w-12 h-12" src={github} alt="" />
                </div>
                <div className="flex mt-4  items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Figma</p>
                    <Image className="w-12 h-12" src={figma} alt="" />
                </div>
                <div className="flex mt-4  items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Surge</p>
                    <Image className="w-12 h-12" src={surge} alt="" />
                </div>
                <div className="flex mt-4 items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Vercel</p>
                    <Image className="w-12 h-12" src={vercel} alt="" />
                </div>
                <div className="flex mt-4 items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Netlify</p>
                    <Image className="w-12 h-12" src={netlify} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Tools;