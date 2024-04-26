import { Link } from "react-router-dom";
import logo from "../../assets/matchbox.webp"
const Header = () => {
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
    </>
    return (
        <div>
            <div className="navbar rounded-lg h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img className="h-20 w-36" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden  text-white lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-xl">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">


                    <Link to="/login">
                        <button className="bg-[#055160] text-white h-12 w-36 font-semibold rounded-lg lg:ml-[350px]">Login</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;