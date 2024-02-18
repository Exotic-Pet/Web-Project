import { Link } from "react-router-dom";
import { useState } from "react";
// Components
import AosInit from "../components/AosInit";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
// Images
import arrowRight from "../assets/index/arrow-right.svg";

import newsEvent_1 from "../assets/index/news-event-1.png";
import newsEvent_2 from "../assets/index/news-event-2.png";
import newsEvent_3 from "../assets/index/news-event-3.png";
import newsStore_1 from "../assets/index/news-store-1.png";
import newsStore_2 from "../assets/index/news-store-2.png";
import newsStore_3 from "../assets/index/news-store-3.png";
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
  // AOS Init
  AosInit();
  // Hot Articles Data
  const hotArticlesData = [
    {
      postTime: 23,
      animal: "烏龜",
      title: "養到超黏人陸龜",
      imgUrl: hotImg_1,
      content:
        "嗨👋我是豆包 黃金歐陸 帥哥一枚 我超級愛在我媽媽身上睡覺 如果不躺在媽媽身上我會一直挖我的小屋吵他 直到他把我放在他肥肥又溫暖的肚子上 我才會乖乖的睡覺💤",
    },
    {
      postTime: 5,
      animal: "守宮",
      title: "(圖多)當一隻冬天的守宮🦖",
      imgUrl: hotImg_2,
      content:
        "先來一張可愛的小朋友，天氣變冷了🍂 我也開始被重用了！！！像這樣！！或這樣！！看看那個小手手！！！",
    },
    {
      postTime: 1,
      animal: "兔子",
      title: "兔子放風聖地推薦",
      imgUrl: hotImg_3,
      content:
        "自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅） 不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）",
    },
    {
      postTime: 1,
      animal: "倉鼠",
      title: "關於倉鼠飼養",
      imgUrl: hotImg_4,
      content:
        "最近在社團常看到新手分享倉鼠飼養 但似乎沒有接收到正確的飼養資訊 基礎飼養上愛鼠協會官網即可 今天來分享一下大家比較少談到的科養。 關於科養 甚麼是科養?為什麼要科養?倉鼠一定要科養嗎? 🌟隨著動保意識抬頭，飼養寵物不再只是將動物關起來，給他們食物跟水維持基本溫飽，動物的身心靈健康，也漸漸的越來越被重視。 🌟科養是科學飼養的簡稱，通常是指德國飼養標準，德國有著全世界最嚴格的倉鼠飼養標準，這些標準有些是德國科學家根據實驗而得，例如籠具大小、墊材厚度還有豐容(enrichment)等，其中最重要的就是豐容，許多標準基於豐容應運而生。",
    },
    {
      postTime: 23,
      animal: "烏龜",
      title: "養到超黏人陸龜",
      imgUrl: hotImg_1,
      content:
        "嗨👋我是豆包 黃金歐陸 帥哥一枚 我超級愛在我媽媽身上睡覺 如果不躺在媽媽身上我會一直挖我的小屋吵他 直到他把我放在他肥肥又溫暖的肚子上 我才會乖乖的睡覺💤",
    },
    {
      postTime: 5,
      animal: "守宮",
      title: "(圖多)當一隻冬天的守宮🦖",
      imgUrl: hotImg_2,
      content:
        "先來一張可愛的小朋友，天氣變冷了🍂 我也開始被重用了！！！像這樣！！或這樣！！看看那個小手手！！！",
    },
  ];

  const newsData = [
    {
      id: 1,
      year: 2024,
      date: "01.22",
      type: "活動",
      imgPath: newsEvent_1,
      title: "全台最大的爬蟲博覽會，即將在花博登場！",
      content:
        "親愛的爬蟲愛好者們，準備好了嗎？今年全台最大的爬蟲博覽會即將在花博登場！這將是一場爬蟲世界的盛宴，將展示各種令人驚嘆的爬蟲類動物，以及相關的設備、用品和知識。無論你是對爬蟲類動物充滿好奇心，還是已經是一位經驗豐富的飼主，這個博覽會都將是你不容錯過的活動！",
    },
    {
      id: 2,
      year: 2024,
      date: "02.01",
      type: "活動",
      imgPath: newsEvent_2,
      title: "零距離觸摸爬蟲類動物，大小朋友都可參加！親子活動推薦",
      content:
        "一般人對爬蟲類動物往往感到恐懼，並且會避之唯恐不及。但許多家長或許已經發現，小朋友卻對這些生物感到非常感興趣，並且毫不畏懼。事實上，有許多團體舉辦各種爬蟲類動物的探索活動，這些活動讓小朋友能夠從實際體驗中認識和了解這些冷門動物的生態習性，並超越了書本上的知識。",
    },
    {
      id: 3,
      year: 2024,
      date: "02.13",
      type: "活動",
      imgPath: newsEvent_3,
      title: "高雄夢時代 - 鼠兔趣味競賽，歡迎飼主報名參加！",
      content:
        "這場競賽將在高雄夢時代舉辦，是一個讓你和你的寵物一同參與的盛大活動。無論是你的兔子還是你的寵物鼠，都可以在這裡展現自己的才能，一展風采！比賽將包括各種有趣的趣味競賽項目，例如快樂小跑、障礙賽、食物競速等等。這些競賽既能展現你的寵物的活力和技巧，也能讓你們之間建立更加緊密的關係。",
    },
    {
      id: 4,
      year: 2024,
      date: "02.20",
      type: "店家",
      imgPath: newsStore_1,
      title: "另類寵物主題餐廳～10間不可錯過的特寵主題餐廳",
      content:
        "這篇收錄的不是一般的貓咪或狗狗寵物餐廳，而是以狐獴、巨嘴鳥、兔子、守宮、球蟒、鸚鵡、鬆獅蜥等為主題的另類特寵主題餐廳。這份精選介紹了10間獨特的寵物主題餐廳，快來親密互動，與這些可愛的萌寵們共度美好時光吧。",
    },
    {
      id: 5,
      year: 2024,
      date: "02.19",
      type: "店家",
      imgPath: newsStore_2,
      title: "動物嘉年華餐廳，天竺鼠、貓咪、兔子同樂的歡樂饗宴！",
      content:
        "這裡是兔子和天竺鼠們的冒險樂園。牠們在這裡玩耍、跳躍，總是充滿好奇心的樣子。您可以和兔子們互動，一同參與這場充滿歡樂的冒險，當然最吸引人的還是美味的饗宴。餐廳提供各種豐富的料理，滿足您的味蕾，同時，您可以在歡樂的氛圍中享受美食。",
    },
    {
      id: 6,
      year: 2024,
      date: "02.17",
      type: "店家",
      imgPath: newsStore_3,
      title: "與神秘的爬蟲類共度下午茶時光～還可跟牠們互動哦～",
      content:
        "在這裡，與爬蟲們的互動是不可或缺的環節。餐廳提供了專業的爬蟲導覽員，他們會教你如何與這些生物進行親密接觸，讓你不僅能看到牠們，還能親手摸摸，甚至學習更多有趣的爬蟲知識。",
    },
  ];

  // News State
  const [currentNewsType, setCurrentNewsType] = useState("店家");

  // News Info
  const NewsInfo = ({ news, index }) => (
    <li
      data-aos="fade-in"
      data-aos-duration="500"
      className="mt-[56px] flex gap-5 md:gap-10"
    >
      {/*  <!-- News Date --> */}
      <h4 className="hidden md:flex items-center ">
        <div
          className={`${
            index % 2 ? "bg-yellow-light" : "bg-green-light"
          } p-[20px] rounded-xl text-brown-dark font-bold text-center`}
        >
          {news.year}
          <span className="block">{news.date}</span>
        </div>
      </h4>
      {/*  <!-- News Content --> */}
      <Link
        to={currentNewsType === "店家" ? "/page/store-search" : "/page/event"}
        className="group flex flex-col-reverse md:flex-row gap-8 items-center md:border-l-2 border-brown-normal md:pl-6"
      >
        <div className="tracking-wide px-4">
          <h3 className="ellipsis-2 text-brown-dark font-bold text-[24px]">
            {news.title}
          </h3>
          <p className="ellipsis-3 mt-[12px] text-brown-normal text-[20px] leading-8 text-justify">
            {news.content}
          </p>
        </div>
        {/*  <!-- News Photos --> */}
        <figure className="overflow-hidden min-w-[224px] rounded-lg">
          <img
            className="group-hover:scale-125"
            src={news.imgPath}
            alt="news photo"
          />
        </figure>
      </Link>
    </li>
  );
  // Filter News
  const filterNews = newsData.filter((item) => item.type === currentNewsType);

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
                <h2 className="tracking-widest text-brown-dark font-bold text-[50px]">
                  News
                  <br className="sm:hidden" />
                  <span className="text-green-normal text-[40px] font-bold md:ml-4">
                    最新消息
                  </span>
                </h2>
                <div className="mt-7 text-[20px] font-bold">
                  <button
                    className={`${
                      currentNewsType === "活動"
                        ? "bg-green-normal text-white"
                        : "bg-gray-dark text-brown-dark"
                    } px-[22px] py-[7px] mr-6 rounded-full`}
                    onClick={() => setCurrentNewsType("活動")}
                  >
                    活 動
                  </button>
                  <button
                    className={`${
                      currentNewsType === "店家"
                        ? "bg-green-normal text-white"
                        : "bg-gray-dark text-brown-dark"
                    } px-[22px] py-[7px] rounded-full`}
                    onClick={() => setCurrentNewsType("店家")}
                  >
                    店 家
                  </button>
                </div>
              </div>
              {/*  <!-- See More --> */}
              <div className="move py-[8px] hidden md:block">
                <Link
                  to="/page/store-overview"
                  className="cursor-pointer flex items-center pl-[56px]"
                >
                  <figure>
                    <img src={arrowRight} alt="arrow" />
                  </figure>
                  <p className="move__text max-w-[50px] ml-[20px] text-[24px] text-brown-dark font-bold">
                    查看更多
                  </p>
                  <div className="move__ball bg-yellow-normal"></div>
                </Link>
              </div>
            </div>
            {/*  <!-- News List --> */}
            <ul className="mt-[24px] py-[16px] border-t-2 border-brown-normal">
              {filterNews.map((news, index) => (
                <NewsInfo news={news} index={index} key={news.id} />
              ))}
            </ul>
          </article>
        </div>
        {/*  <!-- Hot Article --> */}
        <div className="mt-56 py-32 bg-cover bg-no-repeat bg-center 2xl:bg-contain 2xl:bg-gray-normal bg-[url('../assets/index/hot-bg.svg')]">
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
            <div className="container mx-auto relative text-center font-bold tracking-wide">
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
                {hotArticlesData.map((article, index) => (
                  <li
                    key={index}
                    className="w-[376px] sm:w-[400px] px-8 py-7 border-[3px] rounded-2xl bg-white border-cyan-normal hover:border-yellow-normal"
                  >
                    <h4 className="text-sm text-cyan-normal font-medium">
                      {article.animal}
                      <span className="text-brown-normal font-normal">
                        <img
                          className="inline-block mx-1 mb-[2px]"
                          src={timeIcon}
                          alt="time"
                        />
                        {article.postTime}小時前
                      </span>
                    </h4>
                    <h3 className="mt-2 text-xl text-brown-dark tracking-wide font-bold">
                      {article.title}
                    </h3>
                    <figure className="mt-3">
                      <img className="w-full" src={article.imgUrl} alt="hot" />
                    </figure>
                    <p className="mt-6 mb-3 ellipsis-2 text-brown-dark text-justify">
                      {article.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/*  <!-- See More Button --> */}
            <div className="mt-20 flex justify-center text-xl text-center tracking-wide font-bold">
              <Link
                to="/page/community"
                className="py-2 w-[288px] bg-white border-2 rounded-full border-cyan-normal text-brown-dark hover:text-white hover:bg-cyan-normal"
              >
                查看更多文章
              </Link>
            </div>
          </article>
        </div>
        {/*  <!-- Follow APP Info --> */}
        <div className="container mx-auto my-36 px-2 lg:px-0 flex gap-6 justify-evenly items-center flex-col lg:flex-row">
          <figure data-aos="zoom-in" data-aos-duration="1500">
            <img src={appDemo} alt="phone" />
          </figure>
          <section
            data-aos="fade-in"
            data-aos-duration="1500"
            className="text-center"
          >
            <h2 className="text-[40px] text-green-normal tracking-widest font-bold">
              APP瀏覽更方便
            </h2>
            <h3 className="mt-2 text-[26px] sm:text-[30px] text-brown-dark font-bold tracking-wider">
              隨時關注特寵消息不錯過哦！
            </h3>
            <div className="mt-14">
              <a
                href="https://play.google.com"
                className="max-w-[251px] mx-auto block hover:opacity-70"
              >
                <img src={googlePlay} alt="google-play" />
              </a>
              <a
                href="https://www.apple.com/tw/app-store"
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
