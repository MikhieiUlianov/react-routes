// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, { loader as eventDetailLoader } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              path: "",
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              //--only works if the route that defines the loader also defines an element.
              //otherwise chidren element will not automaticly get access to the loader from parent element.
              //in such a case we can define id and use "useRouteLoaderData" hook.

              loader: eventDetailLoader,
              id: "event-detail",
              //--we can use this nested routs feature not only to make some wrapper, but also to share data
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                },
                { path: "edit", element: <EditEvent /> },
              ],
            },
            { path: "new", element: <NewEvent /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
