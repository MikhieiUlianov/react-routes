import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetail, {
  loader as deleteEventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventsRoot from "./pages/EventsRoot";
import Home from "./pages/Home";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import Root from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";

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
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: deleteEventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          { path: "new", element: <NewEvent />, action: manipulateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
