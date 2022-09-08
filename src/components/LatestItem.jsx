import { useNavigate } from "react-router-dom";

export default function LatestItem({ id, urlHP, name, description }) {
    const navigate = useNavigate()

    return <div>
        <div className="flex flex-col xl:flex-row h-full px-4 xl:px-80 items-center">
            <img onClick={() => navigate(`/store/${id}`)} src={urlHP} className="w-[240px] h-auto 2xl:w-[305px] 2xl:h-[396px] m-1 p-1 border border-black transition hover:scale-105 hover:cursor-pointer" alt="" />
            <div className="p-2 mx-auto h-full flex flex-col">
                <h1 className="text-l 2xl:text-3xl font-bold text-center mb-2 xl:mb-8">{name}</h1>
                <p className="mx-auto text-xs md:text-base 2xl:text-lg">{description}</p>
                <div className="h-full flex items-center xl:items-end justify-center">
                    <button onClick={() => navigate(`/store/${id}`)} className='w-fit p-4 mt-2 text-3xl rounded-full transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105'>PRE-ORDER NOW</button>
                </div>
            </div>
        </div>
    </div>
}