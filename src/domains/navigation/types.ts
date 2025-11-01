export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  disabled?: boolean;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItem[];
}

export interface NavigationConfig {
  mainNav: NavItemWithChildren[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavDropdownProps {
  item: NavItemWithChildren;
}
