import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Users,
  MapPin,
  Megaphone,
  BarChart3,
  Gamepad2,
  FileText,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImage from "../../public/yrkpics/Compulsory1.JPG";
import roadshowImage from "../../public/roadshowactivities/led.jpg";
import engagementImage from "../../public/ourservices/a.jpeg";
import pamphletImage from "../../public/ourservices/pampletdistribution.jpg";
import vehicleImage from "../../public/bigvehicles/Compulsory3.jpg";
import gpsImage from "../../public/dailyreportingtoclientswithgpsstamping/echer1.jpg";
import games from "../../public/ourservices/Games.jpeg";
/* ---------------- SERVICES DATA ---------------- */
import kisoky from "../../public/roadshowactivities/Kiosky.jpg";

const services = [
  {
    icon: Truck,
    title: "LED Van Campaigns",
    description:
      "Make your brand impossible to ignore with our fleet of 50+ LED display vehicles across urban and rural areas.",
    features: [
      "High-resolution LED displays",
      "Audio-visual content support",
      "GPS-tracked routes",
      "Day & night visibility",
    ],
    image: roadshowImage,
  },
  {
    icon: Megaphone,
    title: "Road Show Activities",
    description:
      "Create buzz with professionally managed road shows that bring your brand directly to customers.",
    features: [
      "Professional event management",
      "Brand ambassadors",
      "Sound & stage setup",
      "Complete logistics support",
    ],
    image: games,
  },
  {
    icon: Gamepad2,
    title: "Customer Engagement Games",
    description:
      "Interactive games and activities designed to boost brand recall and engagement.",
    features: [
      "Custom branded games",
      "Prize management",
      "Crowd attraction",
      "Lead generation",
    ],
    image: engagementImage,
  },
  {
    icon: FileText,
    title: "Pamphlet Distribution",
    description:
      "Strategic flyer and brochure distribution with GPS-stamped proof and daily reporting.",
    features: [
      "Targeted distribution zones",
      "Trained teams",
      "Daily coverage reports",
      "GPS location stamps",
    ],
    image: pamphletImage,
  },
  {
    icon: MapPin,
    title: "Rural Marketing",
    description:
      "Effective rural outreach campaigns designed to connect with village communities.",
    features: [
      "Village coverage mapping",
      "Local language content",
      "Community engagement",
      "Market sampling",
    ],
    image: heroImage,
  },
  {
    icon: BarChart3,
    title: "Daily GPS Reporting",
    description:
      "Transparent real-time campaign tracking with performance analytics.",
    features: [
      "Live tracking dashboard",
      "Photo documentation",
      "Location stamps",
      "Analytics reports",
    ],
    image: kisoky,
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your goals and audience" },
  { step: "02", title: "Strategy", description: "Campaign planning & route mapping" },
  { step: "03", title: "Execution", description: "Deployment of teams and vehicles" },
  { step: "04", title: "Reporting", description: "Daily GPS reports & analytics" },
];

/* ---------------- COMPONENT ---------------- */

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive <br />
            <span className="text-indigo-400">Advertising Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            From LED van campaigns to customer engagement activities, we deliver
            end-to-end advertising solutions that maximize brand impact.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <service.icon className="w-10 h-10 text-indigo-600 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Get Quote
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <span className="text-5xl font-bold text-indigo-100">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-indigo-100 mb-10">
            Contact us today for a free consultation and campaign proposal.
          </p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
              Request Free Quote
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
