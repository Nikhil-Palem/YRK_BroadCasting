import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImage from "../assets/yrkpics/Compulsory1.JPG";
import roadshowImage from "../assets/roadshowactivities/led.jpg";
import engagementImage from "../assets/dailyreportingtoclientswithgpsstamping/Ramraj.jpeg";
import pamphletImage from "../assets/pampletdistributions/pampletdistributions.jpg";
import vehicleImage from "../assets/bigvehicles/Compulsory3.jpg";
import gpsImage from "../assets/dailyreportingtoclientswithgpsstamping/echer1.jpg";

/* ---------------- DATA ---------------- */

const categories = [
  { id: "all", label: "All" },
  { id: "led-vans", label: "LED Vehicles" },
  { id: "roadshows", label: "Road Shows" },
  { id: "engagement", label: "Customer Engagement" },
  { id: "distribution", label: "Distribution" },
  { id: "reporting", label: "Daily Reporting" },
];

const galleryItems = [
  { id: 1, category: "led-vans", image: heroImage, title: "LED Van Campaign - Urban Area" },
  { id: 2, category: "led-vans", image: vehicleImage, title: "LED Vehicle Fleet" },
  { id: 3, category: "roadshows", image: roadshowImage, title: "Brand Activation Event" },
  { id: 4, category: "engagement", image: engagementImage, title: "Customer Engagement Games" },
  { id: 5, category: "distribution", image: pamphletImage, title: "Pamphlet Distribution Campaign" },
  { id: 6, category: "reporting", image: gpsImage, title: "GPS Tracking Dashboard" },
  { id: 7, category: "led-vans", image: heroImage, title: "Night LED Campaign" },
  { id: 8, category: "roadshows", image: roadshowImage, title: "Community Road Show" },
  { id: 9, category: "engagement", image: engagementImage, title: "Interactive Brand Activities" },
];

/* ---------------- COMPONENT ---------------- */

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-indigo-400 text-sm uppercase mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Campaign <br />
            <span className="text-indigo-400">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Explore our portfolio of successful campaigns and brand activations
            across India.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-8 bg-gray-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
