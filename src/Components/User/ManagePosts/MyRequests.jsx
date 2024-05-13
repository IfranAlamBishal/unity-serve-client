import { Link } from "react-router-dom";

const MyRequests = ({ request }) => {
    const { thumbnail, title, location, deadline } = request
    return (
        <div className="card sm:card-compact lg:card-side w-[320px] lg:w-full bg-blue-50 shadow-xl my-6 ">
            <figure><img src={thumbnail} alt="Property" className=" w-[320px] h-56" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold mt-3">{title}</h2>
                <p>{location}</p>
                <p>Deadline: {deadline}</p>

                <div className="card-actions justify-center lg:justify-end mt-5">
                    <Link className="btn btn-error text-base font-semibold text-white">Cancel request</Link>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;