import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
const MainPage = lazyLoad(() => import('@/pages/main'));
const MainLayout = lazyLoad(() => import('@components/layouts/main-layout'));
const LoginPage = lazyLoad(() => import('@/pages/login'));
const RegistrationPage = lazyLoad(() => import('@/pages/registration'));
const NotebookPage = lazyLoad(() => import('@/pages/notebook'));

import { ProtectedRoute } from '@components/shared/protected-route';
import { ModalsContainer } from '@components/widgets/modals';
import { IntlProvider } from 'react-intl';

import { ROUTES } from '@/lib/constants';
import { messages } from '@/lib/i18n';
import { lazyLoad } from '@/lib/utils';
import { useAppSelector } from '@/store/hooks';
import { langInState } from '@/store/selectors';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.MAIN_PAGE} element={MainLayout}>
      <Route
        index
        element={
          <ProtectedRoute type='non-auth' redirectLink={ROUTES.NOTEBOOK_PAGE}>
            {MainPage}
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.LOGIN_PAGE}
        element={
          <ProtectedRoute type='non-auth' redirectLink={ROUTES.NOTEBOOK_PAGE}>
            {LoginPage}
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.REGISTRATION_PAGE}
        element={
          <ProtectedRoute type='non-auth' redirectLink={ROUTES.NOTEBOOK_PAGE}>
            {RegistrationPage}
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.NOTEBOOK_PAGE}
        element={
          <ProtectedRoute type='for-auth' redirectLink={ROUTES.MAIN_PAGE}>
            {NotebookPage}
          </ProtectedRoute>
        }
      />
    </Route>,
  ),
);

function App() {
  const lang = useAppSelector(langInState);

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      <RouterProvider router={router} />
      <ModalsContainer />
    </IntlProvider>
  );
}

export default App;
