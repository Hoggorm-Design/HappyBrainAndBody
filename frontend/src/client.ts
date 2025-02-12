import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: 'ns4mcpeo',
    dataset: 'production',
    apiVersion: 'v2022-03-07',
    useCdn: typeof window !== 'undefined',
});

export default sanityClient;