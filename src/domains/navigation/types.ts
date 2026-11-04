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

export interface FooterGroup {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  /** Short, flat list shown in the top bar */
  mainNav: NavItem[];
  /** Detailed links shown in the footer */
  footerNav: FooterGroup[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
