export default function FeaturedItem({ url, name, price}) {

    return <div className="w-fit">
        <div className="w-fit p-1 border border-black">
            <img src={url} width="330" height="213" alt="" />
        </div>
        <div className="flex justify-between">
            <span>{name}</span>
            <span>{price} €</span>
        </div>
    </div>
}