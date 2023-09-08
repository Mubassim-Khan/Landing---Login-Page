import React from 'react'

export default function Conetent() {
    return (
        <section className="section-fluid section-fluid--about row gx-0">
            <div className="col-xl-6 clearfix col-left bg--orange">
                <div className="col-left-content--6 col-bg-icon--mission text-justify">
                    <div className="section-title">
                        <h2 className="section-fluid-heading text--black">
                            <i className="fa fa-rocket" aria-hidden="true"></i> Our Mission</h2>
                    </div>
                    <ul className="list-mission">
                        <li>
                            <span>A market leader by providing quality and superior service to our customers, while learning from their feedback to set even higher standards for our services.</span>
                        </li>
                        <li>
                            <span>A company that continuously enhances its superior technological competence to provide innovative solutions to cater to customer needs.</span>
                        </li>
                        <li>
                            <span>A company that attracts and retains outstanding people by creating a culture that fosters openness and innovation, promotes individual growth, and rewards initiative and performance.</span>
                        </li>
                        <li>
                            <span>A company which combines its people, technology, management systems, and market opportunities to achieve profitable growth while providing fair returns to its shareholders.</span>
                        </li>
                        <li>
                            <span>A company that endeavors to set the highest standards in corporate ethics in serving the society.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-6 clearfix col-right bg--black">
                <div className="col-right-content--6 col-bg-icon--vision">
                    <div className="section-title">
                        <h2 className="section-fluid-heading text--orange"><i className="fa fa-eye" aria-hidden="true"></i> Our Vision</h2>
                    </div>
                    <p className="text--orange">Our vision is to be the premier provider of high bandwidth and data connectivity solutions for customers who desire a private, flexible and scalable transport infrastructure. Our goal is to continue to monetize our superior fiber assets by providing large bandwidth customers with customized solutions that are superior to the tariffed offering of our competitors. We will achieve this vision by following these guiding principles:</p>
                    <ul className="list-vision">
                        <li><span>Our people are our most important asset. We differentiate ourselves though our customer focused attention to detail and our ability to listen and act on customer requirements.</span></li>
                        <li><span>We will maintain the financial deal discipline that requires us to understand the deal metrics of every deal we enter.</span></li>
                        <li><span>We will grow and expand within our niche by taking advantage of the many opportunities that exist for providing customers with purpose built networks that meet their ever expanding connectivity needs.</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
