import React from 'react';
import {MenuInterface, MenuItem } from './menu.interface';

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    return (
      <li>
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
const Menu: React.FC<MenuInterface> = ({ className, menuItems }) => {
    return (
      <nav className={className}>
        <ul>
          {menuItems.map((item: MenuItem) => (
            <MenuItemComponent key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    );
  };

export default Menu;