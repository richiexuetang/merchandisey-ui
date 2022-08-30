import { navMenuItems } from '../../../data/navMenuItems';
import NavMenuItems from './NavMenuItems';
import { Outlet } from 'react-router-dom';
import * as Styled from '../navbar.styles';

const NavMenu = () => {
  return (
    <>
      <Styled.MenuWrapper>
        {navMenuItems.map((menu, index) => {
          const depthLevel = 0;

          return (
            <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </Styled.MenuWrapper>
      <Outlet />
    </>
  );
};
export default NavMenu;
