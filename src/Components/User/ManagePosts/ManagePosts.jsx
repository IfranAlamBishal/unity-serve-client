import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyPost from "./MyPost";
import MyRequests from "./MyRequests";

const ManagePosts = () => {

    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [myRequests, setMyRequests] = useState([]);

    useEffect(() => {
        fetch('https://unity-serve-server.vercel.app/volunter_posts')
            .then(res => res.json())
            .then(posts => {
                const myPost = posts.filter(post => post.email == user.email)
                if(myPost.length > 0){
                    setMyPosts(myPost)
                }
                else{
                    setMyPosts([])
                }
            })

        fetch('https://unity-serve-server.vercel.app/volunter_requests')
            .then(res => res.json())
            .then(requests => {
                const myRequest = requests.filter(request => request.email == user.email)
                
                if(myRequest.length > 0){
                    setMyRequests(myRequest)
                }
                else{
                    setMyRequests([])
                }
            })
    }, [])

    console.log(myPosts, myRequests)

    return (
        <div className=" w-5/6 mx-auto py-5">
            <h2 className=" text-center text-5xl font-bold mb-5">Manage Posts</h2>
            <hr className=" w-2/3 mx-auto border-blue-700 mb-10" />

            <div role="tablist" className="tabs tabs-lifted ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab  text-lg font-semibold w-40 h-16" aria-label="My Posts" />
                <div role="tabpanel" className="tab-content bg-white border-gray-200 rounded-box p-6">
                    {
                        myPosts.map(post => <MyPost 
                            key={post._id} 
                            post={post}>
                            </MyPost>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg font-semibold w-40 h-16" aria-label="My Requests" />
                <div role="tabpanel" className="tab-content bg-white border-gray-200 rounded-box p-6">
                    {
                        myRequests.map(request => <MyRequests
                            key={request._id}
                            request={request}>
                        </MyRequests>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManagePosts;