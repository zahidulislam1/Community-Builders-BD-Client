import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = use(AuthContext);
  const [joined, setJoined] = useState(false);

  const handleJoinEvent = () => {
    fetch("http://localhost:3000/joined-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...event, joined_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`You have joined the event: ${event.title}`);
      })
      .catch((error) => {
        console.log(error);
      });
    setJoined(true);
  };

  return (
    <section className="min-h-screen bg-base-200 px-6 py-12 flex justify-center">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl">
        {/* Event Thumbnail */}
        <figure>
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        </figure>

        <div className="card-body">
          {/* Event Title */}
          <h2 className="text-3xl font-bold mb-3">{event.title}</h2>

          {/* Event Type & Location */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="badge badge-outline">{event.eventType}</span>
            <span className="badge badge-outline">{event.location}</span>
            <span className="badge badge-outline">{event.eventDate}</span>
          </div>

          {/* Event Description */}
          <p className="text-gray-700 mb-6">{event.description}</p>

          {/* Created By */}
          <p className="text-sm text-gray-500 mb-6">
            Created by:{" "}
            <span className="font-semibold">{event.created_by}</span>
          </p>

          {/* Join Event Button */}
          <div className="card-actions justify-start">
            <button
              onClick={handleJoinEvent}
              disabled={joined}
              className={`btn ${
                joined ? "btn-success cursor-not-allowed" : "bg-[#3bd671]"
              } rounded-full`}
            >
              {joined ? "Joined " : "Join Event"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
