import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import eventImg2 from "../assets/eventcontent/event-img2.png";
import "../styles/swiperstyle.css";

export default function swiper() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={-15}
                pagination={{
                    type: 'custom',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mb-4 mySwiper"
            >
                <SwiperSlide className='pb-4 ml-14'>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='pb-4 '>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='pb-4 '>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='pb-4 '>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='pb-4 '>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
                <SwiperSlide className='pb-4 '>
                    <li className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px]">
                        <img src={eventImg2} alt="event" className="" />
                        <p className="mt-4 text-xs text-brown-normal">快閃活動</p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                        <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">2024/4/1 (六) - 4/2 (日)</p>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    )
}