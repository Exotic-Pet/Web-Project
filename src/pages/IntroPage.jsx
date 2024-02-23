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
            <div className="container items-center justify-center mx-auto xl:flex gap-x-16">
                <figure className="flex-1 h-[540px] bg-[url('../assets/intropage/img-background.svg')] bg-no-repeat bg-center my-5 bg-contain pt-1">
                    {/* <img src={introPhoto} alt="introphoto" className="w-[450px]" /> */}
                    <Swiper pagination={true} modules={[Pagination]} className="max-w-[410px] mySwiper rounded-[30px] sm:mt-16">
                        {swpImg.map((photo, i) =>(
                            <SwiperSlide key={i}>
                            <img src={photo} alt="introphoto" className="items-center justify-center" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </figure>
                <div className="pr-[87px] flex-1 ml-5 lg::ml-0">
                    <div className="flex items-center justify-between ">
                        <div>
                            <h3 className="text-2xl text-brown-normal">Leopard Gecko</h3>
                            <h2 className="text-cyan-dark font-bold text-[40px]">豹紋守宮</h2>
                        </div>
                        <h3 className="block w-[80px] pt-3 h-[80px] text-xl font-bold text-center text-white rounded-full bg-brown-normal">兩棲<br />爬蟲</h3>
                    </div>
                    <div className="py-6 my-6 text-xl font-bold border-solid border-y-2 border-brown-light text-brown-dark">
                        <p>豹紋守宮擁有肥肥的尾巴、大眼睛時而眨呀眨，再加上臉上一直掛著的魔性微笑，這迷人的模樣使其成為全球最受歡迎的爬蟲類寵物之一！</p>
                        <p className="mt-3">還擁有眾多不同品系的美麗外觀和容易飼養的特點，這些都是豹紋守宮迷人之處。</p>
                    </div>
                </div>
            </div>
            <div className="rounded-t-[80px] bg-gray-normal mt-[66px]">
                <div className="container pb-32 mx-auto">
                    <h3
                        className="py-[11px] max-w-[423px] block text-3xl font-bold text-center border-2 border-solid rounded-full bg-cyan-normal text-brown-dark mx-auto relative -translate-y-8">
                        來更加認識牠吧!</h3>
                    <div
                        className="lg:flex bg-white border-2 rounded-[30px] border-brown-light mt-[70px] lg:ml-20 max-w-[1118px] gap-x-12 px-12 sm:px-[110px] py-9 ">
                        <div className=" mt-[30px] lg:mr-11 mb-5 lg:mb-0">
                            <h2 className="text-2xl font-bold text-cyan-dark">特寵小檔案</h2>
                            <img src={file} alt="file-img" className="mt-4" />
                        </div>
                        <ul className="text-xl font-bold text-brown-dark">
                            <li className="list-disc">學名：Eublepharis Macularius</li>
                            <li className="list-disc">分類：瞼虎科（擬蜥屬）</li>
                            <li className="list-disc">產地：中亞地區，如巴基斯坦、阿富汗和印度等地區</li>
                            <li className="list-disc">成體：約 20～25 公分</li>
                            <li className="list-disc">體重：通常在 50～80 克之間</li>
                            <li className="list-disc">尾巴：約佔其總長度的 1/3，主要是用來儲存養份，並在必要時斷尾逃生</li>
                            <li className="list-disc">壽命：平均 10～15 年，有些能活到 20 年以上</li>
                            <li className="list-disc">價格：大約在台幣 500～10,000 元之間，依品系而有所不同</li>
                        </ul>
                    </div>
                    <div className="mx-10 sm:mx-20 mt-9">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮是什麼？</h2>
                        <p className="text-base text-brown-dark">
                            守宮迷人的模樣深深吸引人，再加上其溫順親人的性格，因而吸引了許多人開始飼養守宮。那麼，守宮究竟是什麼呢？
                            守宮屬於瞼虎科中的「擬蜥屬」爬行動物。傳言在古代，守宮經常出現在宮殿、房屋等住家中，並以捕食害蟲而被古人認為是一種「守護宮殿」的爬蟲，因此得名守宮，而在台語中也被稱為「蟮蟲仔」。<br />
                            此外，大多數守宮在面臨危險時會選擇斷尾逃生。<strong
                                className="font-bold text-brown-dark">儘管尾巴有再生的能力，但新長出來的尾巴並不如原本的美麗</strong>，因此在守宮飼養的過程中，因此，在飼養守宮的過程中，特別需要注意不要驚嚇到牠們，特別是當要接觸守宮時，應該保持動作小、輕柔，從肚子下方扶起，以確保它們感到安全。
                        </p>
                    </div>
                    <div className="border-b-[1px] border-solid border-brown-normal pb-[58px] mt-9 mx-10 sm:mx-20">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮吃什麼？</h2>
                        <p className="text-base text-brown-dark ">守宮的飲食與一般的壁虎相似，主要以昆蟲為主食，包括蟋蟀、蟑螂、麵包蟲、大麥蟲、蠶等，甚至可能進食乳鼠。此外，為了確保守宮獲得足夠的營養
                            <strong className="font-bold text-brown-dark">也需要定期添加鈣粉、維他命等補充品，通常每 2～3 天補充 1 次，以防止缺鈣可能導致的骨骼變形等問題。<br/></strong>至於餵食的頻率，<strong
                                    className="font-bold text-brown-dark">只能說每個「個體」和「品種」都存在差異，但一般而言，幼體每天餵食 1 次，成體則通常每 2～3 天餵食 1 次</strong>。這樣的安排有助於確保守宮獲得適當的營養，維持其健康狀態。</p>
                    </div>
                    <div className="mt-[45px] mx-10 sm:mx-20">
                        <h2 className="text-cyan-dark font-bold text-3xl tracking-[8%] mb-5 text-center">豹紋守宮有哪些品系？</h2>
                        <p className="text-base text-brown-dark">豹紋守宮的外觀非常獨特。原生色的豹紋守宮呈現黃褐色，身上佈滿黑色斑點，這也是其名稱的由來。然而，在寵物領域，<span
                            className="font-bold text-brown-dark">豹紋守宮並不僅限於原生色，因其基因的多樣性，導致許多個體呈現差異。專業的繁育者通過選育，創造出豐富多彩的顏色基因品系</span>，而這些品系的名稱也十分特別，如日蝕、黑夜、陽光、暴風雪、雪花、檸檬霜、雨水白化、川普白化等。讓我們來了解一下一些常見的豹紋守宮品系吧！
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
                        <li className="lg:flex mt-[73px] gap-x-10">
                            <img src={feedBox1} alt="equipment" className="mx-auto lg:ml-[79px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">飼養箱</h4>
                                <p className="text-lg font-bold text-brown-dark">
                                首先，住所是培養豹紋守宮的必備品。雖然牠對環境的需求不苛刻，但為了提供這種守宮一個舒適的居住環境，需要一個至少 30 x 30 x 20 的住所，而且不宜太小或太大。因為太小的住所可能會讓牠感到壓迫，甚至會影響牠的正常成長；太大的住所如果沒有足夠的藏身處，可能會使牠感到不安。</p>
                            </div>
                        </li>
                        <li className="lg:flex mt-[53px] gap-x-10">
                            <img src={feedBox2} alt="equipment" className="rounded-[20px] mx-auto lg:ml-[79px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">底材</h4>
                                <p className="text-lg font-bold text-brown-dark">
                                在挑選底材時，建議選擇易於清潔的材料，如廚房紙巾、紅玉土、椰子土等。但需要注意的是，不要為了美觀而選用細小的底材，如沙子或木屑，因為這可能會導致豹紋守宮誤食。曾有守宮死亡並進行解剖，結果發現牠們的胃部充滿沙子，情況非常慘烈。
                                </p>
                            </div>
                        </li>
                        <li className="lg:flex mt-[53px] gap-x-10">
                            <img src={feedBox3} alt="equipment" className="rounded-[20px] mx-auto lg:ml-[79px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">加溫墊</h4>
                                <p className="text-lg font-bold text-brown-dark">
                                因為豹紋守宮是變溫動物，這意味著它們的體溫會根據環境溫度而變化。因此，提供適當的加溫是相當重要的。最佳的方法是將加溫墊放置在飼養箱的「底部」某一側，讓它們可以躺在上面取暖。但必須要小心確保溫度控制良好，並避免直接接觸守宮，以免造成燙傷。
                                </p>
                            </div>
                        </li>
                        <li className="lg:flex mt-[53px] gap-x-10">
                            <img src={feedBox4} alt="equipment" className="rounded-[20px] mx-auto lg:ml-[79px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">躲避屋</h4>
                                <p className="text-lg font-bold text-brown-dark">提供躲藏處的重要性有兩個方面。首先，豹紋守宮天生習慣在隱藏處感到安全，因此需要給予它們躲藏的地方。若缺乏這種隱蔽空間，守宮可能會感到焦慮，進而對它們的健康造成負面影響，甚至影響它們的食慾和行為表現。其次，當豹紋守宮脫皮時，具有足夠磨擦力和表面粗糙的躲藏處可以幫助牠們順利脫皮。
                                </p>
                            </div>
                        </li>
                        <li className="lg:flex mt-[53px] gap-x-10">
                            <img src={feedBox5} alt="equipment" className="mx-auto lg:ml-[79px] rounded-[20px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">水盆</h4>
                                <p className="text-lg font-bold text-brown-dark">
                                就像人類一樣，豹紋守宮也需要水，因此提供清潔的水源至關重要。建議將水盆放在飼養箱的冷區（無加熱墊的區域），並定期清潔，以防止細菌繁殖。</p>
                            </div>
                        </li>
                        <li className="lg:flex mt-[53px] gap-x-10">
                            <img src={feedBox6} alt="equipment" className="mx-auto lg:ml-[79px]" />
                            <div className="mt-[32px] mx-10">
                                <h4 className="mb-3 text-2xl font-bold text-cyan-dark">溫濕度計</h4>
                                <p className="text-lg font-bold text-brown-dark">由於豹紋守宮需要保持在 25～32 度的溫度和 40%～70% 的濕度，因此溫度控制至關重要。使用溫度計可以幫助飼主確認飼養箱內的溫度是否在適當範圍內，同時使用紅外線溫度計可以更準確地測量溫度和濕度，以確保豹紋守宮生活在健康的環境中。
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div
                        className="justify-center lg:flex border-y-[1px] border-solid border-brown-normal pt-[65px] pb-[58px] mt-[75px] mb-[49px] mx-[78px]">
                        <div className="mx-auto">
                            <h2
                                className="text-brown-dark text-3xl font-bold text-center py-[10px] bg-cyan-normal rounded-[53px] sm:px-0 px-5 mr-2">
                                豹紋守宮為何會變白？</h2>
                            <ul className="text-base text-brown-dark mt-[30px] mb-5 lg:mb-0">
                                <li className="list-disc">守宮每隔數個月會脫一次皮；當守宮身體變白時，表示即將要脫皮。一旦發現脫皮的徵兆，應該讓飼養箱內保持適當的濕度，同時放置水盆供守宮飲用。</li>
                                <li className="list-disc">如果脫皮殘留在身上，可能會導致守宮皮膚發炎或壞死。可以將殘留的皮浸泡在溫水中，並使用濕潤的棉花棒幫助守宮去除脫皮。</li>
                                <li className="list-disc">守宮經常會吃掉自己脫下來的皮，這是一個正常現象。</li>
                            </ul>
                        </div>
                        <img src={feedBox7} alt="img" className="rounded-[20px] my-auto mx-auto" />
                    </div>
                    <p className="text-lg font-bold text-brown-dark mx-[81px]">
                    豹紋守宮是一種棲息於地面的動物，它們主要在清晨和黃昏時分活動。這種爬蟲寵物的飼養門檻低，對環境要求不高，並且不佔用太多空間，也不會造成噪音。再加上它們可愛且溫馴的個性，因此成為了許多人首選的寵物之一。對於從未接觸過爬蟲類的新手來說，豹紋守宮更是推薦的入門寵物！
                    </p>
                    <figure
                        className="bg-[url('../assets/intropage/readmore-bg.svg')] text-center bg-no-repeat bg-center mt-[67px] py-7">
                        <h2 className="text-3xl font-bold text-cyan-dark">延伸閱讀</h2>
                    </figure>
                    <div className="text-xl font-bold text-brown-dark bg-white px-14 py-[33px] rounded-[30px] border-solid border-2 border-brown-light sm:mx-[90px] leading-normal tracking-wide ">
                        <ul className="sm:ml-11">
                            <a href=""><li className="list-disc">如何飼養豹紋守宮？飼養豹紋守宮的新手從零開始！</li></a>
                            <a href=""><li className="list-disc">飼養肥尾守宮完整指南：肥尾守宮飼養新手從零開始！</li></a>
                            <a href=""><li className="list-disc">守宮簡介：守宮是什麼？6 個飼養守宮初學者必看的重要資訊！</li></a>
                            <a href=""><li className="list-disc">守宮品種總覽：有哪些守宮品種？8 種守宮：包括豹紋、肥尾和睫角守宮！</li></a>
                            <a href=""><li className="list-disc">購買守宮前的必讀指南：如何選擇一隻健康的守宮？</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}