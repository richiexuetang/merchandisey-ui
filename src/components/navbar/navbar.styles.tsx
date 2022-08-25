import styled from 'styled-components';
import { PageText as NavText } from '../helpers/PageText';
import { PageItemWrapper as NavItemWrapper } from '../helpers/ItemWrapper';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #242424;
  background-color: #ffffff;
  border-color: #e2e8f0;
  border-style: solid;
  box-sizing: border-box;
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  padding: 0.1em;
  cursor: pointer;
  border: 1px solid #131a22;
  position: relative;
  border-color: #e2e8f0;
  flex-grow: 1;

  &:hover {
    border: 1px solid #e2e8f0;
    border-radius: 0.2em;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`;

export const Search = styled.div`
  background-color: #ddd;
  margin-right: -1.2em;
  padding: 0.72em 0.5em;
  border-radius: 0.2em 0em 0em 0.2em;
  border: none;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Searchbox = styled.input`
  background-color: #ffffff;
  padding: 0.78em;
  width: 47%;
  border: none;

  @media (max-width: 850px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absoulte;
    top: 80px;
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  /* &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  } */
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
