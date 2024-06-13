import Navbar from '../../ui/nav';
import Logo from '../../layout/logo';
import Menu from '../../ui/menu';
import MobileButton from '@/components/ui/menu/mobile-button';

export default function Header() {
  return (
    <header>
      <Navbar className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <MobileButton />
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <Menu
          parentClass="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          childClass="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" 
          menuItems={[
              { label: 'Home', path: '/', id: 'home'},
              { label: 'About', path: '/about', id: 'about' },
              { label: 'Contact', path: '/contact', id: 'contact'},
            ]} className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" />
        </div>
      </div>
      </Navbar>
    </header>
    );
}
            