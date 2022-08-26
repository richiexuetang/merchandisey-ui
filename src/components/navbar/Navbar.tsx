import React from 'react';
import {
  Container,
  Search,
  Searchbox,
  Wrapper,
  NavLogo,
  MenuItem,
  MenuLink,
  SiteHeader,
  NavLogoContainer,
  NavLogoLink,
  SearchbarContainer,
  MenuWrapper,
  DropdownContainer,
  CategoryLevel,
  CategoryContainer,
} from './navbar.styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './nav-menu';

const Navbar = () => (
  <React.Fragment>
    <SiteHeader>
      <Container>
        {/* Logo */}
        <NavLogoContainer>
          <NavLogoLink to='/'>
            <NavLogo>
              <MerchYLogo />
            </NavLogo>
          </NavLogoLink>
        </NavLogoContainer>
        {/* End of Logo */}

        {/* Searbar */}
        <SearchbarContainer>
          <Wrapper flexDirection='row' alignItems='normal'>
            <Search>
              <SearchIcon />
            </Search>
            <Searchbox placeholder='Search for brand, color, etc.' />
          </Wrapper>
        </SearchbarContainer>
        {/* End of Searchbar */}

        <MenuWrapper>
          <NavMenu />
          <li>
            <NotificationsNoneIcon />
          </li>

          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </MenuWrapper>
      </Container>
    </SiteHeader>
    <Outlet />
  </React.Fragment>
);

export default Navbar;
