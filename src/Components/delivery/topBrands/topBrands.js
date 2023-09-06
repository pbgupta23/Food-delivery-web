import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import "./topBrands.css";

const topBrandsList = [
    {
        id: 1,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp"
    },
    {
        id: 2,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp"
    },
    {
        id: 3,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp"
    },
    {
        id: 4,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
    },
    {
        id: 5,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c014b23f65d4d62dae37d9849f423d77_1629439377.png?output-format=webp"
    },
    {
        id: 6,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b4867da1fbe2762909f94468ff21a6ec_1629439179.png?output-format=webp"
    }
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};


const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands Only For You</div>
        <Slider {... settings}>
            {
                topBrandsList.map((brand) => {
                    return (
                        <div className='top-brands-cover'>
                            <img src={brand.cover} className='top-brands-cover-image' alt={brand.time}/>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default TopBrands