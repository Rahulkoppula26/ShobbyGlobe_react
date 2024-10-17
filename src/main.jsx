import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// using lazy loading to make the application more optimized and fast
// by only using neccesary components when required
const Productlist = lazy(() => import("./Components/Productlist.jsx"));
const Notfound = lazy(() => import("./Components/Notfound.jsx"));
const Productitem = lazy(() => import("./Components/Productitem.jsx"));
const Cart = lazy(() => import("./Components/Cart.jsx"));
const Cartitem = lazy(() => import("./Components/CartItem.jsx"));
// creating a react router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          // using suspense to display a message while fetching data  ( passing fallback function)
          <Suspense fallback={<h2>Loading .....</h2>}>
            <Productlist />
          </Suspense>
        ),
      },
      {
        path: "/product/:id", // dynamic routing
        element: (
          <Suspense fallback={<h2>Loading .....</h2>}>
            <Productitem />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h2>Loading .....</h2>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "cartitem/:id",
        element: (
          <Suspense fallback={<h2>Loading .....</h2>}>
            <Cartitem />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<h2>Loading .....</h2>}>
        <Notfound />
      </Suspense>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
