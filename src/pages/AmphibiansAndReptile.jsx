import { Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import searchIcon from '../assets/store/search.svg';
import arrowDown from '../assets/reptile/arrow-down.svg';
import titleDeco from '../assets/reptile/titledeco.svg';
//image for cards
import geck1 from '../assets/reptile/gecko/ground_Scorpion-Tailed-geck.jpg';
import geck2 from '../assets/reptile/gecko/grounded_Fat-Tailed-Gecko.png';
import geck3 from '../assets/reptile/gecko/grounded_Helmet-Gecko.jpg';
import geck4 from '../assets/reptile/gecko/grounded_Knob-tailed-Gecko.jpeg';
import geck5 from '../assets/reptile/gecko/grounded_namib-gecko.jpeg';
import geck6 from '../assets/reptile/gecko/grounded_ocelot-gecko.jpg';
import geck7 from '../assets/reptile/gecko/grounded_Viper-gecko.webp';
import geck8 from '../assets/reptile/gecko/grounded_wonder-gecko.jpg';
//CustomCSS
import "../styles/swiperstyle.css";


export default function AmphibiansAndReptile() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [isGeckoExpand, setIsGeckoExpand] = useState(false);
    const [isLizardExpand, setIsLizardExpand] = useState(false);
    const [isSnakeExpand, setIsSnakeExpand] = useState(false);
    const [isTurtleExpand, setIsTurtleExpand] = useState(false);

    const handlerGeckoToggle = () => setIsGeckoExpand(!isGeckoExpand);
    const handlerLizardToggle = () => setIsLizardExpand(!isLizardExpand);
    const handlerSnakeToggle = () => setIsSnakeExpand(!isSnakeExpand);
    const handlerTurtleToggle = () => setIsTurtleExpand(!isTurtleExpand);


    const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
    const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

    const geckGrounded =[
        {
            id:"1",
            bgimg: geck1 ,
            title:"測試守宮",
        },
        {
            id:"2",
            bgimg: geck2 ,
            title:"肥尾守宮",
        },
        {
            id:"3",
            bgimg: geck3 ,
            title:"瘤尾守宮",
        },
        {
            id:"4",
            bgimg: geck4 ,
            title:"豹貓守宮",
        },
        {
            id:"5",
            bgimg: geck5 ,
            title:"豹貓守宮",
        },
        {
            id:"6",
            bgimg: geck6 ,
            title:"豹貓守宮",
        },
        {
            id:"7",
            bgimg: geck7 ,
            title:"豹貓守宮",
        },
        {
            id:"8",
            bgimg: geck8 ,
            title:"豹貓守宮",
        },
    ]

    return (
        <>
            <main className="container xl:grid justify-center xl:grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside className="xl:col-span-3 mt-9 mx-6 xl:mx-0">
                    <div className='sticky top-12'>
                        {/*Search Bar*/}
                        <form action="" className="flex justify-around mx-auto">
                            <div className="relative">
                                <input type="text" placeholder="搜尋"
                                    className="text-brown-normal text-xl max-w-[258px] rounded-full border border-brown-normal py-[5px] pl-5 focus:outline-green-normal" />
                                <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                    src={searchIcon} alt="search" />
                            </div>
                        </form>
                        {/*Search Place*/}
                        <h2 className="text-3xl font-bold tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                        <form action="">
                            <h2 className="mb-6 text-2xl font-bold text-green-dark">兩棲爬蟲類</h2>
                            <ul>
                                <li>
                                    <a className="cursor-pointer flex justify-between toggle--click" onMouseDown={handlerGeckoToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">守宮</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isGeckoExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isGeckoExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#groundGecko">地棲守宮</a></h3>
                                        <h3 className="mt-1 mb-[10px] text-xl text-brown-dark"><a href="#arborealGecko">樹棲守宮</a></h3>
                                    </div>

                                </li>
                                <li className="pt-4 border-t border-solid border-brown-normal">
                                    <a className="cursor-pointer flex justify-between toggle--click"  onMouseDown={handlerLizardToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">蜥蜴(變色龍)</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isLizardExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isLizardExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#groundedLizard">地棲蜥蜴</a></h3>
                                        <h3 className="mt-1 text-xl text-brown-dark mb-[10px]"><a href="#arborealLizard">樹棲蜥蜴</a></h3>
                                    </div>
                                </li>
                                <li className="pt-4 border-t border-solid border-brown-normal">
                                    <a className="cursor-pointer flex justify-between toggle--click"  onMouseDown={handlerTurtleToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">烏龜</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isTurtleExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isTurtleExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#groundedTurtle">陸龜</a></h3>
                                        <h3 className="mt-1 text-xl text-brown-dark mb-[10px]"><a href="#waterTurtle">水龜</a></h3>
                                    </div>
                                </li>
                                <li className="pt-4 border-t border-solid border-brown-normal">
                                    <a className="cursor-pointer flex justify-between toggle--click"  onMouseDown={handlerSnakeToggle}>
                                        <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">蛇</h3>
                                        <img src={arrowDown} alt="arrow" className={toggleArrowState(isSnakeExpand) +' duration-100 hover:scale-125'}/>
                                    </a>
                                    <div className={toggleExpandStyle(isSnakeExpand)}>
                                        <h3 className="mt-2 text-xl text-brown-dark"><a href="#groundedSnake">地棲蛇</a></h3>
                                        <h3 className="mt-1 text-xl text-brown-dark mb-[10px]"><a href="#arborealSnake">樹棲蛇</a></h3>
                                    </div>

                                </li>
                            </ul>
                        </form>
                    </div>
                </aside>
                <section className="xl:col-span-9 tracking-wide mt-4 xl:mt-0">
                    {/*gecko*/}
                    <div className="flex justify-between">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]" id='groundGecko'>
                            <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兩棲爬蟲類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-semibold xl:font-bold text-center text-white">守宮</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">地棲守宮</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6">
                            <figure className="flex justify-center bg-white gap-x-3 mr-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">樹棲守宮</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*lizard*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex justify-around items-center rounded-t-[20px]" id='groundedLizard'>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兩棲爬蟲類</h2>
                        </div>
                        <div className="w-[220px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl xl:font-bold font-semibold text-center text-white">蜥蜴(變色龍)</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">地棲蜥蜴</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex bg-white gap-x-3 mr-[18px] rounded-[10px] justify-center w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">樹棲蜥蜴</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*turtle*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex justify-around items-center rounded-t-[20px]" id='groundedTurtle'>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兩棲爬蟲類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl xl:font-bold font-semibold text-center text-white">烏龜</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6" >
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">陸龜</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6">
                            <figure className="flex justify-center bg-white gap-x-3 mr-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">水龜</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/*snake*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex justify-around items-center rounded-t-[20px]" id='groundedSnake'>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">兩棲爬蟲類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl xl:font-bold font-semibold text-center text-white">蛇</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6" >
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">地棲蛇</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] my-6" >
                            <figure className="flex justify-center bg-white gap-x-3 mr-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark">樹棲蛇</h3>
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
                            {geckGrounded.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
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