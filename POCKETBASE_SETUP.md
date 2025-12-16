# PocketBase Setup & Documentation

## 1. Collection Configuration

Create a new collection in your PocketBase admin panel named **`stories`**.

### Fields

| Field Name       | Type    | Options / Notes                                                                 |
| ---------------- | ------- | ------------------------------------------------------------------------------- |
| `title`          | Text    | Required. The headline of the story or blog post.                               |
| `slug`           | Text    | Required, Unique. URL-friendly version of the title (e.g., `my-story-title`).   |
| `excerpt`        | Text    | Short summary displayed on the listing page.                                    |
| `content`        | Editor  | Rich text content for the full story page.                                      |
| `cover_image`    | File    | Max file size: 5MB. MIME types: `image/jpeg,image/png,image/webp`.              |
| `published_date` | Date    | When the story was published.                                                   |
| `author`         | Text    | (Optional) Name of the author.                                                  |
| `is_featured`    | Bool    | (Optional) Toggle to highlight this story (e.g., show at the top).              |
| `external_link`  | URL     | (Optional) If provided, the "Read More" button can link here instead of internal page. |
| `category`       | Select  | (Optional) Options: `News`, `Blog`, `Event`, `Notice`.                          |

---

## 2. Image Specifications

To ensure the best visual quality on the website, please adhere to the following image guidelines:

### Cover Images
- **Aspect Ratio**: 16:9 (Landscape)
- **Recommended Dimensions**: `1200 x 675 pixels`
- **Minimum Dimensions**: `800 x 450 pixels`
- **File Format**: WebP (preferred), JPG, or PNG.
- **File Size**: Try to keep under 500KB for performance.

### Content Images (inside the Rich Text Editor)
- **Width**: Max `1000px` wide.
- **File Size**: Keep under 300KB per image.

---

## 3. API Integration Plan

### Client Setup
We will use a singleton instance of the PocketBase client to ensure consistent connection settings.
- **File**: `src/lib/pocketbase.ts`
- **Usage**: Import `pb` from this file to make requests.

### Data Fetching Strategy
We will use **Server Components** (Next.js App Router) for fetching data. This ensures:
1.  **Better SEO**: Search engines see the content immediately.
2.  **Performance**: Less JavaScript sent to the client.
3.  **Security**: API logic runs on the server.

### Folder Structure
- `src/app/our-stories/page.tsx`: The main listing page. Fetches all records from `stories` collection.
- `src/app/our-stories/[slug]/page.tsx`: The dynamic detail page. Fetches a single record by `slug`.
