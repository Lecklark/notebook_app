import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom";
import {theme} from "./globalStyles";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider theme={theme}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </ChakraProvider>
                </ QueryClientProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
