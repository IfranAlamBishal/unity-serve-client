import { useEffect, useState } from "react";
import Banner from "./Banner";
import NeedVolunteerNow from "./NeedVolunteerNow/NeedVolunteerNow";


const Home = () => {

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
            <Banner></Banner>
            <NeedVolunteerNow></NeedVolunteerNow>
        </div>
    );
};

export default Home;