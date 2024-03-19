const Hero = () => {
  return (
    <section className='bg-[#dfeaff] grid grid-cols-2 items-center min-h-[100vh] px-28'>
      <div>
        <h2 className='text-[1.5rem] text-[#40394a]'>
          Hi There!
        </h2>
        <h1 className='text-[2.75rem] text-[#1c1427] font-medium'>
          I'm Sony
        </h1>
        <h4 className='text-[1.5rem] text-[#40394a]'>
          I Am Passionate <b>Copywriter & SEO Writer</b>
        </h4>
        <p className='text-[1.5rem] text-[#40394a] leading-[1.6]'>
          Experience as a business owner, YouTuber, & content writer.
        </p>
        <div className='flex items-center  gap-x-4 mt-6'>
          <button className='bg-[#024f9a] rounded-xl px-4 py-3 hover:bg-[#024f9ac7] transition duration-200 cursor-pointer'>
            <span className='text-[#dfeaff]'>Contact Me</span>
          </button>
          <a
            href='https://media.journoportfolio.com/users/350245/uploads/40f07f47-1d42-485c-8a94-105b1d3be6ad.pdf'
            target='_blank'
            className='bg-blue-500 rounded-xl px-4 py-3 hover:bg-[#024f9ac7] transition duration-200 cursor-pointer'
          >
            <span className='text-[#dfeaff]'>Get Resume</span>
          </a>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img
          className='rounded-[50%] border-2 border-[#024f9a] w-[28rem] h-[28rem] object-contain'
          src="/assets/Photo.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;