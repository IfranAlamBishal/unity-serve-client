import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const VolunteerPost = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email } = user

    const handlePost = e => {
        e.preventDefault()
    }
    return (
        <div >
            <div className="card shrink-0 w-5/6 lg:w-2/3 mx-auto shadow-2xl bg-blue-50 pb-8">
                <h2 className=" text-center text-4xl font-bold my-5">Add Volunteer Post</h2>
                <hr className=" w-2/3 mx-auto py-3 border-gray-500" />

                <form onSubmit={handlePost} className="card-body">

                    <div className=" flex flex-col lg:flex-row gap-5 justify-around font-semibold">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="post title" className="input input-bordered w-72 bg-gray-100" name="title" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="url" placeholder="thumbnail url" className="input input-bordered w-72 bg-gray-100" name="thumbnail" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="category" className="input input-bordered w-72 bg-gray-100" name="category" required />
                        </div>
                    </div>

                    <div className=" flex flex-col lg:flex-row gap-5 justify-around font-semibold">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" className="input input-bordered w-72 bg-gray-100" name="description" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="location" className="input input-bordered w-72 bg-gray-100" name="location" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Volunteers needed</span>
                            </label>
                            <input type="text" placeholder="no. of volunteers needed" className="input input-bordered w-72 bg-gray-100" name="volunteers_needed" required />
                        </div>
                    </div>

                    <div className=" flex flex-col lg:flex-row gap-5 justify-between font-semibold">
                        <div className=" gap-3 mt-5">
                            <h4 className="font-bold text-xl">Organise by:</h4>
                            <p className=" text-lg font-medium pl-6">Name: {displayName}</p>
                            <p className=" font-medium pl-6">Email: {email}</p>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="text" placeholder="deadline" className="input input-bordered w-72 bg-gray-100" name="deadline" required />
                        </div>
                    </div>

                    <div className="card-actions justify-center mt-6">
                        <button className="btn btn-primary text-lg text-white">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VolunteerPost;