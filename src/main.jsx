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
import Protected from './Components/Protected/Protected.jsx';
import VolunteerPost from './Components/NeedVolunteer/VolunteerPost.jsx';
import MyPost from './Components/User/MyPost.jsx';
import Profile from './Components/User/Profile.jsx';
import ViewDetails from './Components/Home/ViewDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/volunter_posts'),
      },
      {
        path: "/need_volunteer",
        element: <Protected><NeedVolunteer></NeedVolunteer></Protected>,
        loader: () => fetch('http://localhost:5000/volunter_posts'),
      },
      {
        path: "/view_details/:id",
        element: <Protected><ViewDetails></ViewDetails></Protected>,
        loader: ({params}) => fetch(`http://localhost:5000/volunter_posts/${params.id}`)
      },
      {
        path: "/volunteer_post",
        element: <Protected><VolunteerPost></VolunteerPost></Protected>,
      },
      {
        path: "/my_post",
        element: <Protected><MyPost></MyPost></Protected>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/Profile",
        element: <Protected><Profile></Profile></Protected>
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
