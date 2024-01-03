import React, { useEffect, useState } from 'react';
import { getAllBosses, getBossDetails } from '../db';
import ModalBoss from '../modals/ModalBoss';

function Bosses() {
  const [bosses, setBosses] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedBossId, setSelectedBossId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (bossId) => {
    setSelectedBossId(bossId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBossId(null);
    setIsModalOpen(false);
  };

  const getDefaultImage = () => 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

  return (
    <div className="bg-gray-600 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Todos os Boss:</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bosses.map((boss) => (
          <li key={boss.id} className="relative overflow-hidden group w-2/3">
            <button
              type="button"
              onClick={() => openModal(boss.id)}
              className="block rounded-md overflow-hidden border border-gray-800 hover:shadow-lg"
            >
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
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={handlePrevPage}
        >
          Página Anterior
        </button>
        <button
          type="button"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={handleNextPage}
        >
          Próxima Página
        </button>
      </div>
      {isModalOpen && (
        <ModalBoss
          bossID={selectedBossId}
          onClose={closeModal}
          getDetailsFunction={getBossDetails}
        />
      )}
    </div>
  );
}

export default Bosses;
