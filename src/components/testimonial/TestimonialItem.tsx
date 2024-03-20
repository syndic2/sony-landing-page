import { FaQuoteRight } from "react-icons/fa";

export interface TestimonialItemProps {
  profileImg: string;
  author: string;
  authorLink?: string;
  testimony: string;
  rate: number;
}

export const TestimonialItem = (props: TestimonialItemProps) => {
  const { profileImg, author, authorLink, testimony } = props;

  return (
    <>
      <div className='absolute top-0 left-0 w-full'>
        {authorLink ? (
          <a href={authorLink} target="_blank" className='cursor-pointer'>
            <img
              src={profileImg}
              className='rounded-full border-4 border-[#024f9a] w-20 mx-auto'
              alt=""
            />
          </a>
        ) : (
          <img
            src={profileImg}
            className='rounded-full border-4 border-[#024f9a] w-20 mx-auto'
            alt=""
          />
        )}
      </div>
      <div className='bg-white rounded-2xl flex flex-col items-center gap-y-8 h-[350px] p-12'>
        <span className='text-xl font-semibold'>{author}</span>
        <div className='rounded-full bg-[#024f9a] p-4'>
          <FaQuoteRight
            size={18}
            className='text-white'
          />
        </div>
        <p className='text-gray-700 text-base text-center italic'>"{testimony}"</p>
      </div>
    </>
  );
};