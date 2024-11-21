export interface Version {
	id: string;
	name: string;
}

export interface VersionMetadata {
	defaultVersion: string;
	versions: Version[];
}

export const fetchVersionMetadata = async (): Promise<VersionMetadata> => {
	return {
		defaultVersion: "v2",
		versions: [
			{ id: "v1", name: "Version 1" },
			{ id: "v2", name: "Version 2" },
		],
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
