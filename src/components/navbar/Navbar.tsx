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
          <MenuItem>
            <MenuLink to='/browse'>Browse</MenuLink>
            <DropdownContainer>
              <MenuItem>
                {/* Sneakers */}
                <MenuLink to='/sneakers'>Sneakers</MenuLink>
                <CategoryLevel>
                  <MenuItem>
                    <MenuLink to='/adidas'>Adidas</MenuLink>
                    <CategoryLevel className='level-3'>
                      <CategoryContainer>
                        <MenuItem>
                          <MenuLink to='/adidas/yeezy'>Yeezy</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/ultra-boost'>
                            Ultra Boost
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/NMD'>NMD</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/iniki'>Iniki</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/stan-smith'>
                            Stan Smith
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/raf-simmons'>
                            Raf Simons
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/eqt'>EQT</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/basketball'>
                            Basketball
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/running'>Running</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/skateboard'>
                            Skateboard
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/soccer'>Soccer</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/ozweego'>Ozweego</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/human-race'>
                            Human Race
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/nite-jogger'>
                            Nite Jogger
                          </MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/ivy-park'>Ivy Park</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/samba'>Samba</MenuLink>
                        </MenuItem>
                        <MenuItem>
                          <MenuLink to='/adidas/forum'>Forum</MenuLink>
                        </MenuItem>
                      </CategoryContainer>
                    </CategoryLevel>
                  </MenuItem>

                  {/* Sneaker -> Air Jordan */}
                  <MenuItem>
                    <MenuLink to='/retro-jordans'>Air Jordan</MenuLink>
                    <CategoryLevel className='level-3'>
                      <CategoryContainer>
                        <DropdownContainer>
                          <MenuItem>
                            <MenuLink to='/adidas/air-jordan-1'>1</MenuLink>
                          </MenuItem>
                          <MenuItem>
                            <MenuLink to='/retro-jordans/air-jordan-2'>
                              2
                            </MenuLink>
                          </MenuItem>
                          <MenuItem>
                            <MenuLink to='/retro-jordans/air-jordan-3'>
                              3
                            </MenuLink>
                          </MenuItem>
                        </DropdownContainer>
                      </CategoryContainer>
                    </CategoryLevel>
                  </MenuItem>
                </CategoryLevel>
              </MenuItem>

              {/* Apparel */}
              <MenuItem>
                <MenuLink to='/apparel'>Apparel</MenuLink>
                <CategoryLevel></CategoryLevel>
              </MenuItem>
              {/* End of Apparel */}
            </DropdownContainer>
          </MenuItem>
          <li>News</li>
          <li>About</li>
          <li>Help</li>
          <li>Sell</li>
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
  </React.Fragment>
);

export default Navbar;
