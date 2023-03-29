import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

export const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
