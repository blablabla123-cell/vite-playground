import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { App } from './App.tsx';
import { ArticlesPage } from './pages';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    {/* <App /> */}
    <ArticlesPage />
  </StrictMode>,
);
