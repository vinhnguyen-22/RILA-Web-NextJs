import { Tag } from '@/types/cms';
import { create } from 'zustand';

interface PostStoreState {
  page: number;
  setPage: (pageNumber: number) => void;

  query: string;
  setQuery: (query: string) => void;
  selected: Tag[];
  active: Tag[];
  setSelected: (selected: Tag[]) => void;
  setActive: (active: Tag[]) => void;
}

const usePostStore = create<PostStoreState>()((set) => ({
  page: 1,
  setPage: (pageNumber: number) => set((state: any) => ({ page: pageNumber })),
  query: '',
  setQuery: (query: string) => set((state: any) => ({ query: query })),
  selected: [],
  active: [],
  setSelected: (selected: Tag[]) => set(() => ({ selected })),
  setActive: (active: Tag[]) => set(() => ({ active })),
}));
export default usePostStore;
