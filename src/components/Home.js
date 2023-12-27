import React from 'react';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <div className="slide">
          <span className="one">Hello</span>
          <span className="two">I'm</span>
        </div>
        <h1>Vania</h1>
        <h3>a student <span>at IGDTUW.</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit iusto rem delectus . </p>
        <div className="button">
          <a href="#" className="btn">About Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;