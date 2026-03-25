import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-primary/20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">BilliTech</h3>
            <p className="text-sm text-slate-400">
              Building digital solutions for modern businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400">Web Development</span>
              </li>
              <li>
                <span className="text-slate-400">Business Branding</span>
              </li>
              <li>
                <span className="text-slate-400">Social Media Mgmt</span>
              </li>
              <li>
                <span className="text-slate-400">Digital Marketing</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                <span className="font-medium">Email:</span>
                <br />
                info@billitech.com
              </li>
              <li className="text-slate-400">
                <span className="font-medium">Phone:</span>
                <br />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} BilliTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
