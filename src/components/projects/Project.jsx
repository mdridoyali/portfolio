"use client"

import img1 from '@/assets/medi/1.png'
import img2 from '@/assets/medi/2.png'
import img3 from '@/assets/medi/3.png'
import img4 from '@/assets/medi/4.png'
import img5 from '@/assets/medi/5.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Project() {
    return (
        <>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={img1} alt="Project Image 1" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img2} alt="Project Image 2" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img3} alt="Project Image 3" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img4} alt="Project Image 4" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img5} alt="Project Image 4" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
4