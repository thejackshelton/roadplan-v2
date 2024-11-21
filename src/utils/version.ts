import { server$ } from '@qwik.dev/router';

export interface Version {
    id: string;
    name: string;
}

export interface VersionMetadata {
    versions: Version[];
}

// Create a server-side function to read versions.json
export const getServerVersions = server$(async (origin: string) => {
    try {
		console.log('url', origin);
        const response = await fetch(`/docs/legacy/versions.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch versions: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error reading versions:', error);
        return { versions: [] };
    }
});

export const fetchVersionMetadata = async (origin: string): Promise<VersionMetadata> => {
    try {
        // For SSR, use the server function
        if (typeof window === 'undefined') {
            return await getServerVersions(origin);
        }

        // For client-side, use fetch
        const response = await fetch(`${origin}/docs/legacy/versions.json`);
		console.log('RESPONSE', response);
        if (!response.ok) {
            throw new Error(`Failed to fetch versions: ${response.statusText}`);
        }
        
        const versions = await response.json();
		console.log('version metadata', versions);
        return { versions };
    } catch (error) {
        console.error('Error fetching version metadata:', error);
        return { versions: [] };
    }
};