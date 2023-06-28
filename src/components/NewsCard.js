import Link from 'next/link';

const NewsSection = ({ news }) => {
  console.log(news);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      <div className='rounded overflow-hidden shadow-lg m-4'>
        {/* Main news with larger image and text */}
        <img
          className='object-cover transition-transform duration-500 ease-in-out transform hover:scale-110'
          src={news[0]?.urlToImage}
          alt={news[0]?.title}
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{news[0]?.title}</div>
          <p className='text-blue-300 text-base'>{news[0]?.description}</p>
          <Link href={`/news/${news[0]?.slug}`}>
            <p className='mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
              Read More
            </p>
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {/* Subsequent news items */}
        {news.slice(1, 5).map((item, index) => (
          <div key={index} className='rounded overflow-hidden shadow-lg m-2'>
            <img
              className='w-full h-24 object-cover'
              src={item.urlToImage}
              alt={item.title}
            />
            <div className='px-3 py-2'>
              <div className='font-bold text-md mb-1'>{item.title}</div>
              <p className='text-blue-300 text-sm'>{item.description}</p>
              <Link href={`/news/${item.slug}`}>
                <p className='mt-1 inline-block bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs'>
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
