import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Users,
  MapPin,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImage from "../assets/yrkpics/Compulsory1.JPG";
import roadshowImage from "../assets/roadshowactivities/led.jpg";
import engagementImage from "../assets/ourservices/a.jpeg";
import pamphletImage from "../assets/ourservices/pampletdistribution.jpg";
import vehicleImage from "../assets/ourservices/led.jpg";
import gpsImage from "../assets/dailyreportingtoclientswithgpsstamping/echer1.jpg";
import games from "../assets/ourservices/Games.jpeg";
import Autoplay from "embla-carousel-autoplay";
import kisoky from "../assets/roadshowactivities/Kiosky.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import v1 from "../assets/ourvehicles/12.jpg";
import v2 from "../assets/ourvehicles/16.jpeg";
import v3 from "../assets/ourvehicles/18.jpg";
import v4 from "../assets/ourvehicles/Compulsory3.jpg";
import v5 from "../assets/ourvehicles/DCMBIG.jpeg";
import v6 from "../assets/ourvehicles/DCMLShape.jpg";
import v7 from "../assets/ourvehicles/LShapemodel.jpg";
import v8 from "../assets/ourvehicles/ModelLShape.jpg";
import v9 from "../assets/ourvehicles/ModelLShape2.jpg";
import v10 from "../assets/ourvehicles/ModelLShapewithGameactivity.jpg";
import v11 from "../assets/ourvehicles/ModelTshape.jpg";
import v12 from "../assets/ourvehicles/14.JPG";



const stats = [
  { value: "8+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Campaigns Delivered", icon: TrendingUp },
  { value: "50+", label: "LED Vehicles", icon: Truck },
  { value: "100+", label: "Happy Clients", icon: Users },
];

const services = [
  {
    title: "LED Van Campaigns",
    description:
      "High-impact mobile advertising with LED display vehicles across urban and rural areas.",
    image: vehicleImage,
    icon: Truck,
  },
  {
    title: "Road Show Activities",
    description:
      "Engaging brand activation events creating memorable customer experiences.",
    image: games,
    icon: Users,
  },
  {
    title: "Customer Engagement",
    description:
      "Interactive games and activities that boost brand recall.",
    image: engagementImage,
    icon: Award,
  },
  {
    title: "Pamphlet Distribution",
    description:
      "Strategic flyer and brochure distribution with full coverage.",
    image: pamphletImage,
    icon: MapPin,
  },
];

const features = [
  "Daily GPS-tracked reporting",
  "Real-time campaign monitoring",
  "Pan India coverage",
  "Experienced field teams",
  "Customized solutions",
  "24/7 client support",
];


const vehicleModels = [
  { name: "LED Display Van", image: v1, description: "High-resolution mobile LED screens" },
  { name: "Roadshow Vehicle", image: v2, description: "Fully equipped event vehicles" },
  { name: "Promotional Van", image: v3, description: "Brand activation on wheels" },
  { name: "Audio-Visual Van", image: v4, description: "Complete AV setup for events" },
  { name: "Distribution Vehicle", image: v5, description: "Efficient pamphlet distribution" },
  { name: "LED Display Van", image: v6, description: "High-resolution mobile LED screens" },
  { name: "Roadshow Vehicle", image: v7, description: "Fully equipped event vehicles" },
  { name: "Promotional Van", image: v8, description: "Brand activation on wheels" },
  { name: "Audio-Visual Van", image: v9, description: "Complete AV setup for events" },
  { name: "Distribution Vehicle", image: v10, description: "Efficient pamphlet distribution" },
  { name: "Distribution Vehicle", image: v11, description: "Efficient pamphlet distribution" },
  { name: "Distribution Vehicle", image: v12, description: "Efficient pamphlet distribution" },
];
/* ---------------- COMPONENT ---------------- */

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Floating Founder Badge */}
        <div className="absolute z-20 top-[35%] left-[35%] -translate-y-1/2">
          <div className="flex items-center gap-3 px-4 py-2 rounded-bl-2xl rounded-l-2xl rounded-tr-2xl bg-white/85 backdrop-blur-md shadow-[0_10px_25px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            {/* <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
              C
            </div> */}
            <div className="text-sm leading-tight">
              <div className="font-semibold text-gray-900">CEO</div>
              {/* <div className="text-gray-500 text-xs">Company Name</div> */}
            </div>
          </div>
        </div>


        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl ml-40 mt-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT SIDE (EMPTY — keeps CEO visible) */}
            <div />

            {/* RIGHT SIDE CONTENT */}
            <div className="text-left text-white ml-[15rem] mt-[-19.5rem]">
              <span className="inline-block mb-6 px-4 py-2 rounded-full bg-black text-indigo-300 text-sm">
                Trusted by 100+ Brands
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Amplify Your Brand <br />
                <span className="text-blue-400">Across India</span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-10 max-w-xl">
                8+ years of delivering high-impact advertising campaigns through LED
                vans, road shows & brand activations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                    Get Free Quote
                    <ArrowRight size={20} />
                  </button>
                </Link>

                <Link to="/gallery">
                  <button className="px-8 py-4 rounded-lg border border-white text-white hover:bg-white hover:text-black transition">
                    View Our Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="py-20 bg-white-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Fleet
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Vehicle Models
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse fleet of promotional vehicles designed for maximum brand visibility and impact.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {vehicleModels.map((vehicle, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {/* <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="font-body text-primary-foreground/80 text-sm">
                        {vehicle.description}
                      </p> */}
                    </div>
                    {/* <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {vehicle.name}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mt-1">
                        {vehicle.description}
                      </p>
                    </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className=" max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-8">
                  <service.icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/services">
              <button className="px-10 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted Partner for Brand Success
            </h2>
            <p className="text-gray-300 mb-8">
              With over 8 years of experience, we bring unmatched expertise in
              outdoor advertising across India.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-400" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <button className="px-8 py-4 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                Learn More About Us
              </button>
            </Link>
          </div>

          <img
            src={kisoky}
            alt="GPS Tracking"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 text-center bg-indigo-600 rounded-3xl p-16 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Campaign?
          </h2>
          <p className="mb-10 text-indigo-100">
            Contact us today and amplify your brand reach.
          </p>

          <Link to="/contact">
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
              Start Your Campaign
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
