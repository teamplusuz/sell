import React from 'react'
import { Favourites, Header, Journal, OurBrends, Pick, Sales } from '../Components/Home/Home'

const Home = () => {
    return (
        <div>
            <Header />
            <Pick />
            <Favourites />
            <Journal />
            <Sales />
            <OurBrends />
        </div>
    )
}

export default Home
