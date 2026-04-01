import { useContext } from "react";
import { PokemonContext } from "../../context/examples/PokemonContext";

export function usePokemon() {
  return useContext(PokemonContext);
}
