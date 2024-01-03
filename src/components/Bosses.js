import React, { useEffect, useState } from 'react';
import { getAllBosses } from '../db';

const Bosses = () => {
  const [bosses, setBosses] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBosses(page);
        setBosses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getDefaultImage = () => {
    return 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/abductor-virgins-1-hq-elden-ring-wiki-guide.jpg';
  };


  return (
    <div className='bg-gray-600 p-4'>
      <h1 className="text-3xl font-bold mb-4 text-white">Todos os Boss:</h1>
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
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={handlePrevPage}
        >
          Página Anterior
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={handleNextPage}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default Bosses;
