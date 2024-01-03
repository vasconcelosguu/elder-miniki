import React, { useEffect, useState } from 'react';
import { getAllBosses } from '../db';

const Bosses = () => {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBosses();
        setBosses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getDefaultImage = () => {
    return 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/abductor-virgins-1-hq-elden-ring-wiki-guide.jpg';
  };

  return (
    <div className='bg-gray-600 p-4'>
      <h1 className="text-3xl font-bold mb-4 text-white">Bosses</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bosses.map((boss) => (
          <li key={boss.id} className="relative overflow-hidden group w-2/3">
            <a href={boss.bossUrl} className="block rounded-md overflow-hidden border border-gray-800 hover:shadow-lg">
              {boss.image ? (
                <img
                  src={boss.image}
                  alt={boss.name}
                  className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <img
                  src={getDefaultImage()}
                  alt={boss.name}
                  className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {boss.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bosses;
