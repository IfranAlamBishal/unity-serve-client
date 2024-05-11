import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" rounded-xl">
            <div className="carousel w-full rounded-xl max-h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pXp10wh/team-volunteers-holding-donation-boxes-looking-camera.jpg" className="w-full rounded-xl max-h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <Link to="/need_volunteer" className=" btn btn-primary text-xl font-semibold rounded-xl">Be a Volunteer</Link>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/85g6Ttv/group-volunteers-collecting-garbage.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <Link to="/need_volunteer" className=" btn btn-primary text-xl font-semibold rounded-xl">Be a Volunteer</Link>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VVLMm9n/medium-shot-volunteers-working-together.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <Link to="/need_volunteer" className=" btn btn-primary text-xl font-semibold rounded-xl">Be a Volunteer</Link>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MhdwPYZ/product-5d49744ee06cc-1600.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <Link to="/need_volunteer" className=" btn btn-primary text-xl font-semibold rounded-xl">Be a Volunteer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;