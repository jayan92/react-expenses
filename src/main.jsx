import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound.jsx";

// Code Splitting and Lazy Loading
const Home = lazy(() => wait(1000).then(() => import("./pages/Home.jsx")));
const About = lazy(() => wait(1000).then(() => import("./pages/About.jsx")));

// when default export removed in the component
const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./pages/Contact.jsx").then((module) => ({
      default: module.Contact,
    }))
  )
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout component
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // Catch-all route
]);

// custom delay function for route loading
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
