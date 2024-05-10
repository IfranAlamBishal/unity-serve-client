import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className=' errorPageBg bg-contain'>
            <div className=" text-center pt-60 lg:pt-28 w-3/4 mx-auto bg-[#FFFFFF66] p-5 h-full">
                <h2 className=" text-4xl lg:text-6xl font-semibold mb-3">Oops! It seems like the page you are looking for is not available</h2>
                <p className=" text-sm font-medium mb-5"><i>{error.statusText || error.message}</i></p>

                <Link to='/' className=" btn btn-neutral text-xl font-medium">Return to Home page </Link>
            </div>

        </div>
    );
};

export default ErrorPage;