import './App.css';
// import ImageWithText from "./components/ImageWithText";
import Biography from './components/Biography';
import Events from './components/Events.tsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Spotify from "./components/Spotify";

// import foredragImg from "./assets/images/foredrag.jpg";
// import eqImg from "./assets/images/eq-terapi.png";
// import backgroundImg from "./assets/images/background.jpg";
// import foredragSkoyen from "./assets/images/foredrag-skoyen.png";
// import tittelFoto from "./assets/images/tittelfoto_vevelstad.webp";

function App() {
  return (
    <>
      <main>
        <section className='biography-container' id='biography'>
          <Biography />
        </section>
        <Events />
        <div className='horizontalLine'></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
