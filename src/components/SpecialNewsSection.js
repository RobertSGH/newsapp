import React from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { useState, useEffect } from 'react';

// Reuse the updateClickCount function or import it if it's shared
const updateClickCount = async (articleId) => {
  try {
    await axios.post('/api/updateClick', { articleId });
  } catch (error) {
    console.error('Failed to update click count:', error);
  }
};

const SpecialNewsSection = ({ news }) => {
  const allNews = [
    ...news.politicsNews,
    ...news.businessNews,
    ...news.techNews,
    ...news.entertainmentNews,
  ];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(allNews && allNews.length > 0);
  }, [allNews]);

  const handleArticleClick = (articleId) => {
    updateClickCount(articleId);
  };

  return (
    <div className='news-section'>
      {isLoaded ? (
        <>
          <h2 className='col-span-full text-2xl font-semibold mb-7'>
            Editor's Choice
          </h2>
          <div className='thick-line'></div>
          {allNews.slice(14, 25).map((item, index) => {
            return item.title !== '[Removed]' &&
              item.description !== '[Removed]' ? (
              <div
                key={index}
                className={`article-card ${
                  index < 3 ? 'main-article' : 'minor-article'
                }`}
                onClick={() => handleArticleClick(item._id)}
              >
                <div className='px-3 py-2'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={item.url}
                    onClick={() => handleArticleClick(item._id)}
                  >
                    <img src={item.urlToImage} alt={item.title} />
                    <div className='font-bold text-md mb-1'>{item.title}</div>
                    {index >= 3 && (
                      <p className='text-blue-300 text-sm'>
                        {item.description}
                      </p>
                    )}
                  </a>
                </div>
              </div>
            ) : null;
          })}
        </>
      ) : (
        <BeatLoader color={'green'} />
      )}
      <div className='thick-line'></div>
    </div>
  );
};

export default SpecialNewsSection;
