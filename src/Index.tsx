import Services from "./Services";
import Project from "./Project";
import About from "./About";
import CustomCarousel from "./CustomCarousel";
import Blog from "./Blog";
import Contect from "./Contect";
import Home from "./Home";

const Index = () => {
  return (
    <div>
      <Home id="home"/>
      <Services id="services" />
      <Project id="project" />
      <About id="about" />
      <CustomCarousel id="CustomCarousel" />
      <Blog id="blog" />
      <Contect id="contact" />
    </div>
  );
};

export default Index;
