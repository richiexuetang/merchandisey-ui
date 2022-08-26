import { navMenuItems } from '../../../navMenuItems';
import NavMenuItems from './NavMenuItems';
import { Outlet } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <ul className='menus'>
        {navMenuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </ul>
      <Outlet />
    </nav>
  );
};
export default NavMenu;
