import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import SupportArticle from "./SupportArticle"
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

export default function SupportPage() {
    const [searchValue, setSearchValue] = useState("")
    const [faq, setFAQ] = useState([])

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    const debouncedSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        const getFAQ = async () => {
            const { data } = await axios.get('http://localhost:4000/FAQ');
            setFAQ(data)
        }

        if (!debouncedSearchValue) {
            getFAQ()
        }
    }, [debouncedSearchValue])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`http://localhost:4000/FAQ/search/${debouncedSearchValue}`);
            setFAQ(data)
        }

        if (debouncedSearchValue) {
            search()
        }
    }, [debouncedSearchValue])
    

    return <PageWrapper>
        <div className="h-full overflow-auto">
            <div className="h-fit border-b-4 border-black flex items-center justify-center">
                <div className="text-xl flex flex-col items-center my-4">
                    <span className="font-bold">Get in Touch</span>
                    <p className="border border-black p-1 mt-1">
                        <span className="font-bold">E-mail:</span> support@peacering_games.com
                    </p>
                </div>
            </div>
            <div className="h-1/2 mx-auto px-4 xl:px-40 relative">
                <div className="absolute -left-4 xl:-left-40 featured h-16 text-3xl w-fit px-4 leading-[4rem]">FAQ</div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full my-4 px-1 space-x-0 space-y-4 md:space-x-4 md:space-y-0">
                    <div className="border border-black p-1 w-full text-center transition hover:bg-[#FF6161] cursor-pointer">
                        <p>
                            <h1 className="text-lg">General</h1>
                            <p>This section contains some of our most frequently asked questions that we receive daily!</p>
                        </p>
                    </div>
                    <div className="border border-black p-1 w-full text-center transition hover:bg-[#FF6161] cursor-pointer">
                        <p>
                            <h1 className="text-lg">Shipping and Fulfilment</h1>
                            <p>Got a question relating to Shipping, Tracking and Product Fulfilment? Check out some of our most asked questions here!</p>
                        </p>
                    </div>
                    <div className="border border-black p-1 w-full text-center transition hover:bg-[#FF6161] cursor-pointer">
                        <p>
                            <h1 className="text-lg">Publishing Projects</h1>
                            <p>Your “need to knows” on all the questions relating to making and publicizing your project with us!</p>
                        </p>
                    </div>
                </div>

                <div className="flex items-center w-full mb-4 px-1">
                    <input className="border border-black h-14 w-full px-2" placeholder="Search..." type="text" value={searchValue} onChange={handleChange} />
                </div>

                <div className="w-full text-center mt-16 mb-2">
                    <h1 className="text-lg font-bold">Recently Asked Questions</h1>
                </div>

                <div className="h-full overflow-auto p-1">
                    {!Array.isArray(faq) ?
                        <span>Loading....</span>
                        :
                        faq.map((item, index) =>
                            <SupportArticle key={index} title={item.title} question={item.question} date={item.date} />
                    )}
                </div>
            </div>
        </div>
    </PageWrapper>
}
