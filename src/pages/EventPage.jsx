import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import mainImg1 from "../assets/event/main-swp-img1.png";
import mainImg2 from "../assets/event/main-swp-img2.png";
import mainImg3 from "../assets/event/main-swp-img3.png";
import eventImg1 from '../assets/event/event-img1.svg';
import eventImg2 from '../assets/event/event-img2.svg';
import eventImg3 from '../assets/event/event-img3.svg';
import eventImg4 from '../assets/event/event-img4.svg';
import eventImg5 from '../assets/event/event-img5.svg';
import eventImg6 from '../assets/event/event-img6.svg';
import eventImg7 from '../assets/event/event-img7.svg';
import eventImg8 from '../assets/event/event-img8.svg';
import eventImg9 from '../assets/event/event-img9.svg';
import plate from '../assets/event/plate-1.svg';
import searchIcon from '../assets/event/event-search.svg';
import "../styles/swiperstyle.css";
import { Link } from 'react-router-dom';


export default function StoreContent() {
    const [swiperRef, setSwiperRef] = useState(null);

    const mainSwpImage = [mainImg1, mainImg2, mainImg3];
    const hotEvents = [
        {
            imgUrl: eventImg1,
            category: "展覽",
            title: "艸植感市集",
            date: "2024/11/11 (六)-11/13 (日)"
        },
        {
            imgUrl: eventImg2,
            category: "展覽",
            title: "2024台灣兩棲爬蟲博覽會",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {
            imgUrl: eventImg3,
            category: "展覽",
            title: "艸我的方向走來2.0",
            date: "2024/7/15 (六)-7/16 (日)"
        },
        {
            imgUrl: eventImg1,
            category: "展覽",
            title: "艸植感市集",
            date: "2024/11/11 (六)-11/13 (日)"
        },
        {
            imgUrl: eventImg2,
            category: "展覽",
            title: "2024台灣兩棲爬蟲博覽會",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {
            imgUrl: eventImg3,
            category: "展覽",
            title: "艸我的方向走來2.0",
            date: "2024/7/15 (六)-7/16 (日)"
        }
    ];
    const featuredEvents = [
        {
            imgUrl: eventImg4,
            category: "快閃活動",
            title: "叢林森遊會 爬蟲主題市集",
            date: "2024/4/1 (六) - 4/2 (日)"
        },
        {
            imgUrl: eventImg5,
            category: "線上活動",
            title: "台灣東部爬蟲的二三事",
            date: "2024/10/12 (六)"
        },
        {
            imgUrl: eventImg6,
            category: "市集",
            title: "2024 萌舺親子爬市集",
            date: "2024/10/07 (六) - 10/08 (日)"
        },
        {
            imgUrl: eventImg4,
            category: "快閃活動",
            title: "叢林森遊會 爬蟲主題市集",
            date: "2024/4/1 (六) - 4/2 (日)"
        },
        {
            imgUrl: eventImg5,
            category: "線上活動",
            title: "台灣東部爬蟲的二三事",
            date: "2024/10/12 (六)"
        },
        {
            imgUrl: eventImg6,
            category: "市集",
            title: "2024 萌舺親子爬市集",
            date: "2024/10/07 (六) - 10/08 (日)"
        },
    ]
    const searchCard = [
        {   
            imgUrl: eventImg7,
            category: "展覽",
            title: "台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {
            imgUrl: eventImg8,
            category: "展覽",
            title: "台北｜2024 水美園 - 創四季 【植栽、 爬蟲、昆蟲、礦石】 盛典｜花博爭豔館",
            date: "2024/8/26 (六)-8/27 (日)"
        },
        {
            imgUrl: eventImg9,
            category: "展覽",
            title: "台中｜2024台灣爬蟲季｜台中世貿二館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {   
            imgUrl: eventImg7,
            category: "展覽",
            title: "台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {
            imgUrl: eventImg8,
            category: "展覽",
            title: "台北｜2024 水美園 - 創四季 【植栽、 爬蟲、昆蟲、礦石】 盛典｜花博爭豔館",
            date: "2024/8/26 (六)-8/27 (日)"
        },
        {
            imgUrl: eventImg9,
            category: "展覽",
            title: "台中｜2024台灣爬蟲季｜台中世貿二館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {   
            imgUrl: eventImg7,
            category: "展覽",
            title: "台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
        {
            imgUrl: eventImg8,
            category: "展覽",
            title: "台北｜2024 水美園 - 創四季 【植栽、 爬蟲、昆蟲、礦石】 盛典｜花博爭豔館",
            date: "2024/8/26 (六)-8/27 (日)"
        },
        {
            imgUrl: eventImg9,
            category: "展覽",
            title: "台中｜2024台灣爬蟲季｜台中世貿二館",
            date: "2024/6/22 (六)-6/23 (日)"
        },
    ]

    return (
        <>
            <main className="py-32 bg-gray-normal">
                {/*Slider*/}
                <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={2}
                        centeredSlides={true}
                        spaceBetween={60}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="w-full mb-4 mySwiper mainswp-btn"
                        breakpoints={{
                            390: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                // slidesPerView: 3,
                                spaceBetween: 60,
                            }
                        }}
                    >
                    {mainSwpImage.map((photo, i) =>(
                        <SwiperSlide key={i}>
                            <img src={photo} alt="photo"  className='mx-auto'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/*Banner*/}
                <div className=" bg-green-light bg-no-repeat pt-4 bg-center bg-cover bg-[url('../assets/event/event-banner.svg')] min-h-[128px] mt-[55px]">
                        <h2 className='text-white text-[40px] font-bold text-center mb-1'>特寵活動不能錯過</h2>
                        <h3 className='text-xl text-center text-brown-dark'>幫你搜集好熱門活動及資訊，全台特寵活動即時掌握！</h3>
                </div>
                {/*Event Info*/}
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-green-normal mt-[60px]">熱門活動</h2>
                    <div className="mt-[26px]">
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            centeredSlides={false}
                            spaceBetween={-20}
                            pagination={{
                                type: 'custom',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mb-4 mySwiper hotevent-swp"
                            breakpoints={{
                                // 尺寸以上{設定是什麼}
                                360 :{
                                    slidesPerView: 1,
                                    
                                },
                                390: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: -10,
                                },
                                1285: {
                                    slidesPerView: 3,
                                    spaceBetween: -60,
                                }
                                
                            }}
                        >
                            {hotEvents.map((hotEvent, i) => (
                                <SwiperSlide className='mt-5 mb-4'>
                                    <Link to="/page/event/content">
                                        <li key={i} className=" shadow-md bg-white mx-auto rounded-xl px-[35px] py-[30px] w-[350px] hover:-translate-y-5">
                                            <img src={hotEvent.imgUrl} alt="event" className="mt-[30px] w-full" />
                                            <p className="mt-4 text-base text-brown-normal">{hotEvent.category}</p>
                                            <h3 className="mt-1 text-xl font-bold tracking-wide text-brown-dark">{hotEvent.title}</h3>
                                            <p className="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">{hotEvent.date}</p>
                                            <p className="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9">查看更多</p>
                                        </li>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h2 className="text-3xl font-bold text-center text-green-normal mt-[60px]">精選活動</h2>
                    <div className="mt-[26px]">
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            centeredSlides={false}
                            spaceBetween={-30}
                            pagination={{
                                type: 'custom',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mb-4 mySwiper hotevent-swp"
                            breakpoints={{
                                360 :{
                                    slidesPerView: 1,
                                    
                                },
                                390: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: -10,
                                },
                                1285: {
                                    slidesPerView: 3,
                                    spaceBetween: -60,
                                }
                            }}
                        >
                            {featuredEvents.map((featuredEvent, i) => (
                                <SwiperSlide className='mt-5 mb-4'>
                                    <Link to="/page/event/content">
                                        <li key={i} className="mx-auto bg-white shadow-md rounded-xl px-[35px] py-[30px] w-[350px] hover:-translate-y-5">
                                            <img src={featuredEvent.imgUrl} alt="event" className="mt-[30px] w-full" />
                                            <p className="mt-4 text-base text-brown-normal">{featuredEvent.category}</p>
                                            <h3 className="mt-1 text-xl font-bold tracking-wide text-brown-dark">{featuredEvent.title}</h3>
                                            <p className="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">{featuredEvent.date}</p>
                                            <p className="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9">查看更多</p>
                                        </li>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*Search*/}
                    <div className="relative mx-auto max-w-[778px]  border-solid border-2 rounded-xl bg-white mt-[68px] border-brown-normal pb-[33px]">
                        {/*Selector*/}
                        <img src={plate} alt="plate-1" className="absolute -right-[148px]"/>
                        <form action="" className="justify-center text-center ">
                            
                            <div className="relative mx-[68px]">
                                <input type="text" placeholder="搜尋活動/場地/舉辦方"
                                    className="w-full py-2 text-base text-center border-2 border-solid rounded-full text-brown-dark bg-yellow-light focus:outline-brown-normal mt-7" />
                                <img className="absolute cursor-pointer hover:scale-125 bottom-[12px] left-[10%] sm:left-[25%] md:left-[30%]" src={searchIcon}
                                    alt="search" />
                            </div>
                            <div className="flex mt-[26px]">
                                <p className="text-base font-bold text-brown-dark ml-[20px] mr-[50px] sm:mx-[70px] whitespace-nowrap">地區</p>
                                <ul className="flex flex-wrap gap-x-2">
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全台</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">北部</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">中部</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">南部</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">東部</li>
                                </ul>
                            </div>
                            <div className="flex mt-5">
                                <p className="text-base font-bold text-brown-dark ml-[20px] mr-[50px] sm:mx-[70px] whitespace-nowrap">日期</p>
                                <ul className="flex flex-wrap gap-x-2">
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全部日期</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">今天</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">本周末</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">7天內</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">30天內</li>
                                </ul>
                            </div>
                            <div className="flex mt-5">
                                <p className="text-base font-bold text-brown-dark ml-[20px] mr-[18px] sm:ml-[72px] sm:mr-[36px] whitespace-nowrap">活動分類</p>
                                <ul className="flex flex-wrap gap-x-2">
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全部分類</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">展覽</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">市集</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">親子活動</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">快閃活動</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">線上活動</li>
                                    <li className="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">其他</li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    {/*Search Result*/}
                    <div className="">
                        <ul className="flex mt-[70px] flex-wrap justify-center gap-x-[50px]">
                            {searchCard.map((card, i)=>(
                                <li key={i} className="w-[335px] mb-11 hover:bg-white group hover:rounded-2xl px-3 pt-5">
                                    <a href="#" className="flex gap-x-5">
                                        <img src={card.imgUrl} alt="event" className="duration-500 group-hover:-translate-y-3" />
                                        <div>
                                            <p className="text-xs text-brown-normal mb-[6px]">{card.category}</p>
                                            <h3 className="text-base font-bold text-brown-dark ellipsis-2">{card.title}</h3>
                                            <p className="text-xs text-green-dark mb-[45px]">{card.date}</p>
                                            <h4 className="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                            </h4>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Page Number*/}
                    <div className="mt-[70px] mb-[60px]">
                        <ul className="flex justify-center">
                            <li>
                                <a href="#" className="px-2 text-xl font-bold border-b-2 text-brown-dark border-green-dark">1</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 text-xl font-bold text-brown-dark">2</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 text-xl font-bold text-brown-dark">3</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 text-xl font-bold text-brown-dark">...</a>
                            </li>
                            <li>
                                <a href="#" className="px-2 text-xl font-bold text-brown-dark">尾數頁</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}