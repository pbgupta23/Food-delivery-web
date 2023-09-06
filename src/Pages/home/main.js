import React, { useState } from 'react'
import Delivery from '../../Components/delivery/delivery'
import DiningOut from '../../Components/diningOut/diningOut'
import { Footer } from '../../Components/footer/footer'
import Header from '../../Components/header/header'
import NightLife from '../../Components/nightlife/nightlife'
import { TabOptions } from '../../Components/options/tabOptions'

export const Main = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>

        {
            getCurrentScreen(activeTab)
        }

        <Footer/>
    </div>
  )
}


const getCurrentScreen = (activeTab) => {
    switch(activeTab) {
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <NightLife/>
        default:
            return <Delivery/>
    }
} 