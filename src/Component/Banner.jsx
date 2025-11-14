import "animate.css";

export default function Home() {
  return (
    <div className=" bg-base-100">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 lg:px-24 py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/gFHq1f4w/eventpic2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 card bg-transparent shadow-none p-6 text-center animate__animated animate__fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join & Serve Your Community
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Join hands to build a better neighborhood. Create, join, and track
            social service events to bring positive changes around you.
          </p>
          <div className="flex justify-center gap-4">
            <a className="btn bg-[#3bd671] flex items-center gap-2 px-6 py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl">
              Get Started
            </a>
            <a className="btn btn-outline text-white border-white px-6 py-3 text-lg rounded-full transition-all duration-500 hover:bg-white hover:text-black hover:rounded-xl">
              Explore Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
