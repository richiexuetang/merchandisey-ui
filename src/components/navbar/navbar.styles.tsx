import styled from 'styled-components';
import { PageText as NavText } from '../helpers/PageText';
import { PageItemWrapper as NavItemWrapper } from '../helpers/ItemWrapper';
import { Link } from 'react-router-dom';

export const SiteHeader = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1030;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
`;

//#region Navbar Logo
export const NavLogoContainer = styled.div`
  display: none;

  @media screen and (min-width: 48em) {
    display: inline-block;
  }
`;

export const NavLogoLink = styled(Link)``;

export const NavLogo = styled.span`
  display: flex;
  margin: auto 0px;

  @media screen and (min-width: 48em) {
    display: block;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  .svg {
    width: 95px;
    height: auto;
    display: inline-block;
    line-height: 1em;
    flex-shrink: 0;
    color: #0f0f0f;
    vertical-align: middle;
    fill: #0f0f0f;

    @media screen and (min-width: 48em) {
      width: 125px;
    }
  }
  /* cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.5s ease;

  margin-left: 2.5rem;
  margin-right: 2.5rem; */
`;
//#endregion

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  position: relative;
  flex-grow: 1;

  align-items: center;
  padding-right: 2rem;
  position: relative;

  // navbar-search
  width: auto;
  margin: 0 auto;
  padding-right: 0;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`;

//#region Searchbar styling
export const SearchbarContainer = styled.div`
  width: 90%;
  margin: 0px auto;
  flex-grow: 1;

  @media screen and (min-width: 48em) {
    display: block;
    width: 90%;
    padding-left: 2rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const Search = styled.div`
  left: 0;
  width: 3rem;
  height: 3rem;

  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 0em 0.2em 0.2em 0em;
  font-size: 1.125rem;
  justify-content: center;
  position: absolute;
  z-index: 2;

  .svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    line-height: 1em;
    flex-shrink: 0;
    vertical-align: middle;
  }
`;

export const Searchbox = styled.input`
  width: 100%;
  min-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  padding-inline-start: 3rem;
  padding-inline-end: 3rem;
  border-radius: 3px;
  border: 1px solid;
  height: 3rem;
  background: inherit;
  border-color: #a1a5a4;
  font-size: 1.125rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 200ms;

  ::placeholder,
  ::-webkit-input-placeholder {
    display: block !important;
    text-overflow: inherit;
    white-space: pre;
    overflow-wrap: normal;
    overflow: hidden;
    color: #0f0f0f;
    line-height: initial !important;
    direction: inherit !important;
    pointer-events: inherit !important;
    text-orientation: inherit !important;
    writing-mode: inherit !important;
    font-size: 14px;
  }
  :-ms-input-placeholder {
    display: block !important;
    text-overflow: inherit;
    white-space: pre;
    overflow-wrap: normal;
    overflow: hidden;
    color: #0f0f0f;
    line-height: initial !important;
    direction: inherit !important;
    pointer-events: inherit !important;
    text-orientation: inherit !important;
    writing-mode: inherit !important;
    font-size: 14px;
  }

  &:hover {
    border-color: #5f5f5f;
  }

  [aria-readonly='true'] {
    box-shadow: none;
    user-select: all;
  }

  [aria-disabled='true'] {
    opacity: 0.4;
    cursor: not-allowed;
    background: #ededed;
  }

  @media (max-width: 850px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`;
//#endregion

//#region Navbar Menu styling
export const MenuWrapper = styled.ul`
  display: none;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  margin: 0px;
  padding-right: 30px;

  @media screen and (min-width: 48em) {
    display: flex;
  }

  &.hover {
    > li {
      display: block;
    }
  }

  > li:hover {
    > ul {
      display: block;
    }
  }

  > li {
    position: relative;
    margin: 0px;
    white-space: nowrap;
    font-weight: 500;
    text-transform: capitalize;
    list-style: none;

    a:hover {
      color: inherit;
    }

    > ul {
      display: none;
    }

    @media screen and (min-width: 48em) {
      margin: 0 2px;

      a {
        padding: 8px 1px;
        font-size: 0.75rem;
      }
    }

    @media screen and (min-width: 62em) {
      margin: 0 4px;

      a {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 80em) {
      margin: 0 4px;

      a {
        padding: 8px;
      }
    }
  }
`;

export const MenuItem = styled.li`
  position: relative;
  margin: 0px;
  white-space: nowrap;
  font-weight: 500;
  text-transform: capitalize;
  list-style: none;

  &:hover {
    > ul {
      display: block;
    }
  }

  @media only screen and (min-width: 48em) {
    margin: 0 2px;
    &:hover {
      border: none;
    }
  }

  @media only screen and (min-width: 62em) {
    margin: 0 4px;
    &:hover {
      border: none;
    }
  }

  > a {
    display: block;

    @media only screen and (min-width: 48em) {
      padding: 8px 1px;
      font-size: 0.75rem;
    }

    @media only screen and (min-width: 62em) {
      font-size: 1rem;
    }

    @media only screen and (min-width: 80em) {
      padding: 8px;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 100%;
  transition: all 0.2s ease;

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const DropdownContainer = styled.ul`
  position: absolute;
  top: 100%;
  z-index: 1000;
  float: left;
  padding: 0px;
  margin: 0px;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(0 0 0 / 10%) 0px -2px 4px;
  border: 0;
  font-weight: 600;
  color: #242424;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;

  @media screen and (min-width: 80em) {
    left: -100px;
    width: 160px;
  }
`;

export const CategoryLevel = styled.ul`
  display: none;
  position: absolute;
  top: 0px;
  left: 100%;
  max-height: 680px;
  min-height: 100%;
  background: #ffffff;
  list-style: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px, rgb(0 0 0 / 10%) 0px -2px 4px;

  .level-3 {
    font-size: 1rem;
  }
`;

export const CategoryContainer = styled.div`
  max-height: 680px;
  overflow-y: hidden;
  overscroll-behavior: contain;
`;

//export const MenuItemDropdown = styled.ul
//#endregion
