

import List from '../components/ui/list';
import Card from '../components/ui/card';
import { Container } from 'postcss';
export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div className="container mx-auto pt-20">
                <List col={4} gap={4}>
                    {[1,2,3,4,5,6,7,8].map((item) => (
                        <Card className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            title="Noteworthy technology acquisitions 2021"
                            expert="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                            image="https://flowbite.com/docs/images/blog/image-1.jpg" />
                    ))}
                </List>
            </div>
        </div>
    );
}