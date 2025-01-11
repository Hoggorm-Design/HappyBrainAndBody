import { createContext, ReactNode, useState } from 'react';
import type { SanityClient } from '@sanity/client';
import sanityClient from '../client';

export const SanityContext = createContext<SanityClient | undefined>(undefined);

export function SanityProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => sanityClient);

  return (
    <SanityContext.Provider value={client}>
      {children}
    </SanityContext.Provider>
  );
}