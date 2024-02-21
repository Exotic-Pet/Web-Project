import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import searchIcon from '../assets/store/search.svg';
import arrowDown from '../assets/reptile/arrow-down.svg';
import titleDeco from '../assets/reptile/titledeco.svg';
import rabbitL from  '../assets/rabbitrat/rabbit/sample1.jpg';
import rabbitE from  '../assets/rabbitrat/rabbit/sample2.jfif';
import rabbitW from  '../assets/rabbitrat/rabbit/sample3.jfif';
import rabbitO from  '../assets/rabbitrat/rabbit/sample4.jpg';
import cricetinae from  '../assets/rabbitrat/rat/sample1.jfif';
import caviaPorcellus from  '../assets/rabbitrat/rat/sample2.jpg';
import chinchilla from  '../assets/rabbitrat/rat/sample3.jpg';
import others from  '../assets/rabbitrat/rat/sample4.jpg';
//CustomCSS
import "../styles/swiperstyle.css";

export default function LeporidaeAndMuriodea() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [isRabbitExpand, setIsRabbitExpand] = useState(false);
    const [isRatExpand, setIsRatExpand] = useState(false);

    const handlerRabbitToggle = () => setIsRabbitExpand(!isRabbitExpand);
    const handlerRatToggle = () => setIsRatExpand(!isRatExpand);

    const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
    const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

    const rabbitLong =[
        {
            id:"1",
            bgimg:rabbitL,
            title: "長毛兔"
        },
        {
            id:"2",
            bgimg:rabbitL,
            title: "長毛兔"
        },
        {
            id:"3",
            bgimg:rabbitL,
            title: "長毛兔"
        },
        {
            id:"4",
            bgimg:rabbitL,
            title: "長毛兔"
        },
        {
            id:"5",
            bgimg:rabbitL,
            title: "長毛兔"
        },
        {
            id:"6",
            bgimg:rabbitL,
            title: "長毛兔"
        },
    ]
    const rabbitEar =[
        {
            id:"1",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
        {
            id:"2",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
        {
            id:"3",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
        {
            id:"4",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
        {
            id:"5",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
        {
            id:"6",
            bgimg:rabbitE,
            title: "垂耳兔"
        },
    ]
    const rabbitWhite =[
        {
            id:"1",
            bgimg:rabbitW,
            title: "白兔"
        },
        {
            id:"2",
            bgimg:rabbitW,
            title: "白兔"
        },
        {
            id:"3",
            bgimg:rabbitW,
            title: "白兔"
        },
        {
            id:"4",
            bgimg:rabbitW,
            title: "白兔"
        },
        {
            id:"5",
            bgimg:rabbitW,
            title: "白兔"
        },
        {
            id:"6",
            bgimg:rabbitW,
            title: "白兔"
        },
    ]
    const rabbitOthers =[
        {
            id:"1",
            bgimg:rabbitO,
            title: "其他"
        },
        {
            id:"2",
            bgimg:rabbitO,
            title: "其他"
        },
        {
            id:"3",
            bgimg:rabbitO,
            title: "其他"
        },
        {
            id:"4",
            bgimg:rabbitO,
            title: "其他"
        },
        {
            id:"5",
            bgimg:rabbitO,
            title: "其他"
        },
        {
            id:"6",
            bgimg:rabbitO,
            title: "其他"
        },
    ]
    const ratCricetinae =[
        {
            id:"1",
            bgimg:cricetinae,
            title: "倉鼠"
        },
        {
            id:"2",
            bgimg:cricetinae,
            title: "倉鼠"
        },
        {
            id:"3",
            bgimg:cricetinae,
            title: "倉鼠"
        },
        {
            id:"4",
            bgimg:cricetinae,
            title: "倉鼠"
        },
        {
            id:"5",
            bgimg:cricetinae,
            title: "倉鼠"
        },
        {
            id:"6",
            bgimg:cricetinae,
            title: "倉鼠"
        },
    ]
    const ratCaviaPorcellus =[
        {
            id:"1",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
        {
            id:"2",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
        {
            id:"3",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
        {
            id:"4",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
        {
            id:"5",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
        {
            id:"6",
            bgimg:caviaPorcellus,
            title: "天竺鼠"
        },
    ]
    const ratChinchilla =[
        {
            id:"1",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
        {
            id:"2",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
        {
            id:"3",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
        {
            id:"4",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
        {
            id:"5",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
        {
            id:"6",
            bgimg:chinchilla,
            title: "絲絨鼠"
        },
    ]
    const ratOthers =[
        {
            id:"1",
            bgimg:others,
            title: "其他"
        },
        {
            id:"2",
            bgimg:others,
            title: "其他"
        },
        {
            id:"3",
            bgimg:others,
            title: "其他"
        },
        {
            id:"4",
            bgimg:others,
            title: "其他"
        },
        {
            id:"5",
            bgimg:others,
            title: "其他"
        },
        {
            id:"6",
            bgimg:others,
            title: "其他"
        },
    ]

    return (
        <>
            <main className="container xl:grid justify-center xl:grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside className="xl:col-span-3 mt-9 mx-6 xl:mx-0">
                    <div className='sticky top-44'>
                        {/*Search Bar*/}
                        <form action="" className="flex justify-around mx-auto">
                            <div className="relative">
                                <input type="text" placeholder="搜尋"
                                    className="text-brown-normal text-xl max-w-full rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-yellow-normal" />
                                <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                    src={searchIcon} alt="search" />
                            </div>
                        </form>
                        {/*Search Place*/}
                        <h2 className="text-3xl font-bold tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                        <form action="">
                            <h2 className="mb-6 text-2xl font-bold text-yellow-dark">兔、鼠類</h2>
                            <ul>
                                <li>
                                    <a className=" cursor-pointer flex justify-between toggle--click" onMouseDown={handlerRabbitToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">兔子</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isRabbitExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isRabbitExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">長毛兔</a></h3>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">垂耳兔</a></h3>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">白兔</a></h3>
                                        <h3 className="mt-2 mb-[10px] text-xl text-brown-dark"><a href="#">其他</a></h3>
                                    </div>
                                    
                                </li>
                                <li className="pt-4 border-t border-solid border-brown-normal" >
                                    <a className=" cursor-pointer flex items-center justify-between toggle--click" onMouseDown={handlerRatToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark">鼠</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isRatExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isRatExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">倉鼠</a></h3>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">天竺鼠</a></h3>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#">絲絨鼠</a></h3>
                                        <h3 className="mt-2 mb-[10px] text-xl text-brown-dark"><a href="#">其他</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </aside>
                <section className="xl:col-span-9 tracking-wide mt-4 xl:mt-0">
                    {/*Rabbit*/}
                    <div className="flex justify-between">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兔、鼠類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-yellow-dark rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">兔</h2>
                        </div>
                    </div>
                    <div className="bg-yellow-normal rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">長毛兔</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {rabbitLong.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex bg-white gap-x-3 mr-[18px] rounded-[10px] justify-center w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">垂耳兔</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {rabbitEar.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">白兔</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {rabbitWhite.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex bg-white gap-x-3 mr-[18px] rounded-[10px] justify-center w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">其他</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {rabbitOthers.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*Rat*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兔、鼠類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-yellow-dark rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">鼠</h2>
                        </div>
                    </div>
                    <div className="bg-yellow-normal rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">倉鼠</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {ratCricetinae.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex bg-white gap-x-3 mr-[18px] rounded-[10px] justify-center w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">天竺鼠</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {ratCaviaPorcellus.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">絲絨鼠</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {ratChinchilla.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex bg-white gap-x-3 mr-[18px] rounded-[10px] justify-center w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-yellow-dark">其他</h3>
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
                                slidesPerView: 3,
                            },
                            1024:{
                                slidesPerView: 3,
                            },
                            1280:{
                                slidesPerView: 4,
                                
                            }
                        }}
                        >
                            {ratOthers.map((image,id) =>(
                                <SwiperSlide className='' key={id}>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">{image.title}</h4>
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