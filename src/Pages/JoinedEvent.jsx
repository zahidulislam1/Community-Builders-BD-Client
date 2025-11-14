import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "../Component/Loading";

const JoinedEvent = () => {
  const { user } = use(AuthContext);
  const [joinedList, setJoinedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://community-builders-bd-server.vercel.app/my-joined-event?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoinedList(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="px-6 py-10 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">
        Your Joined Events
      </h2>

      {joinedList.length === 0 ? (
        <p className="text-center text-lg">
          You have not joined any events yet.
        </p>
      ) : (
        <div className=" space-y-6">
          {joinedList.map((event, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg rounded-2xl p-6 hover:shadow-xl duration-300"
            >
              <div className=" flex justify-between items-center">
                <div className="">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Type:</span>{" "}
                    {event.eventType}
                  </p>

                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>

                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Date:</span>{" "}
                    {event.eventDate}
                  </p>
                </div>

                <button
                  // onClick={() => handleCancel(event)}
                  className="btn btn-outline btn-error rounded-full "
                >
                  Cancel Join
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default JoinedEvent;
