import { Link } from "react-router-dom";

export default function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "e1", title: "event 1" },
    { id: "e2", title: "event 2" },
    { id: "e3", title: "event 3" },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <div>
        {DUMMY_EVENTS.map((event) => {
          return (
            <Link key={event.id} to={event.id}>
              {" "}
              {event.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
