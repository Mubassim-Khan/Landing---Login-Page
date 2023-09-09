import React, { useEffect } from 'react'

export default function Contact(props) {

    const updateProgress = () => {
        props.setProgress(100);
        document.title = "DotCom | Contact Us";
    }

    useEffect(() => {
        updateProgress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="page-heading page-heading--contact text-center text--black">
                <h1 className="page-heading-title text--orange">Contact Us</h1>
                <p className="page-heading-text">If you have any questions about our services, packages, billing etc? <br />We would like to hear from you.</p>
                {/* Card */}
                <div className="container text-center" style={{ color: "white" }}>
                    <div className="card border-light text-bg-dark mb-3 mt-5" style={{ borderRadius: "30px" }}>
                        <div className="card-body">
                            <div className="container pt-1">
                                <section className="mb-2">
                                    {/* Facebook */}
                                    <a
                                        className="btn btn-link btn-floating btn-lg text-light m-1"
                                        href="https://www.facebook.com/mubassimahmed.khan.7/"
                                        role="button"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Facebook"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fab fa-facebook-f"></i
                                    ></a>
                                    {/* Google */}
                                    <a
                                        className="btn btn-link btn-floating btn-lg text-light m-1"
                                        href="mailto:mubassimkhan@gmail.com"
                                        role="button"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Google Mail"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fab fa-google"></i
                                    ></a>
                                    {/* Instagram */}
                                    <a
                                        className="btn btn-link btn-floating btn-lg text-light m-1"
                                        href="https://www.instagram.com/mubassimkhan_08/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                        role="button"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Instagram"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fab fa-instagram"></i
                                    ></a>
                                    {/* LinkedIn */}
                                    <a
                                        className="btn btn-link btn-floating btn-lg text-light m-1"
                                        href="https://www.linkedin.com/in/mubassim-ahmed-khan/"
                                        role="button"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="LinkedIn"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fab fa-linkedin"></i
                                    ></a>
                                    {/* Github */}
                                    <a
                                        className="btn btn-link btn-floating btn-lg text-light m-1"
                                        href="https://www.github.com/Mubassim-Khan"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        title="Github"
                                        role="button"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fab fa-github"></i
                                    ></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="page-heading-text-below">We value your feedback and are committed to providing you with the best possible service on DotCom Communications. If you have any suggestions on how we can improve our website or services, please let us know. Our team is always looking for ways to enhance the customer experience on DotCom Communications and we appreciate any feedback you can provide.<br />Thank you for choosing DotCom Communications. We look forward to hearing from you!</p>
            </div>
        </>
    )
}