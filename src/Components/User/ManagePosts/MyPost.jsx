import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPost = ({ post }) => {
    const { _id, thumbnail, title, location, deadline } = post

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this post?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want delete."
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://unity-serve-server.vercel.app/volunteer_posts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "You've successfully deleted the post. ",
                                icon: "success"
                            });
                            window.location.reload()
                        }
                    })
            }
        });
    }
    return (
        <div className="card sm:card-compact lg:card-side w-[320px] lg:w-full bg-blue-50 shadow-xl my-6 ">
            <figure><img src={thumbnail} alt="Property" className=" w-[320px] h-56" /></figure>
            <div className="card-body font-semibold">
                <h2 className="card-title text-3xl">{title}</h2>
                <p>{location}</p>
                <p>Deadline: {deadline}</p>

                <div className="card-actions justify-center lg:justify-end mt-5">
                    <Link className="btn btn-accent text-base font-semibold text-white">Update Post</Link>
                    <Link onClick={() => handleDelete(_id)} className="btn btn-error text-base font-semibold text-white">Delete Post</Link>
                </div>
            </div>
        </div>
    );
};

export default MyPost;