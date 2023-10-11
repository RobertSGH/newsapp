import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='text-gray-300 py-12 px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-lg font-bold mb-3'>Resources</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/Faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/Blog'>Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-3'>Legal</h3>
          <ul className='space-y-2'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-3'>Company</h3>
          <ul className='space-y-2'>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className='flex items-center justify-between mt-10 border-t border-gray-700 pt-5'>
        <div className='flex items-center space-x-4'>
          <span className='text-2xl font-bold text-white'>The Insight</span>
          <span className='text-gray-400'>© {new Date().getFullYear()}</span>
        </div>

        <div className='flex items-center space-x-4 text-white'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
