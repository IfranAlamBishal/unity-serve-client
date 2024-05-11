import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";

const NeedVolunteerNow = () => {

    const volunteerPosts = useLoaderData()
    // console.log(volunteerPosts)
    return (
        <div className=" my-8">
            <h2 className=" text-center text-4xl font-bold my-4">Need Volunteer Now</h2>
            <hr className=" w-2/3 mx-auto py-4 border-gray-500" />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
                {
                    volunteerPosts.map(post => <NeedVolunteerCard key={post._id} post={post}></NeedVolunteerCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteerNow;