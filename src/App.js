import Nav from './component/Nav';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Bio from './component/Bio';
import Contact from './component/Contact';
import './assets/css/styles.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Bio />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

