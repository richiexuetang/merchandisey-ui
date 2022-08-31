import React from 'react';
import * as Styled from './navbar.styles';
import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './nav-menu';
import Menubar from '../menubar/Menubar';
import NavInput from './NavInput';

const Navbar = () => (
  <React.Fragment>
    <Styled.SiteHeader>
      <Styled.Container>
        {/* Logo */}
        <Styled.NavLogoContainer>
          <Styled.NavLogoLink to='/'>
            <Styled.NavLogo>
              <MerchYLogo />
            </Styled.NavLogo>
          </Styled.NavLogoLink>
        </Styled.NavLogoContainer>
        {/* End of Logo */}

        <NavInput />
        <NavMenu />
      </Styled.Container>
    </Styled.SiteHeader>
    <Menubar />
    <Outlet />
  </React.Fragment>
);

export default Navbar;
