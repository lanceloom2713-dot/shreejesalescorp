import { Check } from "lucide-react";
import about from "../assets/about.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 pt-15 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* CENTER HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About{" "}
            <span style={{ color: "oklch(38.65% 0.193 265.58)" }}>
              Us
            </span>
          </h2>

          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }}
          ></div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={about}
              alt="Printing Machine"
              className="rounded-2xl shadow-xl w-full"
            />

            <div className="absolute -bottom-8 right-6 bg-orange-500 text-white px-8 py-6 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Shree Je Sales Corp is a trusted manufacturer of premium printing
              and packaging solutions, specializing in custom rigid boxes,
              luxury packaging, paper bags, corporate gift boxes, and
              promotional printing materials.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              With over 15 years of industry experience, we deliver high-quality
              packaging and printing solutions tailored to the needs of retail
              brands, corporate clients, and product manufacturers.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Premium Quality Materials",
                "Custom Design Solutions",
                "Bulk Manufacturing Capability",
                "On-Time Delivery",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <Check size={18} />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}