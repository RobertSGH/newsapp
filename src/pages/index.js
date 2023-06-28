import { useState, useEffect } from 'react';
import { getNews } from '@/helpers';
import MainLayout from '@/layouts/MainLayout';
import NewsSection from '@/components/NewsCard';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      if (newsData && newsData.articles) {
        setNews(newsData.articles);
      }
    };

    fetchNews();
  }, []);

  return (
    <MainLayout>
      {/* We use NewsSection instead of mapping through each news item */}
      <NewsSection news={news} />

      {/* Add more sections as needed */}
    </MainLayout>
  );
}
