import { Link } from "react-router-dom";
import "../styles/all.css";
import cafeSnake from "../assets/store/cafe-snake.svg";
import storeDuck from "../assets/store/store-duck.svg";
import hospitalGuest from "../assets/store/hospital-guest.svg";
import hospitalClerk from "../assets/store/hospital-clerk.svg";
import hospitalCounter from "../assets/store/hospital-counter.svg";

export default function StoreOverview() {
  return (
    <main className="mt-28 mb-32">
      <div className="container mx-auto px-4 lg:px-0">
        <ul className="flex flex-col gap-x-10 gap-y-8 lg:flex-row">
          <li className="flex-1 overflow-hidden">
            <Link to="/page/store-search" state={{ category: "cafe" }}>
              <div className="min-h-[560px] md:min-h-[688px] relative group duration-700 hover:border-yellow-normal border-4 border-transparent rounded-[52px] px-8 pt-6 bg-[url('../assets/store/overview-cafe.svg')] bg-center bg-no-repeat bg-cover">
                <h3 className="text-brown-dark text-right leading-none">
                  <div className="mb-4 tracking-widest text-[100px] font-light">
                    Cafe
                  </div>
                  <strong className="inline-block tracking-wide py-[10px] px-4 rounded-full bg-yellow-normal text-[30px] font-bold">
                    特寵咖啡廳
                  </strong>
                </h3>
                <img className="absolute duration-700 opacity-0 bottom-8 -left-80 group-hover:left-[18%] group-hover:opacity-100" src={cafeSnake} alt="snake" />
              </div>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/page/store-search" state={{ category: "specialtyStore" }}>
              <div className="relative group duration-700 hover:border-green-normal border-4 border-transparent rounded-[36px] overflow-hidden min-h-[326px] mb-9 p-6 bg-[url('../assets/store/overview-store.svg')] bg-center bg-no-repeat bg-cover">
                <h3 className="text-brown-dark text-right leading-none">
                  <div className="mb-3 tracking-widest text-[50px] font-light">
                    Store
                  </div>
                  <strong className="inline-block tracking-wide p-[10px] rounded-full bg-green-light text-[20px] font-bold">
                    特寵專賣店
                  </strong>
                </h3>
                <img className="absolute duration-700 opacity-0 bottom-2 -right-44 group-hover:right-[14%] group-hover:opacity-100" src={storeDuck} alt="duck" />
              </div>
            </Link>
            <Link to="/page/store-search" state={{ category: "hospital" }}>
              <div className="relative group duration-700 hover:border-cyan-normal border-4 border-transparent rounded-[36px] overflow-hidden min-h-[326px] p-6 bg-[url('../assets/store/overview-hospital.svg')] bg-center bg-no-repeat bg-cover">
                <h3 className="text-brown-dark text-right leading-none">
                  <div className="mb-3 tracking-widest text-[50px] font-light">
                    Hospital
                  </div>
                  <strong className="inline-block tracking-wide p-[10px] rounded-full bg-cyan-normal text-[20px] font-bold">
                    特寵醫院
                  </strong>
                </h3>
                <img className="absolute z-10 duration-700 opacity-0 bottom-4 -left-32 group-hover:left-6 lg:group-hover:left-0 xl:group-hover:left-12 group-hover:opacity-100" src={hospitalGuest} alt="guest" />
                <figure className="absolute z-5 right-[14%] bottom-[40%]">
                  <div className="relative w-[280px] lg:w-[320px]">
                    <img className="absolute -top-20 left-8 lg:left-14 duration-700 opacity-0 group-hover:opacity-100" src={hospitalClerk} alt="clerk" />
                    <img className="absolute z-5 left-0 top-5 lg:top-0 lg:left-8 xl:left-0" src={hospitalCounter} alt="counter" />
                  </div>
                </figure>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
