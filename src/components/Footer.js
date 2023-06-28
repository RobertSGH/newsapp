import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-5'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-lg font-bold mb-3'>Sections</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/category/world'>
                <p className='text-gray-300 hover:text-white'>World</p>
              </Link>
            </li>
            <li>
              <Link href='/category/sports'>
                <p className='text-gray-300 hover:text-white'>Sports</p>
              </Link>
            </li>
            <li>
              <Link href='/category/business'>
                <p className='text-gray-300 hover:text-white'>Business</p>
              </Link>
            </li>
            //... add more as per your requirements
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-3'>Legal</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/privacy'>
                <p className='text-gray-300 hover:text-white'>Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href='/terms'>
                <p className='text-gray-300 hover:text-white'>
                  Terms of Service
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-3'>Company</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/about'>
                <p className='text-gray-300 hover:text-white'>About Us</p>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <p className='text-gray-300 hover:text-white'>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        // ... add more sections as per your requirements
      </div>

      <div className='flex items-center justify-between mt-10 border-t border-gray-700 pt-5'>
        <div className='flex items-center space-x-4'>
          <Link href='/'>
            <p className='text-2xl font-bold'>My News App</p>
          </Link>
          <span className='text-gray-400'>© {new Date().getFullYear()}</span>
        </div>

        <div className='flex items-center space-x-4'>
          <a href='#'>
            <img src='' alt='Facebook' className='w-5 h-5' />
          </a>
          <a href='#'>
            <img src='' alt='Twitter' className='w-5 h-5' />
          </a>
          <a href='#'>
            <img src='' alt='Instagram' className='w-5 h-5' />
          </a>
          //... add more social links as per your requirements
        </div>
      </div>
    </footer>
  );
};

export default Footer;
