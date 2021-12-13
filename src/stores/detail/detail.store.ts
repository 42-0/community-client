import axios from 'axios';
import {
  selectorFamily,
} from 'recoil';
import { Detail } from './detail.model';

export const fetchPost = async (id: number): Promise<Detail | undefined> => {
  try {
    const response = await axios.get(`http://52.78.54.195:3000/contents/${id}`);
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
