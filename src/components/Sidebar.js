import Link from 'next/link';

const Sidebar = ({ categories }) => {
  return (
    <aside className='sticky top-0 h-screen p-4'>
      <h2 className='text-lg font-bold mb-4'>Categories</h2>
      <ul className='space-y-2'>
        {categories &&
          categories.map((category) => (
            <li key={category}>
              <Link href={`/category/${category}`}>
                <p className='block p-2 rounded hover:bg-gray-200'>
                  {category}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
