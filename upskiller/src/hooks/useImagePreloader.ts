import { useState } from 'react';
import AssetPathManager from '../utils/AssetPathManager';

export const useImagePreloader = () => {
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});
  const [loadedUrls, setLoadedUrls] = useState<{ [key: string]: string }>({});

  const preloadImage = (memberId: string) => {
    if (!isLoading[memberId] && !loadedUrls[memberId]) {
      setIsLoading(prev => ({ ...prev, [memberId]: true }));
      
      // Try cloud image first
      const cloudImg = new Image();
      cloudImg.onload = () => {
        const cloudUrl = AssetPathManager.getActionImage(memberId);
        setLoadedUrls(prev => ({ ...prev, [memberId]: cloudUrl }));
        setIsLoading(prev => ({ ...prev, [memberId]: false }));
      };
      
      cloudImg.onerror = () => {
        console.warn(`Failed to load action image from cloud for ${memberId}, trying local fallback`);
        
        // Fallback to local image
        const localImg = new Image();
        localImg.onload = () => {
          const localUrl = `/images/actions/action_${memberId}.png`;
          setLoadedUrls(prev => ({ ...prev, [memberId]: localUrl }));
          setIsLoading(prev => ({ ...prev, [memberId]: false }));
        };
        
        localImg.onerror = () => {
          console.error(`Failed to load action image from both cloud and local for ${memberId}`);
          setIsLoading(prev => ({ ...prev, [memberId]: false }));
        };
        
        localImg.src = `/images/actions/action_${memberId}.png`;
      };
      
      cloudImg.src = AssetPathManager.getActionImage(memberId);
    }
  };

  const getImageUrl = (memberId: string) => {
    return loadedUrls[memberId] || AssetPathManager.getActionImage(memberId);
  };

  return { isLoading, preloadImage, getImageUrl };
};