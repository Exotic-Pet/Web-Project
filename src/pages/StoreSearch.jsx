import { Link } from "react-router-dom";
import { useState, useCallback } from 'react';

import searchIcon from "../assets/store/search.svg";
import arrowBottom from "../assets/store/arrow-bottom.svg";
import coffeeIcon from "../assets/store/coffee.svg";
import coffeeWhiteIcon from "../assets/store/coffee-white.svg";
import shopIcon from "../assets/store/shop.svg";
import shopWhiteIcon from "../assets/store/shop-white.svg";
import hospitalIcon from "../assets/store/hospital.svg";
import hospitalWhiteIcon from "../assets/store/hospital-white.svg";
import cafeImg_1 from "../assets/store/cafe-img-1.png";
import cafeImg_2 from "../assets/store/cafe-img-2.png";
import specialtyImg_1 from "../assets/store/specialty-img-1.png";
import hospitalImg_1 from "../assets/store/hospital-img-1.png";
import likeIcon from "../assets/store/like.svg";
import dislikeIcon from "../assets/store/dislike.svg";

export default function StoreSearch() {
  // Current Category
  const [currentCategory, setCurrentCategory] = useState("cafe");

  // Collapse Search Menu
  const [isAreaExpand, setIsAreaExpand] = useState(false);
  const [isSearchExpand, setIsSearchExpand] = useState(false);
  const [isPriceExpand, setIsPriceExpand] = useState(false);

  // Click Handlers Function
  const handlerAreaToggle = () => setIsAreaExpand(!isAreaExpand);
  const handlerSearchToggle = () => setIsSearchExpand(!isSearchExpand);
  const handlerPriceToggle = () => setIsPriceExpand(!isPriceExpand);

  // Toggle Class Style
  const toggleExpandStyle = (type) => (type ? "toggle--open" : "toggle--close");
  const toggleArrowState = (expandState) => (expandState ? "-rotate-180" : "");

  // explore Store Data
  const [exploreStoreData, setExploreStoreData] = useState({
    cafe: [
      {
        title: "玩蟒人生",
        subTitle: "Pythonism",
        area: "北部",
        imgPath: cafeImg_1,
        label: ["蛇", "龜", "守宮"],
        contentTitle: "以球蟒為主的咖啡廳！",
        content:
          "只需消費一杯飲料就能與各種花色的蛇蛇或爬蟲類近距離互動，店內同時也有販售球蟒哦！",
        like: true,
        articlePath: "/page/store-search/content",
        price: 100,
      },
      {
        title: "水豚騎士",
        subTitle: "Capybara",
        area: "北部",
        imgPath: cafeImg_2,
        label: ["水豚", "柯爾鴨"],
        contentTitle: "水豚陪伴的咖啡廳！",
        content:
        "只需要消費200元，就可以體驗和水豚一起玩耍做朋友哦！",
        like: false,
        articlePath: "/page/store-search/content",
        price: 200,
      },
      {
        title: "玩蟒人生3",
        subTitle: "Pythonism",
        area: "北部",
        imgPath: cafeImg_1,
        label: ["蛇", "龜", "守宮"],
        contentTitle: "以球蟒為主的咖啡廳！",
        content:
          "只需消費一杯飲料就能與各種花色的蛇蛇或爬蟲類近距離互動，店內同時也有販售球蟒哦！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        title: "玩蟒人生4",
        subTitle: "Pythonism",
        area: "北部",
        imgPath: cafeImg_1,
        label: ["蛇", "龜", "守宮"],
        contentTitle: "以球蟒為主的咖啡廳！",
        content:
          "只需消費一杯飲料就能與各種花色的蛇蛇或爬蟲類近距離互動，店內同時也有販售球蟒哦！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        title: "玩蟒人生5",
        subTitle: "Pythonism",
        area: "北部",
        imgPath: cafeImg_1,
        label: ["蛇", "龜", "守宮"],
        contentTitle: "以球蟒為主的咖啡廳！",
        content:
          "只需消費一杯飲料就能與各種花色的蛇蛇或爬蟲類近距離互動，店內同時也有販售球蟒哦！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        title: "玩蟒人生6",
        subTitle: "Pythonism",
        area: "北部",
        imgPath: cafeImg_1,
        label: ["蛇", "龜", "守宮"],
        contentTitle: "以球蟒為主的咖啡廳！",
        content:
          "只需消費一杯飲料就能與各種花色的蛇蛇或爬蟲類近距離互動，店內同時也有販售球蟒哦！",
        like: false,
        articlePath: "/page/store-search/content",
      },
    ],
    specialtyStore: [
      {
        title: "丘丘寵物",
        subTitle: "Pet Shop",
        area: "北部",
        imgPath: specialtyImg_1,
        label: ["兔子", "倉鼠", "刺蝟"],
        contentTitle: "寵物美容為主的專賣店！",
        content: "各式各樣的美容服務都有哦～歡迎來改造自家小寶貝吧！",
        like: true,
        articlePath: "/page/store-search/content",
      },
      {
        title: "丘丘寵物2",
        subTitle: "Pet Shop",
        area: "北部",
        imgPath: specialtyImg_1,
        label: ["兔子", "倉鼠", "刺蝟"],
        contentTitle: "寵物美容為主的專賣店！",
        content: "各式各樣的美容服務都有哦～歡迎來改造自家小寶貝吧！",
        like: false,
        articlePath: "/page/store-search/content",
      },
    ],
    hospital: [
      {
        title: "伊甸動物醫院",
        subTitle: "Eden",
        area: "北部",
        imgPath: hospitalImg_1,
        label: ["兔子", "鳥", "青蛙"],
        contentTitle: "有特寵門診的醫院！",
        content:
          "隨著飼養寵物的種類日漸增多，我們也有專門獸醫師負責兔、貂、鳥、猴、魚與爬蟲類等動物～",
        like: true,
        articlePath: "/page/store-search/content",
      },
      {
        title: "伊甸動物醫院2",
        subTitle: "Eden",
        area: "北部",
        imgPath: hospitalImg_1,
        label: ["兔子", "鳥", "青蛙"],
        contentTitle: "有特寵門診的醫院！",
        content:
          "隨著飼養寵物的種類日漸增多，我們也有專門獸醫師負責兔、貂、鳥、猴、魚與爬蟲類等動物～",
        like: false,
        articlePath: "/page/store-search/content",
      },
    ],
  });

  // Toggle Like State
  const toggleLike = useCallback((category, index) => {
    setExploreStoreData((currentData) => ({
      ...currentData,
      [category]: currentData[category].map((item, itemIndex) =>
        itemIndex === index ? { ...item, like: !item.like } : item
      ),
    }));
  }, [setExploreStoreData]);

  // StoreList Component
  const StoreList = ({ store, index, toggleLike }) => {
    return (
      <li className="flex flex-col bg-white rounded-xl px-[35px] py-[30px] w-[375px] border-4 border-transparent hover:border-yellow-normal">
        <h3 className="text-3xl font-bold tracking-wide text-yellow-dark">
          {store.title}
          <span className="ml-2 text-lg font-bold text-brown-normal">
            {store.subTitle}
          </span>
        </h3>
        <figure className="relative mt-4 mb-2 overflow-hidden w-[300px] h-[200px]">
          <img
            src={store.imgPath}
            alt="store"
            className="w-full h-full rounded-2xl object-cover object-center"
          />
          <img
            onClick={() => toggleLike(index)}
            src={store.like ? likeIcon : dislikeIcon}
            alt="like"
            className="absolute -bottom-2 -right-1 cursor-pointer"
          />
        </figure>
        <ul className="flex my-2 gap-x-2">
          {store?.label?.map((labelItem, labelIndex) => (
            <li
              key={labelIndex}
              className="px-2 border border-solid text-yellow-dark border-yellow-dark rounded-3xl"
            >
              {`#${labelItem}`}
            </li>
          ))}
        </ul>
        <h4 className="text-xl font-bold tracking-wide text-brown-dark">
          {store.contentTitle}
        </h4>
        <p className="flex-grow text-base text-brown-dark w-[300px] tracking-wide">
          {store.content}
        </p>
        <Link
          to={store.articlePath}
          className="mt-4 ml-auto text-center block w-[80px] pb-1 text-lg font-bold border-b-2 border-yellow-dark text-brown-dark hover:scale-110"
        >
          查看更多
        </Link>
      </li>
    );
  };

  const filterStoreData = useCallback((category) => setCurrentCategory(category), []);

  return (
    <>
      {/* <!-- Banner --> */}
      <div className="mt-[84px] bg-yellow-normal bg-no-repeat bg-center bg-[url('../assets/store/cafe-banner.svg')] min-h-[133px]"></div>
      {/* Store Content */}
      <main className="flex flex-wrap md:justify-between xl:flex-nowrap">
        <aside className="flex-1 mt-20 w-[388px] mx-auto xl:ml-20">
          {/* <!-- Search Bar --> */}
          <form action="" className="flex justify-around">
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋"
                className="text-brown-normal text-[26px] w-[388px] rounded-full border-2 border-solid border-brown-normal py-[5px] pl-5 focus:outline-yellow-normal"
              />
              <img
                className="absolute cursor-pointer right-5 top-3 hover:scale-125"
                src={searchIcon}
                alt="search"
              />
            </div>
          </form>
          {/* <!-- Search Place --> */}
          <h2 className="text-3xl font-bold tracking-wider text-center text-brown-dark m-7">
            進階搜尋
          </h2>
          <form action="">
            <ul>
              <li>
                <div
                  className="toggle--click flex justify-between cursor-pointer"
                  onMouseDown={handlerAreaToggle}
                >
                  <h3 className="text-2xl font-bold tracking-wider text-yellow-dark hover:opacity-70">
                    你想去哪？
                  </h3>
                  <img
                    src={arrowBottom}
                    alt="arrow-bottom"
                    className={
                      toggleArrowState(isAreaExpand) +
                      " duration-100 hover:scale-125"
                    }
                  />
                </div>
                <div
                  className={
                    toggleExpandStyle(isAreaExpand) +
                    " checkbox__style checkbox--yellow flex flex-wrap text-xl"
                  }
                >
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="area" value="北部" />
                    <span className="checkmark px-3">北部</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="area" value="中部" />
                    <span className="checkmark px-3">中部</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="area" value="南部" />
                    <span className="checkmark px-3">南部</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="area" value="東部" />
                    <span className="checkmark px-3">東部</span>
                  </label>
                </div>
              </li>
              <li className="mt-6 border-t-2">
                <div
                  className="toggle--click flex justify-between my-5 cursor-pointer"
                  onMouseDown={handlerSearchToggle}
                >
                  <h3 className="text-2xl font-bold tracking-wider text-yellow-dark hover:opacity-70">
                    想找什麼？
                  </h3>
                  <img
                    src={arrowBottom}
                    alt="arrow-bottom"
                    className={
                      toggleArrowState(isSearchExpand) +
                      " duration-100 hover:scale-125"
                    }
                  />
                </div>
                <div
                  className={
                    toggleExpandStyle(isSearchExpand) +
                    " checkbox__style checkbox--yellow flex flex-wrap text-xl"
                  }
                >
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="守宮" />
                    <span className="checkmark px-3">守宮</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="蛇" />
                    <span className="checkmark px-3">蛇</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="兔子" />
                    <span className="checkmark px-3">兔子</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="狐獴" />
                    <span className="checkmark px-3">狐獴</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="蜥蜴" />
                    <span className="checkmark px-3">蜥蜴</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="鸚鵡" />
                    <span className="checkmark px-3">鸚鵡</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="烏龜" />
                    <span className="checkmark px-3">烏龜</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="水豚" />
                    <span className="checkmark px-3">水豚</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="草泥馬" />
                    <span className="checkmark px-3">草泥馬</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="柯爾鴨" />
                    <span className="checkmark px-3">柯爾鴨</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="天竺鼠" />
                    <span className="checkmark px-3">天竺鼠</span>
                  </label>
                  <label className="relative cursor-pointer w-1/4 mt-3 pl-5 text-brown-dark whitespace-nowrap">
                    <input type="checkbox" name="animal" value="浣熊" />
                    <span className="checkmark px-3">浣熊</span>
                  </label>
                  <button className="see__more mt-8 mx-auto block text-xl text-brown-dark rounded-full w-[106px] py-1 border-2 border-brown-dark mb-9 hover:bg-yellow-light">
                    查看更多
                  </button>
                </div>
              </li>
              <li className="border-t-2">
                <div
                  className="toggle--click flex justify-between mt-5 cursor-pointer"
                  onMouseDown={handlerPriceToggle}
                >
                  <h3 className="text-2xl font-bold tracking-wider text-yellow-dark hover:opacity-70">
                    想花多少？
                  </h3>
                  <img
                    src={arrowBottom}
                    alt="arrow-bottom"
                    className={
                      toggleArrowState(isPriceExpand) +
                      " duration-100 hover:scale-125"
                    }
                  />
                </div>
                <div
                  className={
                    toggleExpandStyle(isPriceExpand) + " range--yellow"
                  }
                >
                  <input
                    type="range"
                    min="0"
                    max="800"
                    step="1"
                    defaultValue="0"
                    name="moneyRange"
                    className="w-full mt-9"
                  />
                  <div className="flex mt-3">
                    <p className="flex-1 text-right text-xl font-bold text-brown-normal">
                      200
                    </p>
                    <p className="flex-1 text-right text-xl font-bold text-brown-normal">
                      400
                    </p>
                    <p className="flex-1 text-right text-xl font-bold text-brown-normal">
                      600
                    </p>
                    <p className="flex-1 text-right text-xl font-bold text-brown-normal">
                      800
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-14 text-brown-dark">
              <button className="hover:text-white mx-auto block text-[20px] font-bold bg-yellow-light rounded-full w-[213px] h-[49px]">
                開始搜尋
              </button>
              <button className="hover:text-white mx-auto block text-[20px] font-bold bg-brown-light rounded-full w-[213px] h-[49px] mt-4">
                清除條件
              </button>
            </div>
          </form>
        </aside>
        {/* <!-- Store List --> */}
        <section className="flex-[3] mt-10 xl:ml-11">
          <ul className="flex flex-col items-center justify-center sm:flex-row">
            <li className={(currentCategory === "cafe" ? "bg-brown-normal" : "bg-white hover:bg-gray-dark") + " w-[195px] border-2 border-solid rounded-full border-brown-light hover:border-transparent active:bg-brown-normal"}>
              <div
                className="flex py-5 px-7 group cursor-pointer"
                onClick={() => filterStoreData("cafe")}
              >
                <img
                  src={coffeeIcon}
                  alt="cafe"
                  className={(currentCategory === "cafe" ? "hidden" : "block") + " group-active:hidden"}
                />
                <img
                  src={coffeeWhiteIcon}
                  alt="cafe"
                  className={(currentCategory === "cafe" ? "block" : "hidden") + " group-active:block"}
                />
                <h4 className={(currentCategory === "cafe" ? "text-white" : "text-brown-normal") + " ml-3 text-xl font-bold tracking-wide group-active:text-white"}>
                  特寵
                  <br />
                  咖啡廳
                </h4>
              </div>
            </li>
            <li className={(currentCategory === "specialtyStore" ? "bg-brown-normal" : "bg-white hover:bg-gray-dark") + " w-[195px] my-2 border-2 border-solid rounded-full sm:mx-8 border-brown-light hover:border-transparent active:bg-brown-normal"}>
              <div
                className="flex py-5 px-7 group cursor-pointer"
                onClick={() => filterStoreData("specialtyStore")}
              >
                <img
                  src={shopIcon}
                  alt="store"
                  className={(currentCategory === "specialtyStore" ? "hidden" : "block") + " group-active:hidden"}
                />
                <img
                  src={shopWhiteIcon}
                  alt="store"
                  className={(currentCategory === "specialtyStore" ? "block" : "hidden") + " group-active:block"}
                />
                <h4 className={(currentCategory === "specialtyStore" ? "text-white" : "text-brown-normal") + " ml-3 text-xl font-bold tracking-wide text-brown-normal group-active:text-white"}>
                  特寵
                  <br />
                  專賣店
                </h4>
              </div>
            </li>
            <li className={(currentCategory === "hospital" ? "bg-brown-normal" : "bg-white hover:bg-gray-dark") + " w-[195px] border-2 border-solid rounded-full border-brown-light hover:border-transparent active:bg-brown-normal"}>
              <div
                className="flex py-5 pl-7 pr-9 group cursor-pointer"
                onClick={() => filterStoreData("hospital")}
              >
                <img
                  src={hospitalIcon}
                  alt="hospital"
                  className={(currentCategory === "hospital" ? "hidden" : "block") + " group-active:hidden"}
                />
                <img
                  src={hospitalWhiteIcon}
                  alt="hospital"
                  className={(currentCategory === "hospital" ? "block" : "hidden") + " group-active:block"}
                />
                <h4 className={(currentCategory === "hospital" ? "text-white" : "text-brown-normal") + " ml-3 text-xl font-bold tracking-wide text-brown-normal group-active:text-white"}>
                  特寵
                  <br />
                  醫院
                </h4>
              </div>
            </li>
          </ul>
          <div className="bg-gray-dark xl:rounded-tl-[75px] pb-2 w-full pt-[66px] mt-10">
            <ul className="flex flex-wrap gap-7 justify-center">
              {exploreStoreData[currentCategory]?.map((store, index) => (
                <StoreList
                  key={index}
                  store={store}
                  index={index}
                  toggleLike={() => toggleLike(currentCategory, index)}
                />
              ))}
            </ul>
            <ul className="flex gap-x-2 justify-center mt-16 mb-24">
              <li>
                <a
                  href="#"
                  className="hover:-translate-y-[6px] block p-2 text-xl font-bold text-brown-dark border-b-2 border-cyan-dark"
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
        </section>
      </main>
    </>
  );
}
