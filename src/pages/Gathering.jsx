import { useState } from "react";
import { Link } from "react-router-dom";

import createIcon from "../assets/gathering/create-icon.svg";
import salamandridae from "../assets/gathering/Salamandridae.svg";
import interestIcon from "../assets/gathering/interest-icon.svg";
import shareIcon from "../assets/gathering/share-icon.svg";
import yellowDot from "../assets/gathering/deco-1.svg";
import cross from "../assets/gathering/deco-2.svg";
import locationClick from "../assets/gathering/location-click.svg";
import locationUnclick from "../assets/gathering/location-unclick.svg";

import number_1 from "../assets/gathering/number-1.svg";
import number_2 from "../assets/gathering/number-2.svg";
import number_3 from "../assets/gathering/number-3.svg";
import rankingsPhoto_1 from "../assets/gathering/rankings-photo-1.png";
import rankingsPhoto_2 from "../assets/gathering/rankings-photo-2.png";
import rankingsPhoto_3 from "../assets/gathering/rankings-photo-3.png";

import fogs from "../assets/gathering/fogs-color.svg";
import fogsNoColor from "../assets/gathering/fogs-nocolor.svg";
import rabbits from "../assets/gathering/rabbits-color.svg";
import rabbitsNoColor from "../assets/gathering/rabbits-nocolor.svg";
import rats from "../assets/gathering/rats-color.svg";
import ratsNoColor from "../assets/gathering/rats-nocolor.svg";
import birds from "../assets/gathering/birds-color.svg";
import birdsNoColor from "../assets/gathering/birds-nocolor.svg";
import others from "../assets/gathering/others-color.svg";
import othersNoColor from "../assets/gathering/others-nocolor.svg";

import cardPhoto_1 from "../assets/gathering/card-photo-1.png";
import cardPhoto_2 from "../assets/gathering/card-photo-2.png";
import cardPhoto_3 from "../assets/gathering/card-photo-3.png";
import cardPhoto_4 from "../assets/gathering/card-photo-4.png";
import cardPhoto_5 from "../assets/gathering/card-photo-5.png";
import cardPhoto_6 from "../assets/gathering/card-photo-6.png";
import cardPhoto_7 from "../assets/gathering/card-photo-7.png";
import cardPhoto_8 from "../assets/gathering/card-photo-8.png";
import cardPhoto_9 from "../assets/gathering/card-photo-9.png";

export default function Gathering() {
  // Area State
  const [selectArea, setSelectArea] = useState("北部");

  // Category Data
  const [categoryTagData, setCategoryTagData] = useState([
    {
      id: 1,
      category: "爬蟲兩棲",
      icon: fogs,
      iconNoColor: fogsNoColor,
      selectState: false,
    },
    {
      id: 2,
      category: "兔子",
      icon: rabbits,
      iconNoColor: rabbitsNoColor,
      selectState: false,
    },
    {
      id: 3,
      category: "鼠",
      icon: rats,
      iconNoColor: ratsNoColor,
      selectState: false,
    },
    {
      id: 4,
      category: "鳥",
      icon: birds,
      iconNoColor: birdsNoColor,
      selectState: false,
    },
    {
      id: 5,
      category: "其他",
      icon: others,
      iconNoColor: othersNoColor,
      selectState: false,
    },
  ]);

  const toggleSelectState = (id) => {
    const updatedCategoryTagData = categoryTagData.map((category) =>
      category.id === id
        ? { ...category, selectState: !category.selectState }
        : category
    );
    // Update the selected
    setCategoryTagData(updatedCategoryTagData);
  };

  // Category Tag
  const CategoryTag = ({ category }) => (
    <li
      className={`${
        category.selectState ? "bg-green-light" : "bg-brown-light hover:opacity-80"
      } flex gap-x-3 items-center rounded-full p-2 lg:py-4 lg:px-5 cursor-pointer`}
      onClick={() => toggleSelectState(category.id)}
    >
      <img
        className={category.selectState ? "hidden" : "block"}
        src={category.iconNoColor}
        alt="icon-no-color"
      />
      <img
        className={category.selectState ? "block" : "hidden"}
        src={category.icon}
        alt="icon-color"
      />
      <h5 className="hidden md:block text-brown-dark text-xl font-bold">
        {category.category}
      </h5>
    </li>
  );

  // Rankings Data
  const rankingsData = [
    {
      id: 1,
      photoPath: rankingsPhoto_1,
      rankPhotoPath: number_1,
      title: "2024爬窩論壇全國大爬聚",
      category: "爬蟲兩棲",
      date: "2024/4/16(六)",
      location: "台中南屯公園",
    },
    {
      id: 2,
      photoPath: rankingsPhoto_2,
      rankPhotoPath: number_2,
      title: "愛兔飼主北部聚會",
      category: "兔、鼠",
      date: "2024/3/22(六)",
      location: "大安森林公園",
    },
    {
      id: 3,
      photoPath: rankingsPhoto_3,
      rankPhotoPath: number_3,
      title: "彰化鸚鵡飼主聚",
      category: "鳥",
      date: "2024/3/5(六)",
      location: "HappyShare聚會場",
    },
  ];

  // Ranking Component
  const RankingCard = ({ card }) => (
    <li
      key={card.id}
      className="mx-auto flex-1 flex gap-5 p-3 rounded-xl hover:bg-gray-normal"
    >
      <figure className="relative">
        <img src={card.photoPath} alt="ranking" />
        <img
          src={card.rankPhotoPath}
          alt="number"
          className="absolute -top-6 lg:-top-7 -left-6 lg:-left-7"
        />
      </figure>
      <section className="flex flex-col justify-between w-[188px]">
        <div className="leading-7 text-sm">
          <h5 className="text-brown-normal">{card.category}</h5>
          <h4 className="text-brown-dark font-bold text-[16px]">
            {card.title}
          </h4>
          <h6 className="text-brown-normal">{card.date}</h6>
          <p className="text-green-dark font-medium">{card.location}</p>
        </div>
        <Link
          to=""
          className="ml-auto mb-1 text-green-dark border-b border-brown-normal hover:scale-125"
        >
          MORE
        </Link>
      </section>
    </li>
  );

  // Gathering Data
  const gatheringData = [
    {
      id: 1,
      area: "北部",
      popular: 100,
      photoPath: cardPhoto_1,
      title: "鬆鬆飼主交流聚",
      category: "爬蟲兩棲",
      date: "2024/5/15 (六)",
      locationTitle: "南港捷運站前空地",
      interest: false,
    },
    {
      id: 2,
      area: "北部",
      popular: 200,
      photoPath: cardPhoto_2,
      title: "北部毛蜘蛛小聚會",
      category: "其他",
      date: "2024/3/4 (六)",
      locationTitle: "西門派對空間",
      interest: false,
    },
    {
      id: 3,
      area: "北部",
      popular: 60,
      photoPath: cardPhoto_3,
      title: "台北愛蛇聚會",
      category: "爬蟲兩棲",
      date: "2024/4/16 (六)",
      locationTitle: "玩蟒人生",
      interest: false,
    },
    {
      id: 4,
      area: "南部",
      popular: 178,
      photoPath: cardPhoto_4,
      title: "愛鼠社團聚(高雄)",
      category: "鼠",
      date: "2024/4/14 (日)",
      locationTitle: "WORK HUB",
      interest: false,
    },
    {
      id: 5,
      area: "南部",
      popular: 333,
      photoPath: cardPhoto_5,
      title: "2024愛兔工會認養會",
      category: "兔",
      date: "2024/5/13 (六)",
      locationTitle: "高雄公園",
      interest: false,
    },
    {
      id: 6,
      area: "東部",
      popular: 203,
      photoPath: cardPhoto_6,
      title: "東部樹棲守宮小爬聚",
      category: "爬蟲兩棲",
      date: "2024/5/9 (六)",
      locationTitle: "好時光空間",
      interest: false,
    },
    {
      id: 7,
      area: "中部",
      popular: 50,
      photoPath: cardPhoto_7,
      title: "特寵交流小型聚會",
      category: "爬蟲兩棲",
      date: "2024/6/6 (六)",
      locationTitle: "爬咖啡",
      interest: false,
    },
    {
      id: 8,
      area: "北部",
      popular: 666,
      photoPath: cardPhoto_8,
      title: "北部鳥友聚會",
      category: "鳥",
      date: "2024/7/16 (六)",
      locationTitle: "派洛特咖啡廳",
      interest: false,
    },
    {
      id: 9,
      area: "北部",
      popular: 666,
      photoPath: cardPhoto_9,
      title: "集合！天竺鼠車車！",
      category: "鼠",
      date: "2024/4/6 (日)",
      locationTitle: "大安森林公園",
      interest: false,
    },
  ];

  // DeepCopy Data
  // const gatheringDataDeepCopy = JSON.parse(JSON.stringify(gatheringData));

  // Gathering Card
  const GatheringCard = ({ card }) => (
    <li className="p-6 rounded-2xl shadow-xl bg-white border-2 border-transparent hover:border-green-light">
      <div className="leading-relaxed">
        <h5 className="text-brown-normal">{card.category}</h5>
        <h4 className="text-brown-dark font-bold text-[16px]">{card.title}</h4>
        <h6 className="text-brown-normal">{card.date}</h6>
        <p className="text-green-dark  font-medium">{card.locationTitle}</p>
      </div>
      <figure className="my-5">
        <img className="w-full" src={card.photoPath} alt="card-photo" />
      </figure>
      <div className="flex gap-x-4 justify-between items-center">
        <button className="flex-1 bg-green-light py-[6px] rounded-full hover:opacity-80">
          <span className="flex gap-x-2 justify-center items-center">
            <img src={interestIcon} alt="interest" />
            <h6 className="text-[18px] font-bold text-brown-dark">有興趣</h6>
          </span>
        </button>
        <button className="min-w-[38px] min-h-[38px] flex justify-center items-center rounded-full bg-brown-normal hover:opacity-80">
          <img src={shareIcon} alt="share" />
        </button>
      </div>
    </li>
  );

  return (
    <>
      {/* Banner */}
      <div className="bg-green-light bg-no-repeat bg-center bg-[url('../assets/gathering/banner.svg')] min-h-[133px] mt-20"></div>
      <main className="container justify-center mx-auto mt-[42px] mb-28">
        <div className="text-center">
          <h2 className="relative text-3xl font-bold text-brown-normal tracking-wider">
            在<span className="font-bold text-brown-dark">特寵生活</span>
            找到你有興趣的
            <span className="font-bold text-green-dark">聚會揪團</span>
            <img
              src={yellowDot}
              alt="yellowDot"
              className="absolute right-[27%] top-[29%] -z-10"
            />
          </h2>
          <p className="mt-1 text-xl text-green-normal">快來認識更多同好吧！</p>
        </div>
        <div className="mt-8 mb-14 px-2 lg:px-12">
          <div className="py-3 flex justify-center items-center">
            <hr className="flex-1 border-yellow-normal border" />
            <figure className="px-5 md:px-14 flex items-center gap-x-4 rounded-[30px] bg-yellow-normal ">
              <img src={cross} alt="cross" className="w-4 sm:w-5" />
              <h3 className="py-3 text-2xl font-bold text-brown-dark tracking-wider">
                人氣排行榜
              </h3>
              <img src={cross} alt="cross" className="w-4 sm:w-5" />
            </figure>
            <hr className="flex-1 border-yellow-normal border" />
          </div>
          {/* Rankings List */}
          <ul className="my-12 px-2 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rankingsData?.map((card) => (
              <RankingCard card={card} key={card.id} />
            ))}
          </ul>
          <hr className="border border-yellow-normal" />
        </div>
        {/* Filter Area */}
        <ul className="flex justify-between items-end text-center tracking-wider">
          <li className="flex-1">
            <div
              onClick={() => setSelectArea("北部")}
              className={`${
                selectArea === "北部"
                  ? "bg-gray-normal border-2 border-b-0"
                  : "bg-green-light border-b"
              } duration-100 py-3 md:py-5 flex justify-center items-center cursor-pointer rounded-tl-[30px] rounded-tr-[30px] hover:opacity-80`}
            >
              <figure className="hidden sm:block">
                <img
                  className={`${
                    selectArea === "北部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationClick}
                  alt="location"
                />
                <img
                  className={`${
                    selectArea !== "北部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationUnclick}
                  alt="location"
                />
              </figure>
              <h3
                className={`${
                  selectArea === "北部" ? "text-green-dark" : "text-white"
                } font-bold text-2xl`}
              >
                北部
              </h3>
            </div>
          </li>
          <li className="flex-1">
            <div
              onClick={() => setSelectArea("中部")}
              className={`${
                selectArea === "中部"
                  ? "bg-gray-normal border-2 border-b-0"
                  : "bg-green-light border-b"
              } duration-100 py-3 md:py-5 flex justify-center items-center cursor-pointer rounded-tl-[30px] rounded-tr-[30px] hover:opacity-80`}
            >
              <figure className="hidden sm:block">
                <img
                  className={`${
                    selectArea === "中部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationClick}
                  alt="location"
                />
                <img
                  className={`${
                    selectArea !== "中部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationUnclick}
                  alt="location"
                />
              </figure>
              <h3
                className={`${
                  selectArea === "中部" ? "text-green-dark" : "text-white"
                } font-bold text-2xl`}
              >
                中部
              </h3>
            </div>
          </li>
          <li className="flex-1">
            <div
              onClick={() => setSelectArea("南部")}
              className={`${
                selectArea === "南部"
                  ? "bg-gray-normal border-2 border-b-0"
                  : "bg-green-light border-b"
              } duration-100 py-3 md:py-5 flex justify-center items-center cursor-pointer rounded-tl-[30px] rounded-tr-[30px] hover:opacity-80`}
            >
              <figure className="hidden sm:block">
                <img
                  className={`${
                    selectArea === "南部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationClick}
                  alt="location"
                />
                <img
                  className={`${
                    selectArea !== "南部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationUnclick}
                  alt="location"
                />
              </figure>
              <h3
                className={`${
                  selectArea === "南部" ? "text-green-dark" : "text-white"
                } font-bold text-2xl`}
              >
                南部
              </h3>
            </div>
          </li>
          <li className="flex-1">
            <div
              onClick={() => setSelectArea("東部")}
              className={`${
                selectArea === "東部"
                  ? "bg-gray-normal border-2 border-b-0"
                  : "bg-green-light border-b"
              } duration-100 py-3 md:py-5 flex justify-center items-center cursor-pointer rounded-tl-[30px] rounded-tr-[30px] hover:opacity-80`}
            >
              <figure className="hidden sm:block">
                <img
                  className={`${
                    selectArea === "東部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationClick}
                  alt="location"
                />
                <img
                  className={`${
                    selectArea !== "東部" ? "block" : "hidden"
                  } mr-[6px]`}
                  src={locationUnclick}
                  alt="location"
                />
              </figure>
              <h3
                className={`${
                  selectArea === "東部" ? "text-green-dark" : "text-white"
                } font-bold text-2xl`}
              >
                東部
              </h3>
            </div>
          </li>
        </ul>
        {/* Content */}
        <div className="py-16 bg-gray-normal border-2 border-t-0 rounded-bl-[20px] rounded-br-[20px]">
          <div className="flex gap-x-6 px-2 lg:px-0 justify-center items-center tracking-wider">
            <h4 className="hidden lg:block text-brown-dark text-2xl font-bold w-[56px]">
              全部分類
            </h4>
            <ul className="flex gap-x-2 md:gap-x-6 overflow-x-auto">
              {categoryTagData?.map((category) => (
                <CategoryTag category={category} key={category.id} />
              ))}
            </ul>
          </div>
          <div className="px-8 md:px-24">
            {/* Sort Data */}
            <div className="mt-[72px] flex gap-x-4 justify-end text-brown-dark leading-4">
              <h4 className="pr-4 border-r border-brown-normal">排序</h4>
              <button className="hover:text-brown-normal">熱門</button>
              <button className="hover:text-brown-normal">最新</button>
            </div>
            {/* Card List */}
            <ul className="mt-7 gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {gatheringData?.map((card) => (
                <GatheringCard card={card} key={card.id} />
              ))}
            </ul>
            {/* Pagination */}
            <ul className="flex gap-x-1 justify-center mt-16">
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark border-b-2 border-green-dark"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark"
                >
                  尾數頁
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/* Create Gathering Button */}
      <button className="fixed top-[72%] right-0 block tracking-wide font-bold group scale-75 translate-x-5 md:scale-100 md:translate-x-3">
        <div className="relative flex gap-x-3 items-center py-6 px-5 bg-green-dark rounded-tl-3xl rounded-bl-3xl">
          <img
            className="absolute -z-20 -top-24 w-[144px] h-[108px] left-[20%] duration-300 opacity-0 group-hover:opacity-100"
            src={salamandridae}
            alt="animal"
          />
          <img
            className="duration-300 group-hover:-rotate-180"
            src={createIcon}
            alt="create"
          />
          <h3 className="duration-300 text-xl text-white whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[112px]">
            創建新揪團
          </h3>
        </div>
      </button>
    </>
  );
}
