import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './components/Root';

import './index.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
