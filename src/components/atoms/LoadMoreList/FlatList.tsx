import React, { ReactNode } from 'react';

export interface FlatListProps<Item = any> {
  data: Array<Item>;
  renderItem: ({ item, index }: { item: Item; index: number }) => ReactNode;
  /**
   * Used to extract a unique key for a given item at the specified index.
   * Key is used for caching and as the react key to track item re-ordering.
   * The default extractor checks item.key, then item.id, and then falls back to using the index.
   */
  keyExtractor?: (item: Item, index: number) => string;
  /**
   * Rendered in between each item, but not at the top or bottom.
   */
  ItemSeparatorComponent?: ReactNode;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
}

const defaultKeyExtractor = (item: any, index: number) => {
  return (item?.key || item?.id || index).toString();
};

export const FlatList = <Item,>({
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
  ItemSeparatorComponent,
  ListEmptyComponent,
  ListFooterComponent,
  ListHeaderComponent,
}: FlatListProps<Item>) => {
  return (
    <>
      {ListHeaderComponent}
      {data.map((item, index) => (
        <div key={keyExtractor(item, index)}>
          {renderItem({ item, index })}
          {index + 1 < data.length && ItemSeparatorComponent}
        </div>
      ))}
      {data.length === 0 && ListEmptyComponent}
      {ListFooterComponent}
    </>
  );
};
