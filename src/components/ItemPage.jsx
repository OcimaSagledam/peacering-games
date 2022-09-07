import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ItemPage() {
    const [item, setItem] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getItem = async () => {
                const { data } = await axios.get(`http://localhost:4000/shop/${id}`);
                setItem(data)
            }
    
            getItem()
        }
    }, [id])

    return <PageWrapper>
         {item.name}
    </PageWrapper>
}
