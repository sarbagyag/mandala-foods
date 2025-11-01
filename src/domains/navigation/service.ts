import { NavigationConfig } from "./types";
import { navigationConfig } from "@/config/navigation";

export interface INavigationService {
  getNavigation(): Promise<NavigationConfig>;
}

class StaticNavigationService implements INavigationService {
  async getNavigation(): Promise<NavigationConfig> {
    return navigationConfig;
  }
}

export const navigationService: INavigationService = new StaticNavigationService();
