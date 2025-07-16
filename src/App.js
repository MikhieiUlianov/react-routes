// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            //loader executes this function when we are about to visite this route
            {
              path: "",
              element: <Events />,
              loader: async () => {
                const response = await fetch("http://localhost:8080/events");

                if (!response.ok) {
                  //...
                } else {
                  const resData = await response.json();
                  return resData;
                }
              },

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
