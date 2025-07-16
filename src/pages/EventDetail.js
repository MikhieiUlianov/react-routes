import { useParams, Link } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <Link to={"/events/new"}>{params.eventId}</Link>
    </>
  );
}
