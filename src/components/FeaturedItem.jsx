import { useNavigate } from "react-router-dom";

export default function FeaturedItem({ id, url, name, price }) {
    const navigate = useNavigate()

    return <div onClick={() => navigate(`/store/${id}`)} className="w-fit transition hover:scale-105 hover:cursor-pointer">
        <div className="w-fit p-1 border border-black">
            <img src={url} width="330" height="213" alt="" />
        </div>
        <div className="flex justify-between">
            <span>{name}</span>
            <span>{price} €</span>
        </div>
    </div>
}