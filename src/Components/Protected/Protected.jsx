import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }
};

export default Protected;