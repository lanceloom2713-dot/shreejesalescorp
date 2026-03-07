import hero from "../assets/hero.jpeg";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={hero}
        alt="Packaging Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          Custom Printing & Packaging Solutions
        </h1>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-200">
          We specialize in custom rigid boxes, luxury packaging, corporate printing, and branded packaging solutions designed to elevate your products and strengthen your brand presence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/products">
          <button className="bg-blue-700 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg">
            Explore Products →
          </button>
          </Link>

          <Link to="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold shadow-lg">
            Request Quote
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}