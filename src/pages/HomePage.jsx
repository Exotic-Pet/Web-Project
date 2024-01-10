// Components
import AosInit from "../components/AosInit";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
// Images
import arrowRight from "../assets/index/arrow-right.svg";
import newsImg_1 from "../assets/index/news-1.png";
import chameleonImg from "../assets/index/chameleon.svg";
import deco_1 from "../assets/index/deco-1.svg";
import deco_2 from "../assets/index/deco-2.svg";
import deco_3 from "../assets/index/deco-3.svg";
import deco_4 from "../assets/index/deco-4.svg";
import deco_5 from "../assets/index/deco-5.svg";
import deco_6 from "../assets/index/deco-6.svg";
import timeIcon from "../assets/index/time.svg";
import hotImg_1 from "../assets/index/hot-1.png";
import hotImg_2 from "../assets/index/hot-2.png";
import hotImg_3 from "../assets/index/hot-3.png";
import hotImg_4 from "../assets/index/hot-4.png";
import appDemo from "../assets/index/APP-demo.svg";
import googlePlay from "../assets/index/google-play.png";
import appStore from "../assets/index/app-store.png";

export default function HomePage() {
  AosInit();

  return (
    <>
      <HomeHeader />
      <main className="mt-12 md:mt-20">
        {/*  <!-- News --> */}
        <div className="container mx-auto">
          <article className="mx-auto px-2 lg:px-8">
            <div className="flex items-end justify-between">
              {/*  <!-- News Title --> */}
              <div className="mx-auto md:mx-0">
                <h2 className="tracking-widest text-brown-dark font-black text-[50px]">
                  News
                  <br className="sm:hidden" />
                  <span className="text-green-normal text-[40px] font-black md:ml-4">
                    最新消息
                  </span>
                </h2>
                <div className="mt-[32px] text-[20px] font-bold">
                  <a
                    className="px-[22px] py-[7px] mr-6 rounded-full bg-brown-light text-brown-dark"
                    href="#"
                  >
                    活 動
                  </a>
                  <a
                    className="px-[22px] py-[7px] rounded-full bg-green-normal text-white"
                    href="#"
                  >
                    店 家
                  </a>
                </div>
              </div>
              {/*  <!-- See More --> */}
              <div className="move py-[8px] hidden md:block">
                <a className="flex items-center pl-[56px]" href="#">
                  <figure>
                    <img src={arrowRight} alt="arrow" />
                  </figure>
                  <p className="move__text max-w-[50px] ml-[20px] text-[24px] text-brown-dark font-bold">
                    查看更多
                  </p>
                  <div className="move__ball bg-yellow-normal"></div>
                </a>
              </div>
            </div>
            {/*  <!-- News List --> */}
            <ul className="mt-[24px] py-[16px] border-t-2 border-brown-normal">
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                className="mt-[56px] flex gap-5 md:gap-10"
              >
                {/*  <!-- News Date --> */}
                <h4 className="hidden md:flex items-center ">
                  <div className="p-[20px] rounded-xl bg-green-light text-brown-dark font-bold text-center">
                    2023
                    <span className="block">02.04</span>
                  </div>
                </h4>
                {/*  <!-- News Content --> */}
                <article className="flex flex-col-reverse md:flex-row gap-8 items-center md:border-l-2 border-brown-normal md:pl-6">
                  <div className="tracking-wide px-4">
                    <h3 className="ellipsis-2 text-brown-dark font-bold text-[24px]">
                      另類寵物主題餐廳～ 10間不可錯過的特寵主題餐廳
                    </h3>
                    <p className="ellipsis-4 mt-[12px] text-brown-normal text-[20px] leading-8 text-justify">
                      這篇收錄的不是貓咪或狗狗的寵物餐廳，而是另類特寵主題餐廳，像是狐獴、巨嘴鳥、兔子、守宮、球蟒、鬆獅蜥…
                      此篇精選10間寵物主題餐廳，快來與萌寵們親密互動吧。
                    </p>
                  </div>
                  {/*  <!-- News Photos --> */}
                  <figure className="overflow-hidden min-w-[224px] rounded-lg">
                    <a href="#">
                      <img
                        className="hover:scale-125"
                        src={newsImg_1}
                        alt="news photo"
                      />
                    </a>
                  </figure>
                </article>
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                className="mt-[56px] flex gap-5 md:gap-10"
              >
                {/*  <!-- News Date --> */}
                <h4 className="hidden md:flex items-center ">
                  <div className="p-[20px] rounded-xl bg-yellow-normal text-brown-dark font-bold text-center">
                    2023
                    <span className="block">02.04</span>
                  </div>
                </h4>
                {/*  <!-- News Content --> */}
                <article className="flex flex-col-reverse md:flex-row gap-8 items-center md:border-l-2 border-brown-normal md:pl-6">
                  <div className="tracking-wide px-4">
                    <h3 className="ellipsis-2 text-brown-dark font-bold text-[24px]">
                      另類寵物主題餐廳～ 10間不可錯過的特寵主題餐廳
                    </h3>
                    <p className="ellipsis-4 mt-[12px] text-brown-normal text-[20px] leading-8 text-justify">
                      這篇收錄的不是貓咪或狗狗的寵物餐廳，而是另類特寵主題餐廳，像是狐獴、巨嘴鳥、兔子、守宮、球蟒、鬆獅蜥…
                      此篇精選10間寵物主題餐廳，快來與萌寵們親密互動吧。
                    </p>
                  </div>
                  {/*  <!-- News Photos --> */}
                  <figure className="overflow-hidden min-w-[224px] rounded-lg">
                    <a href="#">
                      <img
                        className="hover:scale-125"
                        src={newsImg_1}
                        alt="news photo"
                      />
                    </a>
                  </figure>
                </article>
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                className="mt-[56px] flex gap-5 md:gap-10"
              >
                {/*  <!-- News Date --> */}
                <h4 className="hidden md:flex items-center ">
                  <div className="p-[20px] rounded-xl bg-green-light text-brown-dark font-bold text-center">
                    2023
                    <span className="block">02.04</span>
                  </div>
                </h4>
                {/*  <!-- News Content --> */}
                <article className="flex flex-col-reverse md:flex-row gap-8 items-center md:border-l-2 border-brown-normal md:pl-6">
                  <div className="tracking-wide px-4">
                    <h3 className="ellipsis-2 text-brown-dark font-bold text-[24px]">
                      另類寵物主題餐廳～ 10間不可錯過的特寵主題餐廳
                    </h3>
                    <p className="ellipsis-4 mt-[12px] text-brown-normal text-[20px] leading-8 text-justify">
                      這篇收錄的不是貓咪或狗狗的寵物餐廳，而是另類特寵主題餐廳，像是狐獴、巨嘴鳥、兔子、守宮、球蟒、鬆獅蜥…
                      此篇精選10間寵物主題餐廳，快來與萌寵們親密互動吧。
                    </p>
                  </div>
                  {/*  <!-- News Photos --> */}
                  <figure className="overflow-hidden min-w-[224px] rounded-lg">
                    <a href="#">
                      <img
                        className="hover:scale-125"
                        src={newsImg_1}
                        alt="news photo"
                      />
                    </a>
                  </figure>
                </article>
              </li>
            </ul>
          </article>
        </div>
        {/*  <!-- Hot Article --> */}
        <div className="mt-56 py-32 bg-cover bg-no-repeat bg-center bg-[url('../assets/index/hot-bg.svg')]">
          <article className="relative">
            {/*  <!-- Chameleon --> */}
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              className="absolute w-44 md:w-60 -top-[280px] left-20 hover:scale-110"
              src={chameleonImg}
              alt="chameleon"
            ></img>
            {/*  <!-- Hot Info Title --> */}
            <div className="container mx-auto relative text-center font-black tracking-wide">
              <h2 className="text-brown-dark text-[48px]">
                Hot
                <span className="text-cyan-dark text-[40px] tracking-widest md:ml-4">
                  熱門文章
                </span>
              </h2>
              <p className="mt-3 pt-3 max-w-[320px] mx-auto text-xl text-brown-normal border-t border-brown-normal font-bold">
                看看大家都在討論什麼！
              </p>
              {/*  <!-- Hot Deco Element --> */}
              <img
                data-aos="zoom-in"
                data-aos-delay="600"
                className="zoom__slow absolute w-5 md:w-10 top-[50%] left-[4%] md:left-[8%]"
                src={deco_1}
                alt="deco"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="400"
                className="zoom__fast absolute w-5 md:w-10 top-[82%] left-[10%] md:left-[16%]"
                src={deco_2}
                alt="deco"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="200"
                className="zoom__slow absolute w-5 md:w-10 top-[5%] left-[14%] md:left-[20%]"
                src={deco_3}
                alt="deco"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="200"
                className="zoom__fast absolute w-5 md:w-10 top-0 right-[14%] md:right-[22%]"
                src={deco_4}
                alt="deco"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="400"
                className="zoom__slow absolute w-5 md:w-10 top-[80%] right-[8%] md:right-[15%]"
                src={deco_5}
                alt="deco"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="600"
                className="zoom__fast absolute w-5 md:w-10 top-[8%] right-[4%] md:right-[10%]"
                src={deco_6}
                alt="deco"
              />
            </div>
            {/*  <!-- Hot Cards List --> */}
            <div className="container mx-auto overflow-hidden">
              <ul className="auto__scroll w-[2400px] sm:w-[2600px] mt-[120px] flex flex-nowrap gap-8 pl-2">
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    烏龜
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      23小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    養到超黏人陸龜
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_1} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    嗨👋我是豆包 黃金歐陸 帥哥一枚 我超級愛在我媽媽身上睡覺
                    如果不躺在媽媽身上我會一直挖我的小屋吵他
                    直到他把我放在他肥肥又溫暖的肚子上 我才會乖乖的睡覺💤
                  </p>
                </li>
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    守宮
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      5小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    (圖多)當一隻冬天的守宮🦖
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_2} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    先來一張可愛的小朋友，天氣變冷了🍂
                    我也開始被重用了！！！像這樣！！或這樣！！看看那個小手手！！！
                  </p>
                </li>
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    兔子
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      1小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    兔子放風聖地推薦
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_3} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    倉鼠
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      1小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    關於倉鼠飼養
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_4} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    最近在社團常看到新手分享倉鼠飼養
                    但似乎沒有接收到正確的飼養資訊 基礎飼養上愛鼠協會官網即可
                    今天來分享一下大家比較少談到的科養。 關於科養
                    甚麼是科養?為什麼要科養?倉鼠一定要科養嗎?
                    🌟隨著動保意識抬頭，飼養寵物不再只是將動物關起來，給他們食物跟水維持基本溫飽，動物的身心靈健康，也漸漸的越來越被重視。
                    🌟科養是科學飼養的簡稱，通常是指德國飼養標準，德國有著全世界最嚴格的倉鼠飼養標準，這些標準有些是德國科學家根據實驗而得，例如籠具大小、墊材厚度還有豐容(enrichment)等，其中最重要的就是豐容，許多標準基於豐容應運而生。
                  </p>
                </li>
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    烏龜
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      23小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    養到超黏人陸龜
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_1} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    嗨👋我是豆包 黃金歐陸 帥哥一枚 我超級愛在我媽媽身上睡覺
                    如果不躺在媽媽身上我會一直挖我的小屋吵他
                    直到他把我放在他肥肥又溫暖的肚子上 我才會乖乖的睡覺💤
                  </p>
                </li>
                {/*  <!-- Card Info --> */}
                <li className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal">
                  <h4 className="text-sm text-cyan-normal font-medium">
                    守宮
                    <span className="text-brown-normal font-normal">
                      <img
                        className="inline-block ml-1 mb-[2px]"
                        src={timeIcon}
                        alt="time"
                      />
                      5小時前
                    </span>
                  </h4>
                  <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                    (圖多)當一隻冬天的守宮🦖
                  </h3>
                  <figure className="mt-3">
                    <img className="w-full" src={hotImg_2} alt="hot" />
                  </figure>
                  <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                    先來一張可愛的小朋友，天氣變冷了🍂
                    我也開始被重用了！！！像這樣！！或這樣！！看看那個小手手！！！
                  </p>
                </li>
              </ul>
            </div>
            {/*  <!-- See More Button --> */}
            <div className="mt-20 flex justify-center text-xl text-center tracking-wide font-bold">
              <a
                href="#"
                className="py-2 w-[288px] bg-white border-2 rounded-full border-cyan-normal text-brown-dark hover:text-white hover:bg-cyan-normal"
              >
                查看更多文章
              </a>
            </div>
          </article>
        </div>
        {/*  <!-- Follow APP Info --> */}
        <div className="container mx-auto my-36 px-2 lg:px-0 flex gap-6 justify-evenly items-center flex-col lg:flex-row">
          <figure data-aos="zoom-in" data-aos-duration="1000">
            <img src={appDemo} alt="phone" />
          </figure>
          <section
            data-aos="fade-lfet"
            data-aos-duration="1000"
            className="text-center"
          >
            <h2 className="text-[40px] text-green-normal tracking-widest font-black">
              APP瀏覽更方便
            </h2>
            <h3 className="mt-2 text-[26px] sm:text-[30px] text-brown-dark font-bold tracking-wider">
              隨時關注特寵消息不錯過哦！
            </h3>
            <div className="mt-14">
              <a
                href="#"
                className="max-w-[251px] mx-auto block hover:opacity-70"
              >
                <img src={googlePlay} alt="google-play" />
              </a>
              <a
                href="#"
                className="max-w-[251px] mx-auto mt-[12px] block hover:opacity-70"
              >
                <img src={appStore} alt="app-store" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
