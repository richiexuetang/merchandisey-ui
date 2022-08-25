import React from 'react';
import {
  SiteHeader,
  NavBarWrapper,
  NavBarInner,
  LogoContainer,
  NavBrand,
  SearchBoxSite,
  SearchBoxLeft,
  SearchBar,
} from './navbar.styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as MerchYLogo } from '../../assets/merchy-logo.svg';

const Navbar: React.FC = () => (
  <SiteHeader>
    <NavBarWrapper>
      <NavBarInner>
        <NavBrand>
          <LogoContainer>
            <MerchYLogo className='align-middle' />
          </LogoContainer>
        </NavBrand>
        <SearchBoxSite>
          <SearchBoxLeft>
            <SearchIcon />
            <SearchBar />
          </SearchBoxLeft>
        </SearchBoxSite>
        <NotificationsNoneIcon />
      </NavBarInner>
    </NavBarWrapper>
  </SiteHeader>
);

export default Navbar;
