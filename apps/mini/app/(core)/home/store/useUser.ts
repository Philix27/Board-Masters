'use client';
import { useRecoilValue } from 'recoil';
import { userAtom } from './user';

export const useUser = () => {
  const value = useRecoilValue(userAtom);
  return value;
};
