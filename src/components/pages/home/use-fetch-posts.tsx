import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Content } from '../../../stores/home/home.model';
import {
  fetchPosts, lastFetchPageState,
  postsState,
} from '../../../stores/home/home.store';

interface Props {
  page: number;
}

const useFetchPosts = ({ page }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [lastFetchPage, setLastFetchPage] = useRecoilState<number>(lastFetchPageState);

  const [posts, setPosts] = useRecoilState<Content[]>(postsState);
  // const posts = useRecoilValueLoadable<Content[] | undefined>(postsSelector(page));

  const getList = useCallback(async () => {
    setIsLoading(true);
    try {
      const data: Content[] = await fetchPosts(page);
      setPosts((currentValue: Content[]) => [...currentValue, ...data]);
      setLastFetchPage(page);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (page === lastFetchPage) {
      return;
    }

    (async () => {
      await getList();
    })();
  }, [page]);

  return {
    isLoading,
    isError,
    posts,
  };
};

export default useFetchPosts;
