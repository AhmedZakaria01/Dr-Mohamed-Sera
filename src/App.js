import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
// import Navbar from './Components/Navbar/Navbar';
import Layout from "./Components/Layout/Layout";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/ContactUs/AboutUs/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact_us", element: <ContactUs /> },
      { path: "about_us", element: <AboutUs /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
