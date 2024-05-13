import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyRequests = ({ request }) => {
    const { _id, thumbnail, title, location, deadline } = request

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel your join request?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/volunter_requests/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancelled!",
                                text: "You've successfully cancelled your requested. ",
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
                <h2 className="card-title text-3xl font-semibold mt-3">{title}</h2>
                <p>{location}</p>
                <p>Deadline: {deadline}</p>

                <div className="card-actions justify-center lg:justify-end mt-5">
                    <Link onClick={() => handleDelete(_id)} className="btn btn-error text-base font-semibold text-white">Cancel request</Link>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;