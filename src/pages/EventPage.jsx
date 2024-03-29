import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
import mainImg1 from "../assets/event/main-swp-img1.png";
import mainImg2 from "../assets/event/main-swp-img2.png";
import mainImg3 from "../assets/event/main-swp-img3.png";
import mainImg4 from "../assets/event/main-swp-img4.png";
import mainImg5 from "../assets/event/main-swp-img5.png";
import mainImg6 from "../assets/event/main-swp-img6.png";
import eventImg1 from "../assets/event/event-img1.svg";
import eventImg2 from "../assets/event/event-img2.svg";
import eventImg3 from "../assets/event/event-img3.svg";
import hotEventImg1 from "../assets/event/imageForEvent/hot-event-1.png";
import hotEventImg2 from "../assets/event/imageForEvent/hot-event-2.png";
import hotEventImg3 from "../assets/event/imageForEvent/hot-event-3.png";
import eventImg4 from "../assets/event/event-img4.svg";
import eventImg5 from "../assets/event/event-img5.svg";
import eventImg6 from "../assets/event/event-img6.svg";
import featureEventImg1 from "../assets/event/imageForEvent/feature-event-1.png";
import featureEventImg2 from "../assets/event/imageForEvent/feature-event-2.png";
import featureEventImg3 from "../assets/event/imageForEvent/feature-event-3.png";
import arrow from "../assets/event/arrow.svg";
import deco from "../assets/event/deco.svg";
import allrats from "../assets/event/all-rats.svg";
import allreptiles from "../assets/event/all-reptiles.svg";
import monthlySelection from "../assets/event/monthly-selection.svg";
import allRatsBanner from "../assets/event/all-rats-BN.svg";
import allreptilesBanner from "../assets/event/all-reptiles-BN.svg";
import monthlySelectionBanner from "../assets/event/monthly-selection-BN.svg";
// custom css
import "../styles/swiperstyle.css";
// component
import Filter from"../components/EventFilter"
// import { Link } from "react-router-dom";
import LightBox from "../components/LightBox";

export default function StoreContent() {
  // LightBox State
  const [eventLightBoxState, setEventLightBoxState] = useState(false);

  const [swiperRef, setSwiperRef] = useState(null);

  const mainSwpImage = [
    mainImg1,
    mainImg2,
    mainImg3,
    mainImg4,
    mainImg5,
    mainImg6,
  ];
  const hotEvents = [
    {
      imgUrl: eventImg1,
      category: "展覽",
      title: "艸植感市集",
      date: "2024/11/11 (六)-11/13 (日)",
    },
    {
      imgUrl: eventImg2,
      category: "展覽",
      title: "2024台灣兩棲爬蟲博覽會",
      date: "2024/6/22 (六)-6/23 (日)",
    },
    {
      imgUrl: eventImg3,
      category: "展覽",
      title: "艸我的方向走來2.0",
      date: "2024/7/15 (六)-7/16 (日)",
    },
    {
      imgUrl: hotEventImg1,
      category: "講座",
      title: "2024秋 - 室內動物觀察講座",
      date: "2024/11/11 (六)-11/13 (日)",
    },
    {
      imgUrl: hotEventImg2,
      category: "展覽",
      title: "2024兩棲爬蟲特寵見面會",
      date: "2024/2/23 (五)-2/25 (日)",
    },
    {
      imgUrl: hotEventImg3,
      category: "親子活動",
      title: "我們與動物的關係建立",
      date: "2024/7/15 (六)",
    },
  ];
  const featuredEvents = [
    {
      imgUrl: eventImg4,
      category: "快閃活動",
      title: "叢林森遊會 爬蟲主題市集",
      date: "2024/4/1 (六) - 4/2 (日)",
    },
    {
      imgUrl: eventImg5,
      category: "線上活動",
      title: "台灣東部爬蟲的二三事",
      date: "2024/10/12 (六)",
    },
    {
      imgUrl: eventImg6,
      category: "市集",
      title: "2024 萌舺親子爬市集",
      date: "2024/10/07 (六) - 10/08 (日)",
    },
    {
      imgUrl: featureEventImg1,
      category: "講座",
      title: "新竹親子動物觀察講座",
      date: "2024/2/25（六）",
    },
    {
      imgUrl: featureEventImg2,
      category: "快閃活動",
      title: "動物觀察-咕溜蛇來囉",
      date: "2024/6/22 (六)-6/23 (日)",
    },
    {
      imgUrl: featureEventImg3,
      category: "展覽",
      title: "倉鼠の遊戲間",
      date: "2024/2/07 (六)",
    },
  ];
  

  return (
    <>
      {/* LightBox */}
      {eventLightBoxState && (
        <LightBox
          eventLightBoxState={eventLightBoxState}
          setEventLightBoxState={setEventLightBoxState}
          type="EVENT CONTENT"
        />
      )}
      <main className="py-32 bg-gray-normal">
        {/*Slider*/}
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={60}
          loop={true}
          pagination={{
            type: "custom",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full mb-4 mySwiper mainswp-btn"
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            390: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
        >
          {mainSwpImage.map((photo, i) => (
            <SwiperSlide key={i}>
              <img src={photo} alt="photo" className="mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*Banner*/}
        <div className="px-2 md:px-0 pb-2 md:mb-0 tracking-wide bg-green-light bg-no-repeat pt-4 bg-center bg-cover bg-[url('../assets/event/event-banner.svg')] min-h-[128px] mt-[55px]">
          <h2 className="text-white text-[40px] font-bold text-center mb-1">
            特寵活動不能錯過
          </h2>
          <h3 className="text-xl text-center text-brown-dark">
            幫你搜集好熱門活動及資訊，全台特寵活動即時掌握！
          </h3>
        </div>
        {/*Event Info*/}
        <div className="container mx-auto">
          <h2 className="tracking-wider text-3xl font-bold text-center text-green-normal mt-[60px]">
            熱門活動
          </h2>
          <div className="mt-[26px]">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={-20}
              pagination={{
                type: "custom",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mb-4 mySwiper hotevent-swp"
              breakpoints={{
                // 尺寸以上{設定是什麼}
                360: {
                  slidesPerView: 1,
                },
                390: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: -10,
                },
                1285: {
                  slidesPerView: 3,
                  spaceBetween: -60,
                },
              }}
            >
              {hotEvents.map((hotEvent, i) => (
                <SwiperSlide className="mt-5 mb-4" key={i}>
                  <li className="cursor-pointer shadow-md bg-white mx-auto rounded-xl px-[35px] py-[30px] w-[350px] 2xl:w-[400px] hover:-translate-y-5" onClick={() => setEventLightBoxState(true)}>
                      <img
                        src={hotEvent.imgUrl}
                        alt="event"
                        className="mt-[30px] w-full"
                      />
                      <p className="mt-4 text-base text-brown-normal">
                        {hotEvent.category}
                      </p>
                      <h3 className="mt-1 text-xl font-bold tracking-wide text-brown-dark">
                        {hotEvent.title}
                      </h3>
                      <p className="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">
                        {hotEvent.date}
                      </p>
                      <p className="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9">
                        查看更多
                      </p>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h2 className="tracking-wider text-3xl font-bold text-center text-green-normal mt-[60px]">
            精選活動
          </h2>
          <div className="mt-[26px]">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={-20}
              pagination={{
                type: "custom",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mb-4 mySwiper hotevent-swp"
              breakpoints={{
                360: {
                  slidesPerView: 1,
                },
                390: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: -10,
                },
                1285: {
                  slidesPerView: 3,
                  spaceBetween: -60,
                },
              }}
            >
              {featuredEvents.map((featuredEvent, i) => (
                <SwiperSlide className="mt-5 mb-4" key={i}>
                  <li className="cursor-pointer mx-auto bg-white shadow-md rounded-xl px-[35px] py-[30px] w-[350px] 2xl:w-[400px] hover:-translate-y-5" onClick={() => setEventLightBoxState(true)}>
                    <img
                      src={featuredEvent.imgUrl}
                      alt="event"
                      className="mt-[30px] w-full"
                    />
                    <p className="mt-4 text-base text-brown-normal">
                      {featuredEvent.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-wide text-brown-dark">
                      {featuredEvent.title}
                    </h3>
                    <p className="font-bold text-base text-green-dark w-[300px] h-[70px] tracking-wide">
                      {featuredEvent.date}
                    </p>
                    <p className="ml-auto text-center block max-w-[80px] pb-1 text-lg font-bold border-b-2 border-green-dark text-brown-dark right-9">
                      查看更多
                    </p>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Filter/>
          {/*Page Number*/}
          <div className="mt-[70px] mb-[60px]">
            <ul className="flex justify-center">
              <li>
                <a
                  href="#"
                  className="p-2 text-xl font-bold border-b-2 text-brown-dark border-green-dark"
                >
                  1
                </a>
              </li>
              <li>
                <a href="#" className="p-2 text-xl font-bold text-brown-dark">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="p-2 text-xl font-bold text-brown-dark">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="p-2 text-xl font-bold text-brown-dark">
                  ...
                </a>
              </li>
              <li>
                <a href="#" className="p-2 text-xl font-bold text-brown-dark">
                  尾數頁
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-x-[30px] justify-center mx-auto">
            <a href="#"><img src={monthlySelectionBanner} alt="" /></a>
            <div>
              <a href="#"><img src={allRatsBanner} alt="" className="mb-4"/></a>
              <a href="#"><img src={allreptilesBanner} alt="" /></a>
            </div>
            </div>
          </div>
          <div className="sm:hidden mx-4">
            <div className="md:flex gap-x-[30px] mx-auto justify-center items-start">
            {/* 每月精選 */}
            <a href="#">
              <div className="relative bg-white border-4 rounded-[30px] overflow-hidden border-cyan-normal pt-[50px] md:w-[145px]">
              <img
                className="absolute top-[10px] right-[10px]"
                src={monthlySelection}
                alt="monthlySelection"
              />
              <h3 className="mx-8 tracking-wider text-3xl font-bold text-center text-brown-dark border-b border-brown-dark pb-4">
                每月
                <br />
                精選
              </h3>
              <p className="mx-8 mt-3 text-center text-base text-brown-dark mb-[18px]">
                Monthly
                <br />
                Selection
              </p>
              <figure className="rounded-t-[30px] bg-cyan-normal pt-[27px] pb-[30px]">
                <img src={arrow} alt="arrow" className="mx-auto mb-[18px]" />
                <p className="tracking-wide text-lg font-bold text-center text-brown-dark">
                  更多文章
                </p>
              </figure>
              </div>
            </a>
            <div>
              {/* 寵物鼠品種大集合 */}
              <a href="#">
                <div className="sm:flex justify-between sm:pl-[55px] border-4 rounded-[30px] border-brown-normal overflow-hidden my-4 md:my-0">
                <div className="xl:flex ml-8 sm:ml-0">
                  <div className="relative z-10 max-w-[350px] mr-[38px] my-7">
                    <img
                      src={deco}
                      alt="deco"
                      className="absolute -z-10 -left-4 -top-1"
                    />
                    <h3 className="pb-2 mb-2 text-3xl font-bold tracking-wider border-b text-brown-dark border-brown-light">
                      寵物鼠品種大集合
                    </h3>
                    <p className="text-brown-normal">
                      寵物鼠品種眾多，包括活潑的黃金鼠、親人的花枝鼠、哪種最適合自己飼養呢？
                    </p>
                  </div>
                  <img src={allrats} alt="image" className="mr-[18px] my-7" />
                </div>
                <div className="flex pr-6 bg-brown-normal pl-9 justify-center sm:rounded-l-[18px] items-center gap-x-[10px] h-auto">
                  <h4 className="text-xl font-medium text-brown-dark my-2">
                    探索
                    <br />
                    更多
                  </h4>
                  <figure className="">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="px-3 pt-[18px] pb-6 bg-white rounded-full"
                    />
                  </figure>
                </div>
                </div>
              </a>
              {/* 爬寵特輯 */}
              <a href="#">
                <div className="sm:flex justify-between sm:pl-[55px] border-4 rounded-[30px] border-green-light overflow-hidden sm:mt-2">
                <div className="xl:flex ml-8 sm:ml-0">
                  <div className="relative z-10 max-w-[330px] mr-[50px] my-7">
                    <img
                      src={deco}
                      alt="deco"
                      className="absolute -z-10 -left-4 -top-1"
                    />
                    <h3 className="pb-2 mb-2 text-3xl font-bold tracking-wider border-b text-brown-dark border-green-light">
                      爬寵特輯
                    </h3>
                    <p className="text-brown-normal">
                      爬寵好多...要如何挑選一支適合自己的呢？
                      <br />
                      關於新手養爬寵你必須知道的事！
                    </p>
                  </div>
                  <img
                    src={allreptiles}
                    alt="image"
                    className="mr-[50px] my-7"
                  />
                </div>
                <div className="flex pr-6 bg-green-light pl-9 sm:rounded-l-[18px] justify-center items-center gap-x-[10px] h-auto">
                  <h4 className="text-xl font-medium text-brown-dark my-2">
                    探索
                    <br />
                    更多
                  </h4>
                  <figure className="">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="px-3 pt-[18px] pb-6 bg-white rounded-full"
                    />
                  </figure>
                </div>
                </div>
              </a>
            </div>
            </div>
          </div>
          <div className="max-w-[1077px] border-t border-brown-light px-8 mx-auto mt-[51px] pt-[43px]">
            <div className=" bg-gray-normal border border-brown-light rounded-[47px] py-[15px] mb-[90px] px-10 sm:px- sm:mx-20">
                  <h4 className="text-brown-dark font-bold text-sm mb-[6px]">照片來源：各大售票及宣傳平台</h4>
                  <p className="text-brown-dark font-medium text-sm mb-1">若您認為有侵權情形，煩請立即告知，我們將移除相關內容並下架，以確保維護相關權益。<br/>我們一向重視知識產權和合法使用，致力於建立一個公正、尊重著作權的環境，感謝您的合作與理解。</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
