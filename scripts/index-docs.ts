import 'dotenv/config';
import { algoliasearch } from 'algoliasearch';
import fg from 'fast-glob';
import matter from 'gray-matter';
import removeMarkdown from 'remove-markdown';
import { readFile } from 'node:fs/promises';
import { relative } from 'node:path';

type DocRecord = {
  objectID: string;
  title: string;
  description?: string;
  content: string;
  path: string;
  section?: string;
};

const docsDir = 'content/docs';

const appId = process.env.NUXT_PUBLIC_ALGOLIA_APP_ID;
const adminApiKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.NUXT_PUBLIC_ALGOLIA_INDEX_NAME ?? 'pages';

if (!appId || !adminApiKey) {
  throw new Error('Missing Algolia credentials');
}

const client = algoliasearch(appId, adminApiKey);

function removeOrderPrefix(value: string): string {
  return value.replace(/(^|\/)\d+\./g, '$1');
}

function toRoute(filePath: string): string {
  return (
    '/' +
    removeOrderPrefix(relative(docsDir, filePath))
      .replace(/\\/g, '/')
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')
  );
}

function cleanContent(value: string): string {
  return removeMarkdown(value)
    .replace(/::[a-zA-Z-]+(\{.*?\})?/g, '')
    .replace(/::/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = await fg(`${docsDir}/**/*.md`);

const records: DocRecord[] = [];

for (const file of files) {
  const raw = await readFile(file, 'utf-8');
  const parsed = matter(raw);

  const route = toRoute(file);

  records.push({
    objectID: route,
    title: parsed.data.title ?? route.split('/').pop() ?? 'Untitled',
    description: parsed.data.description,
    content: cleanContent(parsed.content),
    path: route,
    section: removeOrderPrefix(file.split('/')[1] ?? ''),
  });
}

await client.saveObjects({
  indexName,
  objects: records,
});

console.log(`Indexed ${records.length} documents into ${indexName}`);
