import { MenuItem } from '@/components/ui/menu/menu.interface';
export default function Menu() {
    
    const menu:MenuItem[] = [
        {
            label: 'Home',
            path: '/',
            id: 'home'
        },
        {
            label: 'Backend',
            path: '/category/backend',
            id: 'backend'
        },
        {
            label: 'Frontend',
            path: '/category/frontend',
            id: 'frontend'
        },
        {
            label: 'English',
            path: '/app/english',
            id: 'english'
        }
    ]

    return menu;
}