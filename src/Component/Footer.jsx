import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { X as TwitterX } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-12">
      <div className="container mx-auto px-6 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#3bd671] mb-2">
              Community Builders BD
            </h2>
            <p className="text-base-content/70">
              Join hands to build a better neighborhood — where everyone
              contributes, shares, and grows together.
            </p>
          </div>

          {/* Quick NavLinks */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick NavLinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#3bd671] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-[#3bd671] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-[#3bd671] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#3bd671] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://facebook.com"
                className="hover:text-[#3bd671] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-[#3bd671] transition-colors "
              >
                <TwitterX />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-[#3bd671] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Community Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
