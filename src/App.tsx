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

import { ROUTES } from '@/lib/constants';
import { lazyLoad } from '@/lib/utils';

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
  return (
    <>
      <RouterProvider router={router} />
      <ModalsContainer />
    </>
  );
}

export default App;
