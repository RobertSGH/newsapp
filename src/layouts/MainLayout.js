import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className='container'>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 w-full px-4 sm:px-6 md:px-8 mx-auto max-w-screen-xl md:flex md:space-x-8'>
          <div className='w-full md:w-3/4 lg:w-4/5'>{children}</div>
          <aside className='hidden md:block md:w-1/4 lg:w-1/5'>
            <Sidebar />
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
