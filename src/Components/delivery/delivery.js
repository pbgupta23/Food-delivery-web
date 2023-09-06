import React from 'react'
import { restaurants } from '../../Data/restaurants';
import ExploreSection from '../exploreSection/exploreSection';
import Filters from '../filters/filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections/deliveryCollections';
import TopBrands from './topBrands/topBrands';

const deliveryFilters = [
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

const restaurantlist = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection List={restaurantlist} collectionName='Order food online in Jatragachi, Rajarhat'/>
    </div>
  )
}

export default Delivery
