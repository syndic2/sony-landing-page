interface SidebarMenuProps {
  isOpen: boolean;
}

const SidebarMenu = (props: React.PropsWithChildren<SidebarMenuProps>) => {
  const { children, isOpen } = props;

  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-30 bg-[#024f9a] ease-in-out duration-300 w-1/2 h-full`}>
      {children}
    </aside >
  );
};

export default SidebarMenu;