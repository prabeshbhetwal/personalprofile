import "./App.css";
import { About } from "./Components/AboutMe";
import { Contact } from "./Components/ContactMe";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
