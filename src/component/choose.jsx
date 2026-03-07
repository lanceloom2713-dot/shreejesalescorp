import { Factory, Palette, DollarSign, ShieldCheck } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Factory size={28} />,
      title: "Advanced Manufacturing",
      desc: "State-of-the-art facilities with cutting-edge technology for precision production.",
      bg: "bg-blue-600",
    },
    {
      icon: <Palette size={28} />,
      title: "Customization Expertise",
      desc: "Complete design flexibility to bring your unique packaging vision to life.",
      bg: "bg-orange-500",
    },
    {
      icon: <DollarSign size={28} />,
      title: "Competitive Pricing",
      desc: "Best value for premium quality with flexible bulk order pricing options.",
      bg: "bg-green-500",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Strong Quality Control",
      desc: "Rigorous quality checks at every stage ensuring flawless end products.",
      bg: "bg-indigo-600",
    },
  ];

  return (
    <section className="pb-24 pt-13 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why Choose Us
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

          <p className="mt-6 text-lg text-blue-200">
            We combine expertise, innovation, and dedication to deliver packaging excellence
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl 
              hover:shadow-orange-500/30 hover:-translate-y-3 transition-all duration-500"
            >
              
              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 
              ${item.bg} transition-transform duration-500 group-hover:scale-110`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-blue-200 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl border border-orange-400 opacity-0 group-hover:opacity-40 transition"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}