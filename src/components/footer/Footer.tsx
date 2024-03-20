const Footer = () => {
  return (
    <footer>
      <div className='bg-[#013568] px-24 py-12 pb-8'>
        <span className='block text-3xl text-white text-center'>When You Need a Writer Who Actually Performs</span>
        <div className='flex justify-center items-center mt-8'>
          <a
            href='mailto:wicaksonobagusd@gmail.com'
            target='_blank'
            className='bg-blue-500 rounded-xl px-4 py-3 hover:bg-[#024f9ac7] transition duration-200 cursor-pointer'
          >
            <span className='text-[#dfeaff]'>Email Me</span>
          </a>
        </div>
        <div className='text-center text-[#dfeaff] text-md mt-10'>©2024 Sony Writing. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;