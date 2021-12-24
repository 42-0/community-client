import axios from 'axios';
import {
  atom, selector, selectorFamily, useSetRecoilState,
} from 'recoil';
import { Content } from './home.model';

export const postsState = atom<Content[]>({
  key: '@pages/home/posts-state',
  default: [],
});

export const currentCursorInternalState = atom<number>({
  key: '@pages/home/current-cursor-Internal-state',
  default: 1,
});

export const lastScrollYState = atom<number>({
  key: '@pages/home/last-scroll-y-state',
  default: 0,
});

let postItems: Content[] = [];
export const fetchPosts = async (page: number): Promise<Content[] > => {
  try {
    const response = await axios.get(`http://52.78.54.195:3000/contents/list/${page}`);
    const result: Content[] = [...postItems, ...response.data?.content];
    postItems = result;
    return result;
  } catch (e) {
    console.error(e);
  }
  // return undefined;
  return postItems;
};

export const postsSelector = selectorFamily({
  key: '@pages/home/posts',
  get: (page: number) => async ({ get }) => {
    return fetchPosts(page);
  },
});
