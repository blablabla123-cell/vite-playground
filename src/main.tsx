import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Root } from './components/Root';

import './index.css';
import { CoreProvider } from './data/providers/CoreProvider';
import { PokemonProvider } from './data/providers/examples/PokemonProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { router } from './routes/Navigation';

const rootElement = document.getElementById('root');

if (rootElement) {
  const queryClient = new QueryClient();

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CoreProvider>
          <PokemonProvider>
            <RouterProvider router={router} />
            <TanStackRouterDevtools router={router} />
            {/* <Root /> */}
            {/* <PokemonExamplePage /> */}
          </PokemonProvider>
        </CoreProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
