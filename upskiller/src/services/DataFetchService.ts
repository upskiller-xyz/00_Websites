import { DataFile } from '../constants/data-files.enums';

export class DataFetchService {
  private static cache = new Map<string, any>();

  static async fetchData<T>(fileName: DataFile): Promise<T> {
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
    } catch (error) {
      console.error(`Error loading ${fileName}:`, error);
      throw error;
    }
  }

  static clearCache(fileName?: DataFile): void {
    if (fileName) {
      this.cache.delete(fileName);
    } else {
      this.cache.clear();
    }
  }
}