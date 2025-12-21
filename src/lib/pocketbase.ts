import PocketBase from 'pocketbase';

// Initialize the PocketBase client
// You can change the URL to your production URL when deploying
export const pb = new PocketBase('https://cms.mandalafoods.co');


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
    cover_image: string; // PocketBase returns file fields as string (if max select is 1)
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

/**
 * Type definition for an Identity record (Digital ID Card)
 */
export interface IdentityRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    username: string; // Used in URL: /robin, /sophiya
    full_name: string; // Display name on card
    position: string; // Job title
    department?: string; // Department or unit
    employee_id?: string; // Employee ID number (e.g., "2A")
    profile_image: string; // Profile photo
    qr_link: string; // URL for QR code destination
    card_theme_color?: string; // Hex color for branding
    is_active?: boolean; // Whether card is active
    bio?: string; // Short biography
}
