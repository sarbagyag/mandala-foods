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

---

## 4. Meal Integration Media Collection

Collection name: **`meal_integration_media`**. Powers the "Our Ongoing Meal Integration Initiatives" gallery on the **Reimagining Nutrition** page.

### Fields

| Field Name    | Type          | Options / Notes                                                                 |
| ------------- | ------------- | -------------------------------------------------------------------------------- |
| `title`       | Text          | Required. Caption/heading for the item.                                          |
| `description` | Text          | Optional. Short blurb shown under the media.                                     |
| `media_type`  | Select        | Required, single. Options: `photo`, `video_upload`, `youtube`.                   |
| `media_file`  | File          | Required if `media_type` is `photo` or `video_upload`. MIME types: `image/jpeg,image/png,image/webp,video/mp4`. Max size ~50MB. |
| `youtube_url` | URL           | Required if `media_type` is `youtube` (e.g. `https://youtube.com/watch?v=...`).  |
| `thumbnail`   | File          | Optional. Custom poster image, mainly used for `video_upload` / `youtube` items. |
| `uploaded_by` | Text          | Optional. Name of the person/school who submitted the media.                     |
| `order`       | Number        | Optional. Controls display sequence in the grid (lower = first).                 |
| `date`        | Date          | Optional. When the initiative/event happened.                                    |

Note: `media_file` / `youtube_url` conditional requirements are enforced by convention when adding records, not by the PocketBase schema itself — always fill in `media_file` for `photo`/`video_upload` items and `youtube_url` for `youtube` items.

### Sorting
Records are fetched sorted by `order,-date` — set `order` explicitly to pin featured items to the top; items without an `order` fall back to newest-first by `date`.

### Image Specifications
Same aspect ratio and size guidance as Cover Images above (16:9, ~1200x675px, WebP/JPG/PNG, under 500KB) applies to `thumbnail`.
