import { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useScrollToComponent } from './hooks/use-scroll-to-component';

import Header, { HEADER_MENU, MENU_DATA } from './components/header/Header';
import Footer from './components/footer/Footer';
import SidebarMenu from './components/utils/sidebar-menu/SidebarMenu';
import { ImageZoomSlider } from './components/utils/image-zoom-slider/ImageZoomSlider';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import { PortfolioItemProps } from './components/portfolio/PortfolioItem';
import Testimonial from './components/testimonial/Testimonial';

const App = () => {
  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState<boolean>(false);
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

  const onSidebarMenuClick = () => {
    setIsOpenSidebarMenu(prevState => !prevState);
  };

  const onCloseImageZoom = () => setSelectedPortfolio(undefined);

  return (
    <>
      <Header
        onMenuClick={onMenuClick}
        onSidebarMenuClick={onSidebarMenuClick}
      />
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
      <SidebarMenu isOpen={isOpenSidebarMenu}>
        <div className='px-8 py-5'>
          <ul className='flex flex-col gap-y-6'>
            {MENU_DATA.map((item, index) => {
              return (
                <li
                  key={`sidebar-menu-${index}`}
                  onClick={() => onMenuClick(item.type)}
                  className='text-[#dfeaff]'
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
          <div className='border-t-2 border-white w-full mt-5'></div>
          <AiOutlineCloseCircle
            className='text-white mx-auto mt-5'
            size={30}
            onClick={onSidebarMenuClick}
          />
        </div>
      </SidebarMenu>
      <ImageZoomSlider
        selectedImage={selectedPortfolio?.imgPath}
        images={[]}
        onClose={onCloseImageZoom}
      />
    </>
  );
};

export default App;
