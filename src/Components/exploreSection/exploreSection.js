import React from 'react'
import ExploreCard from './exploreCard/exploreCard';
import "./exploreSection.css";

const ExploreSection = ({List, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
            {
                List.map((restaurant) => {
                    return <ExploreCard restaurant={restaurant}/>
                })
            }
        </div>
    </div>
  )
}

export default ExploreSection