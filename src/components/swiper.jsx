import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import eventImg2 from "../assets/eventcontent/event-img2.png";
import eventImg3 from "../assets/eventcontent/event-img3.png";
import eventImg4 from "../assets/eventcontent/event-img4.png";
import "../styles/swiperstyle.css";

export default function swiper() {
    const [swiperRef, setSwiperRef] = useState(null);

    const eventCard = [
        {
            imgUrl: eventImg2,
            category: "講座",
            title: "新竹親子動物觀察講座",
            date: "2024/2/25(五)"
        },
        {
            imgUrl: eventImg3,
            category: "展覽",
            title: "2024兩棲爬蟲特寵見面會",
            date: "2024/2/23(五)-2/25(日)"
        },
        {
            imgUrl: eventImg4,
            category: "快閃活動",
            title: "動物觀察-咕溜蛇來囉",
            date: "2024/6/22 (六) - 6/23 (日)"
        },
        {
            imgUrl: eventImg2,
            category: "講座",
            title: "新竹親子動物觀察講座",
            date: "2024/2/25(五)"
        },
        {
            imgUrl: eventImg3,
            category: "展覽",
            title: "2024兩棲爬蟲特寵見面會",
            date: "2024/2/23(五)-2/25(日)"
        },
        {
            imgUrl: eventImg4,
            category: "快閃活動",
            title: "動物觀察-咕溜蛇來囉",
            date: "2024/6/22 (六) - 6/23 (日)"
        },
    ];

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={-40}
                pagination={{
                    type: 'custom',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mb-4 mySwiper swp mxa-w-[900px]"
                breakpoints={{
                    390:{
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768:{
                        slidesPerView: 2,
                        spaceBetween: -60,
                    },
                    1024:{
                        slidesPerView: 3,
                        spaceBetween: -60,
                    }
                }}
            >
                {eventCard.map((event, index) => (
                    <SwiperSlide className='pb-4'>
                    <li key={index} className="bg-white shadow-lg rounded-xl pt-5 px-5 pb-2 w-[246px] hover:-translate-y-5">
                        <a href="">
                            <img src={event.imgUrl} alt="event" className="" />
                            <p className="mt-4 text-xs text-brown-normal">{event.category}</p>
                            <h3 className="mt-1 text-base font-bold tracking-wide text-brown-dark">{event.title}</h3>
                            <p className="font-bold text-base text-green-dark h-[70px] tracking-wide">{event.date}</p>
                        </a>
                    </li>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide className='pb-4 ml-14'>
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
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}