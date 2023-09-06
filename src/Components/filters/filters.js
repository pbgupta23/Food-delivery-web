import React from 'react'
import FilterItems from './filterItems/filterItems';
import './filters.css';

const Filters = ({filterList}) => {
  return (
    <div className='filters'>
        {
            filterList && filterList.map((filter) => {
                return (
                    <div>
                        <FilterItems className='filter-items' filter={filter} key={filter.id}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Filters