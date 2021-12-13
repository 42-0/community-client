import axios from 'axios';
import {
  atom, RecoilState, selector, selectorFamily, useRecoilState, waitForNone,
} from 'recoil';
import { Content } from './home.model';

export const postsState = atom<Content[]>({
  key: '@pages/home/postsState',
  default: [],
});
export const currentCursorInternal = atom<number>({
  key: '@pages/home/currentCursorInternal',
  default: 1,
});

let postItems: Content[] = [];
export const fetchPosts = async (page: number): Promise<Content[] | undefined> => {
  try {
    const response = await axios.get(`http://52.78.54.195:3000/contents/list/${page}`);

    // console.log('!!!!!!! postItems ::', postItems);
    // console.log('!!!!!!! response.data?.content ::', response.data?.content);

    const result: Content[] = [...postItems, ...response.data?.content];
    postItems = result;
    return result;
  } catch (e) {
    console.error(e);
  }
  return undefined;
};

export const postsSelector = selectorFamily({
  key: '@pages/home/posts',
  get: (page: number) => async ({ get }) => {
    return fetchPosts(page);
  },

});

// export const postsSelector = selector({
//   key: '@pages/home/posts',
//   get: ({ get }) => get(currentCursorInternal),
//   set: async ({ get, set }) => {
//     const current = get(currentCursorInternal);
//     const next = current + 1;
//
//     const newData = await fetchPosts(next);
//     console.log('postsSelector - newData :::', newData);
//     set(currentCursorInternal, next);
//     set(postsState, (existing) => [...existing, ...newData]);
//   },
// });

/**
 e.g

 export const templateSetSelector = selectorFamily({
  key: '@messages/template-set',
  get: (no: number) => async () => {
    return fetchTemplateSet(no);
  },
});

 export const historiesOfTemplateSetSelector = selectorFamily({
  key: '@pages/messenger/template-set/histories',
  get: (templateSetNo: number) => async ({ get }) => {
    return fetchHistoriesOfTemplateSet(templateSetNo);
  },
});

 function TemplateSetDetails({ templateSetNo }: Props) {
  const templateSet = useRecoilValue(templateSetSelector(templateSetNo));
   이 아래에서는 templateSet 이 존재하는것이 보장됨
}

 <Suspense fallback={<Skeleton />}>
 <TemplateSetDetails />
 </Suspense>

 * */
