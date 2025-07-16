import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  //it checks if it get a promise, and will automaticly get the result of promise
  const data = useLoaderData();
  const events = data.events;
  //loader automaticly parse data from response

  /*   if(events.error) {
    return <p>{events.message}</p>
  } */
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    /* 
    return { isError: true, message: "Could not fetch events." }; */

    //when an error gets thrown in a loader, react behaves differently.
    //react router will simply render the closest error element, which we adding as "errorElement" prop
    //"errorElement" is not only for unexisting routes, it also includes loaders error
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    return response;
  }
}
