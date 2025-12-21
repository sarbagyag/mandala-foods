import { pb, IdentityRecord } from "@/lib/pocketbase";

/**
 * Fetch identity record by username
 * @param username - The username to search for (e.g., "robin", "sophiya")
 * @returns Identity record or null if not found
 */
export async function getIdentityByUsername(username: string): Promise<IdentityRecord | null> {
    try {
        const identity = await pb.collection('identity').getFirstListItem<IdentityRecord>(
            `username="${username.toLowerCase()}" && is_active=true`
        );
        return identity;
    } catch {
        return null;
    }
}
