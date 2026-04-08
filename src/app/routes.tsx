import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const basename = import.meta.env.BASE_URL;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:id",
    Component: ProjectDetail,
  },
  {
    path: "*",
    Component: NotFound,
  },
], {
  basename,
  future: {
    v7_prependBasename: true,
  },
});
