import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  //loader automaticly parse data from response

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //when an error gets thrown in a loader, react behaves differently.
    //react router will simply render the closest error element, which we adding as "errorElement" prop
    //"errorElement" is not only for unexisting routes, it also includes loaders error

    //use throw Response, when we want to manage error by ourselfs,  send certain message/status.
    //throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    // status: 500,
    //});

    //this syntaxc is not availible in router v7, then we must use longer version instead
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
