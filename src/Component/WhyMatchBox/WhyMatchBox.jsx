import { RiTaskFill } from "react-icons/ri";
import img from "../../assets/man.webp"

const WhyMatchBox = () => {
    return (
        <div className="mt-40">

            <div className="text-center text-white">
                <h1 className="text-4xl mt-12">Elevate your auditory journey
                    <br />
                    to unparalleled heights !</h1>
                <h1 className="mt-8 text-xl">Immerse yourself in the world of music on Discord with your friends! Enhance the
                    <br />
                    listening experience with audio filters, personalized playlists, autoplay, 24/7 support,
                    <br />
                    and a plethora of other features! </h1>
                <a href="https://discord.com/login"><button className="bg-[#499bae] text-black text-xl mt-6  focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 w-80 rounded-lg transition-all duration-300 ">Add MatchBox to Your Server!</button></a>
            </div>



            <div className="text-center text-white mt-36">
                <h1 className="text-4xl "> Why MatchBox? </h1>
                <h1 className="mt-4 text-xl"> MatchBox is one of the best discord music bot that supports Youtube, spotify, deezer, soundcloud
                    <br />
                    and many more!</h1>
                <h1 className="text-xl">You can also create your own custom playlist with MatchBox!</h1>
            </div>



            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="flex  rounded-lg mt-44">
                <div className=" text-white py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:py-12 xl:px-20">
                    <h1 className="text-5xl">Curious About Even More Features ?</h1>
                    <p className="text-xl mt-8">Unlock a world of premium features and elevate your Discord
                        <br /> experience by subscribing to one of our premium plans. Immerse
                        <br /> yourself in an enhanced and enriched journey with exclusive
                        <br /> functionalities!</p>
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <div className="flex items-center text-center gap-2 hover:text-white bg-gray-400 h-16 w-64 rounded-full font-semibold">
                            <RiTaskFill className="rounded-full lg:ml-4 text-black hover:bg-white  hover:text-white " />
                            <h1 className=" bg-gray-400 rounded-full text-black uppercase hover:text-white">24/7 support & Help</h1>
                        </div>

                        <div className="flex items-center text-center gap-2 hover:text-white bg-gray-400 h-16 w-64 rounded-full font-semibold">
                            <RiTaskFill className="rounded-full lg:ml-4 text-black hover:bg-white  hover:text-white " />
                            <h1 className=" bg-gray-400 rounded-full text-black uppercase hover:text-white">Global volume control</h1>
                        </div>
                        <div className="flex items-center text-center gap-2 hover:text-white bg-gray-400 h-16 w-64 rounded-full font-semibold">
                            <RiTaskFill className="rounded-full lg:ml-4 text-black hover:bg-white  hover:text-white " />
                            <h1 className=" bg-gray-400 rounded-full text-black uppercase hover:text-white"> Unlimited spotify links</h1>
                        </div>
                        <div className="flex items-center text-center gap-2 hover:text-white bg-gray-400 h-16 w-64 rounded-full font-semibold">
                            <RiTaskFill className="rounded-full lg:ml-4 text-black hover:bg-white  hover:text-white " />
                            <h1 className=" bg-gray-400 rounded-full text-black uppercase hover:text-white"> Unlimited Youtube Links</h1>
                        </div>
                    </div>
                    <button className="bg-[#499bae] text-black text-xl mt-8  focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 w-60 rounded-lg transition-all duration-300 ">Check Out Premium</button>
                </div>
                <div>
                    <img className="h-[530px] w-[550px] mr-[350px]" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyMatchBox;