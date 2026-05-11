function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-end px-8 md:px-16 pb-20 pt-24 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1974&auto=format&fit=crop"
        alt="Cinema"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-2xl">
        <p className="uppercase tracking-[0.3em] text-red-500 text-sm mb-4">
          Cine-Stream Originals
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
          Unlimited movies,
          <br />
          endless vibes.
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Discover trending cinema, mood-based recommendations,
          and your next obsession.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300">
            ▶ Play Now
          </button>

          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
            + My List
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
