import "./App.css";
import About from "./component/about/About";
import Headers from "./component/header/Headers";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import Skills from "./component/skills/Skills";
import QualificationData from './component/qualificationData/QualificationData'
import Teatimonial from "./component/testimonial/Teatimonial";
import Contact from "./component/contact/Contact";
import Scrollup from "./component/scrollup/Scrollup";

function App() {
  return (
    <div className="App">
      <Headers />
      <main className="main">
        <Home />
        <About /> 
        <Skills />
        <Services />
        <QualificationData />
        <Teatimonial />
        <Contact />
      </main>
      <Scrollup />
    </div>
  );
}

export default App;
