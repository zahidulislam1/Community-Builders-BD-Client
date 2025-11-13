import React from "react";

const GalleryCard = () => {
  const galleryItems = [
    {
      title: "Community Cleanup",
      img: "https://i.pinimg.com/originals/96/64/ea/9664ea4f47c63323ddb370edc0b8722b.jpg",
      desc: "Volunteers joined to clean streets and parks.",
      date: "12 Feb 2024",
    },
    {
      title: "Tree Plantation",
      img: "https://i.pinimg.com/736x/15/3c/e5/153ce58668032c7a2bc9f26e94503396.jpg",
      desc: "Growing a greener community together.",
      date: "05 Mar 2024",
    },
    {
      title: "Food Distribution",
      img: "https://png.pngtree.com/png-clipart/20240627/original/pngtree-food-donation-drive-helpers-packing-donations-on-transparent-background-png-image_15424085.png",
      desc: "Providing meals to underprivileged families.",
      date: "20 Mar 2024",
    },
    {
      title: "Awareness Campaign",
      img: "https://png.pngtree.com/png-clipart/20210829/original/pngtree-volunteers-donating-supplies-concept-illustration-png-image_6684623.jpg",
      desc: "Spreading awareness on hygiene & safety.",
      date: "02 Apr 2024",
    },
    {
      title: "Blood Donation Camp",
      img: "https://i.ibb.co/M51fVJVD/eventpic1.jpg",

      desc: "Encouraging people to donate blood and save lives.",
      date: "25 Apr 2024",
    },
    {
      title: "Charity Event",
      img: "https://img.freepik.com/free-vector/charity-donation-concept-illustration_114360-17165.jpg",
      desc: "Raising funds and support for local communities.",
      date: "10 May 2024",
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-12">Event Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title */}
            <div className="absolute bottom-0 bg-black/60 w-full text-center py-2 text-white text-lg font-semibold">
              {item.title}
            </div>

            {/* Date & Description (show on hover) */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center px-4 text-center text-white">
              <p className="text-sm mb-2">{item.date}</p>
              <p className="text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryCard;
