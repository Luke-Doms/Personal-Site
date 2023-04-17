import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <ContactUs />
      
      <SocialLinks />
    </div>
  );
}

export default App;
