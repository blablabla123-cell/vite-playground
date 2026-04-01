import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { PokemonPage } from '../pages/examples/PokemonPage';
import { Root } from '../components/Root';
import { PokemonDetailPage } from '../pages/examples/PokemonDetail';

const rootRoute = createRootRoute({
  component: () => (
    <div className='mx-auto max-w-3xl'>
      <nav className='m-3 p-3 gap-3 border-2 border-gray-300 rounded-lg'>
        <Link to='/' className='mr-3'>
          Home
        </Link>
        <Link to='/pokemon'>Pokemon</Link>
      </nav>
      <Outlet />
    </div>
  ),
  notFoundComponent: () => (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Root,
});

const pokemonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pokemon',
  component: PokemonPage,
});

const pokemonDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pokemon/$pokemonId',
  component: PokemonDetailPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  pokemonRoute,
  pokemonDetailRoute,
]);

export const router = createRouter({
  basepath: '/vite-playground',
  routeTree,
});
