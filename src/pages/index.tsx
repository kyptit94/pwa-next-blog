

import List from '@/components/ui/list';
import Card from '@/components/ui/card';
import fs from 'fs';
import path from 'path';
import { getFieldFromMarkdown } from '@/lib/markdownToHtml';
import PostInterface from '@/models/post.interface';
import getImagePath from '@/lib/getImagePath';

export default function Home({ posts } : { posts: PostInterface[] }) {
    return (
        <div>
            <h1>Home</h1>
            <div className="container mx-auto pt-20">
                <List col={4} gap={4}>
                    {posts.map((item) => (
                        <Card key={"card" + item} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            title={item.title}
                            path={item.slug}
                            expert={item.expert}
                            image={getImagePath(item.image)} />
                    ))}
                </List>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const contentDir = path.join(process.cwd(), 'contents');
    const files = fs.readdirSync(contentDir).slice(0, 10);
    const postSlugs = files.filter((file) => file.endsWith('.md'));
    var posts: PostInterface[] = []
    postSlugs.map(async (file) => {
        const filePath = path.join(process.cwd(), 'contents', `${file}`);
        let name = file.replace(".md", "")
        let slug = `post/${name}`
        let category = getFieldFromMarkdown(filePath, 'category');
        let title = getFieldFromMarkdown(filePath, 'title');
        let image = getFieldFromMarkdown(filePath, 'image');
        let date = getFieldFromMarkdown(filePath, 'date');
        let expert = getFieldFromMarkdown(filePath, 'expert');
        posts.push({
            title, category, expert, date, image, content: "", slug
        })
    })

    // Process markdownFiles as needed, for example, read the content or metadata
    // For simplicity, this example just counts the files

    // Pass data to the page via props
    return {
        props: {
            title: 'Home',
            posts, // Example prop
        },
    };
}