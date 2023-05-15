import { FilterType } from '@/types';

export const createQueryString = (filter: FilterType) => {
  return new URLSearchParams(filter).toString();
};
