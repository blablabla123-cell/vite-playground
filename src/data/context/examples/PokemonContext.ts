import { createContext } from 'react';
import type { usePokemonSource } from '../../stores/examples/pokemon_store';

export const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource>
>({} as unknown as ReturnType<typeof usePokemonSource>);
