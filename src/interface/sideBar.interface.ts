export interface MenuItem {
  label: string;
  to?: string;
  isGroupHead?: boolean;
  active?: string[];
  children?: MenuItem[];
}
