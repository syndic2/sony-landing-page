import { useState } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ImageZoomSlider } from './components/utils/image-zoom-slider/ImageZoomSlider';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import { PortfolioItemProps } from './components/portfolio/PortfolioItem';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

const App = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItemProps | undefined>();

  const onPortfolioClick = (portofolio: PortfolioItemProps) => setSelectedPortfolio(portofolio);

  const onCloseImageZoom = () => setSelectedPortfolio(undefined);

  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <Hero />
        <About />
        <Portfolio
          onPortfolioClick={onPortfolioClick}
        />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ImageZoomSlider
        selectedImage={selectedPortfolio?.imgPath}
        images={[]}
        onClose={onCloseImageZoom}
      />
    </>
  );
};

export default App;
