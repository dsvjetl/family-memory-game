import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';

import { theme } from './shared/utils/theme';
import { AppRoutes } from './routing/index';
import store from './store';
import { Header } from './shared/components/Header';
import { cards } from './views/Home/constants';

const queryClient = new QueryClient();

const PreloadImages = () => {
  useEffect(() => {
    const head = document.head;
    const links = [];

    cards.forEach((card) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `images/${card.fileName}}`;
      link.as = 'image';
      head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => head.removeChild(link));
    };
  }, []);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PreloadImages />
            <Header />
            <AppRoutes />
          </ThemeProvider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
