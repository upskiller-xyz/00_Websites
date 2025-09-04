import { useState, useEffect } from 'react';
import { fetchTextWithFallback } from '../utils/fetchWithFallback';

interface UseMarkdownResult {
  content: string;
  loading: boolean;
  error: string | null;
}

export const useMarkdown = (scalewayPath: string, localPath: string): UseMarkdownResult => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const text = await fetchTextWithFallback(scalewayPath, localPath);
        setContent(text);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load markdown content';
        console.error('Markdown fetch error:', errorMessage);
        setError(errorMessage);
        setContent('');
      } finally {
        setLoading(false);
      }
    };

    if (scalewayPath && localPath) {
      fetchMarkdown();
    }
  }, [scalewayPath, localPath]);

  return { content, loading, error };
};