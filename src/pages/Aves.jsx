import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import searchIcon from '../assets/store/search.svg';
import arrowDown from '../assets/reptile/arrow-down.svg';
import titleDeco from '../assets/reptile/titledeco.svg';
import parrotLg from '../assets/bird/parrot/sample1.jpg';
import parrotMd from '../assets/bird/parrot/sample2.jfif';
import parrotSm from '../assets/bird/parrot/sample3.jpg';
//CustomCSS
import "../styles/swiperstyle.css";

export default function Aves() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [isParrotExpand, setIsParrotExpand] = useState(false);

    const handlerParrotToggle = () => setIsParrotExpand(!isParrotExpand);

    const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
    const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

    const parrotL = [
        {
            id:"1",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
        {
            id:"2",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
        {
            id:"3",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
        {
            id:"4",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
        {
            id:"5",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
        {
            id:"6",
            bgimg: parrotLg ,
            title:"大型鸚鵡",
        },
    ]

    return (
        <>
            <main className="container xl:grid justify-center xl:grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside className="xl:col-span-3 mt-9 mx-6 xl:mx-0">
                    {/*Search Bar*/}
                    <form action="" className="flex justify-around">
                        <div className="relative">
                            <input type="text" placeholder="搜尋"
                                className="text-brown-normal text-xl max-w-full rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-cyan-normal" />
                            <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                src={searchIcon} alt="search" />
                        </div>
                    </form>
                    {/*Search Place*/}
                    <h2 className="text-3xl font-bold tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                    <form action="">
                        <h2 className="mb-6 text-2xl font-bold text-cyan-dark">鳥類</h2>
                        <ul>
                            <li>
                                <a className="flex justify-between toggle--click cursor-pointer" onMouseDown={handlerParrotToggle}>
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">鸚鵡</h3>
                                    <img src={arrowDown} alt="arrow" className={toggleArrowState(isParrotExpand) +' duration-100 hover:scale-125'} />
                                </a>
                                <div className={toggleExpandStyle(isParrotExpand)}>
                                    <h3 className="mt-2 text-xl text-brown-dark"><a href="#">大型鸚鵡</a></h3>
                                    <h3 className="mt-2 text-xl text-brown-dark"><a href="#">中型鸚鵡</a></h3>
                                    <h3 className="mt-2 mb-[10px] text-xl text-brown-dark"><a href="#">小型鸚鵡</a></h3>
                                </div>
                            </li>
                            <li className="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" className="flex items-center justify-between mb-[10px]">
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark">雀科</h3>
                                </a>
                            </li>
                            <li className="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" className="flex justify-between">
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark">其他</h3>
                                </a>
                            </li>
                        </ul>
                    </form>
                </aside>
                <section className="xl:col-span-9 tracking-wide mt-4 xl:mt-0">
                    {/*Parrot*/}
                    <div className="flex justify-between">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">鸚鵡</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-cyan-dark whitespace-nowrap">大型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                            </figure>
                        </div>
                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={10}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mb-4 mySwiper mg  max-w-[905px]"
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                            },
                            390:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {parrotL.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6">
                            <figure className="flex justify-center bg-white gap-x-3 mr-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-cyan-dark">中型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={10}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mb-4 mySwiper mg  max-w-[905px]"
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                            },
                            390:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {parrotL.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-cyan-dark whitespace-nowrap">小型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                            </figure>
                        </div>
                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={10}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mb-4 mySwiper mg  max-w-[905px]"
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                            },
                            390:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {parrotL.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*Sparrow*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">雀科</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-cyan-dark whitespace-nowrap">雀科</h3>
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                            </figure>
                        </div>
                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={10}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mb-4 mySwiper mg  max-w-[905px]"
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                            },
                            390:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {parrotL.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*Other*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">其他</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-cyan-dark whitespace-nowrap">其他</h3>
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                            </figure>
                        </div>
                        <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={4}
                        centeredSlides={false}
                        spaceBetween={10}
                        pagination={{
                            type: 'custom',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mb-4 mySwiper mg  max-w-[905px]"
                        breakpoints={{
                            360:{
                                slidesPerView: 1,
                            },
                            390:{
                                slidesPerView: 1,
                            },
                            768:{
                                slidesPerView: 2,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {parrotL.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    )
}