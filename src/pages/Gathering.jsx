import yellowdot from '../assets/gathering/deco-1.svg';
import cross from '../assets/gathering/deco-2.svg';

export default function Gathering() {
    return(
        <>
        {/* Banner */}
        <div className="bg-green-light bg-no-repeat bg-center bg-[url('../assets/gathering/banner.svg')] min-h-[133px] mt-20">
        </div>
        <main className="container justify-center mx-auto mt-[42px]">
            <div className='relative text-center'>
                <img src={yellowdot} alt="yellowdot" className='absolute right-[30%] top-[29%] -z-10'/>
                <h2 className='z-10 text-3xl font-bold text-brown-normal'>
                    在<span className='text-3xl font-bold text-brown-dark'>特寵生活</span>找到你有興趣的<span className='text-3xl font-bold text-green-dark'>聚會揪團</span>
                </h2>
                <p className='mt-1 text-xl text-green-normal'>快來認識更多同好吧！</p>
            </div>
            <div className='mb-10'>
                <div className='bg-yellow-normal rounded-[30px] px-[60px] py-3 justify-center inline-block'>
                    <figure className='flex items-center gap-x-4'>
                        <img src={cross} alt="cross" className='w-[21px] h-[21px]'/>
                        <h3 className='text-2xl font-bold text-brown-dark'>人氣排行榜</h3>
                        <img src={cross} alt="cross" className='w-[21px] h-[21px]'/>
                    </figure>
                </div>
            </div>
        </main>
        </>
    )
}