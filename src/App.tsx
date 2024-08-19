import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Hello from "./components/Hello";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:name/:userId",
    element: <Hello />,
  },
  {
    path: "/govinda",
    element: <Hello name={`govinda`} />,
  },
  {
    path: "/mitesh",
    element: <Hello name={"mitesh"} />,
  },
]);

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
