import Nav from './component/Nav';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Bio from './component/Bio';
import Contact from './component/Contact';
import './assets/css/styles.css'
import ProjectCard from './component/ProjectCard';

import perfectnightin from '../src/assets/images/home-page-screenshot.png';
import syntax from '../src/assets/images/Syntaxsss.PNG';
import ooo from '../src/assets/images/outofofficess.PNG';
import pwgen from '../src/assets/images/outline.jpg';
import codeq from '../src/assets/images/quizpage.jpg';
import weather from '../src/assets/images/weatherSS.PNG';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Bio />
      <div className="work" id="work">
          <ProjectCard 
            name="Syntax Trainer"
            img={syntax}
            projlink="https://syntax-trainer.herokuapp.com/"
            gitlink="https://github.com/go-yasi/syntax-trainer"
          />
          <ProjectCard 
            name="Perfect Night In"
            img={perfectnightin}
            projlink="https://go-yasi.github.io/perfect-night-in/"
            gitlink="https://github.com/go-yasi/perfect-night-in"
            />
          <ProjectCard
            name="Out Of Office"
            img={ooo}
            projlink="https://out-of-office-app.herokuapp.com/"
            gitlink="https://github.com/jojonah1812/out-of-office"
            />
          <ProjectCard 
            name="Password Gen"
            img={pwgen}
            projlink="https://ayotai.github.io/PW-Generator/"
            gitlink="https://github.com/AyoTai/PW-Generator"
            />
          <ProjectCard 
            name="Coding Quiz"
            img={codeq}
            projlink="https://ayotai.github.io/Coding-Popquiz/"
            gitlink="https://github.com/AyoTai/Coding-Popquiz"
          />
          <ProjectCard 
            name="Weather App"
            img={weather}
            projlink="https://ayotai.github.io/weatherman/"
            gitlink="https://github.com/AyoTai/weatherman"
          />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

