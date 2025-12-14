import PocketBase from 'pocketbase';

// Initialize the PocketBase client
// You can change the URL to your production URL when deploying
export const pb = new PocketBase('http://127.0.0.1:2025'); // Using the port you specified (actually user said 8090, let me check)

// User said: Server started at http://127.0.0.1:8090
pb.baseUrl = 'http://127.0.0.1:8090';

// Disable auto-cancellation to avoid issues with React Strict Mode in dev
pb.autoCancellation(false);

/**
 * Helper to generate the full URL for a PocketBase file/image
 */
export const getPbImageUrl = (
    collectionId: string,
    recordId: string,
    fileName: string,
    options: { thumb?: string } = {}
) => {
    if (!fileName) return null;

    const params = options.thumb ? `?thumb=${options.thumb}` : '';
    return `${pb.baseUrl}/api/files/${collectionId}/${recordId}/${fileName}${params}`;
};

/**
 * Type definition for a Story record
 */
export interface StoryRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    cover_image: string[]; // PocketBase returns file fields as arrays
    published_date: string;
    author?: string;
    is_featured?: boolean;
    external_link?: string;
    category?: string;
}

export interface ProductFeature {
    title: string;
    subtitle: string;
}

export interface ProductRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    name: string;
    category: 'spread' | 'smash' | 'splash' | 'innovation';
    category_tag: string;
    one_liner: string;
    excerpt: string;
    product_image: string;
    theme_color: string;
    bg_color_class?: string;
    features: ProductFeature[];
    order?: number;
    category_order?: number;
    product_order?: number;
}
