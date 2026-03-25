export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">About BilliTech</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We're a team of passionate digital innovators dedicated to transforming businesses through technology.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Founded in 2014, BilliTech started with a simple mission: to help businesses succeed in the digital world. What began as a small team of developers has grown into a comprehensive digital agency serving clients across industries.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Over the years, we've worked with startups, scale-ups, and established enterprises to create digital solutions that drive real business impact. Our experience spans web development, branding, social media marketing, and digital transformation.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, we pride ourselves on staying at the forefront of technology and design trends, always with our clients' success at the heart of everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1 glow-effect">
              <div className="bg-dark rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">500+</div>
                  <p className="text-slate-300 text-lg">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-lg bg-slate-900/50 border border-primary/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in an ever-changing technological landscape.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-slate-900/50 border border-primary/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300">
                To be the most trusted digital partner for businesses seeking to innovate and transform, recognized for our expertise, creativity, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose BilliTech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍💼',
                title: 'Expert Team',
                description: 'Our team consists of certified professionals with years of experience in their respective fields.',
              },
              {
                icon: '🏆',
                title: 'Proven Track Record',
                description: 'We have successfully delivered 500+ projects with a 98% client satisfaction rate.',
              },
              {
                icon: '💡',
                title: 'Innovation First',
                description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
              },
              {
                icon: '🤝',
                title: 'Client-Centric',
                description: 'Your success is our success. We work closely with you to understand and exceed your goals.',
              },
              {
                icon: '⚡',
                title: 'Agile Approach',
                description: 'We use agile methodologies to ensure flexibility, transparency, and rapid delivery.',
              },
              {
                icon: '🔒',
                title: 'Quality Assurance',
                description: 'Every project undergoes rigorous testing to ensure the highest quality standards.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-slate-900/50 border border-primary/30">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years in Business' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
