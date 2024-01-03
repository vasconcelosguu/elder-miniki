import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBossDetails } from '../db';

function ModalItem({ bossID, onClose }) {
  const [bossDetails, setBossDetails] = useState(null);

  useEffect(() => {
    const fetchbossDetails = async () => {
      try {
        const response = await getBossDetails(bossID);
        setBossDetails(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchbossDetails();
  }, [bossID]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {bossDetails ? (
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="bg-white w-full border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{bossDetails.name}</h3>
              <button
                type="button"
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {bossDetails.description}
              </p>
              <p>
                <strong>Region: </strong>
                {bossDetails.region}
              </p>
              <p>
                <strong>Location: </strong>
                {bossDetails.location}
              </p>
              <p>
                <strong>Drops: </strong>
                {bossDetails.drops.map((item) => item).join(', ')}
              </p>
              <p>
                <strong>Health: </strong>
                {bossDetails.healthPoints}
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blueGray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            Carregando...
          </p>
          <button
            className="text-blueGray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

ModalItem.propTypes = {
  bossID: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalItem;
