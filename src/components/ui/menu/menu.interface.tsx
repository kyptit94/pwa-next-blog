export interface MenuItem {
  path: string;
  label: string;
  id: string;
  childClass?: string;
  children?: MenuItem[]; // Recursive reference
}

export interface MenuInterface {
    // Define your interface properties and methods here
    className: string;
    childClass: string;
    parentClass: string;
    menuItems: MenuItem[]
}