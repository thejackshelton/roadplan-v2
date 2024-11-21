
export interface Version {
	id: string;
	name: string;
}

export interface VersionMetadata {
	versions: Version[];
}

export const fetchVersionMetadata = async (origin: string): Promise<VersionMetadata> => {
    const response = await fetch(`${origin}/docs/legacy/versions.json`);
    const versions = await response.json();

    return {
        versions,
    };
};

// const paths = import.meta.glob("/src/routes/versions/**/*", { eager: true });

// let versions = Object.keys(paths)
//   .filter((path) => path.indexOf("/src/routes/versions/") === 0)
//   .map((path) => {
//     path = path.replace("/src/routes/versions/", "");
//     const folders = path.split("/");
//     return folders[0];
//   })
//   .filter((path) => path.indexOf(".mdx") === -1)
//   .sort((a, b) => (b === "latest" ? 1 : a > b ? -1 : 1));

// versions = [...new Set(versions)];
