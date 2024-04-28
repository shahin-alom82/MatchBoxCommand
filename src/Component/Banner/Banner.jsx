import { useEffect } from "react";
import img from "../../assets/matchbox.webp"
import AOS from "aos";
const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div>
            {/* style={{ backgroundImage: 'url(https://i.ibb.co/tLs5gkN/abstract-gradient-wave-particles-big-600nw-1930623710.webp)' }} */}
            {/* <div className="flex rounded-lg mt-20">
                <div className=" text-white py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:py-12 xl:px-20 mt-28">
                    <h1 className="text-4xl">We Care About Quality</h1>
                    <p className="text-6xl mt-8">MATCHBOX</p>
                    <p className="text-4xl mt-10">Your Ultimate Music Bot</p>
                    <div className="flex gap-4 mt-8">
                        <a href="https://discord.com/login"><button className="bg-[#499bae] text-black text-xl  focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 w-48 rounded-lg transition-all duration-300 ">Invite to Server</button></a>
                        <button className="bg-[#499bae] text-black text-xl  focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 w-32  rounded-lg  transition-all duration-300 ">Features</button>
                    </div>
                </div>
                <div>
                    <img className="h-[530px] w-[550px] lg:ml-[150px]" src={img} alt="" />
                </div>
            </div> */}

            <div  className="flex flex-col lg:flex-row rounded-lg mt-10 lg:mt-20 lg:ml-24">
                <div data-aos="fade-down-right"  className=" text-white py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-16  lg:px-20 xl:py-16 xl:px-24">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">We Care About Quality</h1>
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">MATCHBOX</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-6 sm:mt-8 md:mt-10 lg:mt-10 font-semibold">Your Ultimate Music Bot</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-8">
                        <a href="https://discord.com/login"><button className="bg-[#499bae] text-black text-lg sm:text-xl px-6 sm:px-8 h-12 sm:h-14 lg:w-52  rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ">Invite to Serber</button></a>
                        <button className="bg-[#499bae] text-black text-lg sm:text-xl px-4 sm:px-6 h-12 sm:h-14 lg:w-40 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-0">Features</button>
                    </div>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img data-aos="fade-down-left"  className="h-[300px] lg:h-[500px] w-[90%] lg:w-[550px]" src={img} alt="" />
                </div>
            </div>


        </div>


    );
};

export default Banner;