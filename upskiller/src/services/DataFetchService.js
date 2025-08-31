export class DataFetchService {
    static cache = new Map();
    static async fetchData(fileName) {
        if (this.cache.has(fileName)) {
            return this.cache.get(fileName);
        }
        try {
            const response = await fetch(`/${fileName}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
            }
            const data = await response.json();
            this.cache.set(fileName, data);
            return data;
        }
        catch (error) {
            console.error(`Error loading ${fileName}:`, error);
            throw error;
        }
    }
    static clearCache(fileName) {
        if (fileName) {
            this.cache.delete(fileName);
        }
        else {
            this.cache.clear();
        }
    }
}
