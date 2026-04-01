import { createContext, useContext } from 'react';

export function useCore() {
  return useContext(CoreContext);
}

export const CoreContext = createContext<{ name: string; currency: string }>({
  name: '',
  currency: 'USD',
});
