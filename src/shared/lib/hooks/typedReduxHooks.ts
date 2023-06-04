import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/config/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
