import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Component/Profile.jsx';
import ProfileDetailsComponent from './Component/ProfileDetailsComponent.jsx';
import Links from './Component/Links.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "profile-details",
        element: <ProfileDetailsComponent/>,
      },
      {
        path: "links",
        element: <Links/>,
      }
    ],  
  },
  {
    path: "/profile",
    element: <Profile/>,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
