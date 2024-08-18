import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Hello from "./componets/Hello";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
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
      <div style={{ border: "1px solid red" }}>
        <RouterProvider router={router} count={"count"} />
      </div>
    </>
  );
};

export default App;
