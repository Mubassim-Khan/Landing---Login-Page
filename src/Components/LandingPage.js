import React, { useEffect } from 'react'
import Services from './Services'
import Carousel from './Carousel'
import Conetent from './Content'

export default function LandingPage(props) {
    const updateProgress = () => {
        props.setProgress(100);
        document.title = "DotCom | Home";
    }

    useEffect(() => {
        updateProgress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {/* Rendering Navbar in App.js since it will be same through out app */}
            <Carousel />
            <Conetent />
            <Services />
        </>
    )
}
