import React, { useState } from 'react';
import Weapons from './components/Weapons';
import Bosses from './components/Bosses';
import Classes from './components/Classes';
import Items from './components/Items';
import Navigation from './components/Navigation';

function App() {
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
      <h1 className="flex text-white text-5xl font-extrabold bg-gray-800 mx-auto">
        Elder
        <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Miniki</span>
      </h1>

      <header className="bg-gray-800 py-4">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <section className="mx-auto">
        {renderPage()}
      </section>
    </main>
  );
}

export default App;
