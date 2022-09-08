import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ItemPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
            <button
                onClick={() => navigate(`/store`)}
                className="flex items-center justify-center w-full lg:w-48 mt-2 lg:mt-0 h-10 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">
                <ChevronLeftIcon className="w-5 h-5 mr-4" /> BACK TO STORE
            </button>
            <div className="flex flex-col items-center justify-center lg:space-x-6 mb-8 lg:mb-2 space-y-6">
                <img src={item.url} alt="" width="224" className="w-[400px] h-auto p-1 m-1 border border-black" />
                <div className="border border-black p-2 w-full max-w-lg text-center">
                    <p className="font-bold text-xl mb-2">
                        {item.name}
                    </p>
                    <p>
                        <span className="font-bold">Price:</span> {item.price} €
                    </p>
                    <p className="">
                        <span className="font-bold">Short Description:</span> {item.short_description}
                    </p>
                </div>
                <div className="h-full flex items-end">
                    <button
                        onClick={(e) => dispatch(addToCart({ ...item, amount: 1 }))}
                        className="w-full lg:w-48 mt-2 lg:mt-0 h-12 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    </PageWrapper>
}
