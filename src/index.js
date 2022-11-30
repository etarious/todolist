import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './Components/Pages/ErrorPage';
import Lists from './Components/Pages/Lists';
import Add from './Components/Pages/Add';
import reportWebVitals from './reportWebVitals';
import CheckedList from './Components/Pages/CheckedList';
import EditList from './Components/Pages/EditList';
import { Provider } from './listContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "lists",
    element: <Lists />
  },
  {
    path: "add",
    element: <Add />
  },
  {
    path: "checked",
    element: <CheckedList />
  },
  {
    path: "task/edit/:id",
    element: <EditList />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
