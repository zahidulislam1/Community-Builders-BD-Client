import React from "react";
import { NavLink, useLoaderData } from "react-router";

const UpcomingEvent = () => {
  const data = useLoaderData();
  return (
    <div className="p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate__animated animate__fadeIn">
        Upcoming <span className="text-[#3bd671]">Events</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.map((event) => (
          <div
            key={event._id}
            className="card bg-base-100 shadow-xl rounded-2xl border cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
          >
            {/* Thumbnail */}
            <figure className="overflow-hidden rounded-t-2xl">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-52 object-cover transform transition-all duration-500 hover:scale-110"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{event.title}</h2>

              <p className="text-sm text-gray-600">{event.description}</p>

              <div className="mt-3 space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Event Type:</span>{" "}
                  {event.eventType}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {event.eventDate}
                </p>
              </div>

              <div className="card-actions justify-end mt-3">
                <NavLink
                  to={`/event-details/${event._id}`}
                  className="btn bg-[#3bd671] flex items-center gap-2 md:px-6 md:py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl  animate__animated hover:animate__pulse"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
