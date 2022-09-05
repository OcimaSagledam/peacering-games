import React from 'react';
import { useState, useEffect } from "react"
import PageWrapper from "./PageWrapper"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useMediaQuery } from 'react-responsive'
import axios from "axios";

import FeaturedItem from './FeaturedItem';
import LatestItem from './LatestItem';

export default function HomePage() {
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    const [items, setItems] = useState([])
    const [latestItem, setLatestItems] = useState(null)

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get('http://localhost:4000/shop');
            setItems(data)
        }
        const getLatestItems = async () => {
            const { data } = await axios.get('http://localhost:4000/shop/6316388469f00bc32efa7971');
            setLatestItems(data)
        }

        getItems()
        getLatestItems()
    }, [])

    return <PageWrapper>
        <div className="h-full overflow-auto">
            <div className="h-full xl:h-2/3 border-b-4 border-black flex items-center justify-center">
                {latestItem && <LatestItem urlHP={latestItem.urlHP} name={latestItem.name} description={latestItem.short_description}></LatestItem>}
            </div>
            <div className="h-1/2 mx-auto px-4 xl:px-40 relative">
                <div className="absolute -left-4 xl:-left-40 featured h-16 text-3xl w-fit px-2 leading-[4rem]">{isTablet ? "FEATURED" : "FEATURED PRODUCTS"}</div>
                <CarouselProvider
                    className='h-full xl:h-40'
                    naturalSlideWidth={isTablet ? 200 : 330}
                    naturalSlideHeight={250}
                    visibleSlides={isTablet ? 1 : 3}
                    totalSlides={12}
                    isPlaying
                    infinite
                >
                    <Slider>

                        {!Array.isArray(items) ?
                            <span>Loading....</span>
                            :
                            items.map((item, index) =>
                                <Slide innerClassName="flex items-center justify-center" index={index}>
                                    <FeaturedItem url={item.url} name={item.name} price={Number(item.price).toFixed(2)} />
                                </Slide>
                        )}
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    </PageWrapper>
}
