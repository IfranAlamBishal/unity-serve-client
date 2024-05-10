import { Outlet } from "react-router-dom";
import Nav from "./Components/Common/Nav";
import Footer from "./Components/Common/Footer";


const App = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;