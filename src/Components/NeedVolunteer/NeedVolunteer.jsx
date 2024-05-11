import { useEffect, useState } from "react";

const NeedVolunteer = () => {

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div>

            <div className="flex justify-center">
                {
                    spinner && <span className="loading text-info w-24"></span>
                }
            </div>
            <h2>Need Volunteer</h2>
        </div>
    );
};

export default NeedVolunteer;