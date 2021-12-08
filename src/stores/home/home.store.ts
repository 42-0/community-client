import axios from 'axios';
import { selector } from 'recoil';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('http://52.78.54.195:3000/contents');
    return response;
    // return response.data;
  } catch (e) {
    console.error(e);
  }
  return undefined;
};

export const postsSelector = selector({
  key: '@pages/home/posts',
  get: async ({ get }) => {
    return fetchPosts();
  },
});

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
