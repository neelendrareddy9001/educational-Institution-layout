
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title  subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='Campus Photos' />
        <Testimonial />  
      </div>
    </div>
  );
};

export default App;
