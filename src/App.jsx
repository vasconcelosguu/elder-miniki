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
