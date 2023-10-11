import axios from 'axios';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const updateClickCount = async (articleId) => {
  try {
    await axios.post('/api/updateClick', { articleId });
  } catch (error) {
    console.error('Failed to update click count:', error);
  }
};

const NewsSection = ({ news }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(news && news.length > 0);
  }, [news]);

  const handleArticleClick = (articleId) => {
    updateClickCount(articleId);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      {isLoaded ? (
        <div className='rounded overflow-hidden shadow-lg m-4'>
          <h2 className='text-2xl font-semibold mb-7'>Top news</h2>
          <div className='thick-line'></div>

          {news[0]?.title !== '[Removed]' &&
            news[0]?.description !== '[Removed]' && (
              <>
                <div className='px-6 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`${news[0]?.url}`}
                    onClick={() => handleArticleClick(news[0]?._id)} // Added onClick here
                  >
                    <img
                      className='object-cover transition-transform duration-500 ease-in-out transform hover:scale-105'
                      src={news[0]?.urlToImage}
                      alt={news[0]?.title}
                    />
                    <div className='font-bold text-xl mb-2'>
                      {news[0]?.title}
                    </div>
                    <p className='text-blue-300 text-base'>
                      {news[0]?.description}
                    </p>
                  </a>
                </div>
              </>
            )}
          {news[1]?.title !== '[Removed]' &&
            news[1]?.description !== '[Removed]' && (
              <div className='rounded overflow-hidden shadow-lg m-4'>
                <div className='px-6 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`${news[1]?.url}`}
                    onClick={() => handleArticleClick(news[1]?._id)} // Added onClick here
                  >
                    <img
                      className='object-cover transition-transform duration-500 ease-in-out transform hover:scale-105'
                      src={news[1]?.urlToImage}
                      alt={news[1]?.title}
                    />
                    <div className='font-bold text-xl mb-2'>
                      {news[1]?.title}
                    </div>
                    <p className='text-blue-300 text-base'>
                      {news[1]?.description}
                    </p>
                  </a>
                </div>
              </div>
            )}
          {news[2]?.title !== '[Removed]' &&
            news[2]?.description !== '[Removed]' && (
              <div className='rounded overflow-hidden shadow-lg m-4'>
                <div className='px-6 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`${news[2]?.url}`}
                    onClick={() => handleArticleClick(news[2]?._id)} // Added onClick here
                  >
                    <img
                      className='object-cover transition-transform duration-500 ease-in-out transform hover:scale-105'
                      src={news[2]?.urlToImage}
                      alt={news[2]?.title}
                    />
                    <div className='font-bold text-xl mb-2'>
                      {news[2]?.title}
                    </div>
                    <p className='text-blue-300 text-base'>
                      {news[2]?.description}
                    </p>
                  </a>
                </div>
              </div>
            )}
          {news[3]?.title !== '[Removed]' &&
            news[3]?.description !== '[Removed]' && (
              <div className='rounded overflow-hidden shadow-lg m-4'>
                <div className='px-6 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`${news[3]?.url}`}
                    onClick={() => handleArticleClick(news[3]?._id)} // Added onClick here
                  >
                    <img
                      className='object-cover transition-transform duration-500 ease-in-out transform hover:scale-105'
                      src={news[3]?.urlToImage}
                      alt={news[3]?.title}
                    />
                    <div className='font-bold text-xl mb-2'>
                      {news[3]?.title}
                    </div>
                    <p className='text-blue-300 text-base'>
                      {news[3]?.description}
                    </p>
                  </a>
                </div>
              </div>
            )}
        </div>
      ) : (
        <BeatLoader color={'green'} />
      )}
      {isLoaded ? (
        <div className='rounded overflow-hidden shadow-lg m-4'>
          <h2 className='text-2xl font-semibold mb-7'>In the Mix</h2>{' '}
          {/* Added "In the Mix" title */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='thick-line'></div>

            {news
              .slice(4, 13)
              .filter(
                (item) =>
                  item.title !== '[Removed]' && item.description !== '[Removed]'
              )
              .map((item, index) => (
                <div
                  key={index}
                  className='rounded overflow-hidden shadow-lg m-2'
                  onClick={() => handleArticleClick(item._id)} // Added onClick here
                >
                  <div className='px-3 py-2'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={item.url}
                      onClick={() => handleArticleClick(item._id)}
                    >
                      <img
                        className='w-full h-24 object-cover'
                        src={item.urlToImage}
                        alt={item.title}
                      />
                      <div className='font-bold text-md mb-1'>{item.title}</div>
                      <p className='text-blue-300 text-sm'>
                        {item.description}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <BeatLoader />
      )}
    </div>
  );
};

export default NewsSection;
