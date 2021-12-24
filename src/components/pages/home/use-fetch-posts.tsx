import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Content } from '../../../stores/home/home.model';
import { fetchPosts, postsState } from '../../../stores/home/home.store';

interface Props {
  page: number;
}

const useFetchPosts = ({ page }:Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [posts, setPosts] = useRecoilState<Content[]>(postsState);
  // const posts = useRecoilValueLoadable<Content[] | undefined>(postsSelector(page));

  const getList = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchPosts(page);
      setPosts(data);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
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
