
import Navigation from './components/1Navigation/Nav'
import Home from './components/2Home/Home';
import './App.css'
import About from './components/3About/About'
import Skills from './components/4Skills/Skills';
import Projects from './components/5Projects/Projects';
import Contact from './components/6Contact/Contact';

function App() {
  return (
    <>
    <Navigation/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
