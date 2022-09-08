import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ArticlePage() {
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
        <div className="flex flex-col items-center justify-center h-[600px] max-w-56">
        <img src={item.url} alt="" className="w-[330px] h-[213px] p-1 border border-black mb-2" />

        <div className="border border-black w-[330px]">
            <div className="p-2">
                <p className="h-[60px]">
                    <span className="font-bold">{item.title}</span>
                </p>
                <p className="h-[200px] overflow-y-auto">
                    {item.article}
                </p>
            </div>
        </div>
    </div>
    </PageWrapper>
}
