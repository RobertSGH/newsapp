import { useState, useEffect } from 'react';
import NewsSection from './NewsCard';
import BeatLoader from 'react-spinners/BeatLoader';

const CombinedNewsSection = ({
  allTopics,
  newsData,
  selectedInterests,
  fetchNews,
}) => {
  const [activeTab, setActiveTab] = useState(Object.keys(selectedInterests)[0]);
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = async (tab) => {
    setIsLoading(true);
    setActiveTab(tab);
    const newsKey = tab.toLowerCase() + 'News';

    if (!newsData[newsKey]?.length) {
      await fetchNews([tab]).finally(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      setIsLoading(true);
      await fetchNews([activeTab]);
      setIsLoading(false);
    };
    initialFetch();
  }, []);

  return (
    <div>
      <div className='flex space-x-3 text-sm'>
        {allTopics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 rounded-lg ${
              activeTab === topic ? 'bg-gray-500 text-white' : ''
            }`}
            onClick={() => handleTabClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      {isLoading ? (
        <BeatLoader color={'green'} loading={isLoading} />
      ) : (
        <NewsSection
          title={activeTab}
          news={newsData[activeTab.toLowerCase() + 'News']}
        />
      )}
    </div>
  );
};

export default CombinedNewsSection;
