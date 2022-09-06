export default function LatestBlog({ url, title, description }) {

    return <div>
        <div className="flex flex-col xl:flex-row h-full mx-4 xl:mx-80 items-center">
            <img src={url} className="w-[240px] h-auto 2xl:w-[330px] 2xl:h-[213px] m-1 p-1 border border-black" alt="" />
            <div className="px-2 mx-auto flex flex-col h-full">
                <h1 className="text-l 2xl:text-3xl font-bold text-center mb-2 2xl:mb-8">{title}.</h1>
                <p className="mx-auto text-xs md:text-base 2xl:text-lg">{description}</p>
                <div className="h-full flex items-center xl:items-end justify-center mb-4">
                    <button className='w-fit p-4 mt-2 text-l 2xl:text-3xl transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105'>READ MORE</button>
                </div>
            </div>
        </div>
</div>
}