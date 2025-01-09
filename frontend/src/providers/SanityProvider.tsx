import { createContext, ReactNode } from 'react';
import type { SanityClient } from '@sanity/client';
import sanityClient from '../client';

export const SanityContext = createContext<SanityClient | undefined>(undefined);

export function SanityProvider({ children }: { children: ReactNode }) {
  return (
    <SanityContext.Provider value={sanityClient}>
      {children}
    </SanityContext.Provider>
  );
}