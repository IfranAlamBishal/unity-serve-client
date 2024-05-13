import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const post = useLoaderData()
    const { _id, thumbnail, title, posted_by, deadline, description, location, volunteers_needed } = post
    return (
        <div className="card card-compact w-5/6 lg:w-2/3 mx-auto bg-blue-50 shadow-xl">
            <figure><img src={thumbnail} alt="post thumbnail" className=" w-full h-80" /></figure>
            <div className="card-body font-semibold">
                <h2 className=" text-2xl lg:text-4xl text-center font-bold mb-2">{title}</h2>
                <p className=" text-center opacity-85 mb-4">Organizer: {posted_by}</p>
                <p className=" text-lg mb-5 px-3">{description}</p>
                <div className=" flex flex-col lg:flex-row gap-3 justify-around text-center">
                    <p className=" text-center opacity-85">Place: {location}</p>
                    <p className=" opacity-85">Volunteers needed: {volunteers_needed}</p>
                    <p className=" opacity-85">Deadline: {deadline}</p>
                </div>
                <div className="card-actions justify-center my-5">
                    <Link to={`/be_a_volunteer/${_id}`} className="btn btn-primary text-base font-semibold">Be a Volunteer</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;