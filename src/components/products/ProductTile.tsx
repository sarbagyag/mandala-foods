import Image from "next/image";
import Link from "next/link";
import { getPbImageUrl, ProductRecord } from "@/lib/pocketbase";

/** The product's own colour when set (must be a hex code), otherwise brand green. */
export function productAccent(product: Pick<ProductRecord, "theme_color">) {
  return product.theme_color?.startsWith("#") ? product.theme_color : "#00a54f";
}

export function productImageUrl(product: ProductRecord) {
  return getPbImageUrl(product.collectionId, product.id, product.product_image);
}

/** Compact product card used on the homepage range strip. */
export function ProductTile({ product }: { product: ProductRecord }) {
  const accent = productAccent(product);
  const img = productImageUrl(product);

  return (
    <Link
      href={`/products#${product.category}`}
      className="group flex h-full flex-col focus-visible:outline-none"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.04] transition-shadow duration-300 group-hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.35)] group-focus-visible:ring-2 group-focus-visible:ring-primary"
        style={{ backgroundColor: `${accent}14` }}
      >
        {img && (
          <Image
            src={img}
            alt={`${product.name} — ${product.one_liner}`}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
          />
        )}
        {product.category_tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {product.category_tag}
          </span>
        )}
      </div>
      <div className="mt-5 px-1">
        <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        {product.one_liner && <p className="mt-1 text-[0.95rem] leading-snug text-gray-600">{product.one_liner}</p>}
      </div>
    </Link>
  );
}
