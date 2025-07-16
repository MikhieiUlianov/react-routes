// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail from "./pages/EventDetail";
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
            //--loader executes this function when we are about to visite this route, before component render.
            //at this moment, we are not navigated to another page,
            //instead, we wait until the data will be fetched, on the page we were in this moment.
            //that is why we dont need to think about loading status

            //--needs to first fetch, and only after fetch srender compopnent with already fullfield data.
            {
              path: "",
              element: <Events />,
              //we cant access data from higher level
              loader: eventsLoader,
              //react automaticly make data returned by this fucntion availible for this route
            },
            { path: ":eventId", element: <EventDetail /> },
            { path: "new", element: <NewEvent /> },
            { path: ":eventId/edit", element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
