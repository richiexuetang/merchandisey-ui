import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../../../navMenuItems';
import Dropdown from './Dropdown';
import './index.css';
import * as Styled from '../navbar.styles';

export interface NavMenuItemsProps {
  items: MenuItem;
  depthLevel: number;
}

const NavMenuItems: React.FC<NavMenuItemsProps> = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className='menu-list'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu && items.url ? (
        <React.Fragment>
          <Styled.MenuLink
            to={items.url}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
          >
            {items.title}
          </Styled.MenuLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </React.Fragment>
      ) : (
        <Styled.MenuLink to={items.url}>{items.title}</Styled.MenuLink>
      )}
    </li>
  );
};
export default NavMenuItems;
