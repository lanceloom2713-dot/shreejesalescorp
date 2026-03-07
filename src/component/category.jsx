import { Package, Sparkles, Layers, Gift, Heart, Printer, Crown, Box } from "lucide-react";
import denver from "../assets/products/Denver.jpeg";
import bag from "../assets/products/bag.png";
import airodo from "../assets/products/airodo.png";
import actioncalender from "../assets/products/actioncalender.png";
import tablecalender from "../assets/products/tablecalender.png";
import theman from "../assets/products/theman.png";
import customrigid from "../assets/products/customrigid.png";
import wallcalender from "../assets/products/wallcalender.png";
import shadecards from "../assets/products/shadecards.png";
import diary from "../assets/products/diary.png";
import haldiram from "../assets/products/haldiram.png";



export default function ProductCategories() {
  const categories = [
    {
      title: "Rigid Boxes",
      desc: "Premium rigid boxes designed for luxury packaging and high-end product presentation.",
      image: denver,
      // icon: <Package size={18} />,
    },
    {
      title: "Drawer Style Rigid Boxes",
      desc: "Elegant magnetic closure boxes ideal for premium products and corporate gifting.",
      image: haldiram,
      // icon: <Sparkles size={18} />,
    },
    {
      title: "Custom Rigid Boxes",
      desc: "Custom rigid packaging with protective inserts for delicate and valuable items.",
      image: theman,
      // icon: <Layers size={18} />,
    },
    {
      title: "Corporate Gift Boxes",
      desc: "Professional packaging solutions designed for premium corporate gifting.",
      image: customrigid,
      // icon: <Gift size={18} />,
    },
    {
      title: "Paper Bags",
      desc: "Eco-friendly printed paper bags perfect for retail stores and brand promotions.",
      image: bag,
      // icon: <Heart size={18} />,
    },
    {
      title: "Shade Cards",
      desc: "High-quality printed shade cards for displaying product colors and materials.",
      image: shadecards,
      // icon: <Printer size={18} />,
    },
    {
      title: "Post Cards",
      desc: "Custom printed postcards ideal for marketing, invitations, and promotions.",
      image: diary,
      // icon: <Crown size={18} />,
    },
    {
      title: "Custom Danglers",
      desc: "High-quality custom danglers for retail promotion, product visibility, and effective in-store branding.",
      image: airodo,
      // icon: <Box size={18} />,
    },
    {
      title: "Personalized Diaries",
      desc: "Branded diaries customized for corporate gifting and business promotions.",
      image: diary,
      // icon: <Box size={18} />,
    },
    {
      title: "Table Calendar",
      desc: "Custom printed table calendars perfect for office desks, branding, and corporate promotions.",
      image: actioncalender,
      // icon: <Box size={18} />,
    },
    {
      title: "Wall Calendar",
      desc: "High-quality wall calendars designed for year-round visibility and effective brand promotion.",
      image: wallcalender,
      // icon: <Box size={18} />,
    },
  ];

  return (
    <section id="products" className="bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Product{" "}
            <span style={{ color: "oklch(38.65% 0.193 265.58)" }}>
              Categories
            </span>
          </h2>

          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: "oklch(38.65% 0.193 265.58)" }}
          ></div>

          <p className="mt-4 text-lg text-gray-600">
            Discover our comprehensive range of premium packaging solutions tailored to your needs
          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute top-4 right-4 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}