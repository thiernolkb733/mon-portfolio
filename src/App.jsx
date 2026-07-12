// On importe tous les composants du portfolio

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// Le composant principal de notre application

function App(){

  return (

    <>

      {/* Barre de navigation */}
      <Navbar />


      {/* Section présentation */}
      <Hero />


      {/* Section à propos */}
      <About />


      {/* Section compétences */}
      <Skills />


      {/* Section projets */}
      <Projects />


      {/* Section contact */}
      <Contact />


      {/* Pied de page */}
      <Footer />

    </>

  )

}


// On exporte App pour pouvoir l'utiliser ailleurs

export default App;