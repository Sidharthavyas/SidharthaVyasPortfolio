import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudy,
  },
  {
    path: "*",
    Component: Home,
  },
]);
