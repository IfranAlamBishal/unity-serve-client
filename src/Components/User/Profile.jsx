import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL, metadata } = user
    const joined = metadata.creationTime
    return (
        <div className="min-h-screen bg-blue-50 p-6 lg:p-10">
            <h2 className=" text-center text-5xl font-bold my-4">Profile</h2>
            <hr className=" w-1/2 mx-auto border-blue-700" />

            <div className=" flex justify-center my-10">
                <img src={photoURL} alt="ProfilePhoto"  className=" rounded-full w-48 h-48"/>
            </div>

            <div className=" text-center space-y-3 ">
                <h2 className=" text-2xl lg:text-4xl font-semibold">
                    <span className=" font-bold">Name: </span>
                     {displayName}</h2>
                <p className=" text-xl font-medium">
                <span className=" font-bold">Email: </span> 
                {email} </p>
                <p className=" text-xl font-medium">
                <span className=" font-bold">Joined: </span> 
                    {joined}</p>
            </div>

        </div>
    );
};

export default Profile;