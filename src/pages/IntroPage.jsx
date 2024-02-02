import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import introPhoto from "../assets/intropage/intro-photo.png";
import introPhoto2 from "../assets/intropage/intro-photo2.png";
import introPhoto3 from "../assets/intropage/intro-photo3.png";
import introPhoto4 from "../assets/intropage/intro-photo4.png";
import introPhoto5 from "../assets/intropage/intro-photo5.png";
import file from "../assets/intropage/file.svg";
import introImg1 from "../assets/intropage/intro-img1.png";
import introImg2 from "../assets/intropage/intro-img2.png";
import introImg3 from "../assets/intropage/intro-img3.png";
import introImg4 from "../assets/intropage/intro-img4.png";
import introImg5 from "../assets/intropage/intro-img5.png";
import introImg6 from "../assets/intropage/intro-img6.png";
import introImg7 from "../assets/intropage/intro-img7.png";
import introImg8 from "../assets/intropage/intro-img8.png";
import feedBox1 from "../assets/intropage/feedbox-img1.png";
import feedBox2 from "../assets/intropage/feedbox-img2.png";
import feedBox3 from "../assets/intropage/feedbox-img3.png";
import feedBox4 from "../assets/intropage/feedbox-img4.png";
import feedBox5 from "../assets/intropage/feedbox-img5.png";
import feedBox6 from "../assets/intropage/feedbox-img6.png";
import feedBox7 from "../assets/intropage/feedbox-img7.png";


export default function IntroPage() {
    const swpImg = [introPhoto, introPhoto2, introPhoto3, introPhoto4, introPhoto5]
    return (
        <main className="mt-32">
            <div className="container flex items-center mx-auto gap-x-16">
                <figure className="bg-[url('../assets/intropage/img-background.svg')] bg-no-repeat bg-center bg-contain p-11">
                    {/* <img src={introPhoto} alt="introphoto" className="w-[450px]" /> */}
                    <Swiper pagination={true} modules={[Pagination]} className="w-64 mySwiper rounded-[30px]">
                        {swpImg.map((photo, i) =>(
                            <SwiperSlide key={i}>
                            <img src={photo} alt="introphoto" className="w-[450px] justify-center items-center" />
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide>
                            <img src={introPhoto} alt="introphoto" className="w-[450px] justify-center items-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={introPhoto2} alt="introphoto" className="w-[450px] justify-center items-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={introPhoto3} alt="introphoto" className="w-[450px] justify-center items-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={introPhoto4} alt="introphoto" className="w-[450px] justify-center items-center" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={introPhoto5} alt="introphoto" className="w-[450px] justify-center items-center" />
                        </SwiperSlide> */}
                    </Swiper>
                </figure>
                <div className="pr-[87px]">
                    <div className="flex items-center justify-between ">
                        <div>
                            <h3 className="text-2xl text-brown-normal">Leopard Gecko</h3>
                            <h2 className="text-cyan-dark font-bold text-[40px]">豹紋守宮</h2>
                        </div>
                        <h3 className="block w-[80px] pt-3 h-[80px] text-xl font-bold text-center text-white rounded-full bg-brown-dark">兩棲<br />爬蟲</h3>
                    </div>
                    <div className="py-6 my-6 text-xl font-bold border-solid border-y-2 border-brown-light text-brown-dark">
                        <p>豹紋守宮有著肥肥的尾巴，水汪汪的大眼睛眨呀眨，加上偶而露出的魔性微笑，那可愛又親人的模樣、讓他成為全世界最有人氣的爬蟲類寵物！</p>
                        <p className="mt-3">擁有眾多美麗的品系變化、以及容易飼育等特點，都是豹紋守宮的魅力所在。</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-[80px] bg-gray-normal mt-[66px]">
                <div className="container pb-32 mx-auto">
                    <h3
                        className="py-[11px] w-[423px] block text-3xl font-bold text-center border-2 border-solid rounded-full bg-cyan-normal text-brown-dark mx-auto relative -translate-y-8">
                        來更加認識牠吧!</h3>
                    <div
                        className="flex bg-white border-2 border-solid rounded-[30px] border-brown-light mt-[70px] mx-[136px] gap-x-12 justify-center py-9 ">
                        <div className=" mt-[30px] w-36">
                            <h2 className="text-2xl font-bold text-cyan-dark">特寵小檔案</h2>
                            <img src={file} alt="file-img" className="mt-4" />
                        </div>
                        <ul className="text-xl font-bold text-brown-dark">
                            <li className="list-disc whitespace-nowrap">學名：Eublepharis Macularius</li>
                            <li className="list-disc whitespace-nowrap">分類：瞼虎科（擬蜥屬）</li>
                            <li className="list-disc whitespace-nowrap">產地：中亞地區，如巴基斯坦、阿富汗和印度等地區</li>
                            <li className="list-disc whitespace-nowrap">成體：約 20～25 公分</li>
                            <li className="list-disc whitespace-nowrap">體重：通常在 50～80 克之間</li>
                            <li className="list-disc whitespace-nowrap">尾巴：約佔其總長度的 1/3，主要是用來儲存養份，並在必要時斷尾逃生</li>
                            <li className="list-disc whitespace-nowrap">壽命：平均 10～15 年，有些能活到 20 年以上</li>
                            <li className="list-disc whitespace-nowrap">價格：大約在台幣 500～10,000 元之間，依品系而有所不同</li>
                        </ul>
                    </div>
                    <div className="mx-20 mt-9">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮是什麼？</h2>
                        <p className="text-base text-brown-dark">
                            守宮可愛的模樣讓人深深著迷，加上溫順親人的性格，使許多人開始飼養守宮，但究竟守宮是什麼呢？守宮名稱的由來為何？其實，守宮是一種屬於瞼虎科中的「擬蜥屬」爬行動物。據說在古代，守宮經常會出現在宮殿、房屋等住家中，且會幫忙吃害蟲，因此被古人認為是一種「守護宮殿」的爬蟲，所以稱之為守宮，台語又稱作「蟮蟲仔」。<br />
                            除此之外，多數守宮在遇到危險時，還會斷尾逃生，<strong
                                className="font-bold text-brown-dark">雖然尾巴會再生長出來，但卻不比一開始來的漂亮</strong>，因此在守宮飼養的過程中，<strong
                                    className="font-bold text-brown-dark">需要特別注意不要驚嚇到牠們</strong>，尤其是守宮上手時，一定要動作小、輕，且從肚子下方扶起，讓他們有安全感！
                        </p>
                    </div>
                    <div className="border-b-[1px] border-solid border-brown-normal pb-[58px] mt-9 mx-20">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮吃什麼？</h2>
                        <p className="text-base text-brown-dark ">守宮食物與一般壁虎無異，主食是以昆蟲為主，像是：蟋蟀、蟑螂、麵包蟲、大麥蟲、蠶等，甚至也會吃乳鼠；除此之外，
                            。<strong className="font-bold text-brown-dark">也需要定期為守宮補充鈣粉、維他命等營養品，約 2～3 天添加 1
                                次，才不會導致缺鈣，進而造成骨骼變形等狀況</strong>而至於守宮多久餵一次，<strong
                                    className="font-bold text-brown-dark">只能說每個「個體」與「品種」都不盡相同，但基本上幼體 1 日 1 次，成體則 2～3 日餵食 1
                                次</strong>。</p>
                    </div>
                    <div className="mt-[45px] mx-20">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮有哪些品系？</h2>
                        <p className="text-base text-brown-dark">豹紋守宮的外貌很有特色。原生色的豹紋守宮呈黃褐色，身上有黑色斑點，這也是它名字的由來。<span
                            className="font-bold text-brown-dark">但是寵物界的豹紋守宮可不只有原色這一種顏色，豹紋守宮因為遺傳基因較為多樣化，進而造成許多的個體差異，專業的繁育者選育出了超多的顏色基因品系</span>，這些不同基因的名字也起得非常好聽：日蝕、黑夜、陽光、暴風雪、雪花、檸檬霜、雨水白化、川普白化等，就來看看常見的豹紋守宮品系吧！
                        </p>
                    </div>
                    <div className="bg-[url('../assets/intropage/dialog-box.svg')] bg-no-repeat mt-[48px] mb-[25px] mx-auto text-center bg-center">
                        <h4 className="pt-[12px] pb-[32px] pl-[16px] text-xl text-brown-normal">雖然顏色差異很大，但我們都是豹紋守宮哦！</h4>
                    </div>
                    <div
                        className="flex flex-wrap gap-x-[26px] gap-y-[33px] justify-center border-b-[1px] pb-[45px] border-solid border-brown-normal">
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg1} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">日焰</h4>
                            <p className="text-base text-brown-normal">Sunglow</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg2} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">超級雪花</h4>
                            <p className="text-base text-brown-normal">Super Snow</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg3} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">暴風雪</h4>
                            <p className="text-base text-brown-normal">Blizzard</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg4} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">貝爾白化</h4>
                            <p className="text-base text-brown-normal">Bell Albino</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg5} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">超級惡魔雪花白酒</h4>
                            <p className="text-base text-brown-normal">Super Snow Diablo Blanco</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg6} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">黑夜</h4>
                            <p className="text-base text-brown-normal">Black Night</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg7} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">電橘</h4>
                            <p className="text-base text-brown-normal">Electric Tangerine</p>
                        </div>
                        <div className="text-center">
                            <figure className="rounded-[20px] overflow-hidden">
                                <img src={introImg8} alt="intro-img" />
                            </figure>
                            <h4 className="mt-4 text-xl font-bold text-brown-normal">土匪</h4>
                            <p className="text-base text-brown-normal">Bandit</p>
                        </div>
                    </div>
                    <figure
                        className="bg-[url('../assets/intropage/title-bg.svg')] text-center bg-no-repeat bg-center mt-[67px] py-5">
                        <h2 className="text-3xl font-bold text-cyan-dark">飼養豹紋守宮需要哪些設備？</h2>
                        <p className="mt-3 text-lg font-bold text-brown-dark">飼養守宮主要需要準備：飼養箱、底材、加溫墊、躲避屋、水盆、溫濕度計，共6樣設備！</p>
                    </figure>
                    <ul>
                        <li className="flex mt-[73px]">
                            <img src={feedBox1} alt="equipment" className="ml-[79px] mr-[51px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">飼養箱</h4>
                                <p className="text-lg font-bold text-brown-dark mr-[140px]">
                                    首先，飼養箱是養豹紋守宮的必需品，雖然牠對環境要求不高，但為了提供豹紋守宮舒適的生活環境，需要一個至少 30 x 30 x 20
                                    的飼養箱，且不宜過小或過大。因為過小的飼養箱可能會給牠們壓迫感，甚至會因此而無法正常長大；過大的飼養箱若沒有足夠的躲避空間，可能會使牠感到不安。</p>
                            </div>
                        </li>
                        <li className="flex mt-[53px]">
                            <img src={feedBox2} alt="equipment" className="rounded-[20px] ml-[79px] mr-[51px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">底材</h4>
                                <p className="text-lg font-bold text-brown-dark  mr-[140px]">
                                    在挑選底材時，建議選擇一個容易清潔的底材，像是：廚房紙巾、赤玉土、椰土等，不過要注意的是，不要為了好看而選用沙類、木屑等細小的底材，因為很容易造成豹紋守宮誤食。曾經就發生過守宮死亡後解剖來看，結果肚子全是沙的慘狀。
                                </p>
                            </div>
                        </li>
                        <li className="flex mt-[53px]">
                            <img src={feedBox3} alt="equipment" className="rounded-[20px] ml-[79px] mr-[51px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">加溫墊</h4>
                                <p className="text-lg font-bold text-brown-dark  mr-[140px]">
                                    由於豹紋守宮是變溫動物，代表牠們的體溫會隨著環境溫度而變化，所以加溫需求對於爬蟲來說相當重要，最好的方法就是將加溫墊可以放在飼養箱「底部」的某一側，並讓它們躺在上面取暖。不過要注意的是，溫度要控制好，且不要與守宮直接接觸，以避免守宮燙傷。
                                </p>
                            </div>
                        </li>
                        <li className="flex mt-[53px]">
                            <img src={feedBox4} alt="equipment" className="rounded-[20px] ml-[79px] mr-[51px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">躲避屋</h4>
                                <p className="text-lg font-bold text-brown-dark mr-[140px]">躲避屋的重要性有 2
                                    點，一是豹紋守宮的天性習慣在遮蔽處找安全感，因此需要提供躲避屋給牠們，如果缺乏隱蔽空間，守宮可能會感到不安，進而對健康產生負面影響，甚至會影響牠們的食慾和行為表現。二是豹紋守宮在脫皮時，若有磨擦系數足夠且表面粗糙的躲避屋，可以幫助牠們順利脫皮。
                                </p>
                            </div>
                        </li>
                        <li className="flex mt-[53px]">
                            <img src={feedBox5} alt="equipment" className="ml-[79px] mr-[51px] rounded-[20px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">水盆</h4>
                                <p className="text-lg font-bold text-brown-dark mr-[140px]">
                                    如同人類一樣，豹紋守宮也需要飲水，所以提供乾淨的水源非常重要，建議可以將水盆放至飼養箱冷區（無加溫墊那區），並隨時保持清潔，以避免細菌孳生。</p>
                            </div>
                        </li>
                        <li className="flex mt-[53px]">
                            <img src={feedBox6} alt="equipment" className="ml-[79px] mr-[51px]" />
                            <div className="mt-[32px]">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">溫濕度計</h4>
                                <p className="text-lg font-bold text-brown-dark mr-[140px]">由於豹紋守宮需要溫度在 25～32 度之間，濕度 40%～70%
                                    之間的飼養環境，因此適當的溫度控制非常重要；而準備溫濕度計，則可以幫助飼主確認飼養箱的溫度是否在適宜範圍內，也需準備紅外線測溫槍，更加確定溫度及濕度，以提供豹紋守宮一個健康的生活環境。
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div
                        className="flex border-y-[1px] border-solid border-brown-normal pt-[65px] pb-[58px] mt-[75px] mb-[49px] mx-[78px]">
                        <div className="ml-[78px] mr-[43px]">
                            <h2
                                className="text-brown-dark text-3xl font-bold text-center py-[10px] bg-cyan-normal rounded-[53px] ">
                                豹紋守宮為何會變白？</h2>
                            <ul className="text-base text-brown-dark mt-[30px]">
                                <li className="list-disc">守宮數個月會脫皮一次；發現守宮的身體變白，就是即將要脫皮的信號。發現將脫皮的徵兆後，請讓飼育箱內保持一定濕度，並放置水盆保持。</li>
                                <li className="list-disc">脫皮如果持續殘留在身上，可能會造成守宮的皮膚發炎、壞死。可以將卡皮的部分浸泡於溫水中，使用沾濕的棉花棒幫助守宮去除脫皮。</li>
                                <li className="list-disc">守宮經常將自己脫下來的皮吃掉，此為正常現象。</li>
                            </ul>
                        </div>
                        <img src={feedBox7} alt="img" className="rounded-[20px] my-auto" />
                    </div>
                    <p className="text-lg font-bold text-brown-dark mx-[81px]">
                        豹紋守宮是一種地棲型（在地面生活）的晨昏性（清晨和黃昏時間內活動）動物，其飼養門檻低、環境要求不高、不占空間不吵鬧，再加上可愛溫馴的個性等優點，成為了多數人的首選爬蟲類寵物；且如果你是從未接觸過爬蟲類的新手，豹紋守宮更是入坑推薦的入門爬蟲寵物！
                    </p>
                    <figure
                        className="bg-[url('../assets/intropage/readmore-bg.svg')] text-center bg-no-repeat bg-center mt-[67px] py-7">
                        <h2 className="text-3xl font-bold text-cyan-dark">延伸閱讀</h2>
                    </figure>
                    <div className="text-xl font-bold text-brown-dark bg-white px-14 py-[33px] rounded-[30px] border-solid border-2 border-brown-light mx-[90px] leading-normal tracking-wide ">
                        <ul className="ml-11">
                            <li className="list-disc">豹紋守宮怎麼養？豹紋守宮飼養新手從 0 開始！</li>
                            <li className="list-disc">肥尾守宮全攻略：肥尾守宮飼養新手從 0 開始！</li>
                            <li className="list-disc">守宮介紹：守宮是什麼？6 個守宮飼養入門必看須知！</li>
                            <li className="list-disc">守宮種類有哪些？8 種守宮：豹紋、肥尾、睫角全上榜！</li>
                            <li className="list-disc">守宮購買前必看：如何挑選 1 隻健康的守宮？</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}