import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

// Banner
import cafeBanner from "../assets/store/cafe-banner.svg";
import specialtyBanner from "../assets/store/store-banner.svg";
import hospitalBanner from "../assets/store/hospital-banner.svg";
// Photos
import searchIcon from "../assets/store/search.svg";
import arrowBottom from "../assets/store/arrow-bottom.svg";
import coffeeIcon from "../assets/store/coffee.svg";
import coffeeWhiteIcon from "../assets/store/coffee-white.svg";
import shopIcon from "../assets/store/shop.svg";
import shopWhiteIcon from "../assets/store/shop-white.svg";
import hospitalIcon from "../assets/store/hospital.svg";
import hospitalWhiteIcon from "../assets/store/hospital-white.svg";
import likeIcon from "../assets/store/like.svg";
import dislikeIcon from "../assets/store/dislike.svg";
// Store Photos
import cafeImg_1 from "../assets/store/cafe-img-1.png";
import cafeImg_2 from "../assets/store/cafe-img-2.png";
import cafeImg_3 from "../assets/store/cafe-img-3.png";
import cafeImg_4 from "../assets/store/cafe-img-4.png";
import specialtyImg_1 from "../assets/store/specialty-img-1.png";
import hospitalImg_1 from "../assets/store/hospital-img-1.png";

export default function StoreSearch() {
  const location = useLocation();

  // Current Category
  const [currentCategory, setCurrentCategory] = useState("cafe");

  // State Update
  useEffect(() => {
    if (location.state?.category) {
      setCurrentCategory(location.state.category);
    }
  }, [location.state]);

  // Category Banner Path
  const categoryBannerPath =
    currentCategory === "cafe"
      ? cafeBanner
      : currentCategory === "specialtyStore"
      ? specialtyBanner
      : currentCategory === "hospital"
      ? hospitalBanner
      : null;
  // Category Colors
  const categoryColor =
    currentCategory === "cafe"
      ? "yellow"
      : currentCategory === "specialtyStore"
      ? "green"
      : currentCategory === "hospital"
      ? "cyan"
      : null;
  // Category Colors Depth
  const colorDepth = currentCategory === "hospital" ? "normal" : "light";
  // Background Colors Depth
  const backgroundColorDepth =
    currentCategory !== "specialtyStore" ? "normal" : "light";

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

  // Explore Store Data
  const [exploreStoreData, setExploreStoreData] = useState({
    cafe: [
      {
        id: 1,
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
        id: 2,
        title: "水豚騎士",
        subTitle: "Capybara",
        area: "北部",
        imgPath: cafeImg_2,
        label: ["水豚", "柯爾鴨"],
        contentTitle: "水豚陪伴的咖啡廳！",
        content: "只需要消費200元，就可以體驗和水豚一起玩耍做朋友哦！",
        like: false,
        articlePath: "/page/store-search/content",
        price: 200,
      },
      {
        id: 3,
        title: "肉球森林",
        subTitle: "Paws Forest",
        area: "北部",
        imgPath: cafeImg_3,
        label: ["狐獴", "大嘴鳥"],
        contentTitle: "來與小動物互動吧！",
        content:
          "店內除了有大家喜愛的貓咪，還有飼養狐獴和大嘴鳥，可以和可愛的小動物互動，是十分熱門的咖啡廳！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        id: 4,
        title: "微迷野林咖啡館",
        subTitle: "Cafe",
        area: "北部",
        imgPath: cafeImg_4,
        label: ["剌蝟", "守宮"],
        contentTitle: "充滿綠意的寵物咖啡館！",
        content:
          "【微迷野林咖啡館】適合喜歡大自然、喜歡小動物的朋友，也很適合喜歡動物的親子家庭～",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        id: 5,
        title: "玩蟒人生",
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
        id: 6,
        title: "玩蟒人生",
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
        id: 1,
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
        id: 2,
        title: "丘丘寵物",
        subTitle: "Pet Shop",
        area: "北部",
        imgPath: specialtyImg_1,
        label: ["兔子", "倉鼠", "刺蝟"],
        contentTitle: "寵物美容為主的專賣店！",
        content: "各式各樣的美容服務都有哦～歡迎來改造自家小寶貝吧！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        id: 3,
        title: "丘丘寵物",
        subTitle: "Pet Shop",
        area: "北部",
        imgPath: specialtyImg_1,
        label: ["兔子", "倉鼠", "刺蝟"],
        contentTitle: "寵物美容為主的專賣店！",
        content: "各式各樣的美容服務都有哦～歡迎來改造自家小寶貝吧！",
        like: false,
        articlePath: "/page/store-search/content",
      },
      {
        id: 4,
        title: "丘丘寵物",
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
        id: 1,
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
        id: 2,
        title: "伊甸動物醫院",
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
      {
        id: 3,
        title: "伊甸動物醫院",
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
      {
        id: 4,
        title: "伊甸動物醫院",
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
  const toggleLike = useCallback(
    (category, index) => {
      setExploreStoreData((currentData) => ({
        ...currentData,
        [category]: currentData[category].map((item, itemIndex) =>
          itemIndex === index ? { ...item, like: !item.like } : item
        ),
      }));
    },
    [setExploreStoreData]
  );

  // StoreList Component
  const StoreList = ({ store, index, toggleLike }) => (
    <li>
      <Link
        to={store.articlePath}
        className={`flex flex-col h-full bg-white rounded-xl px-[35px] py-[30px] w-[375px] border-[3px] border-transparent hover:border-${categoryColor}-normal`}
      >
        <h3
          className={`text-3xl font-bold tracking-wide text-${categoryColor}-dark`}
        >
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
            onClick={(e) => e.stopPropagation()}
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
              className={`px-2 border-[1.5px] border-solid text-${categoryColor}-dark border-${categoryColor}-normal rounded-3xl`}
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
          className={`mt-4 ml-auto text-center block w-[80px] pb-1 text-lg font-bold border-b-2 border-${categoryColor}-normal text-brown-dark hover:scale-110`}
        >
          查看更多
        </Link>
      </Link>
    </li>
  );

  // Filter Data Category
  const filterStoreData = useCallback((category) => {
    setCurrentCategory(category);
    setSearchResults([]);
    setSearchInput("");
  }, []);

  // Search Data
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = exploreStoreData[currentCategory].filter(
      (store) =>
        store.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        store.content.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      {/* <!-- Banner --> */}
      <div
        className={`mt-[84px] bg-${categoryColor}-${backgroundColorDepth} duration-0 min-h-[133px]`}
      >
        <img
          className="mx-auto min-h-[133px] object-cover"
          src={categoryBannerPath}
        />
      </div>
      {/* Store Content */}
      <main className="flex flex-col gap-x-4 flex-wrap md:justify-between xl:flex-row">
        <aside className="xl:flex-1 mt-20 w-[388px] mx-auto xl:ml-20">
          {/* <!-- Search Bar --> */}
          <div className="flex justify-around">
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setSearchInput("")}
                className="text-brown-normal text-[18px] w-[388px] rounded-full border-[1.5px] border-solid border-brown-normal py-[6px] pl-5 focus:outline-yellow-normal"
              />
              <img
                className="absolute w-7 cursor-pointer right-4 top-[8px] hover:scale-125"
                src={searchIcon}
                alt="search"
                onClick={handleSearch}
              />
            </div>
          </div>
          {/* <!-- Search Place --> */}
          <h2 className="text-3xl font-bold tracking-wider text-center text-brown-dark m-7">
            進階搜尋
          </h2>
          <div>
            <ul>
              <li>
                <div
                  className="toggle--click flex justify-between cursor-pointer"
                  onMouseDown={handlerAreaToggle}
                >
                  <h3
                    className={`text-2xl font-bold tracking-wider text-${categoryColor}-dark hover:opacity-70`}
                  >
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
                    ` checkbox__style checkbox--${categoryColor} flex flex-wrap text-xl text-center`
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
              <li className="mt-6 border-t-2 border-brown-light">
                <div
                  className="toggle--click flex justify-between my-5 cursor-pointer"
                  onMouseDown={handlerSearchToggle}
                >
                  <h3
                    className={`text-2xl font-bold tracking-wider text-${categoryColor}-dark hover:opacity-70`}
                  >
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
                    ` checkbox__style checkbox--${categoryColor} flex flex-wrap text-xl text-center`
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
                  <button className="see__more mt-8 mx-auto block text-xl text-brown-dark rounded-full w-[106px] py-1 border border-brown-dark mb-9 hover:opacity-60">
                    查看更多
                  </button>
                </div>
              </li>
              <li
                className={`${
                  currentCategory === "cafe" ? "block" : "hidden"
                } border-t-2 border-brown-light`}
              >
                <div
                  className="toggle--click flex justify-between mt-5 cursor-pointer"
                  onMouseDown={handlerPriceToggle}
                >
                  <h3
                    className={`text-2xl font-bold tracking-wider text-${categoryColor}-dark hover:opacity-70`}
                  >
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
                    <span className="flex-1 text-right text-xl font-bold text-brown-normal">
                      200
                    </span>
                    <span className="flex-1 text-right text-xl font-bold text-brown-normal">
                      400
                    </span>
                    <span className="flex-1 text-right text-xl font-bold text-brown-normal">
                      600
                    </span>
                    <span className="flex-1 text-right text-xl font-bold text-brown-normal">
                      800
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-14 text-brown-dark">
              <button
                className={`hover:text-white mx-auto block text-[20px] font-bold bg-${categoryColor}-${colorDepth} rounded-full w-[213px] h-[49px]`}
              >
                開始搜尋
              </button>
              <button className="hover:text-white mx-auto block text-[20px] font-bold bg-brown-light rounded-full w-[213px] h-[49px] mt-4">
                清除條件
              </button>
            </div>
          </div>
        </aside>
        {/* <!-- Store List --> */}
        <section className="flex-1 xl:flex-[3] mt-10 xl:ml-11">
          <ul className="flex flex-col items-center justify-center sm:flex-row">
            <li
              className={
                (currentCategory === "cafe"
                  ? "bg-brown-normal"
                  : "bg-white hover:bg-gray-dark") +
                " w-[195px] border-2 border-solid rounded-full border-brown-normal hover:border-transparent active:bg-brown-normal"
              }
            >
              <div
                className="flex py-5 px-7 group cursor-pointer"
                onClick={() => filterStoreData("cafe")}
              >
                <img
                  src={coffeeIcon}
                  alt="cafe"
                  className={
                    (currentCategory === "cafe" ? "hidden" : "block") +
                    " group-active:hidden"
                  }
                />
                <img
                  src={coffeeWhiteIcon}
                  alt="cafe"
                  className={
                    (currentCategory === "cafe" ? "block" : "hidden") +
                    " group-active:block"
                  }
                />
                <h4
                  className={
                    (currentCategory === "cafe"
                      ? "text-white"
                      : "text-brown-normal") +
                    " ml-3 text-xl font-bold tracking-wide group-active:text-white"
                  }
                >
                  特寵
                  <br />
                  咖啡廳
                </h4>
              </div>
            </li>
            <li
              className={
                (currentCategory === "specialtyStore"
                  ? "bg-brown-normal"
                  : "bg-white hover:bg-gray-dark") +
                " w-[195px] my-2 border-2 border-solid rounded-full sm:mx-8 border-brown-normal hover:border-transparent active:bg-brown-normal"
              }
            >
              <div
                className="flex py-5 px-7 group cursor-pointer"
                onClick={() => filterStoreData("specialtyStore")}
              >
                <img
                  src={shopIcon}
                  alt="store"
                  className={
                    (currentCategory === "specialtyStore"
                      ? "hidden"
                      : "block") + " group-active:hidden"
                  }
                />
                <img
                  src={shopWhiteIcon}
                  alt="store"
                  className={
                    (currentCategory === "specialtyStore"
                      ? "block"
                      : "hidden") + " group-active:block"
                  }
                />
                <h4
                  className={
                    (currentCategory === "specialtyStore"
                      ? "text-white"
                      : "text-brown-normal") +
                    " ml-3 text-xl font-bold tracking-wide text-brown-normal group-active:text-white"
                  }
                >
                  特寵
                  <br />
                  專賣店
                </h4>
              </div>
            </li>
            <li
              className={
                (currentCategory === "hospital"
                  ? "bg-brown-normal"
                  : "bg-white hover:bg-gray-dark") +
                " w-[195px] border-2 border-solid rounded-full border-brown-normal hover:border-transparent active:bg-brown-normal"
              }
            >
              <div
                className="flex py-5 pl-7 pr-9 group cursor-pointer"
                onClick={() => filterStoreData("hospital")}
              >
                <img
                  src={hospitalIcon}
                  alt="hospital"
                  className={
                    (currentCategory === "hospital" ? "hidden" : "block") +
                    " group-active:hidden"
                  }
                />
                <img
                  src={hospitalWhiteIcon}
                  alt="hospital"
                  className={
                    (currentCategory === "hospital" ? "block" : "hidden") +
                    " group-active:block"
                  }
                />
                <h4
                  className={
                    (currentCategory === "hospital"
                      ? "text-white"
                      : "text-brown-normal") +
                    " ml-3 text-xl font-bold tracking-wide text-brown-normal group-active:text-white"
                  }
                >
                  特寵
                  <br />
                  醫院
                </h4>
              </div>
            </li>
          </ul>
          <div className="bg-gray-dark xl:rounded-tl-[75px] pb-2 w-full pt-[66px] mt-10">
            <ul className="flex flex-wrap gap-7 justify-center">
              {(searchResults.length > 0
                ? searchResults
                : exploreStoreData[currentCategory]
              ).map((store, index) => (
                <StoreList
                  key={store.id}
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
