import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";

const NeedVolunteer = () => {

    const posts = useLoaderData()

    const categoryList = ['Animal Welfare', 'Education', 'Environment', 'Healthcare', 'Social Service', 'Other'];
    const [selected, setSelected] = useState(null)
    const [displayPost, setDisplayPost] = useState(posts)

    const handleSelect = category => {
        setSelected(category)

        const filterPost = posts.filter(post => post.category == category)

        if(filterPost){
            setDisplayPost(filterPost)
        }
        else {
            setDisplayPost(posts)
        }
    }

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

            <div className="dropdown w-64 mb-5">
                            <div tabIndex={0} role="button" className="btn btn-neutral ">
                                <label className="label">
                                    <span className="label-text text-white">Category</span>
                                </label>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-base font-medium gap-1">
                                {
                                    categoryList.map(category => <li key={category} onClick={() => handleSelect(category)} className=" hover:bg-gray-200 cursor-pointer">{category}</li>)
                                }
                            </ul>
                            <div className=" mt-2">
                                {
                                    selected && (
                                        <h2>{selected}</h2>
                                    )
                                }
                            </div>
                        </div>
            <div  className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full mx-auto">
                {
                    displayPost.map(post => <PostCard key={post._id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;