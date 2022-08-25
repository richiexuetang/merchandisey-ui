import tw, { styled } from 'twin.macro';
import { PageText as NavText } from '../helpers/PageText';
import { PageItemWrapper as NavItemWrapper } from '../helpers/ItemWrapper';
import { Link } from 'react-router-dom';

export const SiteHeader = tw.div`sticky top-0 z-50`;

export const NavBarWrapper = tw.nav`bg-white border-transparent border-0 block min-h-90`;

export const NavBarInner = tw.div`flex justify-between items-center min-h-48`;

export const NavBrand = tw.a`m-0 leading-90 p-0 text-center`;

export const LogoContainer = tw.span`block ml-10 mr-10`;

export const SearchBoxSite = tw.div`w-9/10 pr-8 mt-0 mr-auto mb-0 ml-auto flex-grow-0 block relative`;

export const SearchBoxLeft = tw.div`left-0 top-0 w-12 h-12 items-center flex absolute z-10 text-lg`;

export const SearchBar = tw.input`h-11 rounded-sm pr-2 text-black text-sm`;
