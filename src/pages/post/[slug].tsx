import fs from 'fs';
import path from 'path';
import { getFieldFromMarkdown, markdownToHtml } from '../../lib/markdownToHtml';
import { GetStaticPaths } from 'next';

const Post = ({ content }: { content: string }) => {

    return (
        <div className="container mx-auto pt-20">
            <article className="prose lg:prose-xl mx-auto">
                {/* Add your blog post content here */}
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </div>
    );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const postsDirectory = path.join(process.cwd(), 'contents');
    const filenames = fs.readdirSync(postsDirectory);

    const paths = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: false, // Can be set to 'blocking' or 'true' if you want to enable fallback behavior
    };
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
    // Adjust the path to where your markdown files are located
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'contents', `${slug}.md`);
    let content = await getFieldFromMarkdown(filePath, 'content');
    content = await markdownToHtml(content);
    return {
      props: {
        content,
      },
    };
  }