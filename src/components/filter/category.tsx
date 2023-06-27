'use client';

import { useState } from 'react';
import { isTouchDevice } from '@/utils/is-touch-device';

export default function Category({ category }: { category: string }) {
  const [categories, setCategories] = useState({
    selected: [],
    active: [],
  });
  // const setPage = setPage(1);
  // const checked = categories.selected.includes(category);
  // const active = categories.active.includes(category);

  const handleCategoryClick = (category: string) => () => {
    setCategories((prevCategories: any) => {
      if (prevCategories.selected.includes(category)) {
        return {
          ...prevCategories,
          selected: prevCategories.selected.filter((value: any) => value !== category),
        };
      } else {
        return {
          ...prevCategories,
          selected: [...prevCategories.selected, category],
        };
      }
    });
  };

  return <button onClick={handleCategoryClick(category)}>{category}</button>;
}
