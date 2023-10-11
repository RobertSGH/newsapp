import { useState, useEffect } from 'react';
import {
  getPoliticsNews,
  getBusinessNews,
  getEntertainmentNews,
  getTechNews,
  // getNews,
} from '@/helpers';
import MainLayout from '@/layouts/MainLayout';
import LandingPage from './LandingPage';
import Cookies from 'js-cookie';
import TopClickedArticles from '@/components/TopClickedArticles';
import CombinedNewsSection from '@/components/CombinedNewsSection';
import SpecialNewsSection from '@/components/SpecialNewsSection';

export default function Home() {
  const [allTopics] = useState([
    'Politics',
    'Business',
    'Technology',
    'Entertainment',
  ]);
  const [newsData, setNewsData] = useState({
    politicsNews: [],
    businessNews: [],
    techNews: [],
    entertainmentNews: [],
  });

  const [selectedInterests, setSelectedInterests] = useState(null);

  useEffect(() => {
    const savedPreferences = Cookies.get('userPreferences');
    if (savedPreferences) {
      setSelectedInterests(JSON.parse(savedPreferences));
    }
  }, []);

  const fetchNews = async (topicsToFetch) => {
    const fetchFunctions = {
      Politics: getPoliticsNews,
      Business: getBusinessNews,
      Technology: getTechNews,
      Entertainment: getEntertainmentNews,
    };

    const newsDataLocal = { ...newsData }; // Local object to hold news data

    await Promise.all(
      topicsToFetch.map(async (topicName) => {
        const fetchFunction = fetchFunctions[topicName];
        const newsArticles = await fetchFunction();
        newsDataLocal[topicName.toLowerCase() + 'News'] =
          newsArticles.articles || [];
      })
    );
    setNewsData(newsDataLocal);
  };

  useEffect(() => {
    if (selectedInterests) {
      fetchNews(Object.keys(selectedInterests));
    }
  }, [selectedInterests]);

  const handleSelectionSubmit = (preferences) => {
    setSelectedInterests(preferences);
  };
  // console.log(newsData);

  return !selectedInterests ? (
    <LandingPage onSelectionSubmit={handleSelectionSubmit} />
  ) : (
    <MainLayout>
      <CombinedNewsSection
        allTopics={allTopics}
        newsData={newsData}
        selectedInterests={selectedInterests}
        fetchNews={fetchNews}
      />
      <TopClickedArticles news={newsData} />
      <SpecialNewsSection news={newsData} />
    </MainLayout>
  );
}
