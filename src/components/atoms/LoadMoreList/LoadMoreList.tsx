import React, { useEffect } from 'react';
import { FlatList, FlatListProps } from 'components/atoms/LoadMoreList/FlatList';

import { LoadMoreButton } from './LoadMoreButton';

interface LoadMoreListProps<Item = any> extends FlatListProps<Item> {
  hasMore?: boolean;
  isLoading?: boolean;
  loadMore?: (prev: Array<Item>) => void;
  initialLoad?: boolean;
  withLineSeparator?: boolean;
}

export const LoadMoreList = <Item,>({ data, hasMore, isLoading, loadMore, initialLoad, withLineSeparator, ...rest }: LoadMoreListProps<Item>) => {
  useEffect(() => {
    if (initialLoad === true) {
      loadMoreIfNeeded();
    }
  }, []);

  const loadMoreIfNeeded = () => {
    if (loadMore && hasMore) {
      loadMore(data);
    }
  };

  return (
    <FlatList data={data} ListFooterComponent={<LoadMoreButton hasMore={hasMore} isLoading={isLoading} loadMore={loadMoreIfNeeded} />} {...rest} />
  );
};
