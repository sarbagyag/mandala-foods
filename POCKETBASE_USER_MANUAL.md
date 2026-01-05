# PocketBase Data Entry Manual

Quick reference guide for entering data into Mandala Foods PocketBase collections.

---

## 1. PRODUCTS Collection

### Purpose
Stores all product information displayed on the products page. Products are sorted by `category_order` first, then `product_order`.

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **name** | Text | Product name | "Mango Fruit Smash" |
| **category** | Select | Product category | One of: `spread`, `smash`, `splash`, `innovation` |
| **category_tag** | Text | Display tag for category | "Fruit Smash", "Fruit Spread" |
| **one_liner** | Text | Short product tagline | "100% Real Fruit, Zero Guilt" |
| **excerpt** | Text | Product description | Longer description of the product |
| **product_image** | File | Product image | Upload JPG/PNG |
| **theme_color** | Text | Hex color code | "#FF6B35" (include the #) |
| **features** | JSON | Product features array | See JSON format below |
| **category_order** | Number | Category sort order | 1, 2, 3, 4... |
| **product_order** | Number | Product sort within category | 1, 2, 3... |

### Optional Fields
- **bg_color_class** - CSS class for background color
- **order** - Legacy field (use category_order/product_order instead)

### Features JSON Format
```json
[
  {
    "title": "100% Real Fruit",
    "subtitle": "No artificial flavors or colors"
  },
  {
    "title": "High Fiber",
    "subtitle": "Supports healthy digestion"
  }
]
```

### Category Order & Product Order Explained
- **category_order**: Controls which category appears first (1 = first, 2 = second, etc.)
- **product_order**: Controls the order of products WITHIN the same category (1 = first, 2 = second, etc.)
- Products are sorted by: `category_order` first, then `product_order` second

**Example:**
```
Category: Smash (category_order: 1)
  - Product A (product_order: 1) ← Shows first in Smash category
  - Product B (product_order: 2) ← Shows second in Smash category

Category: Spread (category_order: 2)
  - Product C (product_order: 1) ← Shows first in Spread category
```

### How to Add a Product
1. Click "New record" in the products collection
2. Fill in all required fields
3. Upload product image
4. Set `category_order` to position the category (1-4 typically)
5. Set `product_order` to position within that category
6. Enter features as JSON array (copy format above)
7. Save

---

## 2. STORIES Collection

### Purpose
Stores blog posts and stories displayed on "Our Stories" page. Sorted by `published_date` (newest first).

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **title** | Text | Story title | "Meet Ram: A Farmer's Journey" |
| **slug** | Text | URL-friendly identifier | "meet-ram-farmer-journey" (lowercase, hyphens only) |
| **excerpt** | Text | Short summary for preview | Brief description for story cards |
| **content** | Text/Rich | Full story content | Complete article text |
| **cover_image** | File | Cover image | Upload JPG/PNG |
| **published_date** | Date | Publication date | 2025-01-15 (YYYY-MM-DD) |

### Optional Fields
- **author** - Author name (e.g., "Mandala Foods Team")
- **is_featured** - Boolean (true/false) for featured stories
- **external_link** - URL if story is hosted elsewhere
- **category** - Story category (e.g., "Farmers", "Impact", "HORECA")

### Slug Rules
- Must be unique
- Use lowercase letters only
- Replace spaces with hyphens (-)
- No special characters
- Example: "Our Impact Story 2025" → "our-impact-story-2025"

### How to Add a Story
1. Click "New record" in the stories collection
2. Enter title and create a slug from it (lowercase, hyphens)
3. Write excerpt (2-3 sentences max)
4. Add full content in the content field
5. Upload cover image
6. Set published_date (YYYY-MM-DD format)
7. Optionally set author, category, is_featured
8. Save

---

## 3. IDENTITY Collection

### Purpose
Stores team member, board member, and expert advisor information for the "Who We Are" page.

### Recommended Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **name** | Text | Full name | "Dr. Robin Shrestha" |
| **role** | Text | Job title/position | "Chief Executive Officer" |
| **category** | Select | Member type | One of: `board`, `staff`, `expert` |
| **image** | File | Profile photo | Upload JPG/PNG (square preferred) |
| **linkedIn** | URL | LinkedIn profile URL | https://www.linkedin.com/in/username/ |

### Optional Fields
- **organization** - For expert advisors (e.g., "Tufts University")
- **bio** - Short biography
- **order** - Display order within category

### Category Types
- **board** - Board members/founders
- **staff** - Team members/employees
- **expert** - Expert advisors/consultants

### How to Add a Team Member
1. Click "New record" in the identity collection
2. Enter name and role
3. Select category (board/staff/expert)
4. Upload profile image (square images work best)
5. Add LinkedIn URL if available
6. For experts, add organization field
7. Save

---

## Quick Tips

### Image Guidelines
- **Products**: Use high-quality product photos with transparent or clean backgrounds
- **Stories**: Use 16:9 ratio images (1200x675px recommended)
- **Team**: Use square headshots (500x500px minimum)

### Sorting & Order
- **Products**: Sorted by `category_order`, then `product_order`
- **Stories**: Sorted by `published_date` (newest first)
- **Identity**: May need custom order field

### Required vs Optional
- Fill ALL required fields or the record won't display properly
- Optional fields enhance the content but aren't necessary

### Testing Your Entries
After adding/editing:
1. Save the record in PocketBase
2. Refresh your website
3. Navigate to the relevant page to verify it displays correctly

---

## Common Mistakes to Avoid

1. **Products**: Forgetting to set both `category_order` AND `product_order`
2. **Stories**: Using spaces or capitals in slugs
3. **Stories**: Wrong date format (must be YYYY-MM-DD)
4. **Products**: Invalid JSON in features field (use the exact format shown)
5. **All**: Forgetting the # symbol in hex colors
6. **All**: Uploading images that are too large (compress first)

---

**PocketBase Admin URL**: https://cms.mandalafoods.co/_/
