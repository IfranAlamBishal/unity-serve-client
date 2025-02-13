import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const BeAVolunteer = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email } = user



    const post = useLoaderData();
    const { _id, thumbnail, title, posted_by, deadline, description, location, volunteers_needed } = post

    const handleRequest = () => {

        const volunteerRequest = {
            name: displayName,
            email: email,
            post_id: _id,
            title: title,
            thumbnail: thumbnail,
            location: location,
            deadline: deadline
        }

        fetch('https://unity-serve-server.vercel.app/volunteer_requests')
            .then(res => res.json())
            .then(data => {
                const requests = data
                const checkEmail = requests.filter(check => check.email == email)
                const checkRequest = checkEmail.filter(check => check.post_id == _id)
                if (checkRequest.length > 0) {
                    toast.error('Already requested to join');
                    return;
                }
                else {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You want to join as a volunteer?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, I want to join!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            fetch('https://unity-serve-server.vercel.app/request_as_volunteer', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(volunteerRequest)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    // console.log(data)
                                    if (data.insertedId) {
                                        Swal.fire({
                                            title: "Requested!",
                                            text: "You've successfully requested as a volunteer. Please wait for the confirmation.",
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    });
                }
            })


    }
    return (
        <div className=" w-5/6 mx-auto flex flex-col lg:flex-row gap-6 justify-between">
            <div className="card card-compact lg:w-2/3 mx-auto bg-blue-50 shadow-xl">
                <figure><img src={thumbnail} alt="post thumbnail" className=" w-full h-80" /></figure>
                <div className="card-body font-semibold mb-5">
                    <h2 className=" text-2xl lg:text-4xl text-center font-bold mb-2">{title}</h2>
                    <p className=" text-center opacity-85 mb-4">Posted by: {posted_by}</p>
                    <p className=" text-lg mb-5 px-3">{description}</p>
                    <div className=" flex flex-col lg:flex-row gap-3 justify-around text-center">
                        <p className=" text-center opacity-85">Place: {location}</p>
                        <p className=" opacity-85">Volunteers needed: {volunteers_needed}</p>
                        <p className=" opacity-85">Deadline: {deadline}</p>
                    </div>
                    {/* <div className="card-actions justify-center my-5">
                    <Link to={`/be_a_volunteer/${_id}`} className="btn btn-primary text-base font-semibold">Be a Volunteer</Link>
                </div> */}
                </div>
            </div>

            <div className="card card-compact max-w-96 h-[400px]  mx-auto my-auto bg-blue-50 shadow-xl p-4">
                <h2 className=" text-2xl font-bold mx-auto my-4">Applicant</h2>
                <hr className=" w-2/3 mx-auto mb-6 border-blue-600" />

                <h2 className=" text-xl font-bold mb-3">Name: {displayName}</h2>
                <p className=" font-medium mb-3">Email: {email}</p>

                <h4 className=" text-base font-medium my-3">Your information will be recorded for further process. <br />
                    To request to join this event please press the button below</h4>
                <div className="card-actions justify-center my-5">
                    <Link onClick={handleRequest} className="btn btn-primary text-base font-semibold">Request</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BeAVolunteer;