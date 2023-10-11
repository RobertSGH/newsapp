import React, { useState } from 'react';
import axios from 'axios';
import MainLayout from '@/layouts/MainLayout';
import { auth } from '../firebase';

const FetchEverythingPage = () => {
  const [params, setParams] = useState({
    q: '',
    from: '',
    to: '',
    language: '',
    sortBy: '',
    pageSize: '',
    collectionName: '',
  });
  const [headlineParams, setHeadlineParams] = useState({
    country: '',
    category: '',
    pageSize: '',
    collectionName: '',
  });

  const handleChange = (event) => {
    setParams((prevParams) => ({
      ...prevParams,
      [event.target.name]: event.target.value,
    }));
  };

  const handleHeadlineChange = (event) => {
    setHeadlineParams((prevParams) => ({
      ...prevParams,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const idToken = await auth.currentUser.getIdToken(true);
      const response = await axios.post('/api/fetchEverything', params, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleHeadlineSubmit = async (event) => {
    event.preventDefault();

    try {
      const idToken = await auth.currentUser.getIdToken(true);
      const response = await axios.post(
        '/api/fetchAndSaveNews',
        headlineParams,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit} className='p-6 space-y-4 rounded shadow-md'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <label className='block'>
            <span className='text-yellow-500'>Query:</span>
            <input
              required
              type='text'
              name='q'
              value={params.q}
              onChange={handleChange}
              className='mt-1 block bg-gray-600 w-full rounded-md border-gray-300 shadow-sm'
            />
          </label>
          <label className='block'>
            <span className='text-yellow-500'>From Date:</span>
            <input
              required
              type='date'
              name='from'
              value={params.from}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <label className='block'>
            <span className='text-yellow-500'>To Date:</span>
            <input
              required
              type='date'
              name='to'
              value={params.to}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Language:</span>
            <select
              required
              type='text'
              name='language'
              value={params.language}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            >
              <option value=''>Select language</option>
              <option value='ar'>Arabic</option>
              <option value='de'>German</option>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
              <option value='fr'>French</option>
              <option value='he'>Greek</option>
              <option value='it'>Italian</option>
              <option value='nl'>Dutch</option>
              <option value='pt'>Polish</option>
              <option value='ru'>Russian</option>
            </select>
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Sort By:</span>
            <select
              required
              type='text'
              name='sortBy'
              value={params.sortBy}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            >
              <option value=''>Sort by:</option>
              <option value='relevancy'>Relevancy</option>
              <option value='popularity'>Popularity</option>
              <option value='publishedAt'>PublishedAt</option>
            </select>
          </label>

          <label className='block'>
            <span className='text-yellow-500'>Page Size:</span>
            <input
              required
              type='number'
              name='pageSize'
              value={params.pageSize}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Collection Name:</span>
            <input
              required
              type='text'
              name='collectionName'
              value={params.collectionName}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <button
            type='submit'
            className='w-full py-2 px-4 text-center bg-yellow-500 text-white rounded hover:bg-gray-700'
          >
            Fetch Everything News
          </button>
        </div>
      </form>
      <form
        onSubmit={handleHeadlineSubmit}
        className='p-6 space-y-4 rounded shadow-md'
      >
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <label className='block'>
            <span className='text-yellow-500'>Country:</span>
            <select
              required
              type='text'
              name='country'
              value={headlineParams.country}
              onChange={handleHeadlineChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            >
              <option value=''>Select Country</option>
              <option value='ar'>Saudi Arabia</option>
              <option value='de'>Germany</option>
              <option value='gb'>United Kingdom</option>
              <option value='us'>United States</option>
              <option value='es'>Spain</option>
              <option value='fr'>France</option>
              <option value='gr'>Greece</option>
              <option value='it'>Italy</option>
              <option value='nl'>Netherlands</option>
              <option value='pt'>Polish</option>
              <option value='ru'>Russia</option>
            </select>
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Category:</span>
            <select
              type='text'
              name='category'
              value={headlineParams.category}
              onChange={handleHeadlineChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
              required
            >
              <option value=''>Select Category</option>
              <option value='business'>Business</option>
              <option value='entertainment'>Entertainment</option>
              <option value='general'>General</option>
              <option value='health'>Health</option>
              <option value='science'>Science</option>
              <option value='sports'>Sports</option>
              <option value='technology'>Technology</option>
            </select>
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Page Size:</span>
            <input
              required
              type='number'
              name='pageSize'
              value={headlineParams.pageSize}
              onChange={handleHeadlineChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <label className='block'>
            <span className='text-yellow-500'>Collection Name:</span>
            <input
              required
              type='text'
              name='collectionName'
              value={headlineParams.collectionName}
              onChange={handleHeadlineChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-600'
            />
          </label>
          <button
            type='submit'
            className='w-full py-2 px-4 text-center bg-yellow-500 text-white rounded hover:bg-gray-700'
          >
            Fetch Headlines News
          </button>
        </div>
      </form>
    </MainLayout>
  );
};

export default FetchEverythingPage;
