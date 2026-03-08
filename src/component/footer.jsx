import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#0B1C35] to-[#081428] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Shree Je Sales Corp
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Your trusted partner for premium printing and packaging
              solutions since 2000.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

  <a
    href="https://www.facebook.com/share/1BAaCfvthc/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://www.instagram.com/printandpacksolutions?igsh=d3l3bzlicGIyYWFs"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/shree-je-sales-corp-3bbb643b1/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="https://youtube.com/@printandpacksolutions?si=HaNnS8-IKnS3_kj7"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
  >
    <Youtube size={18} />
  </a>

</div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact Info
            </h4>

            <div className="mt-6 space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" size={20} />
                <p>
                  A-74, First Floor, Naraina, Phase-1,
                  New Delhi-110028
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1" size={20} />
                <p>
                  +91 7042679660 <br />
                  +91 9911979660
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1" size={20} />
                <p>
                  monuguptaprinters@yahoo.co.in <br />
                  printandpacksolutions2025@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">

          <p>
            © 2026 Shree Je Sales Corp. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <p className="hover:text-orange-400 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-orange-400 cursor-pointer">
              Terms & Conditions
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}