import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Contact <span>Me!</span></h2>
        <h4>If you have any project in your mind.</h4>
        <p>I'm a Student learning web development - learning bold & brave interface design.</p>
        <div className="list">
          <li><a href="mailto:vania029btdmam22@igdtuw.ac.in">vania029btdmam22@igdtuw.ac.in</a></li>
        </div>
        <div className="contact-icons">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-twitter' ></i></a>
          <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
          <a href="#"><i className='bx bxl-youtube' ></i></a>
        </div>
      </div>
      <div class="contact-form">
		<form action="">
			<input type="name" placeholder="Your Name " required/>
			<input type="email" placeholder="Your Email " required/>
			<input type="number" placeholder="your Mobile Number" />
			<textarea name="" id="" cols="35" rows="10" placeholder="How Can I Help You " required></textarea>
			<input type="submit" value="Send Message" class="submit" required/>
		</form>
	</div>
    </section>
  );
}

export default Contact;