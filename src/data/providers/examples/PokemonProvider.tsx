import { PokemonContext } from '../../context/examples/PokemonContext';
import { usePokemonSource } from '../../stores/examples/pokemon_store';

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
