import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="mx-12">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;