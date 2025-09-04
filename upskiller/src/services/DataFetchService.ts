import { DataFile } from '../constants/data-files.enums';
import { fetchJsonWithFallback } from '../utils/fetchWithFallback';

export class DataFetchService {
  private static cache = new Map<string, any>();

  static async fetchData<T>(fileName: DataFile): Promise<T> {
    if (this.cache.has(fileName)) {
      return this.cache.get(fileName);
    }

    try {
      const data = await fetchJsonWithFallback(
        `https://upskiller-website.s3.fr-par.scw.cloud/upskiller/dynamic/${fileName}`,
        `/dynamic/${fileName}`
      );
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