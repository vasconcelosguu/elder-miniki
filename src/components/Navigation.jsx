import React from 'react';
import PropTypes from 'prop-types';

function Navigation({ currentPage, setCurrentPage }) {
  const pages = ['items', 'bosses', 'weapons', 'classes'];

  return (
    <nav className="container mx-auto flex justify-around">
      <ul className="flex">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md ${
                currentPage === page ? 'border-b-2 border-blue-500' : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navigation;
