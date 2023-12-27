import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      	<div class="main-text">
		<h2><span>latest</span>Project</h2>
	</div>
	<div class="portfolio-content">
		<div class="row">
			<img src={project1} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>

		<div class="row">
			<img src={project2} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>

		<div class="row">
			<img src={project3} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>

		<div class="row">
			<img src={project4} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>

		<div class="row">
			<img src={project5} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>

		<div class="row">
			<img src={project6} />
			<div class="layer">
				<h5>Visual Design</h5>
				<p>Check out 10 best Design's updates for the top web design & development compaines.</p>
				<a href="#"> <i class='bx bx-link-external'></i></a>
			</div>
		</div>
	</div>
    </section>
  );
}



export default Portfolio;