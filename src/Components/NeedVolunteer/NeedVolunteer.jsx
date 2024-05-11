import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";

const NeedVolunteer = () => {

    const posts = useLoaderData()

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className=" w-5/6 mx-auto">

            <div className="flex justify-center">
                {
                    spinner && <span className="loading text-info w-24"></span>
                }
            </div>
            <h2 className=" text-center text-4xl font-bold my-4">Need Volunteers</h2>
            <h4 className=" text-center text-2xl font-semibold my-4">Available Post: {posts.length}</h4>
            <hr className=" w-2/3 mx-auto py-4 border-gray-500" />
            <div  className="grid gap-8 md:mx-14">
                {
                    posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;