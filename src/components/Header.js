import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex items-center justify-between px-5 py-3 bg-gray-900 text-white'>
      <p href='/'>
        <a className='text-2xl font-bold'>My News App</a>
      </p>

      {/* For larger screens */}
      <nav className='hidden md:block'>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/category/world'>
              <p className='hover:text-gray-300'>World</p>
            </Link>
          </li>
          <li>
            <Link href='/category/sports'>
              <p className='hover:text-gray-300'>Sports</p>
            </Link>
          </li>
          <li>
            <Link href='/category/business'>
              <p className='hover:text-gray-300'>Business</p>
            </Link>
          </li>
          //... add more as per your requirements
        </ul>
      </nav>

      {/* For smaller screens */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className='w-6 h-6' />
          ) : (
            <Bars3Icon className='w-6 h-6' />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className='fixed z-10 top-0 right-0 w-1/2 h-full bg-gray-800 md:hidden'>
          <ul className='flex flex-col items-start justify-center h-full space-y-4 px-5 py-3'>
            <li>
              <Link href='/category/world'>
                <p className='hover:text-gray-300'>World</p>
              </Link>
            </li>
            <li>
              <Link href='/category/sports'>
                <p className='hover:text-gray-300'>Sports</p>
              </Link>
            </li>
            <li>
              <Link href='/category/business'>
                <p className='hover:text-gray-300'>Business</p>
              </Link>
            </li>
            //... add more as per your requirements
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
