import { pb, StoryRecord } from "@/lib/pocketbase";

export async function getStories(page = 1, perPage = 20) {
    try {
        const resultList = await pb.collection('stories').getList<StoryRecord>(page, perPage, {
            sort: '-published_date',
        });
        return resultList.items;
    } catch {
        // console.error("Failed to fetch stories:", error);
        return [];
    }
}

export async function getStoryBySlug(slug: string) {
    try {
        const story = await pb.collection('stories').getFirstListItem<StoryRecord>(`slug="${slug}"`);
        return story;
    } catch {
        return null;
    }
}
