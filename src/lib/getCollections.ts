import data from '@/data/collections.json';
import type { Collection } from '@/types/collection';

export const getCollections = (): Collection[] => {
  return data;
};
