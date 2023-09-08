import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade my-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active" style={{ maxHeight: "550px" }}>
                        <img src="https://www.connect.net.pk/assets/application/public/images/slider/img-slider-techonology-mini.webp" className="d-block w-100" alt="testing img 1" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-xs-9 col-md-7 col-lg-6">
                                        <h2 className="slide-title">Next Generation Technology</h2>
                                        <p className='slide-desc'>We utilize the latest technology and tools to gain more superiority and effectiveness. Our approach to technology allows us to provide you with complete and reliable solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "550px" }}>
                        <img src="https://www.connect.net.pk/assets/application/public/images/slider/img-slider-infrastructure-mini.webp" className="d-block w-100" alt="testing img 2" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-xs-9 col-md-7 col-lg-6">
                                        <h2 className="slide-title">Most Reliable Infrastructure</h2>
                                        <p className='slide-desc'>We have develop our infrastructure with state of the art hardware and equipments that results in highly efficient and reliable flow of our services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "550px" }}>
                        <img src="https://www.connect.net.pk/assets/application/public/images/slider/img-slider-speed-mini.webp" className="d-block w-100" alt="testing img 3" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-xs-9 col-md-7 col-lg-6">
                                        <h2 className="slide-title">High Speed Connectivity</h2>
                                        <p className='slide-desc'>We deliver the best, fastest and most reliable internet service at all time and you can choose from wide range of available speeds. Fulfill all your online needs for Household, Corporate and Enterprise customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "550px" }}>
                        <img src="https://www.connect.net.pk/assets/application/public/images/slider/img-slider-hardwork-mini.webp" className="d-block w-100" alt="testing img 4" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-xs-9 col-md-7 col-lg-6">
                                        <h2 className="slide-title">Hard Working Team</h2>
                                        <p className='slide-desc'>We are passionate people with precise domain knowledge, but most of all we are one unit, one team and one family who works together to listen, support and provide solutions to your problems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
