import About from "./components/About/about";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/project";
import Skills from "./components/Skills/skills";
import Terminal from "./components/Terminal/terminal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";
import MatrixBackground from "./Background/MatrixBackground";


function App() {

  return (

    <>
    <MatrixBackground/>

    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Terminal/>
    <Projects/>
    <Contact/>
    <Footer/>

    </>

  )

}


export default App;