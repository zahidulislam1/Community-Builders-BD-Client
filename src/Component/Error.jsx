export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 lg:px-24 py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/gFHq1f4w/eventpic2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fadeInUp">
            Join & Serve Your Community
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join hands to build a better neighborhood. Create, join, and track
            social service events to bring positive changes around you.
          </p>
          <div className="flex justify-center gap-4 mt-4 animate-fadeInUp delay-200">
            <a className="btn bg-[#3bd671] flex items-center gap-2 px-6 py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl">
              Get Started
            </a>
            <a className="btn btn-outline text-white border-white px-6 py-3 text-lg rounded-full transition-all duration-500 hover:bg-white hover:text-black hover:rounded-xl">
              Explore Events
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-24 py-16 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="card bg-base-100 shadow-xl p-6 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base-content/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
