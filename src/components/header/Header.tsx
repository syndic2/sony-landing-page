export enum HEADER_MENU {
  HOME = 'MENU',
  ABOUT = 'ABOUT',
  RRCS = 'RRCS',
  PORTFOLIO = 'PORTFOLIO',
  TESTIMONY = 'TESTIMONY',
  CONTACT = 'CONTACT'
}

interface HeaderProps {
  onMenuClick?: (menu: HEADER_MENU) => void;
}

const Header = (props: HeaderProps) => {
  const { onMenuClick } = props;

  return (
    <div className='bg-[#024f9a] flex justify-between items-center py-4 px-10 sticky top-0 z-10 w-full'>
      <div className='text-[2.5rem] font-medium italic uppercase text-[#dfeaff]'>
        <a href="">Sony Writing</a>
      </div>

      <nav>
        <ul className='flex items-center gap-x-5'>
          <li
            onClick={() => onMenuClick && onMenuClick(HEADER_MENU.HOME)}
            className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
          >
            Home
          </li>
          <li
            onClick={() => onMenuClick && onMenuClick(HEADER_MENU.RRCS)}
            className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
          >
            RRCS
          </li>
          <li
            onClick={() => onMenuClick && onMenuClick(HEADER_MENU.ABOUT)}
            className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
          >
            About
          </li>
          <li
            onClick={() => onMenuClick && onMenuClick(HEADER_MENU.PORTFOLIO)}
            className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
          >
            Porfolio
          </li>
          <li
            onClick={() => onMenuClick && onMenuClick(HEADER_MENU.TESTIMONY)}
            className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
          >
            Testimony
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;