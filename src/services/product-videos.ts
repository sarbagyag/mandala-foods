import { pb, ProductVideoRecord } from "@/lib/pocketbase";

export async function getProductVideos() {
    try {
        const records = await pb.collection('product_videos').getFullList<ProductVideoRecord>({
            filter: 'is_active = true',
            sort: 'order,-created',
            expand: 'product',
        });
        return records;
    } catch {
        return [];
    }
}
