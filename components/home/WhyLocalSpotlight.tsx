export default function WhyLocalSpotlight() {
  const pillars = [
    {
      icon: '🤝',
      title: 'Community',
      description:
        'We tell local stories that matter — the entrepreneurs, builders, and creators who make Metro Atlanta a thriving place to live, work, and do business.',
    },
    {
      icon: '🔦',
      title: 'Visibility',
      description:
        'We help outstanding businesses get discovered. Every feature reaches thousands of local readers actively looking to support businesses like yours.',
    },
    {
      icon: '🔗',
      title: 'Connection',
      description:
        "We build stronger local relationships by introducing business owners to the community and helping the community find the businesses they didn't know they needed.",
    },
  ]

  return (
    <section className="py-20 bg-navy-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Our Mission</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Why Local Spotlight ATL?
          </h2>
          <div className="w-12 h-1 bg-gold-400 mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:bg-gold-400/20 transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">{pillar.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: '240+', label: 'Stories Published' },
            { value: '12K', label: 'Monthly Readers' },
            { value: '40+', label: 'Neighborhoods' },
            { value: '100%', label: 'Free to Get Featured' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-400">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
