import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import ErrorPage from "./ErrorPage";
import SearchPage from "./SearchPage/SearchPage";
import { H1 } from "./Components/Title";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    { path: "/search", element: <SearchPage />, errorElement: <ErrorPage /> },
  ]);

  // const { innerWidth: width } = window;
  // if (width < 620) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <h1 className="text-center text-2xl p-2">
  //         This site is not optimized for mobile. Please use a desktop or a
  //         tablet.
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
