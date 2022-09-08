import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ItemPage() {
    const [item, setItem] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getItem = async () => {
                const { data } = await axios.get(`http://localhost:4000/shop/${id}`);
                setItem(data)
            }
    
            getItem()
        }
    }, [id])

    return <PageWrapper>
        <div className="overflow-auto h-full p-4 lg:p-20">
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-8 lg:mb-2 h-fit lg:h-56">
                <img src={item.url} alt="" width="224" className="mx-auto w-[400px] h-auto p-1 m-1 border border-black" />
                <div className="border border-black p-2 w-full">
                    <p>
                        <span className="font-bold">Product Name:</span> {item.name}
                    </p>
                    <p>
                        <span className="font-bold">Price:</span> {item.price} €
                    </p>
                    <p className="">
                        <span className="font-bold">Short Description:</span> {item.short_description}
                    </p>
                </div>
            </div>
        </div>
    </PageWrapper>
}
