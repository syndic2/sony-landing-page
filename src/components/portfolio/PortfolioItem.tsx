export interface PortfolioItemProps {
  imgPath: string;
  text?: string;
}

export const PortfolioItem = (props: PortfolioItemProps) => {
  const { imgPath, text } = props;

  return (
    <div className='bg-[#024f9a] grid auto-rows-min gap-y-4 rounded-lg w-[352px] pb-3 cursor-pointer transition duration-200 hover:-translate-y-2'>
      <img
        className='w-full rounded-t-lg'
        src={imgPath}
        alt=""
      />
      <span className='text-[#dfeaff] text-md pl-4'>{text}</span>
    </div>
  );
};