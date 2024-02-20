import React, { useState } from "react";
import eventImg7 from "../assets/event/event-img7.svg";
import eventImg8 from "../assets/event/event-img8.svg";
import eventImg9 from "../assets/event/event-img9.svg";
import searchResultImg1 from "../assets/event/imageForEvent/search-result-1.png";
import searchResultImg2 from "../assets/event/imageForEvent/search-result-2.png";
import searchResultImg3 from "../assets/event/imageForEvent/search-result-3.png";
import searchResultImg4 from "../assets/event/imageForEvent/search-result-4.png";
import searchResultImg5 from "../assets/event/imageForEvent/search-result-5.png";
import searchResultImg6 from "../assets/event/imageForEvent/search-result-6.png";
import plate from "../assets/event/plate-1.svg";
import searchIcon from "../assets/event/event-search.svg";
// component
import AosInit from "./AosInit";
// import { Link } from "react-router-dom";
import LightBox from "./LightBox";

const SearchComponent = () => {
  // AOS Init
  AosInit();
   // LightBox State
  const [eventLightBoxState, setEventLightBoxState] = useState(false);

  const allData = [
    {
      id: "1",
      area: "北部",
      imgUrl: eventImg7,
      category: "展覽",
      title: "台北｜2024台灣兩棲爬蟲博覽會｜花博爭豔館",
      date: "2024/6/22 (六)-6/23 (日)",
    },
    {
      id: "2",
      area: "北部",
      imgUrl: eventImg8,
      category: "展覽",
      title:
        "台北｜2024 水美園 - 創四季 【植栽、 爬蟲、昆蟲、礦石】 盛典｜花博爭豔館",
      date: "2024/8/26 (六)-8/27 (日)",
    },
    {
      id: "3",
      area: "中部",
      imgUrl: eventImg9,
      category: "展覽",
      title: "台中｜2024台灣爬蟲季｜台中世貿二館",
      date: "2024/6/22 (六)-6/23 (日)",
    },
    {
      id: "4",
      area: "中部",
      imgUrl: searchResultImg1,
      category: "快閃活動",
      title: "台中｜動物觀察-咕溜蛇來囉｜蛇類觀察課",
      date: "2024/6/22 (六)-6/23 (日)",
    },
    {
      id: "5",
      area: "中部",
      imgUrl: searchResultImg2,
      category: "講座",
      title: "台中｜刺蝟、蜜袋鼯飼養照顧講座",
      date: "2024/10/18 (三)",
    },
    {
      id: "6",
      area: "北部",
      imgUrl: searchResultImg3,
      category: "展覽",
      title: "台北｜2024兩棲爬蟲特寵見面會｜松菸文創園區",
      date: "2024/2/23 (五)-2/25 (日)",
    },
    {
      id: "7",
      area: "北部",
      imgUrl: searchResultImg4,
      category: "講座",
      title: "台北｜昆蟲種子教師研習｜台灣昆蟲館",
      date: "2024/5/14 (六)",
    },
    {
      id: "8",
      area: "北部",
      imgUrl: searchResultImg5,
      category: "親子活動",
      title: "新竹｜親子動物觀察講座",
      date: "2024/2/25 (六)",
    },
    {
      id: "9",
      area: "南部",
      imgUrl: searchResultImg6,
      category: "快閃活動",
      title: "高雄｜牧草圓又圓中途兔兔送養會",
      date: "2024/8/31 (六)",
    },
  ];

  const [filteredData, setFilteredData] = useState(allData);
  const [selectedArea, setSelectedArea] = useState("全部");
  const [selectedDate, setSelectedDate] = useState("全部日期");
  const [selectedCategory, setSelectedCategory] = useState("全部分類");

  const handleFilter = () => {
    const newData = allData.filter(
      (item) =>
        (selectedArea === "全部" || item.area === selectedArea) &&
        (selectedDate === "全部日期") &&
        (selectedCategory === "全部分類" || item.category === selectedCategory)
    );

    setFilteredData(newData);
  };

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
      <div className=" relative hidden md:block">
        <img
          src={plate}
          alt="plate-1"
          className=" absolute right-[130px] top-[72px] 2xl:right-[260px]"
        />
      </div>
      {/* searchBox */}
      <div className="relative mx-1 xl:mx-auto max-w-[778px] border-solid border-2 rounded-[30px] bg-white mt-[68px] border-brown-normal pb-[33px]">
        <form action="" className="justify-center text-center">
          {/* 搜尋框 */}
          <div className="relative mx-[68px]">
            <input
              type="text"
              placeholder="搜尋活動/場地/舉辦方"
              className=" focus-within:placeholder-opacity-20 w-full py-2 text-base text-center outline-none placeholder-brown-dark rounded-full text-brown-dark bg-yellow-light mt-7"
            />
            <img
              className="absolute cursor-pointer hover:scale-125 bottom-[10px] left-[8%] sm:left-[25%] md:left-[30%]"
              src={searchIcon}
              alt="search"
            />
          </div>
          {/* 地區 */}
          <div className="flex mt-[26px]">
            <p className="text-base font-bold text-brown-dark ml-[20px] mr-[50px] sm:mx-[70px] whitespace-nowrap">
              地區
            </p>
            <ul className="flex flex-wrap gap-x-2">
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedArea === "全部" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedArea("全部");
                  handleFilter();
                }}
              >
                全部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedArea === "北部" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedArea("北部");
                  handleFilter();
                }}
              >
                北部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedArea === "中部" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedArea("中部");
                  handleFilter();
                }}
              >
                中部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedArea === "南部" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedArea("南部");
                  handleFilter();
                }}
              >
                南部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedArea === "東部" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedArea("東部");
                  handleFilter();
                }}
              >
                東部
              </li>
            </ul>
          </div>
          {/* 日期 */}
          <div className="flex mt-5">
            <p className="text-base font-bold text-brown-dark ml-[20px] mr-[50px] sm:mx-[70px] whitespace-nowrap">
              日期
            </p>
            <ul className="flex flex-wrap gap-x-2">
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedDate === "全部日期" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedDate("全部日期");
                  handleFilter();
                }}
              >
                全部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedDate === "今天" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedDate("今天");
                  handleFilter();
                }}
              >
                今天
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedDate === "本周末" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedDate("本周末");
                  handleFilter();
                }}
              >
                本周末
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedDate === "7天內" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedDate("7天內");
                  handleFilter();
                }}
              >
                7天內
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedDate === "30天內" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedDate("30天內");
                  handleFilter();
                }}
              >
                30天內
              </li>
            </ul>
          </div>
          {/* 類型 */}
          <div className="flex mt-5">
            <p className="text-base font-bold text-brown-dark ml-[20px] mr-[18px] sm:ml-[72px] sm:mr-[36px] whitespace-nowrap">
              活動分類
            </p>
            <ul className="flex flex-wrap gap-x-2">
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "全部分類" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("全部分類");
                  handleFilter();
                }}
              >
                全部
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "展覽" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("展覽");
                  handleFilter();
                }}
              >
                展覽
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "市集" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("市集");
                  handleFilter();
                }}
              >
                市集
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "親子活動" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("親子活動");
                  handleFilter();
                }}
              >
                親子活動
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "快閃活動" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("快閃活動");
                  handleFilter();
                }}
              >
                快閃活動
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "線上活動" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("線上活動");
                  handleFilter();
                }}
              >
                線上活動
              </li>
              <li
                className={`px-2 text-base bg-opacity-0 border border-opacity-0 border-solid rounded-full cursor-pointer text-brown-normal border-brown-normal bg-gray-normal  ${
                  selectedCategory === "其他" ? "text-white bg-green-normal bg-opacity-100" : "hover:border-opacity-100 hover:bg-opacity-100"
                }`}
                onClick={() => {
                  setSelectedCategory("其他");
                  handleFilter();
                }}
              >
                其他
              </li>
            </ul>
          </div>
        </form>
      </div>
      {/* result */}
      <ul className="flex mt-[70px] flex-wrap justify-center gap-x-[50px]">
        {filteredData.map((card, i) => (
          <li
            data-aos="fade-in"
            data-aos-duration="500"
            key={i}
            className="w-[335px] mb-11 hover:bg-white group hover:rounded-2xl px-3 pt-5 cursor-pointer"
            onClick={() => setEventLightBoxState(true)}
          >
            <div className="flex gap-x-5">
              <img
                src={card.imgUrl}
                alt="event"
                className="duration-500 group-hover:-translate-y-3"
              />
              <div>
                <p className="text-xs text-brown-normal mb-[6px]">
                  {card.category}
                </p>
                <h3 className="text-base font-bold text-brown-dark ellipsis-2">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-green-dark mb-[45px]">
                  {card.date}
                </p>
                <h4 className="ml-auto block text-xs border-b-2 border-solid text-green-dark border-brown-normal max-w-[35px] text-center">
                  MORE
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchComponent;
