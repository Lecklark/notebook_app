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

import { ROUTES } from '@/lib/constants';
import { lazyLoad } from '@/lib/utils';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.MAIN_PAGE} element={MainLayout}>
      <Route path={ROUTES.MAIN_PAGE} element={MainPage} />
      <Route path={ROUTES.LOGIN_PAGE} element={LoginPage} />
      <Route path={ROUTES.REGISTRATION_PAGE} element={RegistrationPage} />
      <Route path={ROUTES.NOTEBOOK_PAGE} element={NotebookPage} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
