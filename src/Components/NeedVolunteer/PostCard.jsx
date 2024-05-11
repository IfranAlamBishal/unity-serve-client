
const PostCard = ({ post }) => {
    const { thumbnail, title, deadline, location, volunteers_needed } = post
    return (
        <div className="card card-compact max-w-[500px] bg-blue-50 shadow-xl">
            <figure><img src={thumbnail} alt="post thumbnail" className=" w-[500px] h-56" /></figure>
            <div className="card-body font-semibold">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className=" opacity-85">{location}</p>
                <p className=" opacity-85">Volunteers needed: {volunteers_needed}</p>
                <p className=" opacity-85">Deadline: {deadline}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-base font-semibold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;