import { pb, ProductRecord } from "@/lib/pocketbase";

export async function getProducts() {
    try {
        const records = await pb.collection('products').getFullList<ProductRecord>({
            sort: 'order',
        });
        return records;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
