import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TopClickedArticles({ news }) {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const res = await axios.get('/api/getTopClickedArticles');
        setTopArticles(res.data.articles);
      } catch (error) {
        console.error('Failed to fetch top clicked articles:', error);
      }
    };

    fetchTopArticles();
  }, []);

  // Flatten all news articles into a single array for easier lookup
  const allNewsArticles = Object.values(news)
    .flat()
    .reduce((acc, article) => {
      acc[article._id] = article;
      return acc;
    }, {});

  // console.log(allNewsArticles);

  return (
    <div className='text-white p-4 rounded-lg'>
      <h2 className='text-lg font-semibold mb-2'>Most Popular</h2>
      <ul className='space-y-4'>
        {topArticles.map((article, index) => {
          const fullArticle = allNewsArticles[article._id];
          return (
            fullArticle && (
              <li key={index} className='flex items-center'>
                <a
                  href={fullArticle.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <img
                    src={fullArticle.urlToImage}
                    alt={fullArticle.title}
                    className='w-16 h-16 object-cover rounded mr-4'
                  />
                  <div>
                    <p className='text-sm font-medium'>{fullArticle.title}</p>
                  </div>
                </a>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
