import React from 'react'

export default function About() {
  return (
	<section className="section-wrapper section-wrapper--gray section-about">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h1 className="section-heading">
						<span>About <strong>DotCom</strong></span>
					</h1>
					<div className="section-description">
						<p>DotCom Communications was established in 2005 and we are the largest Internet &amp; Data Service Provider in Karachi. We offer various services to the corporate and consumer sectors.</p>
						<p>DotCom Communications is not only a name or a company. It is a passion, a desire to grow, serve and excel. It's success story is carved by untiring hard work, dedication and adherence of its team members to its cause. For our clients DotCom Communications is a name which stands for its commitment, customer care, integrity, product knowledge, trouble free services and competitive prices.</p>
					</div>
				</div>
				<div className="col-md-6">
					<img src="https://www.connect.net.pk/assets/application/public/images/page/img-about.webp" className="img-fluid img-thumbnail" alt="About DotCom" title="About DotCom"/>
				</div>
			</div>
		</div>
	</section>
  )
}
