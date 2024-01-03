import React, { useState } from 'react';
import { getItem, getAllItems } from './db/index.js';
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
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentPage('items')}>Items</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('bosses')}>Bosses</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('weapons')}>Weapons</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('classes')}>Classes</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;