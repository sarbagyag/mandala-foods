import {
  PageContent,
  HomePageContent,
  WhoWeArePageContent,
  OurApproachPageContent,
  OurStoriesPageContent,
  RecipeCornerPageContent
} from "./types";
import { homepageContent } from "./data/homepage";

export interface IContentService {
  getHomePageContent(): Promise<HomePageContent>;
  getPageContent(pageId: string): Promise<PageContent | null>;
  getWhoWeAreContent(): Promise<WhoWeArePageContent | null>;
  getOurApproachContent(): Promise<OurApproachPageContent | null>;
  getOurStoriesContent(): Promise<OurStoriesPageContent | null>;
  getRecipeCornerContent(): Promise<RecipeCornerPageContent | null>;
}

class StaticContentService implements IContentService {
  async getHomePageContent(): Promise<HomePageContent> {
    return homepageContent;
  }

  async getPageContent(pageId: string): Promise<PageContent | null> {
    switch (pageId) {
      case "home":
        return this.getHomePageContent();
      case "who-we-are":
        return this.getWhoWeAreContent();
      case "our-approach":
        return this.getOurApproachContent();
      case "our-stories":
        return this.getOurStoriesContent();
      case "recipe-corner":
        return this.getRecipeCornerContent();
      default:
        return null;
    }
  }

  async getWhoWeAreContent(): Promise<WhoWeArePageContent | null> {
    // Static data will be added shortly
    return null;
  }

  async getOurApproachContent(): Promise<OurApproachPageContent | null> {
    // Static data will be added shortly
    return null;
  }

  async getOurStoriesContent(): Promise<OurStoriesPageContent | null> {
    // Static data will be added shortly
    return null;
  }

  async getRecipeCornerContent(): Promise<RecipeCornerPageContent | null> {
    // Static data will be added shortly
    return null;
  }
}

export const contentService: IContentService = new StaticContentService();
