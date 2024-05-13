import { Link } from "react-router-dom";

const MyPost = ({ post }) => {
    const { thumbnail, title, location, deadline } = post
    return (
        <div className="card sm:card-compact lg:card-side w-[320px] lg:w-full bg-blue-50 shadow-xl my-6 ">
            <figure><img src={thumbnail} alt="Property" className=" w-[320px] h-56" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{title}</h2>
                <p>{location}</p>
                <p>Deadline: {deadline}</p>

                <div className="card-actions justify-center lg:justify-end mt-5">
                    <Link className="btn btn-accent text-base font-semibold text-white">Update Post</Link>
                    <Link className="btn btn-error text-base font-semibold text-white">Delete Post</Link>
                </div>
            </div>
        </div>
    );
};

export default MyPost;