import axios from 'axios';
import { atom } from 'recoil';
import { Content } from './home.model';

export const postsState = atom<Content[]>({
  key: '@pages/home/posts-state',
  default: [],
});

export const currentCursorInternalState = atom<number>({
  key: '@pages/home/current-cursor-Internal-state',
  default: 1,
});
export const lastFetchPageState = atom<number>({
  key: '@pages/home/last-fetch-page-state',
  default: 0,
});

export const lastScrollYState = atom<number>({
  key: '@pages/home/last-scroll-y-state',
  default: 0,
});

export const fetchPosts = async (page: number): Promise<Content[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contents/list/${page}`);
    return response.data?.content;
  } catch (e) {
    console.error(e);
  }
  return [];
};

// export const postsSelector = selectorFamily({
//   key: '@pages/home/posts',
//   get: (page: number) => async ({ get }) => {
//     return fetchPosts(page);
//   },
// });
