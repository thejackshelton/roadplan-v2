import fs from 'fs-extra';
import path from 'path';
import kleur from 'kleur';

const version = process.argv[2];

if (!version) {
  console.error(kleur.red('Please provide a version number: npm run docs:version <version>'));
  process.exit(1);
}

async function createVersionedDocs(version: string): Promise<void> {
  const siteDir = process.cwd();
  const docsPath = 'src/routes/docs';
  
  if (!/^\d+\.\d+(\.\d+)?(-\w+)?$/.test(version)) {
    throw new Error('Invalid version format. Please use semantic versioning (e.g., 1.3.0)');
  }

  const versionsFilePath = path.join(siteDir, 'src/routes/docs/legacy/versions.json');
  const versions: string[] = await fs.pathExists(versionsFilePath)
    ? JSON.parse(await fs.readFile(versionsFilePath, 'utf-8'))
    : [];

  if (versions.includes(version)) {
    throw new Error(`Version ${version} already exists`);
  }

  const docsDir = path.resolve(siteDir, docsPath);
  const versionedDocsDir = path.join(siteDir, 'src/routes/docs/legacy', `v${version}`);

  if (!(await fs.pathExists(docsDir))) {
    throw new Error(`No docs found in ${docsDir}`);
  }

  const entries = await fs.readdir(docsDir);
  for (const entry of entries) {
    if (entry !== 'legacy') {
      const sourcePath = path.join(docsDir, entry);
      const targetPath = path.join(versionedDocsDir, entry);
      await fs.copy(sourcePath, targetPath);
    }
  }

  versions.unshift(version);
  await fs.outputFile(versionsFilePath, JSON.stringify(versions, null, 2) + '\n');

  console.log(kleur.green().bold(`✓ Version ${version} created successfully`));
}

createVersionedDocs(version).catch((err) => {
  console.error(kleur.red(err.message));
  process.exit(1);
});