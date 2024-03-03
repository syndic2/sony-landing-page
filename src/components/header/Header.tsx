const Header = () => {
  return (
    <div className='bg-[#024f9a] flex justify-between items-center py-4 px-10 sticky top-0 w-full'>
      <div className='text-[2.5rem] font-medium italic uppercase text-white'>
        <a href="">Sony Writing</a>
      </div>

      <nav>
        <ul className='flex items-center gap-x-5'>
          <li className='text-white hover:bg-[#35a1e0] transition duration-150 p-2 rounded-lg'>
            <a href="">Home</a>
          </li>
          <li className='text-white hover:bg-[#35a1e0] transition duration-150 p-2 rounded-lg'>
            <a href="">About</a>
          </li>
          <li className='text-white hover:bg-[#35a1e0] transition duration-150 p-2 rounded-lg'>
            <a href="">RRCS</a>
          </li>
          <li className='text-white hover:bg-[#35a1e0] transition duration-150 p-2 rounded-lg'>
            <a href="">Porfolio</a>
          </li>
          <li className='text-white hover:bg-[#35a1e0] transition duration-150 p-2 rounded-lg'>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;