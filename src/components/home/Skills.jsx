"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Title from "./Title";
import Image from "next/image";


import html from "@/assets/brand/html.webp"
import css from "@/assets/brand/CSS3_logo.svg.png"
import js from "@/assets/brand/js (2).png"
import tailwind from "@/assets/brand/tailwind.png"
import react from "@/assets/brand/re.png"
import firebase from "@/assets/brand/firebase.png"
import node from "@/assets/brand/NODE2.png"
import express from "@/assets/brand/express.png"
import mongodb from "@/assets/brand/mongodb.png"



const skills = [
  {
    name: "HTML5",
    percentage: "92%",
    bgColor: "bg-orange-50",
    hoverBgColor: "hover:bg-orange-100",
    image: html,
  },
  {
    name: "CSS3",
    percentage: "90%",
    bgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-200",
    image: css
  },
  {
    name: "Tailwind",
    percentage: "90%",
    bgColor: "bg-lime-100",
    hoverBgColor: "hover:bg-lime-200",
    image: tailwind
  },
  {
    name: "JavaScript",
    percentage: "80%",
    bgColor: "bg-teal-100",
    hoverBgColor: "hover:bg-teal-200",
    image: js
  },
  {
    name: "React",
    percentage: "85%",
    bgColor: "bg-purple-100",
    hoverBgColor: "hover:bg-purple-200",
    image: react
  },
  {
    name: "Firebase",
    percentage: "90%",
    bgColor: "bg-light-blue-100",
    hoverBgColor: "hover:bg-blue-200",
    image: firebase
  },
  {
    name: "Node.JS",
    percentage: "70%",
    bgColor: "bg-red-100",
    hoverBgColor: "hover:bg-red-200",
    image: node
  },
  {
    name: "Express.JS",
    percentage: "70%",
    bgColor: "bg-amber-100",
    hoverBgColor: "hover:bg-amber-200",
    image: express
  },
  {
    name: "MongoDB",
    percentage: "70%",
    bgColor: "bg-blue-100",
    hoverBgColor: "hover:bg-blue-200",
    image: mongodb
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-11/12 md:w-10/12 mx-auto mb-16 ">
     <div  className='mb-7'> <Title heading="My Skills" /></div>
      <Swiper
        slidesPerView={2} // মোবাইলে ২টি স্কিল দেখাবে
        spaceBetween={15}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 }, // ট্যাবলেটে ৩টি স্কিল দেখাবে
          1024: { slidesPerView: 4, spaceBetween: 25 }, // লার্জ স্ক্রিনে ৪টি স্কিল দেখাবে
          1280: { slidesPerView: 6, spaceBetween: 30 }, // এক্সট্রা লার্জ স্ক্রিনে ৬টি স্কিল দেখাবে
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className={`${skill.bgColor} ${skill.hoverBgColor} text-center p-5 space-y-4 rounded-lg shadow-lg`}>
              <Image className="w-24 h-24 mx-auto" src={skill?.image} alt={skill.name} width={96} height={96} />
              <p className="bg-blue-500 w-20 p-1 text-center mx-auto text-xl font-bold text-white rounded-md">
                {skill.percentage}
              </p>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
