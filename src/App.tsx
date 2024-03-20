import { useState } from 'react';

import { useScrollToComponent } from './hooks/use-scroll-to-component';

import Header, { HEADER_MENU } from './components/header/Header';
import Footer from './components/footer/Footer';
import { ImageZoomSlider } from './components/utils/image-zoom-slider/ImageZoomSlider';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import { PortfolioItemProps } from './components/portfolio/PortfolioItem';
import Testimonial from './components/testimonial/Testimonial';

const App = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItemProps | undefined>();

  const { componentRef: heroRef, scrollIntoComponent: scrollIntoHero } = useScrollToComponent();
  const { componentRef: rrcsRef, scrollIntoComponent: scrollIntoRrcs } = useScrollToComponent();
  const { componentRef: aboutRef, scrollIntoComponent: scrollIntoAbout } = useScrollToComponent();
  const { componentRef: portfolioRef, scrollIntoComponent: scrollIntoPortfolio } = useScrollToComponent();
  const { componentRef: testimonialRef, scrollIntoComponent: scrollIntoTestimonial } = useScrollToComponent();

  const onMenuClick = (menu: HEADER_MENU) => {
    if (menu === HEADER_MENU.HOME) scrollIntoHero();
    else if (menu === HEADER_MENU.RRCS) scrollIntoRrcs();
    else if (menu === HEADER_MENU.ABOUT) scrollIntoAbout();
    else if (menu === HEADER_MENU.PORTFOLIO) scrollIntoPortfolio();
    else if (menu === HEADER_MENU.TESTIMONY) scrollIntoTestimonial();
  };

  const onPortfolioClick = (portfolio: PortfolioItemProps) => setSelectedPortfolio(portfolio);

  const onCloseImageZoom = () => setSelectedPortfolio(undefined);

  return (
    <>
      <Header onMenuClick={onMenuClick} />
      <main className='overflow-x-hidden'>
        <Hero componentRef={heroRef} />
        <About
          rrcsRef={rrcsRef}
          aboutRef={aboutRef}
        />
        <Portfolio
          componentRef={portfolioRef}
          onPortfolioClick={onPortfolioClick}
        />
        <Testimonial componentRef={testimonialRef} />
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
