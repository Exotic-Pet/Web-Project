import searchIcon from '../assets/store/search.svg';
import arrowTop from '../assets/reptile/arrow-top.svg';
import titleDeco from '../assets/reptile/titledeco.svg';

export default function StoreContent() {
    return (
        <>
            <main class="container grid justify-center grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside class="col-span-3 mt-9">
                    {/*Search Bar*/}
                    <form action="" class="flex justify-around">
                        <div class="relative">
                            <input type="text" placeholder="搜尋"
                                class="text-brown-normal text-xl w-[258px] rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-green-normal" />
                            <img class="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                src={searchIcon} alt="search" />
                        </div>
                    </form>
                    {/*Search Place*/}
                    <h2 class="text-3xl font-black tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                    <form action="">
                        <h2 class="mb-6 text-2xl font-bold text-green-dark">節肢動物類</h2>
                        <ul>
                            <li>
                                <a href="#" class="flex justify-between">
                                    <h3 class="text-xl font-bold tracking-wider text-brown-dark">捕鳥蛛</h3>
                                    <img src={arrowTop} alt="arrow-top" />
                                </a>
                                <h3 class="mt-2 text-xl text-brown-dark"><a href="#">地棲捕鳥蛛</a></h3>
                                <h3 class="mt-2 text-xl text-brown-dark"><a href="#">樹棲捕鳥蛛</a></h3>
                                <h3 class="mt-1 mb-[10px] text-xl text-brown-dark"><a href="#">穴居捕鳥蛛</a></h3>
                            </li>
                            <li class="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" class="flex items-center justify-between mb-[10px]">
                                    <h3 class="text-xl font-bold tracking-wider text-brown-dark">蠍子</h3>
                                    <img src={arrowTop} alt="arrow-top" />
                                </a>
                                <h3 class="mt-2 text-xl text-brown-dark"><a href="#">雨林蝦子</a></h3>
                                <h3 class="mt-1 mb-[10px] text-xl text-brown-dark"><a href="#">沙漠蠍子</a></h3>
                            </li>
                            <li class="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" class="flex items-center justify-between mb-[10px]">
                                    <h3 class="text-xl font-bold tracking-wider text-brown-dark">蜈蚣</h3>
                                </a>
                            </li>
                            <li class="pt-4 border-t border-solid border-brown-normal">
                                <a href="#" class="flex items-center justify-between mb-[10px]">
                                    <h3 class="text-xl font-bold tracking-wider text-brown-dark">馬陸</h3>
                                </a>
                            </li>
                        </ul>
                    </form>
                </aside>
                <section class="col-span-9 tracking-wide">
                    {/*tarantula*/}
                    <div class="flex justify-between">
                        <div class="w-[281px] h-[58px] bg-brown-light flex justify-around items-center rounded-t-[20px]">
                            <div class="flex ml-7">
                                <div class="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div class="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div class="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 class="text-2xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div class="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 class="text-2xl font-bold text-center text-white">捕鳥蛛</h2>
                        </div>
                    </div>
                    <div class="bg-green-light rounded-[22px] rounded-tl-none pt-[45px]">
                        <div class="flex justify-center mx-[93px] mb-6">
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure class="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">地棲捕鳥蛛</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div class="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">地棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">地棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">地棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-[url('../assets/arthropods/tarantula/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">地棲捕鳥蛛</h4>
                            </div>
                        </div>
                        <div class="flex justify-center mx-[93px] my-6">
                            <figure class="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">樹棲捕鳥蛛</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div class="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">樹棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">樹棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">樹棲捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-[url('../assets/arthropods/tarantula/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">樹棲捕鳥蛛</h4>
                            </div>
                        </div>
                        <div class="flex justify-center mx-[93px] my-6">
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure class="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">穴居捕鳥蛛</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div class="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample3.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">穴居捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample3.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">穴居捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample3.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">穴居捕鳥蛛</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/tarantula/sample3.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">穴居捕鳥蛛</h4>
                            </div>
                        </div>
                    </div>
                    {/*scorpion*/}
                    <div class="flex justify-between mt-6">
                        <div class="w-[281px] h-[58px] bg-brown-light flex justify-around items-center rounded-t-[20px]">
                            <div class="flex ml-7">
                                <div class="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div class="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div class="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 class="text-2xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div class="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 class="text-2xl font-bold text-center text-white">蠍子</h2>
                        </div>
                    </div>
                    <div class="bg-green-light rounded-[22px] rounded-tl-none pt-[45px]">
                        <div class="flex justify-center mx-[93px] mb-6">
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure class="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">雨林蠍子</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div class="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample1.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">雨林蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample1.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">雨林蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample1.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">雨林蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-[url('../assets/arthropods/scorpion/sample1.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-green-dark">雨林蠍子</h4>
                            </div>
                        </div>
                        <div class="flex justify-center mx-[93px] my-6">
                            <figure class="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">沙漠蠍子</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div class="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">沙漠蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">沙漠蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">沙漠蠍子</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/scorpion/sample2.jfif')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">沙漠蠍子</h4>
                            </div>
                        </div>
                    </div>
                    {/*Centipede*/}
                    <div class="flex justify-between mt-6">
                        <div class="w-[281px] h-[58px] bg-brown-light flex justify-around items-center rounded-t-[20px]">
                            <div class="flex ml-7">
                                <div class="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div class="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div class="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 class="text-2xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div class="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 class="text-2xl font-bold text-center text-white">蜈蚣</h2>
                        </div>
                    </div>
                    <div class="bg-green-light rounded-[22px] rounded-tl-none pt-[45px]">
                        <div class="flex justify-center mx-[93px] mb-6">
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure class="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">蜈蚣</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div class="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/centipede/sample1.jpg')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">蜈蚣</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/centipede/sample1.jpg')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">蜈蚣</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/centipede/sample1.jpg')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">蜈蚣</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/centipede/sample1.jpg')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">蜈蚣</h4>
                            </div>
                        </div>
                    </div>
                    {/*Millipede*/}
                    <div class="flex justify-between mt-6">
                        <div class="w-[281px] h-[58px] bg-brown-light flex justify-around items-center rounded-t-[20px]">
                            <div class="flex ml-7">
                                <div class="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div class="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div class="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 class="text-2xl font-bold text-brown-dark">節肢動物類</h2>
                        </div>
                        <div class="w-[121px] h-[58px] bg-green-normal rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 class="text-2xl font-bold text-center text-white">馬陸</h2>
                        </div>
                    </div>
                    <div class="bg-green-light rounded-[22px] rounded-tl-none pt-[45px]">
                        <div class="flex justify-center mx-[93px] mb-6">
                            <div class="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure class="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                                <h3 class="text-2xl font-bold text-green-dark">馬陸</h3>
                                <img src={titleDeco} alt="deco" class="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div class="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/millipede/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">馬陸</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/millipede/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">馬陸</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/millipede/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">馬陸</h4>
                            </div>
                            <div class="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/arthropods/millipede/sample1.webp')] bg-no-repeat">
                                <h4 class="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-green-dark">馬陸</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

