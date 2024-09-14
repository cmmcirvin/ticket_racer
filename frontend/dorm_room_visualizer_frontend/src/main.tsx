import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Home />}>
    </Route>
  </>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className=''>
        <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
