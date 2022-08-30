import React from 'react';
import * as Styled from './navbar.styles';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './nav-menu';
import Menubar from '../menubar/Menubar';

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

        {/* Searbar */}
        <Styled.SearchbarContainer>
          <Styled.Wrapper flexDirection='row' alignItems='normal'>
            <Styled.Search>
              <SearchIcon />
            </Styled.Search>
            <Styled.Searchbox placeholder='Search for brand, color, etc.' />
          </Styled.Wrapper>
        </Styled.SearchbarContainer>
        {/* End of Searchbar */}

        <NavMenu />
      </Styled.Container>
    </Styled.SiteHeader>
    <Menubar />
    <Outlet />
  </React.Fragment>
);

export default Navbar;
