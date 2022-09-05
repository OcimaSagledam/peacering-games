export default function LatestItem({ urlHP, name, description}) {

    return <div>
    <div className="flex flex-col xl:flex-row h-full px-4 xl:px-80 items-center">         
        <img src={urlHP} className="w-[305px] h-[396px] m-1 p-1 border border-black" alt="" />
        <div className="p-2 mx-auto h-full flex flex-col">
            <h1 className="text-l xl:text-3xl font-bold text-center mb-2 xl:mb-8">{name}</h1>
            <p className="mx-auto text-xs sm:text-base xl:text-lg">{description}</p>
            <div className="h-full flex items-center xl:items-end justify-center">
                <button className='w-fit p-4 mt-2 text-3xl rounded-full transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105'>PRE-ORDER NOW</button>
            </div>
        </div>
    </div>  
</div>
}