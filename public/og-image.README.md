# Missing: public/og-image.jpg

`siteConfig.ogImage` and every metadata helper in `src/domains/seo/metadata.ts`
reference `https://mandalafoods.co/og-image.jpg` as the default/fallback
Open Graph and Twitter card image, but no file exists at `public/og-image.jpg`
yet. Until it's added, social share previews and any story without a
`cover_image` will point at a broken image URL.

**To do:** add `public/og-image.jpg` — 1200×630px, JPEG, ideally under 300KB,
featuring the Mandala Foods logo/branding on-brand background. Delete this
note once the real file is in place.
