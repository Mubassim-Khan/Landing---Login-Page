import React from 'react'
import Hero from './Hero'
import Services from './Services'

export default function LandingPage() {
    return (
        <>
        {/* Rendering Navbar in App.js since it will be same through out app */}
            <Hero />
            <Services />
        </>
    )
}
