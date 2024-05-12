import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    const { _id, thumbnail, title, deadline, location, volunteers_needed } = post

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="card card-compact max-w-[500px] bg-blue-50 shadow-xl">
            <figure><img src={thumbnail} alt="post thumbnail" className=" w-[500px] h-56" /></figure>
            <div className="card-body font-semibold">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className=" opacity-85">{location}</p>
                <p className=" opacity-85">Volunteers needed: {volunteers_needed}</p>
                <p className=" opacity-85">Deadline: {deadline}</p>
                <div className="card-actions justify-end">
                <Link to={`/view_details/${_id}`} onClick={scrollUp} className="btn btn-primary text-base font-semibold">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;