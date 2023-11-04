import React from 'react';

const TeamCard = ({ name, role, imageSrc, onClick }) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 group transform scale-100 hover:scale-110 transition-transform cursor-pointer">
      <div className="border border-gray-300 shadow p-4 bg-white">
        <img src={imageSrc} alt={name} className="rounded-full w-20 h-20 mx-auto mb-3" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
