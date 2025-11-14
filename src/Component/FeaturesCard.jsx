import React from "react";
import { Features } from "tailwindcss";

const FeaturesCard = () => {
  const featuresEvent = [
    {
      title: "Create Events",
      desc: "Start a community service event in your neighborhood.",
      icon: "🤝",
    },
    {
      title: "Join & Volunteer",
      desc: "Participate in ongoing social work programs.",
      icon: "🌿",
    },
    {
      title: "Track Activities",
      desc: "See your positive impact in the community.",
      icon: "📊",
    },
  ];
  return (
    <section className="px-6 lg:px-24 py-16 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresEvent.map((item, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-xl p-6 text-center animate__animated animate__fadeInUp animate__delay-200ms"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base-content/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCard;
