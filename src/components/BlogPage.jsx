import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import BlogArticle from "./BlogArticle"
import LatestBlog from "./LatestBlog"
import { useMediaQuery } from 'react-responsive'
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";


export default function BlogPage() {
    const [searchValue, setSearchValue] = useState("")
    const [items, setItems] = useState([])
    const [latestItem, setLatestItems] = useState([])


    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const debouncedSearchValue = useDebounce(searchValue, 500);

    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('http://localhost:4000/article');
            setItems(data)
        }

        const getLatestItems = async () => {
            const { data } = await axios.get('http://localhost:4000/article/6314ad2cbe8b64f5f06fca78');
            setLatestItems(data)
        }

        getLatestItems()
        if (!debouncedSearchValue) {
            getItems()
        }
    }, [debouncedSearchValue])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`http://localhost:4000/article/search/${debouncedSearchValue}`);
            setItems(data)
        }

        if (debouncedSearchValue) {
            search()
        }
    }, [debouncedSearchValue])

    return <PageWrapper>
        <div className="h-full overflow-auto relative">
            <div className="absolute left-0 top-0 featured h-16 text-3xl w-fit px-2 leading-[4rem]">{isTablet ? "FEATURED" : "FEATURED BLOG"}</div>
            <div className="h-full xl:h-1/2 border-b-4 border-black flex items-center justify-center">
                {latestItem && <LatestBlog id={latestItem._id} url={latestItem.url} title={latestItem.title} description={latestItem.short_description}></LatestBlog>}
            </div>
            <div className="h-[90%] mx-auto px-4 xl:px-20">
                <div className="flex items-center w-full my-4 px-1">
                    <input className="border border-black h-14 w-full px-2" placeholder="Search..." type="text" value={searchValue} onChange={handleChange} />
                </div>

                <div className="h-full lg:h-full p-1 grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {!Array.isArray(items) ?
                        <span>Loading....</span>
                        :
                        items.map((item, index) =>
                            <BlogArticle key={index} id={item._id} url={item.url} title={item.title} date={item.date} description={item.short_description} />
                        )}
                </div>
            </div>
        </div>
    </PageWrapper>
}
