import { SearchIcon } from '@/icons/search';
import React from 'react';

const SearchBar = ({ setQuery }: any) => {
  return (
    <div className="col-span-1 flex flex-col justify-center items-center w-full">
      <div className="w-full">
        <div className={'relative w-full'}>
          <SearchIcon className="absolute w-5 h-5 text-gray-800 left-3 top-3 dark:text-gray-300" />
          <input
            aria-label={'Search'}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder={'Search'}
            className="block w-full px-10 py-2 text-gray-900 placeholder:text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
