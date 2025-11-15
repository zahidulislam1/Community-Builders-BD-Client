import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "../Component/Loading";
import { NavLink } from "react-router";

const ManageEvent = () => {
  const { user } = use(AuthContext);
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://community-builders-bd-server.vercel.app/manage-event?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEventList(data);
        setLoading(false);
      });
  }, [user]);
  // Delete event
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = [...eventList];
      updatedEvents.splice(index, 1);
      setEventList(updatedEvents);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="px-6 py-12 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Manage Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* Thumbnail */}
            <figure>
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Type:</span> {event.eventType}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span> {event.eventDate}
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <NavLink
                to={`/update-event/${event._id}`}
                className="btn btn-sm btn-outline text-[#3bd671] rounded-full flex-1"
              >
                Update Event
              </NavLink>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-sm btn-outline btn-error rounded-full flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageEvent;
