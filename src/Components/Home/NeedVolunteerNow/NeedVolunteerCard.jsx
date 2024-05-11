
const NeedVolunteerCard = ({ post }) => {
    const { thumbnail, title, category, deadline } = post
    return (
        <div className="card card-compact max-w-96 bg-blue-50 shadow-xl">
            <figure><img src={thumbnail} alt="post thumbnail" className=" w-96 h-56"/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{category}</p>
                <p className=" font-semibold">Deadline: {deadline}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-base font-semibold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerCard;