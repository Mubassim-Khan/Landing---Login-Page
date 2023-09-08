import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="page-heading page-heading--contact text-center text--black">
                <h1 className="page-heading-title text--orange">Contact Us</h1>
                <p className="page-heading-text">If you have any questions about our services, packages, billing etc? <br/>We would like to hear from you.</p>
            {/* Card */}
            <div className="container text-center" style={{ color: "white" }}>
                <div className="card border-light text-bg-dark mb-3 mt-5" style={{borderRadius: "30px"}}>
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
            </div>

        </>
    )
}