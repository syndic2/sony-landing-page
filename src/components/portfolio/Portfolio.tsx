import { PortfolioItem, PortfolioItemProps } from './PortfolioItem';

const portfolios: PortfolioItemProps[] = [
  {
    imgPath: '/assets/Cold Email 1.jpg',
    text: 'Cold Email of Tech Startups'
  },
  {
    imgPath: '/assets/Product Description 2.jpg',
    text: 'Product Description of 4K Cameras'
  },
  {
    imgPath: '/assets/Product Description 4.jpg',
    text: 'Product Description of Coconut Wet Wipes'
  },
  {
    imgPath: '/assets/Email Newsletter 1.jpg',
    text: 'Email Newsletter of Travel Agencies'
  },
  {
    imgPath: '/assets/Social Media Caption 3.jpg',
    text: 'Instagram Caption for Creative Agencies (Bahasa Indonesia)'
  },
  {
    imgPath: '/assets/Blog Post 2.jpg',
    text: 'Blog Post of Thrift Clothes Stores'
  },
  {
    imgPath: '/assets/Social Media Caption 4.jpg',
    text: `Instagram Caption for Men's Bags`
  },
  {
    imgPath: '/assets/Email Sequence.jpg',
    text: `Email Sequence of Coffeebean Shops`
  },
  {
    imgPath: '/assets/Instagram Post.jpg',
    text: `Instagram Post of Photography Studios (Bahasa Indonesia)`
  },
  {
    imgPath: '/assets/Company Profile 2.jpg',
    text: `Company Profile of Ugly Fruit Stores`
  }
];

interface PortfolioProps {
  componentRef?: React.LegacyRef<any>;
  onPortfolioClick?: (portfolio: PortfolioItemProps) => void;
}

const Portfolio = (props: PortfolioProps) => {
  const { componentRef, onPortfolioClick } = props;

  const onHandlePortfolioClick = (portfolio: PortfolioItemProps) => onPortfolioClick && onPortfolioClick(portfolio);

  return (
    <section ref={componentRef}>
      <div className='bg-[#013568] px-52 py-36'>
        <h2 className='text-4xl text-[#dfeaff] text-center'>My Portfolio's</h2>
        <div className='grid grid-cols-4 gap-x-8 mt-16'>
          <div className='flex flex-col gap-y-6'>
            {portfolios.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={`portfolio-item-row-1-${index + 1}`}
                  onClick={() => onHandlePortfolioClick(item)}
                >
                  <PortfolioItem
                    imgPath={item.imgPath}
                    text={item.text}
                  />
                </div>
              );
            })}
          </div>

          <div className='flex flex-col gap-y-6'>
            {portfolios.slice(3, 5).map((item, index) => {
              return (
                <div
                  key={`portfolio-item-row-2-${index + 1}`}
                  onClick={() => onHandlePortfolioClick(item)}
                >
                  <PortfolioItem
                    imgPath={item.imgPath}
                    text={item.text}
                  />
                </div>
              );
            })}
          </div>

          <div className='flex flex-col gap-y-6'>
            {portfolios.slice(5, 7).map((item, index) => {
              return (
                <div
                  key={`portfolio-item-row-3-${index + 1}`}
                  onClick={() => onHandlePortfolioClick(item)}
                >
                  <PortfolioItem
                    imgPath={item.imgPath}
                    text={item.text}
                  />
                </div>
              );
            })}
          </div>

          <div className='flex flex-col gap-y-6'>
            {portfolios.slice(7, 11).map((item, index) => {
              return (
                <div
                  key={`portfolio-item-row-4-${index + 1}`}
                  onClick={() => onHandlePortfolioClick(item)}
                >
                  <PortfolioItem
                    imgPath={item.imgPath}
                    text={item.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;