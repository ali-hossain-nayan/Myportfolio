import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";

function App() {
   const [navExpanded, setNavExpanded] = useState(false);
  return (
    <div className="App">
 <NavBar onToggle={(expanded) => setNavExpanded(expanded)} />
      <Banner navExpanded={navExpanded} />
      {/* <Skills className="mt-12"/> */}
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
