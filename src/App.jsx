
import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
import VideoPayler from "./Components/VideoPlayer/VideoPayler";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title  subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='Campus Photos' />
        <Testimonial />  
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPayler playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
