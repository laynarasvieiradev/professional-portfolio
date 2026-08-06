import { createBrowserRouter } from 'react-router';

import App from '../App';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/professional-portfolio/',
    element: <App />,
  },
  {
    path: '/professional-portfolio/erro',
    element: <ErrorPage />,
  }
]);