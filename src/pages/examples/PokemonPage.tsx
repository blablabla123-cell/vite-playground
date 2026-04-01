import { Link } from '@tanstack/react-router';
import { usePokemon } from '../../data/hooks/examples/usePokemon';

export function SearchBox() {
  const { search, setSearch } = usePokemon();

  return (
    <input
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder='Search...'
      className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2'
    />
  );
}

export function PokemonPage() {
  const { pokemon } = usePokemon();
  return (
    <div className='mx-auto max-2-3xl'>
      <h1>Pokemon Example Page</h1>
      <SearchBox />
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
        {...pokemon.map((p) => (
          <Link
            key={p.id}
            to={`/pokemon/${p.id}`}
          >
            <li className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
              <div className='flex-1 flex flex-col p-8'>
                <img
                  className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                  alt=''
                />
                <h3 className='mt-6 text-gray-900 text-sm font-medium'>
                  {p.name}
                </h3>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
