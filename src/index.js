import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './Components/Pages/ErrorPage';
import List from './Components/List';
import Add from './Components/Pages/Add';
import reportWebVitals from './reportWebVitals';
import CheckedList from './Components/Pages/CheckedList';
import EditList from './Components/Pages/EditList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "list",
    element: <List />
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
    path: "edit",
    element: <EditList />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
