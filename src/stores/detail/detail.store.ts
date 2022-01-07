import axios from 'axios';
import {
  selectorFamily,
} from 'recoil';
import { IDetail } from './detail.model';

export const fetchPost = async (id: number): Promise<IDetail | undefined> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contents/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
  return undefined;
};

export const postSelector = selectorFamily({
  key: '@pages/detail/post',
  get: (id: number) => async ({ get }) => {
    if (!id) {
      return;
    }
    return fetchPost(id);
  },
});
