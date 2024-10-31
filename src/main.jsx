import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Meals from './components/Meals/Meals';
import MealDetail from './components/Meals/MealDetail';
import SimpleForm from './components/SimpleForm/SimpleForm';
import LoginForm from './components/LoginForm/LoginForm';

const router =createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement : <ErrorPage />,
    children:[
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path : "/meals",
        loader : ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i'),
        element: <Meals />
      },
      {
        path:"/meal/:idMeal",
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetail />
      },
      {
        path: "/simpleForm",
        element: <SimpleForm />
      },
      {
        path: "/login",
        element: <LoginForm />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
