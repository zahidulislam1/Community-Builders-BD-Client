import React from "react";
import "animate.css";

const NewsletterCard = () => {
  return (
    <section className="px-6 lg:px-24 py-16 bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="animate__animated animate__fadeInLeft">
          <img
            src="https://i.ibb.co/5gLfvdMC/4897020.jpg"
            alt="Newsletter"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="animate__animated animate__fadeInRight">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our <span className="text-[#3bd671]">Newsletter</span>
          </h2>

          <p className="text-base-content/70 mb-6">
            Stay updated with upcoming community events, volunteer campaigns,
            and donation drives. Join our mailing list today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-full"
            />
            <button className="btn bg-[#3bd671] hover:bg-[#2cc762] rounded-full px-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCard;
