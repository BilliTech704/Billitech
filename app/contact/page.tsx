'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Have a project in mind? We&apos;d love to hear from you. Contact us today to discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <span className="text-2xl text-primary mr-4">📧</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <a
                      href="mailto:info@billitech.com"
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      info@billitech.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <span className="text-2xl text-primary mr-4">📞</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <span className="text-2xl text-primary mr-4">📍</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-slate-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-primary/30 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-primary/30 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-primary/30 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-primary/20 border border-primary text-primary text-center">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Us</h2>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1 glow-effect">
            <div className="bg-slate-900 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4">📍</span>
                <p className="text-slate-300 mt-4">San Francisco, CA</p>
                <p className="text-slate-400 text-sm mt-2">Visit us for a coffee and let&apos;s discuss your project!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
