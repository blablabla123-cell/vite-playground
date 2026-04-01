import { useReducer, useCallback, useMemo } from 'react';
import type { Pokemon } from '../../../types/example/Pokemon';
import { useQuery } from '@tanstack/react-query';

type PokemonState = {
  search: string;
};

type PokemonAction = { type: 'SET_SEARCH'; payload: string };

export function usePokemonSource(): {
  pokemon: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  const { data: pokemon } = useQuery<Pokemon[]>({
    queryKey: ['pokemon'],
    queryFn: () =>
      fetch('/vite-playground/public/pokemon.json').then((response) =>
        response.json(),
      ),
    initialData: [],
  });

  const [{ search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case 'SET_SEARCH':
          return { ...state, search: action.payload };
        default:
          return state;
      }
    },
    {
      search: '',
    },
  );

  const setSearch = useCallback((search: string) => {
    dispatch({ type: 'SET_SEARCH', payload: search });
  }, []);

  const filteredPokemon = useMemo(() => {
    return pokemon
      .filter((p) => p.name.toLowerCase().includes(search.toLocaleLowerCase()))
      .slice(0, 20);
  }, [pokemon, search]);

  const sortedPokemon = useMemo(() => {
    return [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredPokemon]);

  return {
    pokemon: sortedPokemon,
    search,
    setSearch,
  };
}
