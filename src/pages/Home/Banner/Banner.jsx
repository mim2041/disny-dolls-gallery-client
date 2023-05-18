import banner1 from '../../../assets/images/banner/banner1.jpg';
import banner2 from '../../../assets/images/banner/banner2.jpg';
import banner3 from '../../../assets/images/banner/banner3.jpg';
import banner4 from '../../../assets/images/banner/banner4.jpg';
import banner5 from '../../../assets/images/banner/banner5.jpg';
import banner6 from '../../../assets/images/banner/banner6.jpg';

const Banner = () => {

    const bannerText = 
    <div className="absolute h-full flex items-center text-white left-0 top-0 bg-gradient-to-r from-sky-300 rounded-xl">
        <div className='space-y-7 w-1/2 pl-12 '>
            <h2 className='text-6xl font-bold '>Welcome to Our Disney Land With Fairy Tales</h2>
            <p>We serve the way you like, the thing you want, the perfections you are looking for. You will lost in your childhood. Bring distance to your children from phone and get these to your children for their sweet memories.</p>
            <div className='flex'>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Dolls</button>
            </div>
        </div>

    </div>

    return (
        <div className="carousel w-full h-[600px] my-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;