import PocketBase from 'pocketbase';

async function testConnection() {
    // Use the URL provided by the user
    const pb = new PocketBase('http://127.0.0.1:8090');

    try {
        console.log("Attempting to fetch stories...");
        const resultList = await pb.collection('stories').getList(1, 20);
        console.log("Success!");
        console.log("Total items:", resultList.totalItems);
        console.log("Items:", JSON.stringify(resultList.items, null, 2));
    } catch (error) {
        console.error("Error fetching stories:");
        console.error("Status:", error.status);
        console.error("Message:", error.message);
        // console.error("Data:", JSON.stringify(error.data, null, 2));

        if (error.status === 404) {
            console.log("\n--- DIAGNOSIS ---");
            console.log("Status 404 means 'Not Found'.");
            console.log("1. Check if the collection 'stories' actually exists.");
            console.log("2. Check if the URL is correct (http://127.0.0.1:8090).");
        } else if (error.status === 403) {
            console.log("\n--- DIAGNOSIS ---");
            console.log("Status 403 means 'Forbidden'.");
            console.log("Please check your PocketBase API Rules for the 'stories' collection.");
            console.log("Click on the 'Settings' (gear icon) next to the 'stories' collection.");
            console.log("Ensure the 'List/Search' and 'View' rules are empty (public) or configured correctly.");
        } else if (error.status === 0) {
            console.log("\n--- DIAGNOSIS ---");
            console.log("Status 0 usually means Connection Refused or Network Error.");
            console.log("Is PocketBase running? Try visiting http://127.0.0.1:8090/_/ in your browser.");
        }
    }
}

testConnection();
