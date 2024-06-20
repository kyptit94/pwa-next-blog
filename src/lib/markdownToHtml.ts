import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export function getFieldFromMarkdown(filePath: string, field: string) {
  // Ensure the file path is correct
  const fullPath = path.resolve(filePath);

  // Read the content of the Markdown file
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the front matter
  const parsedContent = matter(fileContent);

  // Extract the category field
  const rField = field == 'content' ? parsedContent[field] : (parsedContent.data[field] ?? "");

  return rField;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
