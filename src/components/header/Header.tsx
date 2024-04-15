import { AiOutlineMenu } from "react-icons/ai";

export enum HEADER_MENU {
  HOME = 'MENU',
  ABOUT = 'ABOUT',
  RRCS = 'RRCS',
  PORTFOLIO = 'PORTFOLIO',
  TESTIMONY = 'TESTIMONY',
  CONTACT = 'CONTACT'
}

export const MENU_DATA: { label: string, type: HEADER_MENU }[] = [
  {
    label: 'Home',
    type: HEADER_MENU.HOME
  },
  {
    label: 'RRCS',
    type: HEADER_MENU.RRCS
  },
  {
    label: 'About',
    type: HEADER_MENU.ABOUT
  },
  {
    label: 'Portfolio',
    type: HEADER_MENU.PORTFOLIO
  },
  {
    label: 'Testimony',
    type: HEADER_MENU.TESTIMONY
  }
];

interface HeaderProps {
  onMenuClick?: (menu: HEADER_MENU) => void;
  onSidebarMenuClick: () => void;
}

const Header = (props: HeaderProps) => {
  const { onMenuClick, onSidebarMenuClick } = props;

  return (
    <div className='bg-[#024f9a] flex justify-between items-center gap-x-6 sm:gap-x-0 py-4 px-6 sm:px-10 sticky top-0 z-10 w-full'>
      <AiOutlineMenu
        className='block sm:hidden text-white'
        size={28}
        onClick={onSidebarMenuClick}
      />

      <div className='flex-1 md:flex-initial text-[2.5rem] font-medium italic uppercase text-[#dfeaff]'>
        <a href="">Sony Writing</a>
      </div>

      <nav className='hidden sm:block'>
        <ul className='flex items-center gap-x-5'>
          {MENU_DATA.map((item, index) => {
            return (
              <li
                key={`header-menu-${index}`}
                onClick={() => onMenuClick && onMenuClick(item.type)}
                className='text-[#dfeaff] hover:bg-blue-500 transition duration-150 p-2 rounded-lg cursor-pointer'
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;