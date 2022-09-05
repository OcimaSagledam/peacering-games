import { useState, useEffect } from "react"
import StoreItem from "./StoreItem"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

export default function StorePage() {
    const [searchValue, setSearchValue] = useState("")
    const [items, setItems] = useState([])

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const debouncedSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('http://localhost:4000/shop');
            setItems(data)
        }

        if (!debouncedSearchValue) {
            getItems()
        }
    }, [debouncedSearchValue])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`http://localhost:4000/shop/search/${debouncedSearchValue}`);
            setItems(data)
        }

        if (debouncedSearchValue) {
            search()
        }
    }, [debouncedSearchValue])

    return <PageWrapper padding="p-4 lg:p-40">
        <div className="flex items-center w-full mb-4 px-1">
            <span className="border h-14 text-center leading-[3.5rem] w-[330px] hidden lg:block border-black bg-[#FF6161] mr-6">Shop By:</span>
            <input className="border border-black h-14 w-full lg:w-[calc(100%-586px)] px-2" placeholder="Search..." type="text" value={searchValue} onChange={handleChange} />
        </div>

        <div className="h-[90%] lg:h-full overflow-auto p-1">
            {!Array.isArray(items) ?
                <span>Loading....</span>
                :
                items.map((item, index) =>
                    <StoreItem key={index} url={item.url} name={item.name} price={Number(item.price).toFixed(2)} short_description={item.short_description} />
                )}
        </div>
    </PageWrapper>
}
