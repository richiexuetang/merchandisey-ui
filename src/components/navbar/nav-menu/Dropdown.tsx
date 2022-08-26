import { ItemAttributes } from '../../../navMenuItems';
import './index.css';
import NavMenuItems from './NavMenuItems';

export interface DropdownProps {
  submenus: ItemAttributes[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  dropdown,
  depthLevel,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className='menu-items'>
          <NavMenuItems items={submenu} key={index} depthLevel={depthLevel} />
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
