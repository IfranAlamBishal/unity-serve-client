import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VolunteerPost = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email } = user
    const categoryList = ['Animal Welfare', 'Education', 'Environment', 'Healthcare', 'Social Service', 'Other'];
    const [selected, setSelected] = useState(null)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate()

    const handleChange = date => {
        setSelectedDate(date);
    };

    const handleSelect = category => {
        setSelected(category)
    }


    const handlePost = e => {
        e.preventDefault()
        const title = e.target.title.value;
        const thumbnail = e.target.thumbnail.value;
        const category = selected;
        const description = e.target.description.value;
        const location = e.target.location.value;
        const volunteers = e.target.volunteers_needed.value;
        const deadline = selectedDate.toISOString().slice(0, 10);

        if (category == null) {
            toast.error('Please select a categoty')
        }

        else {
            const addPost = {
                title: title,
                thumbnail: thumbnail,
                description: description,
                category: category,
                location: location,
                volunteers_needed: volunteers,
                deadline: deadline,
                posted_by: displayName,
                email: email
            }
            console.log(addPost);

            Swal.fire({
                title: "Are you sure?",
                text: "You want to post this?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, post it"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('https://unity-serve-server.vercel.app/volunteer_posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addPost)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Posted!",
                                    text: "You've successfully added a post. Please wait volunteer response.",
                                    icon: "success"
                                });
                                e.target.reset();
                                navigate('/manage_posts')
                            }
                        })
                }
            });
        }
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
                            <input type="text" placeholder="post title" className="input input-bordered w-64 bg-gray-100" name="title" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="url" placeholder="thumbnail url" className="input input-bordered w-64 bg-gray-100" name="thumbnail" required />
                        </div>
                        <div className="dropdown w-64">
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

                    </div>

                    <div className=" flex flex-col lg:flex-row gap-5 justify-around font-semibold">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" className="input input-bordered w-64 bg-gray-100" name="description" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="location" className="input input-bordered w-64 bg-gray-100" name="location" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Volunteers needed</span>
                            </label>
                            <input type="text" placeholder="no. of volunteers needed" className="input input-bordered w-64 bg-gray-100" name="volunteers_needed" required />
                        </div>
                    </div>

                    <div className=" flex flex-col lg:flex-row-reverse gap-5 justify-between font-semibold">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            {/* <input type="date" className="input input-bordered w-64 bg-gray-100 lg:mr-5" name="deadline" required /> */}
                            <div className=" w-64 h-12 bg-gray-100 lg:mr-5 ">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleChange}
                                    dateFormat="dd-MM-yyyy"
                                    className=" bg-gray-100 px-6 py-2 border border-gray-400 rounded-xl"
                                    required
                                />
                            </div>
                        </div>

                        <div className=" gap-3 mt-5">
                            <h4 className="font-bold text-xl">Organizer:</h4>
                            <p className=" text-lg font-medium pl-6">Name: {displayName}</p>
                            <p className=" font-medium pl-6">Email: {email}</p>
                        </div>
                    </div>

                    <div className="card-actions justify-center mt-6">
                        <button className="btn btn-primary text-lg w-32 text-white">Post</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default VolunteerPost;