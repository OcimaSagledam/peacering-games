import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

export default function StoreItem({ id, url, name, price, short_description }) {
    const navigate = useNavigate()

    const cart = useSelector((state) => state)
    console.log(cart)
    const dispatch = useDispatch()

    return <div className="flex flex-col lg:flex-row lg:space-x-6 mb-8 lg:mb-2 h-fit lg:h-56">
        <img onClick={() => navigate(`/store/${id}`)}  src={url} alt="" width="224" className="mx-auto w-[330px] p-1 m-1 border border-black" />
        <div onClick={() => navigate(`/store/${id}`)} className="border border-black p-2 w-full transition hover:scale-105 hover:cursor-pointer">
            <p>
                <span className="font-bold">Product Name:</span> {name}
            </p>
            <p>
                <span className="font-bold">Price:</span> {price} €
            </p>
            <p className="hidden md:block">
                <span className="font-bold">Short Description:</span> {short_description}
            </p>
        </div>
        <div className="h-full flex items-end">
            <button onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                dispatch(addToCart({ id, url, name, price, short_description }))
            }} className="w-full lg:w-48 mt-2 lg:mt-0 h-12 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">ADD TO CART</button>
        </div>
    </div>
}