import Blog from "./pages/Blog/Blog";
import Page from "./pages/Page/Page";

const routes = [
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/:slug",
    element: <Page />,
  },
]

export default routes;