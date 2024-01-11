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


export default function StoreContent() {
    return (
        <>
            <main class="my-32">
                {/*Slider*/}
                <div class="h-[372px] w-full mt-[55px] border-solid border-2 border-black bg-gray-500 text-center text-6xl">輪播區塊
                </div>
                {/*Banner*/}
                <div class="bg-green-light bg-no-repeat bg-center bg-[url('../assets/event/event-banner.svg')] min-h-[128px] mt-[55px]">
                </div>
                {/*Event Info*/}
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-center text-green-normal mt-[60px]">熱門活動</h2>
                    <div class="mt-[26px]">
                        <ul class="flex justify-center ">
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] hover:-translate-y-5">
                                <img src={eventImg1} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">展覽</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">艸植感市集</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/11/11
                                    (六)-11/13 (日)</p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] mx-10 hover:-translate-y-5">
                                <img src={eventImg2} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">展覽</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">2024台灣兩棲爬蟲博覽會</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/6/22
                                    (六)-6/23 (日)</p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] hover:-translate-y-5">
                                <img src={eventImg3} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">展覽</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">艸我的方向走來2.0</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/7/15
                                    (六)-7/16 (日)</p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-3xl font-bold text-center text-green-normal mt-[60px]">精選活動</h2>
                    <div class="mt-[26px]">
                        <ul class="flex justify-center ">
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] hover:-translate-y-5">
                                <img src={eventImg4} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">快閃活動</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">叢林森遊會 爬蟲主題市集</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/4/1 (六) -
                                    4/2 (日)</p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] mx-10 hover:-translate-y-5">
                                <img src={eventImg5} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">線上活動</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">台灣東部爬蟲的二三事</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/10/12 (六)
                                </p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                            <li class="bg-white shadow-xl rounded-xl px-[35px] py-[30px] w-[375px] hover:-translate-y-5">
                                <img src={eventImg6} alt="event" class="mt-[30px]" />
                                <p class="mt-4 text-base text-brown-normal">市集</p>
                                <h3 class="mt-1 text-xl font-bold tracking-wide text-brown-dark">2024 萌舺親子爬市集</h3>
                                <p class="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">2024/10/07
                                    (六)-10/08 (日)</p>
                                <a href="#"
                                    class="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9 hover:scale-110">查看更多</a>
                            </li>
                        </ul>
                    </div>
                    {/*Search*/}
                    <div class="w-[778px] h-[240px] border-solid border-2 rounded-xl mx-auto bg-white mt-[68px] border-brown-normal">
                        {/*Selector*/}
                        <form action="" class="relative justify-center">
                            <img src={plate} alt="plate-1" class="absolute -right-[127px] -z-20" />
                            <div class="relative  ml-[60px]">
                                <input type="text" placeholder="搜尋活動/場地/舉辦方"
                                    class=" text-brown-dark text-base w-[642px] rounded-full border-2 border-solid bg-yellow-light py-2 pl-64 focus:outline-brown-normal mt-7" />
                                <img class="absolute cursor-pointer hover:scale-125 bottom-[12px] left-56" src={searchIcon}
                                    alt="search" />
                            </div>
                            <div class="flex mt-[26px] ml-[72px]">
                                <p class="text-base font-bold text-brown-dark mr-[60px]">地區</p>
                                <ul class="flex flex-wrap">
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全台</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">北部</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">中部</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">南部</li>
                                    <li class="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">東部</li>
                                </ul>
                            </div>
                            <div class="flex mt-5 ml-[72px]">
                                <p class="text-base font-bold text-brown-dark mr-[60px]">日期</p>
                                <ul class="flex flex-wrap">
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全部日期</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">今天</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">本周末</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">7天內</li>
                                    <li class="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">30天內</li>
                                </ul>
                            </div>
                            <div class="flex mt-5 ml-[72px]">
                                <p class="text-base font-bold text-brown-dark mr-[28px]">活動分類</p>
                                <ul class="flex flex-wrap">
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">全部分類</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">展覽</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">市集</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">親子活動</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">快閃活動</li>
                                    <li class="px-2 mr-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">線上活動</li>
                                    <li class="px-2 text-base bg-opacity-0 border-2 border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal hover:border-opacity-100 hover:bg-opacity-100">其他</li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    {/*Search Result*/}
                    <div class="">
                        <ul class="flex mt-[70px] flex-wrap justify-center  gap-x-[60px] gap-y-11">
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg7} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg8} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark ellipsis-2">台北｜2024 水美園 - 創四季 【植栽、 爬蟲、昆蟲、礦石】 盛典｜花博爭豔館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/8/26 (六)-8/27 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg9} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台中｜2024台灣爬蟲季｜台中世貿二館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg7} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg8} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台北｜2024 水美園 - 創四季 【植栽、 爬蟲...</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/8/26 (六)-8/27 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] mb-11">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg9} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台中｜2024台灣爬蟲季｜台中世貿二館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] ">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg7} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] ">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg8} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台北｜2024 水美園 - 創四季 【植栽、 爬蟲...</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/8/26 (六)-8/27 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                            <li class="w-[335px] ">
                                <a href="#" class="flex hover:scale-110">
                                    <img src={eventImg9} alt="event" class="mr-5" />
                                    <div>
                                        <p class="text-xs text-brown-normal mb-[6px]">展覽</p>
                                        <h3 class="text-base font-bold text-brown-dark">台中｜2024台灣爬蟲季｜台中世貿二館</h3>
                                        <p class="text-xs text-green-dark mb-[45px]">2024/6/22 (六)-6/23 (日)</p>
                                        <h4 class="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">MORE
                                        </h4>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*Page Number*/}
                    <div class="mt-[70px] mb-[60px]">
                        <ul class="flex justify-center">
                            <li>
                                <a href="#" class="px-2 text-xl font-bold border-b-2 text-brown-dark border-green-dark">1</a>
                            </li>
                            <li>
                                <a href="#" class="px-2 text-xl font-bold text-brown-dark">2</a>
                            </li>
                            <li>
                                <a href="#" class="px-2 text-xl font-bold text-brown-dark">3</a>
                            </li>
                            <li>
                                <a href="#" class="px-2 text-xl font-bold text-brown-dark">...</a>
                            </li>
                            <li>
                                <a href="#" class="px-2 text-xl font-bold text-brown-dark">尾數頁</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-[1125px] bg-gray-500 font-bold h-[203px] text-center ml-[100px]">特寵活動主辦方這邊請</div>
                </div>
            </main>
        </>
    )
}