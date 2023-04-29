
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import MiddleContent from "../Pages/Home/MiddleContent";
import NewsDetails from "../Pages/Home/News/NewsDetails";
import ShowDetails from "../Pages/Home/News/ShowDetails";
import Login from "../Pages/AuthPage/Login";
import Registration from "../Pages/AuthPage/Registration";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/AuthPage/TermsAndConditions";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          children: [
            {
              path: "/",
              element: <MiddleContent></MiddleContent>,
              loader: () => fetch(`https://the-dragon-news-server-tapferabdullah-gmailcom.vercel.app/categories/0`)
            },
            {
              path: "/category/:id",
              element: <MiddleContent></MiddleContent>,
              loader: ({params}) => fetch(`https://the-dragon-news-server-tapferabdullah-gmailcom.vercel.app/categories/${params.id}`)
            }
          ]
        }
        ,
        {
          path: "/news",
          element: <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>,
          children: [
            {
              path: "/news/:id",
              element: <ShowDetails></ShowDetails>,
              loader: ({params}) => fetch(`https://the-dragon-news-server-tapferabdullah-gmailcom.vercel.app/news/${params.id}`)
            }
          ]
        },
        
      ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Registration></Registration>
    },
    {
      path: "/terms-and-conditions",
      element: <TermsAndConditions></TermsAndConditions>
    }
  ]);

  export default router;