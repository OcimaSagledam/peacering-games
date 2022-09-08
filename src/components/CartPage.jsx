import CartItem from "./CartItem"
import PageWrapper from "./PageWrapper"
import { useSelector } from 'react-redux'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const navigate = useNavigate()

    const totalPrice = cart.reduce((partialSum, a) => partialSum + Number(a.price) * a.amount, 0);

    return <PageWrapper>
        <div className="overflow-auto h-full p-4 lg:p-20">
            <button
                onClick={() => navigate(`/store`)}
                className="flex items-center justify-center w-full lg:w-48 mt-2 lg:mt-0 h-10 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">
                <ChevronLeftIcon className="w-5 h-5 mr-4" /> BACK TO STORE
            </button>
            <div className="h-full p-1 mb-16">
                {(cart.length === 0) ?
                    <div className="w-full text-center font-bold text-2xl">Your Cart is Empty</div>
                    :
                    cart.map((item, index) =>
                        <CartItem key={index} id={item.id} url={item.url} name={item.name} price={Number(item.price).toFixed(2)} short_description={item.short_description} amount={item.amount} />
                    )}
            </div>
            <div className="absolute text-2xl font-bold bottom-0 h-16 flex justify-between w-full max-w-xl px-8 left-1/2 -translate-x-1/2 items-center bg-neutral-900">
                <span className="text-white"> Total: {totalPrice.toFixed(2)} € </span>
                <button
                    className="flex items-center justify-center w-full lg:w-48 mt-2 lg:mt-0 h-10 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">
                    BUY NOW
                </button>
            </div>
        </div>
    </PageWrapper>
}
