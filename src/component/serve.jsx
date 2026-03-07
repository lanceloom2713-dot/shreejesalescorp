import { ServerCog } from "lucide-react";
import action from "../assets/client/action.jpg";
import anmoltnt from "../assets/client/anmoltnt.jpg";
import colorbar from "../assets/client/colorbar.jpg";
import modicare from "../assets/client/modicare.jpg";
import nykalogo from "../assets/client/nykalogo.jpg";
import relaxo from "../assets/client/relaxo.jpg";
import vanesa from "../assets/client/vanesa.jpg";
import vijohn from "../assets/client/vijohn.jpg";
import arb from "../assets/client/arb.png";
import jaibhaarat from "../assets/client/jaibhaarat.jpeg";
import kundan from "../assets/client/kundan.png";
import React from "react";

function serve() {

  const logos = [
    action, relaxo, nykalogo, modicare, anmoltnt, colorbar, anmoltnt, vanesa, vijohn, arb, jaibhaarat, kundan
  ];

  return (
    <section id="clients" className="pt-8 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span style={{ color: "oklch(38.65% 0.193 265.58)" }}>
              Clients
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }}
          ></div>
        </div>

        {/* Auto Scrolling Logos */}
        <div className="overflow-hidden relative">

          <div className="flex animate-scroll gap-8 w-max">

            {[...logos, ...logos].map((logo, index) => (

              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 border-2 flex items-center justify-center p-2 bg-white"
                style={{ borderColor: "oklch(38.65% 0.193 265.58)" }}
              >

                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width="120"
                  height="80"
                  className="object-contain max-h-20"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        `}
      </style>

    </section>
  );
}

export default serve;