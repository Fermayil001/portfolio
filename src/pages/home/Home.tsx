import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Portfolio from "./sections/Portfolio"
import Skills from "./sections/Skills"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home