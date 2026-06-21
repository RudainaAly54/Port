
import './App.css'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {


  return (
<>
<main className= " w-[100%] min-h-screen pt-24 flex flex-col items-center justify-start gap-32 relative overflow-hidden"
style={{
    background: `radial-gradient(ellipse at 50% 80%, #3b0764 0%, #1a0030 40%, #09090f 70%)`
  }}
>
  <Nav />
  <HeroSection />
  <AboutMe/>
  <Skills/>
  <Experience/>
  <Projects/>

</main>


</>
  )
}

export default App
