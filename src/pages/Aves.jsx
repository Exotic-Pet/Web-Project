import searchIcon from '../assets/store/search.svg';
import arrowTop from '../assets/reptile/arrow-top.svg';
import titleDeco from '../assets/reptile/titledeco.svg';

export default function StoreContent() {
    return (
        <>
            <main className="container grid justify-center grid-cols-12 mx-auto mt-32 mb-32 gap-x-[50px]">
                <aside className="col-span-3 mt-9">
                    {/*Search Bar*/}
                    <form action="" className="flex justify-around">
                        <div className="relative">
                            <input type="text" placeholder="搜尋"
                                className="text-brown-normal text-xl w-[258px] rounded-full border border-solid border-brown-normal py-[5px] pl-5 focus:outline-green-normal" />
                            <img className="absolute w-5 cursor-pointer right-4 top-[11px] hover:scale-125"
                                src={searchIcon} alt="search" />
                        </div>
                    </form>
                    {/*Search Place*/}
                    <h2 className="text-3xl font-black tracking-wider text-center text-brown-normal m-7">索引目錄</h2>
                    <form action="">
                        <h2 className="mb-6 text-2xl font-bold text-cyan-dark">鳥類</h2>
                        <ul>
                            <li>
                                <a href="#" className="flex justify-between">
                                    <h3 className="text-xl font-bold tracking-wider text-brown-dark">鸚鵡</h3>
                                    <img src={arrowTop} alt="arrow-top" />
                                </a>
                                <h3 className="mt-2 text-xl text-brown-dark"><a href="#">大型鸚鵡</a></h3>
                                <h3 className="mt-2 text-xl text-brown-dark"><a href="#">中型鸚鵡</a></h3>
                                <h3 className="mt-1 mb-[10px] text-xl text-brown-dark"><a href="#">小型鸚鵡</a></h3>
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
                <section className="col-span-9 tracking-wide">
                    {/*Parrot*/}
                    <div className="flex justify-between">
                        <div className="w-[281px] h-[58px] bg-brown-light flex justify-between items-center rounded-t-[20px]">
                            <div className="flex ml-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-2xl font-bold mr-[109px] text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 className="text-2xl font-bold text-center text-white">鸚鵡</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px]">
                        <div className="flex justify-center mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-cyan-dark">大型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">大型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">大型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">大型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">大型鸚鵡</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <figure className="flex pl-[313px] bg-white gap-x-3 mr-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-cyan-dark">中型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="flex justify-center mx-8 px-14 gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">中型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">中型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">中型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample2.jfif')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 opacity-0 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 text-center rounded-full bg-cyan-dark">中型鸚鵡</h4>
                            </div>
                        </div>
                        <div className="flex justify-center mx-[93px] my-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-cyan-dark">小型鸚鵡</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">小型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">小型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">小型鸚鵡</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/parrot/sample3.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">小型鸚鵡</h4>
                            </div>
                        </div>
                    </div>
                    {/*Sparrow*/}
                    <div className="flex justify-between mt-6">
                        <div className="w-[281px] h-[58px] bg-brown-light flex justify-between items-center rounded-t-[20px]">
                            <div className="flex ml-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-2xl font-bold mr-[109px] text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 className="text-2xl font-bold text-center text-white">雀科</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px]">
                        <div className="flex justify-center mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                                <h3 className="text-2xl font-bold text-cyan-dark">雀科</h3>
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]" />
                            </figure>
                        </div>
                        <div className="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sparrow/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">雀科</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sparrow/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">雀科</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sparrow/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">雀科</h4>
                            </div>
                            <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sparrow/sample1.jpg')] bg-no-repeat">
                                <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">雀科</h4>
                            </div>
                        </div>
                    </div>
                    {/*Other*/}
                    <div className="flex justify-between mt-6">
                        <div className="w-[281px] h-[58px] bg-brown-light flex justify-between items-center rounded-t-[20px]">
                            <div className="flex ml-7">
                                <div className="w-3 h-3 rounded-full bg-traffic-red"></div>
                                <div className="w-3 h-3 mx-2 rounded-full bg-traffic-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-traffic-green"></div>
                            </div>
                            <h2 className="text-2xl font-bold mr-[109px] text-brown-dark">鳥類</h2>
                        </div>
                        <div className="w-[121px] h-[58px] bg-cyan-dark rounded-t-[20px] pt-3 mr-[52px]">
                            <h2 className="text-2xl font-bold text-center text-white">其他</h2>
                        </div>
                    </div>
                    <div className="bg-cyan-normal rounded-[22px] rounded-tl-none pt-[45px]">
                        <div className="flex justify-center mx-[93px] mb-6">
                            <div className="w-[31px] h-[41px] bg-white rounded-[10px]"></div>
                            <figure className="flex pl-[264px] bg-white gap-x-3 ml-[18px] rounded-[10px] h-[41px] w-full items-center">
                                <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]"/>
                                    <h3 className="text-2xl font-bold text-cyan-dark">其他</h3>
                                    <img src={titleDeco} alt="deco" className="h-[21px] w-[21px]"/>
                                    </figure>
                                </div>
                                <div className="flex justify-center mx-8 px-14 pb-[54px] gap-x-[22px]">
                                    <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sample1.jfif')] bg-no-repeat">
                                        <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">鳥類</h4>
                                    </div>
                                    <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sample1.jfif')] bg-no-repeat">
                                        <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">鳥類</h4>
                                    </div>
                                    <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sample1.jfif')] bg-no-repeat">
                                        <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">鳥類</h4>
                                    </div>
                                    <div className="group rounded-xl overflow-hidden relative w-[181px] h-[285px] bg-cover bg-center bg-[url('../assets/bird/sample1.jfif')] bg-no-repeat">
                                        <h4 className="text-white text-xl font-bold group-hover:opacity-80 absolute w-[200px] h-[200px] pt-8 -bottom-32 -left-3 opacity-0 text-center rounded-full bg-cyan-dark">鳥類</h4>
                                    </div>
                                </div>
                        </div>
                </section>
            </main>
        </>
    )
}