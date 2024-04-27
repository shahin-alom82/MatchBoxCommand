import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAllData from "../../useAllData/useAllData";
import { FaDiamond, FaFilter, FaMusic } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaHome, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const Commands = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [data] = useAllData();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/commands.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchValue = form.search.value.toLowerCase();

        const filteredCards = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue)
        );

        setCards(filteredCards);
    };

    return (
        <div>
            <div className="text-white space-y-3 w-full">
                <h1 className="text-3xl font-semibold">MatchBox Commands</h1>
                <p>
                    Embark on a melodic adventure with MatchBox, your ultimate guide to an
                    immersive and harmonious musical journey.
                </p>
            </div>

            <div className="text-white gap-4 mt-20">
                <div className="border-none">
                    <Tabs
                        className={"border-none"}
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                    >
                        <TabList>
                            <div className="flex items-center">
                                <TbWorld className="border-none" />
                                <Tab>All</Tab>
                                <FaMusic />
                                <Tab>Music</Tab>
                                <FaFilter />
                                <Tab>Filter</Tab>
                                <FaHome />
                                <Tab>Utility</Tab>
                                <TbWorld />
                                <Tab>Admin</Tab>
                                <TbWorld />
                                <Tab>Premium</Tab>
                                <TbWorld />
                                <Tab>Playlist</Tab>
                                <div>
                                    <form onSubmit={handleSearch}>
                                        <label className="input ml-4 mb-1 border-gray-500 bg-[#272a2c] border border-transparent hover:border-[#499bae] h-10 rounded-full flex items-center gap-2">
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Search..."
                                                className="grow bg-[#272a2c]"
                                            />
                                            <input
                                                className="text-gray-800"
                                                type="submit"
                                                value="submit"
                                            />
                                            <button
                                                type="submit"
                                                className="  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <FaSearch></FaSearch>
                                            </button>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </TabList>

                        {/* Render TabPanels */}
                        {[
                            "All",
                            "Music",
                            "Filter",
                            "Utility",
                            "Admin",
                            "Premium",
                            "Playlist",
                        ].map((category, index) => (
                            <TabPanel key={index}>
                                {cards
                                    .filter(
                                        (item) =>
                                            category === "All" ||
                                            item.category === category.toLowerCase()
                                    )
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className="mt-5 p-8 border border-transparent hover:border-[#499bae]"
                                        >
                                            <div className="flex items-center">
                                                <FaDiamond className="w-20 h-8 text-gray-600" />
                                                <div className="space-y-2">
                                                    <h1 className="text-2xl">{item.name}</h1>
                                                    <p className="text-[17px]">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Commands;