import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx';
import NeedVolunteer from './Components/NeedVolunteer/NeedVolunteer.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import LogIn from './Components/Common/LogIn.jsx';
import Register from './Components/Common/Register.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/need_volunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/volunteer_post",
      },
      {
        path: "/my_post",
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
