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
import foldablebag from "../assets/products/foldablebag.png";
export default function ProductCategories() {

  const categories = [
    {
      title: "Rigid Boxes",
      desc: "Premium rigid boxes designed for luxury packaging and high-end product presentation.",
      image: denver,
    },
    {
      title: "Drawer Style Rigid Boxes",
      desc: "Elegant drawer style rigid boxes ideal for premium products and corporate gifting.",
      image: haldiram,
    },
    {
      title: "Custom Rigid Boxes",
      desc: "Custom rigid packaging with protective inserts for delicate and valuable items.",
      image: theman,
    },
    {
      title: "Corporate Gift Boxes",
      desc: "Professional packaging solutions designed for premium corporate gifting.",
      image: customrigid,
    },
    {
      title: "Paper Bags",
      desc: "Eco-friendly printed paper bags perfect for retail stores and brand promotions.",
      image: bag,
    },
    {
      title: "Foldable Bags",
      desc: "Lightweight foldable bags designed for convenience, portability, and reusable packaging.",
      image: foldablebag,
    },
    {
      title: "Shade Cards",
      desc: "High-quality printed shade cards for displaying product colors and materials.",
      image: shadecards,
    },
    {
      title: "Custom Danglers",
      desc: "High-quality custom danglers for retail promotion and in-store branding.",
      image: airodo,
    },
    {
      title: "Personalized Diaries",
      desc: "Branded diaries customized for corporate gifting and business promotions.",
      image: diary,
    },
    {
      title: "Table Calendar",
      desc: "Custom printed table calendars perfect for office desks and corporate branding.",
      image: actioncalender,
    },
    {
      title: "Wall Calendar",
      desc: "High-quality wall calendars designed for year-round visibility and promotion.",
      image: wallcalender,
    },
  ];

  return (
    <section id="products" className="bg-gray-50 pt-16 pb-12 scroll-mt-24">

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
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
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