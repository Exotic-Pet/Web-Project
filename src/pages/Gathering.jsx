import { Link } from "react-router-dom";
import yellowDot from "../assets/gathering/deco-1.svg";
import cross from "../assets/gathering/deco-2.svg";
import number_1 from "../assets/gathering/number-1.svg";
import number_2 from "../assets/gathering/number-2.svg";
import number_3 from "../assets/gathering/number-3.svg";
import rankingsPhoto_1 from "../assets/gathering/rankings-photo-1.png";
import rankingsPhoto_2 from "../assets/gathering/rankings-photo-2.png";
import rankingsPhoto_3 from "../assets/gathering/rankings-photo-3.png";
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

  return (
    <>
      {/* Banner */}
      <div className="bg-green-light bg-no-repeat bg-center bg-[url('../assets/gathering/banner.svg')] min-h-[133px] mt-20"></div>
      <main className="container justify-center mx-auto mt-[42px] mb-24">
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
        <div className="mt-8 mb-10 px-12">
          <div className="py-3 flex justify-center items-center">
            <hr className="flex-1 border-yellow-normal border" />
            <figure className="px-14 flex items-center gap-x-4 rounded-[30px] bg-yellow-normal ">
              <img src={cross} alt="cross" className="w-[21px]" />
              <h3 className="py-3 text-2xl font-bold text-brown-dark tracking-wider">
                人氣排行榜
              </h3>
              <img src={cross} alt="cross" className="w-[21px]" />
            </figure>
            <hr className="flex-1 border-yellow-normal border" />
          </div>
          {/* Rankings */}
          <ul className="my-12 px-10 flex justify-between gap-6">
            {rankingsData?.map((item) => (
              <li key={item.id} className="flex-1 flex gap-5">
                <figure className="relative">
                  <img src={item.photoPath} alt="ranking" />
                  <img
                    src={item.rankPhotoPath}
                    alt="number"
                    className="absolute -top-8 -left-8"
                  />
                </figure>
                <section className="flex flex-col justify-between">
                  <div className="leading-7 text-sm">
                    <h5 className="text-brown-normal">{item.category}</h5>
                    <h4 className="text-brown-dark font-bold text-[16px]">
                      {item.title}
                    </h4>
                    <h6 className="text-brown-normal">{item.date}</h6>
                    <p className="text-green-dark  font-medium">
                      {item.location}
                    </p>
                  </div>
                  <Link
                    to=""
                    className="ml-auto mb-1 text-green-dark border-b border-brown-normal hover:scale-125"
                  >
                    MORE
                  </Link>
                </section>
              </li>
            ))}
          </ul>
          <hr className="border border-yellow-normal" />
        </div>
      </main>
    </>
  );
}
