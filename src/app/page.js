import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Skills from "@/components/home/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Skills/>
    </div>
  );
}
