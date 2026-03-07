import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gypm3g6', 'template_tn4mrlo', form.current, {
        publicKey: 'k5K7a6Ss19JeO9KL0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="bg-gray-50 pt-2 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In{" "}
            <span style={{ color: "oklch(38.65% 0.193 265.58)" }}>
              Touch
            </span>
          </h2>

          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }}
          ></div>

          <p className="mt-4 text-lg text-gray-600">
            Ready to discuss your packaging needs? Contact us today
          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-8">
              Send Us a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username_name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your packaging requirements"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                value="send"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition duration-300 hover:cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-19">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="bg-blue-900 text-white w-12 h-12 flex items-center justify-center rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    A-74, First Floor, Naraina, Phase-1,
                    New Delhi-110028
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    +91 7042679660 <br />
                    +91 9911979660
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    monuguptaprinters@yahoo.co.in <br />
                    printandpacksolutions2025@gmail.com
                  </p>
                </div>
              </div>

              <a href="https://wa.me/919266730111?text=" target="_blank" rel="noopener noreferrer">
                <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-md hover:cursor-pointer">
                  <MessageCircle size={20} />
                  WhatsApp Us
                </button>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}