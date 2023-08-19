import React from 'react';
import { UserAuth } from './Context';

const NewsCategories = () => {

    const {setSearch} = UserAuth()
  const categories = [
    'Politics',
    'Technology',
    'Entertainment',
    'Sports',
    'Health',
    'Business',
    'Science',
    'Environment',
    'World',
    'Local',
  ];

  return (
    <div className="news-categories px-5 py-3 rounded-r-lg">
      <h2 className='text-xl items-center font-bold font-sans mb-8 shadow-xl py-2 px-1 shadow-gray-900'>News Categories</h2>
      <ul className='flex flex-col items-start pl-10 mb-4 justify-center gap-3 '>
        {categories.map((category, index) => (
          <li className='cursor-pointer hover:text-stone-300 hover:scale-110' key={index} onClick={() => setSearch(category)} >{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategories;
