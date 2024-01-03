import React, { useEffect, useState } from 'react';
import { getAllItems } from '../db';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItems();
        setItems(response.data);
      } catch (error) {
        if (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-600 p-4'>
      <h1 className="text-3xl font-bold mb-4 text-white">Items</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id} className="relative overflow-hidden group w-2/3">
            <a href={item.itemUrl} className="block rounded-md overflow-hidden border border-gray-800 hover:shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
