import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contacts from './components/contacts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <h2>Not found page</h2>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
