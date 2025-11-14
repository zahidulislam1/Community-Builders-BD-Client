import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const [eventDate, setEventDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalEvent = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      eventDate: eventDate.toISOString().split("T")[0],
      created_by: user?.email,
    };

    console.log("Created Event:", finalEvent);

    fetch("https://community-builders-bd-server.vercel.app/create-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Event Created Successfully!");
        console.log(data);
        setEventDate(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-6 py-12">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Enter event title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Event details..."
              required
            ></textarea>
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-medium mb-1">Event Type</label>
            <select
              name="eventType"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select event type</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
            </select>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium mb-1">Thumbnail URL</label>
            <input
              type="text"
              name="thumbnail"
              className="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="Event location"
              required
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block font-medium mb-1">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              className="input input-bordered w-full"
              placeholderText="Select event date"
              minDate={new Date()}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#3bd671] hover:bg-[#2cc762] w-full rounded-full"
          >
            Create Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
