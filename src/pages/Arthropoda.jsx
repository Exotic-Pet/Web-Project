import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import searchIcon from '../assets/store/search.svg';
import arrowDown from '../assets/reptile/arrow-down.svg';
import titleDeco from '../assets/reptile/titledeco.svg';
import spider from '../assets/arthropods/tarantula/sample1.webp';
//CustomCSS
import "../styles/swiperstyle.css";

export default function Arthropoda() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [isSpiderExpand, setIsSpiderExpand] = useState(false);
    const [isScorpionExpand, setIsScorpionExpand] = useState(false);

    const handlerSpiderToggle = () => setIsSpiderExpand(!isSpiderExpand);
    const handlerScorpionToggle = () => setIsScorpionExpand(!isScorpionExpand);

    const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
    const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

    const tarantula =[
        {
            id:"1",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
        },
        {
            id:"2",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
        },
        {
            id:"3",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
        },
        {
            id:"4",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
        },
        {
            id:"5",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
        },
        {
            id:"6",
            bgimg: spider ,
            title:"地棲捕鳥蛛",
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
                                className="text-brown-normal text-xl max-w-full rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-green-normal" />
                            <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                src={searchIcon} alt="search" />
                        </div>
                    </form>
                    {/*Search Place*/}
                    <h2 className="text-3xl font-bold tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                    <form action="">
                        <h2 className="mb-6 text-2xl font-bold text-green-dark">節肢動物類</h2>
                        <ul>
                            <li>
                                <a className="flex justify-between toggle--click cursor-pointer" onMouseDown={handlerSpiderToggle}>
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">捕鳥蛛</h3>
                                    <img src={arrowDown} alt="arrow" className={toggleArrowState(isSpiderExpand) +' duration-100 hover:scale-125'}/>
                                </a>
                                <div className={toggleExpandStyle(isSpiderExpand)}>
                                    <h3 className="mt-2 text-xl text-brown-dark"><a href="#">地棲捕鳥蛛</a></h3>
                                    <h3 className="mt-2 text-xl text-brown-dark"><a href="#">樹棲捕鳥蛛</a></h3>
                                    <h3 className="mt-2 mb-[10px] text-xl text-brown-dark"><a href="#">穴居捕鳥蛛</a></h3>
                                </div>
                            </li>
                            <li className="pt-4 border-t border-solid border-brown-normal">
                                <a className="flex justify-between toggle--click cursor-pointer" onMouseDown={handlerScorpionToggle}>
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark mb-[10px]">蠍子</h3>
                                    <img src={arrowDown} alt="arrow" className={toggleArrowState(isScorpionExpand) +' duration-100 hover:scale-125'}/>
                                </a>
                                <div className={toggleExpandStyle(isScorpionExpand)}>
                                    <h3 className="mt-2 text-xl text-brown-dark"><a href="#">雨林蝦子</a></h3>
                                    <h3 className="mt-1 mb-[10px] text-xl text-brown-dark"><a href="#">沙漠蠍子</a></h3>
                                </div>
                            </li>
                            <li className="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" className="flex items-center justify-between mb-[10px]">
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark">蜈蚣</h3>
                                </a>
                            </li>
                            <li className="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" className="flex items-center justify-between mb-[10px]">
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark">馬陸</h3>
                                </a>
                            </li>
                        </ul>
                    </form>
                </aside>
                <section className="xl:col-span-9 tracking-wide mt-4 xl:mt-0">
                    {/*tarantula*/}
                    <div className="flex justify-between">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                        <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">捕鳥蛛</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">地棲捕鳥蛛</h3>
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
                            {tarantula.map((image,id) =>(
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
                                <h3 className="text-xl font-bold text-green-dark">樹棲捕鳥蛛</h3>
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
                            {tarantula.map((image,id) =>(
                                <SwiperSlide className='' key={id} id='arborealGecko'>
                                    <Link to="intropage">
                                        <div className=" group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover  bg-no-repeat" style={{backgroundImage:`url(${image.bgimg})`}}>
                                            <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">{image.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">穴居捕鳥蛛</h3>
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
                            {tarantula.map((image,id) =>(
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
                    {/*scorpion*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                        <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">蠍子</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">雨林蠍子</h3>
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
                            {tarantula.map((image,id) =>(
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
                                <h3 className="text-xl font-bold text-green-dark">沙漠蠍子</h3>
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
                            {tarantula.map((image,id) =>(
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
                    {/*Centipede*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                        <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">蜈蚣</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">蜈蚣</h3>
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
                            {tarantula.map((image,id) =>(
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
                    {/*Millipede*/}
                    <div className="flex justify-between mt-6">
                        <div className="mr-3 xl:mr-0 w-[281px] h-[58px] bg-gray-dark flex items-center rounded-t-[20px]">
                        <div className="flex mx-5 xl:mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-4 mr-[52px]">
                            <h2 className="text-xl font-bold text-center text-white">馬陸</h2>
                        </div>
                    </div>
                    <div className="bg-green-light rounded-[22px] rounded-tl-none pt-[45px] pb-[54px] px-4 lg:px-0">
                        <div className="flex justify-center xl:mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex justify-center bg-white gap-x-3 ml-[18px] rounded-[10px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="w-[21px]" />
                                <h3 className="text-xl font-bold text-green-dark whitespace-nowrap">馬陸</h3>
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
                            {tarantula.map((image,id) =>(
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

