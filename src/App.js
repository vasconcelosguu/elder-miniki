// App.js

import React, { useState } from 'react';
import Weapons from './components/Weapons';
import Bosses from './components/Bosses';
import Classes from './components/Classes';
import Items from './components/Items';

const App = () => {
  const [currentPage, setCurrentPage] = useState('items');

  const renderPage = () => {
    switch (currentPage) {
      case 'weapons':
        return <Weapons />;
      case 'bosses':
        return <Bosses />;
      case 'classes':
        return <Classes />;
      default:
        return <Items />;
    }
  };

  return (
    <main>
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-around">
          <ul className="flex">
            <li>
              <button
                className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md ${
                  currentPage === 'items' ? 'border-b-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentPage('items')}
              >
                Items
              </button>
            </li>
            <li>
              <button
                className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md ${
                  currentPage === 'bosses' ? 'border-b-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentPage('bosses')}
              >
                Bosses
              </button>
            </li>
            <li>
              <button
                className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md ${
                  currentPage === 'weapons' ? 'border-b-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentPage('weapons')}
              >
                Weapons
              </button>
            </li>
            <li>
              <button
                className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md ${
                  currentPage === 'classes' ? 'border-b-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentPage('classes')}
              >
                Classes
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="mx-auto">
        {renderPage()}
      </section>
    </main>
  );
}

export default App;
