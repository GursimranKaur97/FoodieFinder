import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();

  useEffect(()=> {
    // Make an API call and send username password
    const data = {
      name: 'Gursimran Kaur'
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    },
    {
      path: '/grocery',
      element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
