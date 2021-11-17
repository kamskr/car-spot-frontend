import { useState } from 'react';
import { PaginatedData } from 'api/ApiTypes';

const usePaginatedData = <Item = any>() => {
  const [items, setItems] = useState<Item[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [version, setVersion] = useState<number>(1);
  const [errors, setErrors] = useState<string | null>(null);

  const append = (data: PaginatedData<Item[]>): void => {
    setItems((prevItems) => {
      setHasMore(data.data.length + prevItems.length < data.total_count);
      return prevItems.concat(data.data);
    });
    setVersion((prevVersion) => prevVersion + 1);
    setTotalCount(data.total_count);
  };

  const appendFromRequest = (promise: Promise<PaginatedData<Item[]>>): void => {
    setIsLoading(true);
    promise
      .then((data) => {
        append(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setErrors(e);
      });
  };

  return {
    items,
    setItems,
    isLoading,
    hasMore,
    version,
    totalCount,
    append,
    appendFromRequest,
    errors,
  };
};

export default usePaginatedData;
