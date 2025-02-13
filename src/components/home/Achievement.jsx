
import img from "@/assets/certificate.jpg"
import Title from "./Title";
import Image from "next/image";

const Achievement = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <Title heading={'Achievement'} />
            <div className=" mb-16 mt-7 mx-auto">
                <Image className="mx-auto  md:w-8/12 lg:w-6/12 text-center" src={img} alt="" />
                <p className="mx-auto  md:w-8/12 lg:w-6/12 pl-[10px]" >Certificate from Programming Hero for completing front-end web development course successfully.</p>
            </div>
        </div>
    );
};

export default Achievement;
