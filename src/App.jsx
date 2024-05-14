import { Outlet } from "react-router-dom";
import Nav from "./Components/Common/Nav";
import Footer from "./Components/Common/Footer";


const App = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=" mt-40">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;