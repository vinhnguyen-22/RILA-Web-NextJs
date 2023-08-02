'use client';

import { SearchIcon } from '@/icons/search';
import usePostStore from '@/store/postStore';
import classNames from 'classnames';
import React, { ChangeEvent } from 'react';

const SearchBar = ({ className }: any) => {
  const { query, setQuery } = usePostStore((state) => state);

  const handleInputClear = () => {
    setQuery('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={classNames('flex flex-col justify-center items-center w-full', className)}>
      <div className={'relative w-full'}>
        <SearchIcon className="absolute w-5 h-5 text-gray-800 left-3 top-3 dark:text-gray-300" />
        <input
          aria-label={'Search'}
          type="text"
          onChange={handleInputChange}
          placeholder={'Search'}
          className="block w-full px-10 py-2 text-gray-900 placeholder:text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
