import { Link, useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";

const NeedVolunteerNow = () => {

    const volunteerPosts = useLoaderData()
    const posts = volunteerPosts.slice(0, 6);
    // console.log(volunteerPosts)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className=" my-14">
            <h2 className=" text-center text-4xl font-bold my-4">Need Volunteer Now</h2>
            <hr className=" w-2/3 mx-auto py-4 border-gray-500" />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    posts.map(post => <NeedVolunteerCard key={post._id} post={post}></NeedVolunteerCard>)
                }
            </div>
            <div className=" flex justify-center mt-10">
                <Link to="/need_volunteer" onClick={scrollUp} className=" btn btn-primary text-xl font-semibold rounded-xl">See more</Link>
            </div>
        </div>
    );
};

export default NeedVolunteerNow;