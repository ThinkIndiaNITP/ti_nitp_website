// TeamCard.js

import React from 'react';

const TeamCard = ({ name, role, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
