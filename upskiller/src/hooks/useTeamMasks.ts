import { useState, useEffect } from 'react';
import AssetPathManager from '../utils/AssetPathManager';

export interface TeamMask {
  id: string;
  name: string;
  polygonPoints: string;
}

const teamMaskIds = ['alejandro', 'christoph', 'libny', 'stasja'];

export const useTeamMasks = () => {
  const [teamMasks, setTeamMasks] = useState<TeamMask[]>([]);
  const [masksLoaded, setMasksLoaded] = useState(false);

  useEffect(() => {
    const loadMasks = async () => {
      try {
        const maskPromises = teamMaskIds.map(async (id) => {
          let svgText = '';
          
          try {
            // Try cloud first
            const response = await fetch(AssetPathManager.getMaskSvg(id));
            if (!response.ok) throw new Error(`Cloud fetch failed: ${response.status}`);
            svgText = await response.text();
          } catch (cloudError) {
            console.warn(`Failed to load mask from cloud for ${id}, trying local fallback:`, cloudError);
            
            // Fallback to local file
            try {
              const localResponse = await fetch(`/images/mask_${id}.svg`);
              if (!localResponse.ok) throw new Error(`Local fetch failed: ${localResponse.status}`);
              svgText = await localResponse.text();
            } catch (localError) {
              console.error(`Failed to load mask from both cloud and local for ${id}:`, localError);
              return null; // Skip this mask
            }
          }
          
          // Parse SVG and extract polygon points
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
          const polygon = svgDoc.querySelector('polygon');
          const points = polygon?.getAttribute('points') || '';
          
          return {
            id,
            name: id.charAt(0).toUpperCase() + id.slice(1),
            polygonPoints: points
          };
        });
        
        const masks = (await Promise.all(maskPromises)).filter(mask => mask !== null) as TeamMask[];
        setTeamMasks(masks);
        setMasksLoaded(true);
      } catch (error) {
        console.error('Error loading SVG masks:', error);
        setMasksLoaded(true); // Still set to true to avoid infinite loading
      }
    };

    loadMasks();
  }, []);

  return { teamMasks, masksLoaded };
};