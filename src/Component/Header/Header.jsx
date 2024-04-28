// import { Link } from "react-router-dom";
// import logo from "../../assets/matchbox.webp"
// const Header = () => {
//     const navLinks = <>
//         <li><Link to="/">Home</Link></li>
//         <a href="https://discord.com/login"><li><>invite</></li></a>
//         <li><Link to="/premium">premium</Link></li>
//         <li><Link to="/commands">commands</Link></li>
//         <li><Link to="/support">support</Link></li>
//     </>
//     return (
//         <div>
//             <div className="navbar rounded-lg">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
//                             {navLinks}
//                         </ul>
//                     </div>
//                     <div>
//                         <img className="h-24 w-28" src={logo} alt="" />
//                     </div>
//                 </div>
//                 <div className="navbar-center hidden text-white lg:flex">
//                     <ul className=" flex uppercase px-1 gap-16 text-[16px]">
//                         {navLinks}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a href="https://discord.com/login"><button className=" bg-[#499bae] text-xl h-12 w-36 rounded-lg">Get Started</button></a>
//                 </div>
//             </div>
//             <div className="divider divider-accent"></div>
//         </div>

//     );
// };

// export default Header;






// import logo from "../../assets/matchbox.webp"
// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Header = () => {
//     const [open, setOpen] = useState(false);
//     const navLinks = (
//         <>
//             <li>
//                 <Link>Home</Link>
//             </li>
//             <li>
//                 <Link>About</Link>
//             </li>
//             <li>
//                 <Link>Services</Link>
//             </li>
//             <li>
//                 <Link>Contact</Link>
//             </li>
//             <li>
//                 <Link>NotFound</Link>
//             </li>
//         </>
//     );

//     return (
//         <div>
//             <nav className=" bg-[#191A1E] p-4 items-center">
//                 <div className="flex  items-center justify-between">
//                     <img className="h-24 w-28" src={logo} alt="" />
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="text-white focus:outline-none"
//                         >
//                             {open ? <AiOutlineClose /> : <AiOutlineMenu />}
//                         </button>
//                     </div>
//                     {/* Login button */}
//                     <div className="hidden md:block">
//                         <button className="bg-[#499bae] h-12 w-32 rounded-md">Get Started</button>
//                     </div>
//                 </div>
//                 <ul
//                     className={`md:flex md:flex-row md:items-center md:justify-center md:space-x-4 text-white mt-4 mb-5 gap-5 md:mt-0 ${open ? "block" : "hidden"
//                         }`}
//                 >
//                     {navLinks}
//                 </ul>
//                 {/* Login button for mobile */}
//                 <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#499bae]`}>
//                     <button className="h-12 w-32 rounded-md">Get Started</button>
//                 </div>
//             </nav>
//             <div className="divider divider-accent"></div>
//         </div>
//     );
// };

// export default Header;







import logo from "../../assets/matchbox.webp";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const navLinks = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <a href="https://discord.com/login"><li><>invite</></li></a>
            <li>
                <Link to="/premium">Premium</Link>
            </li>
            <li>
                <Link to="/commands">Commands</Link>
            </li>
            <li>
                <Link to="/support" >Support</Link>
            </li>
        </>
    );

    return (
        <div>
            <nav className=" bg-[#191A1E] items-center">
                <div className="flex items-center justify-between">
                    <img className="h-24 w-28" src={logo} alt="" />
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white focus:outline-none"
                        >
                            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>
                    {/* Login button */}
                    <a href="https://discord.com/login">
                        <div className="hidden md:block">
                            <button className="bg-[#499bae] h-12 w-32 rounded-md">Get Started</button>
                        </div>
                    </a>
                </div>
                <ul
                    className={`md:flex md:flex-row text-xl md:items-center uppercase md:justify-center md:space-x-4 text-white gap-5 ${open ? "block" : "hidden"
                        }`}
                >
                    {navLinks}
                </ul>
                {/* Login button for mobile */}
                <a href="https://discord.com/login">
                    <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#499bae] flex justify-center h-12 w-32 rounded-md`}>
                        <button className="">Get Started</button>
                    </div>
                </a>
            </nav>
            <div className="divider divider-accent"></div>
        </div>
    );
};

export default Header;







