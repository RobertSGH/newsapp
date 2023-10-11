import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const FAQ = () => {
  return (
    <MainLayout>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Frequently Asked Questions</h1>
        <div className='rounded p-4 shadow'>
          <h2 className='text-2xl font-semibold mb-2'>
            Question 1: What is this about?
          </h2>
          <p className='text-gray-400 mb-4'>
            Answer: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='rounded p-4 shadow mt-4'>
          <h2 className='text-2xl font-semibold mb-2'>
            Question 2: How does this work?
          </h2>
          <p className='text-gray-400 mb-4'>
            Answer: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
