import React from 'react';
import {MenuInterface, MenuItem } from './menu.interface';

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    return (
      <li className={item.childClass}>
        {item.label}
        {item.children && (
          <ul>
            {item.children.map((child: MenuItem) => (
              <MenuItemComponent key={child.id} item={child} />
            ))}
          </ul>
        )}
      </li>
    );
  };
const Menu: React.FC<MenuInterface> = ({ className, menuItems, childClass, parentClass }) => {
    menuItems = menuItems.map((item: MenuItem) => ({ ...item, childClass }));
    return (
      <nav className={className}>
        <ul className={parentClass}>
          {menuItems.map((item: MenuItem) => (
            <MenuItemComponent key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    );
  };

export default Menu;