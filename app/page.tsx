import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Create stunning, responsive websites that engage your audience.',
    },
    {
      icon: '🎨',
      title: 'Business Branding',
      description: 'Build a unique identity that sets your business apart.',
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Grow your online presence with strategic content management.',
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Drive results with targeted marketing campaigns.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'BilliTech transformed our digital presence. Their team is professional, creative, and results-driven.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Outstanding service! They delivered our website ahead of schedule and exceeded expectations.',
      avatar: 'MC',
    },
    {
      name: 'Emma Davis',
      role: 'Founder, CreativeHub',
      content: 'Best investment for our brand. The team understood our vision and brought it to life perfectly.',
      avatar: 'ED',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6 animate-fade-in">
            Building Digital Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            We create innovative web experiences, powerful branding, and effective digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose BilliTech?</h2>
              <p className="text-slate-300 mb-4">
                With years of experience in digital innovation, we understand what it takes to succeed in today's competitive landscape.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <span className="text-primary font-bold mr-3">✓</span>
                  Expert team of developers and designers
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-primary font-bold mr-3">✓</span>
                  Proven track record of success
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-primary font-bold mr-3">✓</span>
                  Modern technology and best practices
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-primary font-bold mr-3">✓</span>
                  Customer-centric approach
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1 glow-effect">
                <div className="bg-dark rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold gradient-text mb-2">10+</h3>
                    <p className="text-slate-300">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with BilliTech.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let's work together to bring your digital vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
