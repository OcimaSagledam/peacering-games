import { useNavigate } from "react-router-dom";

export default function BlogArticle({ id, url, title, date, description }) {
    const navigate = useNavigate()

    return <div onClick={() => navigate(`/blog/${id}`)} className="flex flex-col items-center justify-center h-[600px] max-w-56 transition hover:scale-105 hover:cursor-pointer">
        <img src={url} alt="" className="w-[330px] h-[213px] p-1 border border-black mb-2" />

        <div className="border border-black w-[330px] transition hover:bg-[#FF6161]">
            <div className="p-2">
                <p className="h-[60px]">
                    <span className="font-bold">{title}</span>
                </p>
                <p className="h-[200px] overflow-y-auto">
                    {description}
                </p>
            </div>
            <p className="border-t border-black p-2">
                <span className="text-gray-500">{date}</span>
            </p>
        </div>
    </div>
}