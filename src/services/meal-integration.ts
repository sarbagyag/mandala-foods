import { pb, MealIntegrationMediaRecord } from "@/lib/pocketbase";

export async function getMealIntegrationMedia(page = 1, perPage = 50) {
    try {
        const resultList = await pb.collection('meal_integration_media').getList<MealIntegrationMediaRecord>(page, perPage, {
            sort: 'order,-date',
        });
        return resultList.items;
    } catch {
        return [];
    }
}
