import React, { useEffect, useState } from 'react';
import { getAllClasses } from '../db';

function Items() {
  const [weapons, setweapons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllClasses();
        setweapons(response.data);
      } catch (error) {
        if (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-600 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Classes:</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {weapons.map((weapon) => (
          <li key={weapon.id} className="relative overflow-hidden group w-2/3">
            <a href={weapon.weaponUrl} className="block rounded-md overflow-hidden border border-gray-800 hover:shadow-lg">
              <img
                src={weapon.image}
                alt={weapon.name}
                className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {weapon.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
