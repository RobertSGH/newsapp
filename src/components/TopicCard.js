import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

export default function TopicCard({ topic, onSelection }) {
  const [selected, setSelected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (topic.icon.type) {
      setIsLoaded(true);
    }
  }, [topic.icon]);

  const handleSelect = () => {
    const newSelectedState = !selected;
    setSelected(newSelectedState);
    onSelection(topic.name, newSelectedState);
  };

  return (
    <div
      onClick={handleSelect}
      className={`flex flex-col items-center justify-center p-4 border-2 rounded-md cursor-pointer transition-colors duration-300 ${
        selected ? 'border-green-500' : 'border-gray-300'
      }`}
    >
      <div className='w-full h-full flex items-center justify-center'>
        {isLoaded ? topic.icon : <BeatLoader color='#123abc' />}
      </div>
      <h2 className='mt-2 text-xl text-center'>{topic.name}</h2>
    </div>
  );
}
