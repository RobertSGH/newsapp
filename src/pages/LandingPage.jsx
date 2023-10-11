import React, { useState, useContext } from 'react';
import { UserContext } from '@/lib/UserContext';
import TopicCard from '@/components/TopicCard';
import MonitorsIconSVG from '@/components/animations/MonitorsIconSVG';
import MobileIconsSVG from '@/components/animations/MobileIconsSVG';
import PhoneScrollSVG from '@/components/animations/PhoneScrollSVG';
import PersonStandSVG from '@/components/animations/PersonStandSVG';
import { savePreferencesToCookies } from '@/helpers';
import BeatLoader from 'react-spinners/BeatLoader.js';

const topics = [
  { id: 1, name: 'Politics', icon: <PersonStandSVG /> },
  { id: 2, name: 'Business', icon: <PhoneScrollSVG /> },
  { id: 3, name: 'Technology', icon: <MonitorsIconSVG /> },
  { id: 4, name: 'Entertainment', icon: <MobileIconsSVG /> },
];

const LandingPage = ({ onSelectionSubmit }) => {
  const [selectedInterests, setSelectedInterests] = useState({});
  const [selectError, setSelectError] = useState(null);
  const { user, isLoading, error } = useContext(UserContext);

  const handleTopicSelection = (topicName, isSelected) => {
    setSelectedInterests((prevInterests) => {
      if (isSelected) {
        return { ...prevInterests, [topicName]: true };
      } else {
        const { [topicName]: _, ...rest } = prevInterests;
        return rest;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(selectedInterests).some((isSelected) => isSelected)) {
      savePreferencesToCookies(selectedInterests);
      onSelectionSubmit(selectedInterests);
    } else {
      setSelectError('Please select at least one interest.');
    }
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <BeatLoader color='#123abc' />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      {/* Hero Section */}
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
            Welcome to The Insight
          </h1>
          <p className='mt-4 text-lg sm:text-xl'>
            Your source for the latest news! Select your interests
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-8'>
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onSelection={handleTopicSelection}
                isSelected={selectedInterests[topic.name]}
              />
            ))}
          </div>

          {selectError && <p className='text-red-600'>{selectError}</p>}

          <div className='flex justify-center mt-8'>
            <a
              href='#'
              onClick={handleSubmit}
              className='w-full sm:w-auto px-4 py-2 m-2 text-lg font-bold text-white bg-gray-400 rounded hover:bg-black'
            >
              Save and Go!
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <footer className='py-4 sm:py-6 mt-auto'>
        <div className='container px-4 mx-auto text-center'>
          <p>© 2023 NewsApp. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
