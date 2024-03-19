const About = () => {
  return (
    <section>
      <div className='grid grid-cols-2 justify-center items-start px-48 py-20'>
        <img
          className='w-[550px] mx-auto'
          src="/assets/RRCS Framework.png"
          alt=""
        />
        <div className='self-center'>
          <p className='text-lg'>
            Can you write? Of course, you can! ✅ <br />
            Can everyone write? Almost everybody can. ✅ <br />
            But... Can everyone write with the
            &nbsp;<span className='italic font-medium'>RRCS Framework?</span>
          </p>
          <p className='text-lg mt-4'>
            <span className='italic font-medium'>RRCS</span> is a framework that I developed. This formula makes my writing achieve successful promotion by grabbing attention and evoking emotion, without feeling dull or pushy. 🎯
          </p>

          <p className='text-lg mt-4'>
            Now, let me ask you again a bit different question. Can anybody else write with the <span className='italic font-medium'>RRCS Framework</span> ?
          </p>

          <p className='text-lg mt-4'>
            If your answer is no... Then I guess I'm worth consideration, right? 👀
          </p>
        </div>
      </div>

      <div className='bg-[#dfeaff] p-48'>
        <h4 className='text-3xl leading-[45px] font-medium text-center'>
          I have combined experience as a business owner, YouTuber, & content writer. <br />
          Now, I specialize in mixing my love for writing, interest in human behavior, and marketing skills to craft
        </h4>
        <div className='grid grid-cols-3 gap-20 mt-20'>
          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="/assets/Landing-Page_.png"
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Landing Pages</span>
          </div>

          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="/assets/product-description.png"
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Product Description</span>
          </div>

          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="/assets/email-marketing-sequences.png"
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Email Marketing Sequences</span>
          </div>

          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="/assets/social-media-post-caption.png"
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Social Media Posts & Captions</span>
          </div>

          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="/assets/seo.png"
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Search Engine Optimized Articles</span>
          </div>

          <div className='grid auto-rows-auto justify-items-center gap-y-5'>
            <img
              className='rounded-lg border-2 border-[#024f9a] hover:scale-110 transition duration-150 w-[400px]'
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="
              alt=""
            />
            <span className='font-semibold text-lg self-end'>Anything made from words, research, & creativity ✍️</span>
          </div>
        </div>
      </div>

      <div className='px-48 py-20 mt-10'>
        <h4 className='text-4xl font-medium text-center'>
          Tool Proficiencies
        </h4>
        <div className='grid grid-cols-4 gap-40 justify-items-center items-center mt-20'>
          <img
            className='w-[260px]'
            src="/assets/WordPress-Logo.png"
            alt=""
          />
          <img
            className='rounded-lg w-[260px]'
            src="/assets/mailchimp.png"
            alt=""
          />
          <img
            className='rounded-lg w-[260px]'
            src="/assets/Brevo-Review-Social.png"
            alt=""
          />
          <img
            className='rounded-lg w-[260px]'
            src="/assets/yoast-seo.png"
            alt=""
          />
        </div>
        <div className='grid grid-cols-3 gap-x-40 justify-items-center items-center mt-32'>
          <img
            className='rounded-lg w-[260px]'
            src="/assets/semrush-com.png"
            alt=""
          />
          <img
            className='w-[260px]'
            src="/assets/GA4_Logo.png"
            alt=""
          />
          <img
            className='w-[260px]'
            src="/assets/Canva-logo.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;