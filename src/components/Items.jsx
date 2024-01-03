import React, { useEffect, useState } from 'react';
import { getAllItems } from '../db';
import ModalItem from '../modals/ModalItem';

function Items() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItems(page);
        setItems(response.data);
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
    setPage((prevPage) => prevPage - 1);
  };

  const openModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div className="bg-gray-600 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Items</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id} className="relative overflow-hidden group w-2/3">
            <button
              type="button"
              onClick={() => openModal(item.id)}
              className="block rounded-md overflow-hidden border border-gray-800 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.name}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handlePrevPage}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Página Anterior
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Próxima Página
        </button>
      </div>
      {selectedItemId && (
        <ModalItem
          itemId={selectedItemId}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Items;
