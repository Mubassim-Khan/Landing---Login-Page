import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <header style={{paddingTop: "0px"}}>
        {/* <div className="sub-header d-none d-md-block">
		<div className="container">
			<div className="row">
				<div className="col-xs-6 col-sm-5 col-custom">
					<div className="logo-brand">
						<img src="https://www.connect.net.pk/assets/application/logo/connect-logo-original.png" className="img-responsive" alt="Connect Communications" title="Connect Communications"/>
					</div>
				</div>
				<div className="col-xs-6 col-sm-7 col-custom">
					<div className="social-links-wrapper">
						<p className="contact">
							<span><em>24/7 Support:</em><strong className="contact-icon contact-icon--phone contact-icon--orange"><Link to="tel:+9221-111-000-638" title="contact">+9221-111-000-638</Link></strong></span>
							<span className="separator hidden-xs">|</span>
							<span className="contact-icon contact-icon--email contact-icon--silver">
								<Link className="emailaddress" to="mailto:support[AT]connect[DOT]net[DOT]pk" title="contact">Email at Support</Link>
							</span>
						</p>
						<div className="social-links">
							<Link className="social-links__facebook" to="https://www.facebook.com/ConnectCommunications/" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
							<Link className="social-links__linkedin" to="https://www.linkedin.com/company/connect-communications-pvt-ltd" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
        <nav className="navbar navbar-expand-lg bg-light border-bottom border-body fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Website</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link className="btn btn-outline-success mx-2" type="button" to="/login">Log In</Link>
                        <Link className="btn btn-success mx-2" type="button" to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
        </header>

        </>
    )
}
