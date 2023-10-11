import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/lib/UserContext';

const Header = () => {
  const logo = '/NeW-removebg-preview.png';
  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const currentMonth = today.toLocaleDateString('en-US', {
    month: 'long',
  });
  const currentYear = today.getFullYear();
  const currentNumDay = today.getDate();
  const formattedDate = `${currentDay}, ${currentMonth} ${currentNumDay}, ${currentYear}`;

  const { user, isLoading, logoutUser } = useContext(UserContext);

  const handleLogout = async () => {
    await logoutUser();
  };

  useEffect(() => {
    window.renderWeatherWidget(
      'widget',
      'https://weatherapp-o38ejph7l-robertsgh.vercel.app/api'
    );
  }, []);

  return (
    <header className='flex items-center justify-between px-5 py-3'>
      <div className='flex justify-start items-center w-1/3'>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
          {formattedDate}
        </p>
      </div>

      <Link href='/' className='w-1/3 flex justify-center'>
        <img src={logo} alt='logo' className='responsive-logo' />
      </Link>

      <div className='w-1/2 flex justify-center'>
        <div id='widget'></div>
      </div>

      <div className='flex flex-col items-end justify-center md:items-center md:flex-row md:space-x-2'>
        {isLoading ? (
          <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
            Loading...
          </p>
        ) : user ? (
          <>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
              Welcome, {user.displayName}
            </p>
            <button
              className='md:ml-2 text-xs sm:text-sm md:text-base lg:text-lg'
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link href='/SignIn'>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
              Sign in
            </p>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
