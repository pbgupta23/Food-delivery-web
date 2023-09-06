import React from 'react'
import Collections from '../collections/collections';
import ExploreSection from '../exploreSection/exploreSection';
import Filters from '../filters/filters';
import { diningOut } from '../../Data/diningOut';
import './diningOut.css';

const collectionList = [
  {
    id: 1,
    title: "Best of Kolkata",
    cover: "https://b.zmtcdn.com/data/collections/712ee166f48312fa572eac04f5b71d59_1615435760.jpg",
    places: "60 places"
  },
  {
    id: 2,
    title: "Brilliant Biryani",
    cover: "https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
    places: "30 places"
  },
  {
    id: 3,
    title: "Aromatic Coffee",
    cover: "https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg",
    places: "29 places"
  },
  {
    id: 4,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 5,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 6,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 7,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 8,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 9,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  },
  {
    id: 10,
    title: "Street Food",
    cover: "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    places: "24 places"
  }
];

const diningFliters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-caret-down absolute-center'></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 5.0+"
  },
  {
    id: 3,
    title: "Hygienic Foods"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon: <i className='fi fi-rr-caret-down absolute-center'></i>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Non-Veg"
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collections List={collectionList}/>
      <div className='max-width'>
        <Filters filterList={diningFliters}/> 
      </div>
      <ExploreSection List={diningOut} collectionName='Dining-Out Restaurants in Kolkata'/>
    </div>
  )
}

export default DiningOut