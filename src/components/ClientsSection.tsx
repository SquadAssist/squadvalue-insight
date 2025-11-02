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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-8">
              {[
                { name: "UEFA Champions League", logo: "/league-logos/ucl.png" },
                { name: "UEFA Europa League", logo: "/league-logos/uel.png" },
                { name: "Ligue 1", logo: "/league-logos/ligue1.png" },
                { name: "Eredivisie", logo: "/league-logos/eredivisie.png" },
                { name: "Jupiler Pro League", logo: "/league-logos/jupiler.png" },
                { name: "Saudi Pro League", logo: "/league-logos/spl.png" },
                { name: "Championship", logo: "/league-logos/championship.png" }
              ].map((league, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center p-4 hover:bg-white/30 transition-all duration-300"
                >
                  <img 
                    src={league.logo} 
                    alt={league.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Agents Subtitle */}
          <div className="mb-12 sm:mb-16 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-white">
              Leading agents are leveraging SquadAssist
            </h3>
          </div>

          {/* Agencies Stats Section */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-white">
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">€1.5B+</span>
                <span className="text-sm sm:text-base text-white/80">in total transfer value</span>
              </div>
              <div className="hidden sm:block text-white/40 text-2xl">•</div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">600+</span>
                <span className="text-sm sm:text-base text-white/80">players</span>
              </div>
              <div className="hidden sm:block text-white/40 text-2xl">•</div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">30+</span>
                <span className="text-sm sm:text-base text-white/80">agencies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
