import React from 'react';

// const TeamCard = ({ name, role, imageSrc, onClick }) => {
//   return (
//     <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 group transform scale-100 hover:scale-110 transition-transform cursor-pointer">
//       <div className="border border-gray-300 shadow p-4 bg-white">
//         <img src={imageSrc} alt={name} className="rounded-full w-20 h-20 mx-auto mb-3" />
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <p className="text-gray-600">{role}</p>
//       </div>
//     </div>
//   );
// };

///////////////////****************************** *///////////////////
const TeamCard = ({ name, role, imageSrc, onClick }) => {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-[2%] m-[2%]">
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={imageSrc} alt={name}/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{role}</span>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LinkedIn</a>
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
            </div>
            
        </div>
    </div>

  );
};
export default TeamCard;
