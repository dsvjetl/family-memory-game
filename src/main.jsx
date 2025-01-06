import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { runMockServer } from './mocks/server';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

runMockServer().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
