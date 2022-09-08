import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useParams } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";


export default function ArticlePage() {
    const navigate = useNavigate()
    const [item, setItem] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getItem = async () => {
                const { data } = await axios.get(`http://localhost:4000/article/${id}`);
                setItem(data)
            }

            getItem()
        }
    }, [id])

    return <PageWrapper>
        <div className="overflow-auto h-full p-4 lg:p-20">
            <button
                onClick={() => navigate(`/blog`)}
                className="flex items-center justify-center w-full lg:w-48 mt-2 lg:mt-0 h-10 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">
                <ChevronLeftIcon className="w-5 h-5 mr-4" /> BACK TO BLOG
            </button>
            <div className="flex flex-col items-center justify-center lg:space-x-6 mb-8 lg:mb-2 space-y-6">
                <img src={item.url} alt="" width="224" className="w-[400px] h-auto p-1 m-1 border border-black" />
                <div className="border border-black p-2 w-full max-w-2xl text-center">
                    <p className="font-bold text-xl mb-2">
                        {item.title}
                    </p>
                    <p className="">
                        {item.article}
                    </p>
                </div>
            </div>
        </div>
    </PageWrapper>
}
