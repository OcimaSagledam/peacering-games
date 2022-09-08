import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cartSlice'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function StoreItem({ id, url, name, price, short_description, amount }) {
    const dispatch = useDispatch()

    return <div className="flex flex-col lg:flex-row lg:space-x-6 mb-8 lg:mb-2 h-fit lg:h-56">
        <img src={url} alt="" width="224" className="mx-auto w-[330px] p-1 m-1 border border-black" />
        <div className="border border-black p-2 w-full">
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
        <div className="h-full flex w-40 flex-col space-y-2 items-end">
            <button onClick={() => dispatch(addToCart({ id, url, name, price, short_description, amount: 1 }))} className="flex items-center justify-center border h-1/3 w-full border-black hover:bg-[#FF6161]">
                <ChevronUpIcon className="w-8 h-8" />
            </button>
            <div className="flex items-center justify-center border h-1/3 w-full text-xl border-black">
                <span>
                    {amount}
                </span>
            </div>
            <button onClick={() => dispatch(removeFromCart({ id, url, name, price, short_description, amount: 1 }))} className="flex items-center justify-center border h-1/3 w-full border-black hover:bg-[#FF6161]">
                <ChevronDownIcon className="w-8 h-8" />
            </button>
        </div>
    </div>
}