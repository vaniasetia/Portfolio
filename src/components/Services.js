import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
	<div class="main-text">
		<h2><span>My</span>Services</h2>
	</div>
	<div class="services-content">
		<div class="box">
			<div class="s-icons">
				<i class='bx bx-mobile-alt'></i>
			</div>
			<h3>Web Design</h3>
			<p>One Way to categories the activities is in terms of the professional's area of experience such as competitive analysis, corporate stragety.</p>
			<a href="#" class="btn">Read More</a>
		</div>

		<div class="box">
			<div class="s-icons">
				<i class='bx bx-code-alt'></i>
			</div>
			<h3>Creative Design</h3>
			<p>One Way to categories the activities is in terms of the professional's area of experience such as competitive analysis, corporate stragety.</p>
			<a href="#" class="btn">Read More</a>
		</div>

		<div class="box">
			<div class="s-icons">
				<i class='bx bx-edit-alt'></i>
			</div>
			<h3>Canva Design</h3>
			<p>One Way to categories the activities is in terms of the professional's area of experience such as competitive analysis, corporate stragety.</p>
			<a href="#" class="btn">Read More</a>
		</div>
	</div>
    </section>
  );
}

export default Services;