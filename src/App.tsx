import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
