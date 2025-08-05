import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Contact/>
        </div>
    )
}

export default Home