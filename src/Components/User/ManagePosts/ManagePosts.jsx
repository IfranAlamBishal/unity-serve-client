import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyPost from "./MyPost";
import MyRequests from "./MyRequests";

const ManagePosts = () => {

    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [myRequests, setMyRequests] = useState([]);

    useEffect(() => {
        fetch('https://unity-serve-server.vercel.app/volunteer_posts')
            .then(res => res.json())
            .then(posts => {
                const myPost = posts.filter(post => post.email == user.email)
                if (myPost.length > 0) {
                    setMyPosts(myPost)
                }
                else {
                    setMyPosts([])
                }
            })

        fetch('https://unity-serve-server.vercel.app/volunteer_requests')
            .then(res => res.json())
            .then(requests => {
                const myRequest = requests.filter(request => request.email == user.email)

                if (myRequest.length > 0) {
                    setMyRequests(myRequest)
                }
                else {
                    setMyRequests([])
                }
            })
    }, [])

    // console.log(myPosts, myRequests)

    // Auto Tab1 select

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        if (!activeTab) {
            setActiveTab('tab1');
        }
    }, [activeTab]);

    // Loading spinner 

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="lg:w-5/6 mx-auto py-5">

            <div className="flex justify-center">
                {
                    spinner && <span className="loading text-info w-24"></span>
                }
            </div>

            <h2 className=" text-center text-5xl font-bold mb-5">Manage Posts</h2>
            <hr className=" w-2/3 mx-auto border-blue-700 mb-10" />

            <div role="tablist" className="tabs tabs-lifted ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab  text-lg font-semibold w-40 h-16" aria-label="My Posts"
                    id="tab1"
                    checked={activeTab === 'tab1'}
                    onChange={() => setActiveTab('tab1')} />

                <div role="tabpanel" className="tab-content bg-white border-gray-200 rounded-box p-6">
                    {
                        myPosts.map(post => <MyPost
                            key={post._id}
                            post={post}>
                        </MyPost>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg font-semibold w-40 h-16" aria-label="My Requests"
                    id="tab2"
                    checked={activeTab === 'tab2'}
                    onChange={() => setActiveTab('tab2')} />
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