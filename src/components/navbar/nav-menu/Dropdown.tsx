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
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''} ${
        depthLevel > 1 ? 'category' : ''
      }`}
    >
      <div className={`${depthLevel > 2 ? 'category-container' : ''}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className='menu-list category-list'>
            <NavMenuItems items={submenu} key={index} depthLevel={depthLevel} />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
