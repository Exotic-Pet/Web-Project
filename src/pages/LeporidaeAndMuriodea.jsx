import React, { useState} from 'react';
import searchIcon from '../assets/store/search.svg';
import arrowDown from '../assets/reptile/arrow-down.svg';
import titleDeco from '../assets/reptile/titledeco.svg';

export default function LeporidaeAndMuriodea() {
    const [isRabbitExpand, setIsRabbitExpand] = useState(false);
    const [isRatExpand, setIsRatExpand] = useState(false);

    const handlerRabbitToggle = () => setIsRabbitExpand(!isRabbitExpand);
    const handlerRatToggle = () => setIsRatExpand(!isRatExpand);

    const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
    const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

    return (
        <>
            <main className="container grid justify-center grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside className="col-span-3 mt-9">
                    <div className='sticky top-44'>
                        {/*Search Bar*/}
                        <form action="" className="flex justify-around">
                            <div className="relative">
                                <input type="text" placeholder="搜尋"
                                    className="text-brown-normal text-xl w-[258px] rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-yellow-normal" />
                                <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                    src={searchIcon} alt="search" />
                            </div>
                        </form>
                        {/*Search Place*/}
                        <h2 className="text-3xl font-black tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
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
                <section className="col-span-9 tracking-wide">
                    {/*Rabbit*/}
                    <div className="flex justify-between">
                        <div className="w-[281px] h-[58px] bg-brown-light flex items-center rounded-t-[20px]">
                            <div className="flex mx-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-brown-dark">兔、鼠類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-yellow-dark rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 className="text-2xl font-bold text-center text-white">兔</h2>
                        </div>
                    </div>
                    <div className="bg-yellow-normal rounded-[22px] rounded-tl-none pt-[45px]">
                        <div className="flex justify-center mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">長毛兔</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">長毛兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">長毛兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">長毛兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">長毛兔</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <figure className="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">垂耳兔</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">垂耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">垂耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">垂耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">垂耳兔</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">白兔</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample3.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">白耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample3.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">白耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample3.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">白耳兔</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample3.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">白耳兔</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <figure className="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">其他</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                        </div>
                    </div>
                    {/*Rat*/}
                    <div className="flex justify-between mt-6">
                        <div className="w-[281px] h-[58px] bg-brown-light flex justify-between items-center rounded-t-[20px]">
                            <div className="flex ml-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-2xl font-bold mr-[71px] text-brown-dark">兔、鼠類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-yellow-dark rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 className="text-2xl font-bold text-center text-white">鼠</h2>
                        </div>
                    </div>
                    <div className="bg-yellow-normal rounded-[22px] rounded-tl-none pt-[45px]">
                        <div className="flex justify-center mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">倉鼠</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample1.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">倉鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample1.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">倉鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample1.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">倉鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample1.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">倉鼠</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <figure className="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">天竺鼠</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample2.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">天竺鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample2.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">天竺鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample2.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">天竺鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample2.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">天竺鼠</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">絲絨鼠</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">絲絨鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">絲絨鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">絲絨鼠</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rat/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-yellow-dark">絲絨鼠</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <figure className="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-yellow-dark">其他</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/rabbitrat/rabbit/sample4.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-yellow-dark">其他</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}