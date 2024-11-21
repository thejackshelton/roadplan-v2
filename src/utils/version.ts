import path from "path";
import fs from 'fs-extra';
export interface Version {
	id: string;
	name: string;
}

export interface VersionMetadata {
	versions: Version[];
}

export const fetchVersionMetadata = async (): Promise<VersionMetadata> => {
	const versions = await fs.readFile(path.join(process.cwd(), 'src/routes/docs/legacy/versions.json'), 'utf-8');

	return {
		versions: JSON.parse(versions),
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
