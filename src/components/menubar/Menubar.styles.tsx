import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBarNav = styled.nav`
  display: none;

  @media screen and (min-width: 48em) {
    display: initial;
  }
`;

export const MenuBarContainer = styled.div`
  background-color: var(--chakra-colors-beige-100);
  justify-content: space-between;
  overflow-x: auto;
  margin: 0px;
  padding: 0px;
  display: block;

  @media screen and (min-width: 48em) {
    padding-left: initial;
    padding-right: initial;
    padding-bottom: initial;
  }
`;

export const MenuBarList = styled.ul`
  display: flex;
  list-style: none;
  width: 1296px;
  height: 48px;
  justify-content: center;
  font-family: 'var(--chakra-fonts-suisseIntlMedium)';

  @media screen and (min-width: 48em) {
    margin: 0 1rem;
  }

  @media screen and (min-width: 62em) {
    margin: auto;
  }
`;

export const MenuBarListItem = styled.li`
  display: flex;
  box-shadow: inset 0 -5px 0 0 transparent;
  text-transform: capitalize;
  color: var(--chakra-colors-neutral-black);
  cursor: pointer;
  white-space: nowrap;
  align-items: center;

  @media screen and (min-width: 48em) {
    margin: 0 16px;
  }

  @media screen and (min-width: 62em) {
    font-size: 18px;
  }
`;

export const MenubarLink = styled(Link)`
  font-size: 18px;
  background: transparent;
  color: inherit;
  text-decoration: inherit;
`;
