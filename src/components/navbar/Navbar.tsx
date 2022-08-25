import React from 'react';
import {
  Container,
  Search,
  Searchbox,
  Wrapper,
  Menu,
  MenuItem,
  MenuLink,
} from './navbar.styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as MerchYLogo } from '../../assets/svgs/logo.svg';

const Navbar = () => (
  <React.Fragment>
    <Container>
      <MerchYLogo />

      <Wrapper flexDirection='row' alignItems='normal'>
        <Search>
          <SearchIcon />
        </Search>
        <Searchbox />
      </Wrapper>

      <Menu>
        <MenuItem>
          <MenuLink>Browse</MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>News</MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>About</MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>Help</MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>
            <NotificationsNoneIcon />
          </MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>Login</MenuLink>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <MenuLink>Sign Up</MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  </React.Fragment>
);

export default Navbar;
