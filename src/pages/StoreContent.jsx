import "../styles/all.css";
import shareFacebook from '../assets/store/share-facebook.svg';
import shareLine from '../assets/store/share-line.svg';
import contentImg_1 from '../assets/store/content-img1.png';
import contentImg_2 from '../assets/store/content-img2.png';
import contentImg_3 from '../assets/store/content-img3.png';
import contentImg_4 from '../assets/store/content-img4.png';
import contentImg_5 from '../assets/store/content-img5.svg';
import facebook from '../assets/store/facebook.svg';
import telephone from '../assets/store/telephone.svg';
import location from '../assets/store/location.svg';
import yasumi from '../assets/store/yasumi.svg';
import time from '../assets/store/time.svg';

export default function StoreContent() {
    return (
    // Store Content
    <main className="container mx-auto overflow-hidden md:flex">
        <article className="mt-8 px-2 lg:px-0">
            <h4 className="flex items-center text-base font-bold text-white mb-[13px]">
                <div className="w-[117px] h-[29px] bg-label bg-no-repeat flex justify-center items-center">
                    <strong className="pr-2 block">
                        特寵咖啡廳
                    </strong>
                </div>
                <span className="ml-4 font-bold text-brown-normal">2023.12.08</span>
            </h4>
            <h2 className="text-3xl font-black text-cyan-dark mb-[18px] tracking-wider">玩蟒人生Pythonimd｜球蟒咖啡廳～各種球蟒、玉米蛇、爬蟲類零距離接觸，台北大橋頭捷運站另類咖啡館</h2>
            <div className="flex justify-end border-b-2 mb-9 pb-[18px] border-brown-normal items-center">
                <p className="text-base font-bold text-brown-normal">分享文章</p>
                <a href="#"><img src={shareFacebook} alt="facebook分享" className="mx-[11px]" /></a>
                <a href="#"><img src={shareLine} alt="line分享" /></a>
            </div>
            <p className="text-base font-bold text-brown-dark">【Pythonimd玩蟒人生】是一間以球蟒與爬蟲類為主題的咖啡館，位於大同區捷運大橋頭站的【玩蟒人生】低消只要一杯飲料就能與各種球蟒或是爬蟲類近距離互動，老闆本身專業繁殖球蟒，有任何關於爬蟲類的知識都能詢問，老闆會給予耐心又專業的解答，超酷的台北另類寵物咖啡館。</p>
            <img src={contentImg_1} alt="content_img" className="my-[35px]" />
            <img src={contentImg_2} alt="content_img" className="mb-[35px]" />
            <p className="text-base font-bold text-brown-dark">有一整面牆擺放了滿滿的透明飼養箱，一區上面有數字編號、一區是沒有編號的，每個箱子裡都住了一條蟒蛇，箱子上有數字的是可以互動的蟒蛇，沒有數字的則是店內販售展示的蟒蛇。</p>
            <p className="text-base font-bold text-brown-dark mb-[18px]">【Pythonimd玩蟒人生】主要提供飲料，像是咖啡、果汁、碳酸飲料等，另外有少許的蛋糕，價格大約落在$130至$200左右，這裡的低消就是每人一杯飲料，一杯飲料就能和蛇蛇互動個人覺得很值得。 </p>
            <img src={contentImg_3} alt="content_img" className="my-[35px]" />
            <img src={contentImg_4} alt="content_img" className="mb-[35px]" />
            <p className="text-base font-bold text-brown-dark">球蟒與爬蟲類主題咖啡廳實在很特別，能近距離與爬小孩互動，對爬小孩有任何問題都能詢問老闆，也給小孩飼養動物、接觸動物的正確觀念。
                如果你也喜歡蟒蛇與爬蟲動物，來【玩蟒人生Pythonism】只要一杯飲料就能實現與爬小孩親密接觸的夢想，推薦給大家囉。</p>
            <div className="flex flex-col mt-12 mb-24 pt-10 border-t-[20px] border-cyan-normal xl:flex-row">
                <div className="mx-auto min-w-[374px] sm:w-[432px] h-[275px] xl:mr-[60px]">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.716655041767!2d121.52333804856978!3d25.043688092922853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90a06f2c70d%3A0x1daef20b13b189f!2z54it6a6uUExVUy3lloTlsI7lr7rlupc!5e0!3m2!1szh-TW!2stw!4v1703740331398!5m2!1szh-TW!2stw"></iframe>
                </div>
                <div className="mt-12 xl:mt-0">
                    <a href="#"><img src={facebook} alt="facebook" className="mb-[26px]" /></a>
                    <h3 className="pb-3 mb-2 text-2xl font-black border-b-2 border-solid text-cyan-dark border-brown-dark">玩蟒人生<span>Pythonism</span></h3>
                    <ul>
                        <li className="flex items-center">
                            <img src={telephone} alt="telephone" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">02-2557 8997</p>
                        </li>
                        <li className="flex items-center">
                            <img src={location} alt="location" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">103台北市大同區重慶北路二段235-3號</p>
                        </li>
                        <li className="flex items-center">
                            <img src={yasumi} alt="yasumi" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">每個星期一</p>
                        </li>
                    </ul>
                    <strong className="mt-3 block max-w-[192px] border border-brown-dark text-brown-dark text-lg font-medium text-center py-[6px] px-3 rounded-full">
                        低消方式：一杯飲品
                    </strong>
                </div>
            </div>
        </article>
        <aside className="mt-10 pb-24 px-2 md:w-[300px] lg:px-0 lg:ml-6 xl:ml-[113px]">
            <h3 className="tracking-wide pb-5 mb-5 text-xl font-black border-b-2 border-solid text-cyan-dark border-cyan-dark">相關文章</h3>
            <ul>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="tracking-wide pb-5 mb-5 text-xl font-black border-b-2 border-solid text-cyan-dark border-cyan-dark">熱門文章</h3>
            <ul>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={contentImg_5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-black text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="mx-auto mt-[75px] mb-[39px] w-[300px] h-[200px] leading-[200px] font-black text-xl bg-gray-300 text-center">GDN</div>
            <div className="mx-auto text-center w-[300px] h-[200px] leading-[200px] justify-center font-black text-xl bg-gray-300">GDN</div>
        </aside>
    </main>
    )
}