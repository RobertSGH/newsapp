import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const Blog = () => {
  return (
    <MainLayout>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Blog</h1>
        <div className='rounded p-4 shadow'>
          <h2 className='text-2xl font-semibold mb-2'>
            Article 1: Getting Started
          </h2>
          <p className='text-gray-400 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quas asperiores quasi doloremque.
          </p>
        </div>
        <div className='rounded p-4 shadow mt-4'>
          <h2 className='text-2xl font-semibold mb-2'>
            Article 2: Advanced Tips
          </h2>
          <p className='text-gray-400 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quas asperiores quasi doloremque.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
