import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserAccountState = atom({
  key: 'UserAccountState', // Unique ID (with respect to other atoms/selectors)
  default: null, // Default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});