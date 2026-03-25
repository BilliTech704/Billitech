import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const serviceDetails = [
    {
      id: 1,
      icon: '🌐',
      title: 'Web Development',
      description: 'Create stunning, responsive websites that engage your audience.',
      details:
        'We build custom websites using the latest technologies like Next.js, React, and TypeScript. From responsive design to seamless user experiences, we ensure your website stands out.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security First'],
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Business Branding',
      description: 'Build a unique identity that sets your business apart.',
      details:
        'Your brand is your identity. We help you create a cohesive and memorable brand experience through logo design, brand guidelines, and visual identity systems.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
    {
      id: 3,
      icon: '📱',
      title: 'Social Media Management',
      description: 'Grow your online presence with strategic content management.',
      details:
        'We manage your social media presence with strategic content creation, community engagement, and data-driven insights to help you reach and engage your target audience.',
      features: ['Content Creation', 'Community Management', 'Analytics & Reports', 'Campaign Strategy'],
    },
    {
      id: 4,
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Drive results with targeted marketing campaigns.',
      details:
        'From SEO to paid advertising, email marketing to content strategy, we create integrated digital marketing solutions that drive qualified traffic and conversions.',
      features: ['SEO Strategy', 'PPC Campaigns', 'Email Marketing', 'Content Marketing'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive digital solutions designed to help your business thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {serviceDetails.map((service) => (
              <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-slate-300 text-lg mb-8">{service.details}</p>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300">
                          <span className="text-primary font-bold mr-3">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1 glow-effect h-80">
                    <div className="bg-dark rounded-lg h-full flex items-center justify-center">
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
              {index < serviceDetails.length - 1 && <hr className="border-primary/20 my-16" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
