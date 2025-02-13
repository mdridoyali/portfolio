import About from "@/components/home/About";
import Achievement from "@/components/home/Achievement";
import Banner from "@/components/home/Banner";
import Educations from "@/components/home/Educations";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Tools from "@/components/home/Tools";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Skills/>
      <Educations/>
      <Experience/>
      <Achievement/>
      <Tools/>
    </div>
  );
}
