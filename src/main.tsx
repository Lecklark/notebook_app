import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LOCALES, messages } from '@/lib/i18n';
import { persistor, store } from '@/store';
import { theme } from '@/theme';

import App from './App';

const lang = LOCALES.RUSSIAN;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <IntlProvider locale={lang} messages={messages[lang]}>
              <App />
            </IntlProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
