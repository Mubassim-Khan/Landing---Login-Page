import React from 'react'
import Services from './Services'
import Carousel from './Carousel'
import Conetent from './Content'

export default function LandingPage() {
    return (
        <>
            {/* Rendering Navbar in App.js since it will be same through out app */}
            <Carousel/>
            <Conetent/>
            <Services />
        </>
    )
}
