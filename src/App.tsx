import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route path="all-projects" element={<ProjectsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={appRouter} />;
}

export default App;
