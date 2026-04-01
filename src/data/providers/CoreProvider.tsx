import { CoreContext } from "../context/CoreContext";

export function CoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <CoreContext.Provider value={{ name: '', currency: 'USD' }}>
      {children}
    </CoreContext.Provider>
  );
}
