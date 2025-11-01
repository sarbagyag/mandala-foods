// Common Types
export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Link {
  text: string;
  href: string;
  external?: boolean;
}

export interface CTA extends Link {
  variant?: "primary" | "secondary" | "outline";
}

// Section Types
export interface VideoHeroSection {
  type: "video-hero";
  id: string;
  videoUrl: string;
  heading: string;
  subheading?: string;
  cta?: CTA;
  secondaryCta?: CTA;
  overlayOpacity?: number;
}

export interface ProductsGridSection {
  type: "products-grid";
  id: string;
  heading: string;
  subheading?: string;
  products: Product[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: Image;
  link?: string;
}

export interface StorySection {
  type: "story";
  id: string;
  heading: string;
  subheading?: string;
  content: string;
  image?: Image;
  cta?: CTA;
}

export interface MissionSection {
  type: "mission";
  id: string;
  heading: string;
  subheading?: string;
  missions: Mission[];
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: Image;
}

export interface ImpactSection {
  type: "impact";
  id: string;
  heading: string;
  subheading?: string;
  metrics: ImpactMetric[];
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface BlogsSection {
  type: "blogs";
  id: string;
  heading: string;
  subheading?: string;
  blogs: BlogPost[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: Image;
  date: string;
  author?: string;
  category?: string;
  slug: string;
}

export interface HeroSection {
  type: "hero";
  id: string;
  heading: string;
  subheading?: string;
  image?: Image;
  cta?: CTA;
}

// Page Content Types
export type Section =
  | VideoHeroSection
  | ProductsGridSection
  | StorySection
  | MissionSection
  | ImpactSection
  | BlogsSection
  | HeroSection;

export interface PageContent {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface HomePageContent extends PageContent {
  hero: VideoHeroSection;
}

// Who We Are Page
export interface OurStoryContent {
  id: string;
  heading: string;
  content: string;
  image?: Image;
  timeline?: TimelineItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface MissionValuesContent {
  id: string;
  heading: string;
  mission: string;
  values: Value[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface StaffBoardContent {
  id: string;
  heading: string;
  staff: TeamMember[];
  board: TeamMember[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: Image;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface WhoWeArePageContent extends PageContent {
  ourStory: OurStoryContent;
  missionValues: MissionValuesContent;
  staffBoard: StaffBoardContent;
}

// Our Approach Page
export interface UniqueApproachContent {
  id: string;
  heading: string;
  content: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: Image;
}

export interface CircleOfChangeContent {
  id: string;
  heading: string;
  content: string;
  steps: Step[];
}

export interface Step {
  id: string;
  order: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ImpactContent {
  id: string;
  heading: string;
  content: string;
  metrics: ImpactMetric[];
  stories?: ImpactStory[];
}

export interface ImpactStory {
  id: string;
  title: string;
  description: string;
  image?: Image;
}

export interface NetworkPartnershipsContent {
  id: string;
  heading: string;
  content: string;
  partners: Partner[];
}

export interface Partner {
  id: string;
  name: string;
  description?: string;
  logo: Image;
  link?: string;
}

export interface FundersContent {
  id: string;
  heading: string;
  content: string;
  funders: Funder[];
}

export interface Funder {
  id: string;
  name: string;
  description?: string;
  logo: Image;
  link?: string;
}

export interface OurApproachPageContent extends PageContent {
  uniqueApproach: UniqueApproachContent;
  circleOfChange: CircleOfChangeContent;
  impact: ImpactContent;
  networkPartnerships: NetworkPartnershipsContent;
  funders: FundersContent;
}

// Our Stories Page
export interface StoriesOverviewContent {
  id: string;
  heading: string;
  content: string;
}

export interface FarmersContent {
  id: string;
  heading: string;
  content: string;
  stories: Story[];
}

export interface HorecaContent {
  id: string;
  heading: string;
  content: string;
  stories: Story[];
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: Image;
  person?: {
    name: string;
    role: string;
    location?: string;
  };
}

export interface OurStoriesPageContent extends PageContent {
  overview: StoriesOverviewContent;
  farmers: FarmersContent;
  horeca: HorecaContent;
}

// Recipe Corner Page
export interface RecipeCategory {
  id: string;
  title: string;
  description: string;
  recipes: Recipe[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: Image;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  difficulty?: "Easy" | "Medium" | "Hard";
  ingredients?: string[];
  instructions?: string[];
  category: string;
}

export interface RecipeCornerPageContent extends PageContent {
  homeRecipes: RecipeCategory;
  foodserviceRecipes: RecipeCategory;
}
