import React from 'react'
import Collections from '../collections/collections';
import { nightlife } from '../../Data/nightlife';
import Filters from '../filters/filters';
import './nightlife.css';
import ExploreSection from '../exploreSection/exploreSection';

const nightFilters = [
  {
    id: 1,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 2,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 3,
    title: "Fliters",
    icon: <i class="fi fi-rs-filter"></i>,
  },
  {
    id: 4,
    title: "Fliters",
  },
  {
    id: 5,
    title: "Fliters",
  },
];

const collectionList = [
  {
    id: 1,
    title: "Where's The Party?",
    cover: "https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg",
    places: "27 places"
  },
  {
    id: 2,
    title: "Best Pizza Places",
    cover: "https://b.zmtcdn.com/data/collections/1dbac003c738cc2ed1da08938b00821d_1631868325.jpg",
    places: "11 places"
  },
  {
    id: 3,
    title: "South Indian Specials",
    cover: "https://b.zmtcdn.com/data/collections/252fc88e6ea0be1b18996236e6afca5a_1631871129.jpg",
    places: "26 places"
  },
  {
    id: 4,
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/bcfc1254994ef56dd65ee0807394b953_1633340036.jpg",
    places: "7 places"
  },
  {
    id: 5,
    title: "Chinese Food Fare",
    cover: "https://b.zmtcdn.com/data/collections/4c1d7b85429bdd7b72998f993588a250_1631880652.jpg",
    places: "27 places"
  },
  {
    id: 6,
    title: "Rooftops",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places: "29 places"
  },
  {
    id: 7,
    title: "Rooftops",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places: "29 places"
  },
  {
    id: 8,
    title: "Rooftops",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places: "29 places"
  },
  {
    id: 9,
    title: "Rooftops",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places: "29 places"
  },
  {
    id: 10,
    title: "Rooftops",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places: "29 places"
  }
];

const nightList = nightlife;

const NightLife = () => {
  return (
    <div>
      <Collections List={collectionList}/>
      <div className='max-width'>
        <Filters filterList={nightFilters}/>
      </div>
      <ExploreSection List={nightList} collectionName='Nightlife Restaurants in Kolkata'/>
    </div>
  )
}

export default NightLife