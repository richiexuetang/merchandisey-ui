import React from 'react';
import * as Styled from './Menubar.styles';
import { Outlet } from 'react-router-dom';

const Menubar = () => {
  return (
    <Styled.MenuBarNav>
      <Styled.MenuBarContainer>
        <Styled.MenuBarList>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Sneakers</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Apparel</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Electronics</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Trading Cards</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Collectibles</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>Accessories</Styled.MenubarLink>
          </Styled.MenuBarListItem>
          <Styled.MenuBarListItem>
            <Styled.MenubarLink to='/'>NFTs</Styled.MenubarLink>
          </Styled.MenuBarListItem>
        </Styled.MenuBarList>
      </Styled.MenuBarContainer>
      <Outlet />
    </Styled.MenuBarNav>
  );
};

export default Menubar;
