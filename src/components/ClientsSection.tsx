const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center text-white animate-fade-up">
            SquadAssist is used by leading clubs & agents
          </h2>

          {/* Clubs Section */}
          <div className="mb-16 sm:mb-20 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-center text-white">
              SquadAssist is used by clubs in these leagues:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <span className="text-white/40 text-sm">Logo {index}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agencies Stats Section */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white">
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-bold">€1.5B+</span>
                <span className="text-base sm:text-lg text-white/80">in total transfer value</span>
              </div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-bold">600+</span>
                <span className="text-base sm:text-lg text-white/80">players</span>
              </div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-bold">30+</span>
                <span className="text-base sm:text-lg text-white/80">agencies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
