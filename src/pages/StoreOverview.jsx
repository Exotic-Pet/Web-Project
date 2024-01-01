import { Link } from "react-router-dom";
import "../styles/all.css";
import cafeSnake from "../assets/store/cafe-snake.svg";
import storeDuck from "../assets/store/store-duck.svg";
import hospitalGuest from "../assets/store/hospital-guest.svg";
import hospitalCounter from "../assets/store/hospital-counter.svg";

export default function StoreOverview() {
  return (
    <main className="mt-8 mb-32">
      <div className="container mx-auto">
        <ul className="flex gap-x-10 gap-y-8">
          <li className="flex-1 overflow-hidden">
            <Link to="/store-overview/cafe">
              <div className="min-h-[688px] relative group duration-700 hover:border-yellow-normal border-4 border-transparent rounded-[52px] px-8 pt-6 bg-overview-cafe bg-center bg-no-repeat bg-cover">
                <h3 className=" text-brown-dark text-right leading-none">
                  <div className="mb-4 tracking-widest text-[100px] font-light">
                    Cafe
                  </div>
                  <strong className="inline-block tracking-wide py-[10px] px-4 rounded-full bg-yellow-normal text-[30px] font-black">
                    特寵咖啡廳
                  </strong>
                </h3>
                <img className="absolute duration-700 opacity-0 bottom-8 -left-80 group-hover:left-1/4 group-hover:opacity-100" src={cafeSnake} alt="snake" />
              </div>
            </Link>
          </li>
          <li className="flex-1">
            <Link to="/store-overview/">
              <div className="relative group duration-700 hover:border-green-normal border-4 border-transparent rounded-[40px] overflow-hidden min-h-[326px] mb-9 p-6 bg-overview-store bg-center bg-no-repeat bg-cover">
                <h3 className=" text-brown-dark text-right leading-none">
                  <div className="mb-3 tracking-widest text-[50px] font-light">
                    Store
                  </div>
                  <strong className="inline-block tracking-wide p-[10px] rounded-full bg-green-light text-[20px] font-black">
                    特寵專賣店
                  </strong>
                </h3>
                <img className="absolute duration-700 opacity-0 bottom-2 -right-44 group-hover:right-[14%] group-hover:opacity-100" src={storeDuck} alt="duck" />
              </div>
            </Link>
            <Link to="/store-overview/">
              <div className="relative group duration-700 hover:border-cyan-normal border-4 border-transparent rounded-[40px] overflow-hidden min-h-[326px] p-6 bg-overview-hospital bg-center bg-no-repeat bg-cover">
                <h3 className=" text-brown-dark text-right leading-none">
                  <div className="mb-3 tracking-widest text-[50px] font-light">
                    Hospital
                  </div>
                  <strong className="inline-block tracking-wide p-[10px] rounded-full bg-cyan-normal text-[20px] font-black">
                    特寵醫院
                  </strong>
                </h3>
                <img className="absolute duration-700 opacity-0 bottom-4 -left-32 group-hover:left-6 group-hover:opacity-100" src={hospitalGuest} alt="guest" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
