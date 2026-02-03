import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";  
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Projects from "./component/Project"; 
import Resume from "./component/Resume";
import Skills from "./component/Skills";  
import ProblemSolving from "./component/ProblemSolving";

export default function App() {
  return (
    <main className="bg-gray-900">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
    </main>
  );
}