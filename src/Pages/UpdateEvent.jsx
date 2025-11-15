import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "../Component/Loading";
import toast from "react-hot-toast";

const UpdateEvent = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://community-builders-bd-server.vercel.app/create-event/${id}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      });
  }, [id, user]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateEvent = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      eventDate: e.target.eventDate.value,
      created_by: user?.email,
    };
    fetch(
      `https://community-builders-bd-server.vercel.app/create-event/${event._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEvent),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Event Update Successfully!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-6 py-12">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Update Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Event Title</label>
            <input
              defaultValue={event.title}
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
              defaultValue={event.description}
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
              defaultValue={event.eventType}
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
              defaultValue={event.thumbnail}
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
              defaultValue={event.location}
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
            <input
              name="eventDate"
              defaultValue={event.eventDate}
              className="input input-bordered w-full"
              type="text"
            />
            {/* <DatePicker
              // selected={eventDate}
              // onChange={(date) => setEventDate(date)}
              className="input input-bordered w-full"
              placeholderText="Select event date"
              minDate={new Date()}
              required
            /> */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#3bd671] hover:bg-[#2cc762] w-full rounded-full"
          >
            Update Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateEvent;
