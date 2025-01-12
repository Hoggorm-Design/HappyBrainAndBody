import { useContext } from 'react';
import { SanityClient } from '@sanity/client';
import { SanityContext } from '../providers/SanityProvider';

export function useSanity(): SanityClient {
  const context = useContext(SanityContext);
  if (!context) {
    throw new Error('useSanity must be used within a SanityProvider');
  }
  return context;
}
