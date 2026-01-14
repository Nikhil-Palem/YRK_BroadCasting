import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Shield,
  Target,
} from "lucide-react";
import { TrendingUp, Award, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import roadshowImage from "../../public/roadshowactivities/e.jpg";
import vehicleImage from "../../public/bigvehicles/12.jpg";

import kishor from "../../public/yrkpics/kishor.jpg";
import rajesh from "../../public/yrkpics/rajesh.jpg";
/* ---------------- DATA ---------------- */

const milestones = [
  { year: "2016", title: "Company Founded", description: "Started operations with 5 LED vehicles in Hyderabad" },
  { year: "2018", title: "Regional Expansion", description: "Expanded services across Andhra Pradesh & Telangana" },
  { year: "2020", title: "50+ Vehicles", description: "Fleet expanded to 50+ LED vans and promotional vehicles" },
  { year: "2022", title: "Social Impact", description: "Launched Anti-Drug Awareness campaigns across states" },
  { year: "2024", title: "100+ Clients", description: "Serving 100+ clients with 500+ campaigns" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in honest communication and complete transparency with our clients.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description:
      "Every campaign is designed to deliver measurable impact and real results.",
  },
  {
    icon: Heart,
    title: "Social Responsibility",
    description:
      "Committed to community welfare through awareness campaigns and initiatives.",
  },
];

/* ---------------- COMPONENT ---------------- */

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-indigo-400 text-sm uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Brands, <br />
            <span className="text-indigo-400">Creating Impact</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            YRK Broadcasting Pvt. Ltd. is a leading advertising company with
            8+ years of experience delivering high-impact campaigns across
            Andhra Pradesh and Telangana.
          </p>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-gray-100 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Founders
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              The visionary leaders driving YRK Broadcasting's success and innovation in outdoor advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_16px_rgba(15,23,42,0.10),0_2px_6px_rgba(15,23,42,0.06)] transition-all duration-300 group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center border-4 border-secondary/20 shadow-xl overflow-hidden">
                  <img
                    src={kishor}   // or your image path
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                Yechuri Kishore
              </h3>
              <p className="font-body text-secondary font-semibold mb-3">
                Co-Founder & MD
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Visionary leader with extensive experience in advertising and brand promotions across India.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_16px_rgba(15,23,42,0.10),0_2px_6px_rgba(15,23,42,0.06)] transition-all duration-300 group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center border-4 border-secondary/20 shadow-xl overflow-hidden">
                  <img
                    src={rajesh}   // or your image path
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                Yechuri Rakesh
              </h3>
              <p className="font-body text-secondary font-semibold mb-3">
                Co-Founder & Director
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Strategic expert driving operational excellence and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={vehicleImage}
              alt="YRK Broadcasting Fleet"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white rounded-2xl px-6 py-4 shadow-lg">
              <h4 className="text-4xl font-bold">8+</h4>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <span className="inline-block text-indigo-600 text-sm uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From Humble Beginnings to Industry Leaders
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2016, YRK Broadcasting started with a vision to
                transform outdoor advertising in India. What began with just
                five LED vehicles has grown into a fleet of over 50+ vehicles.
              </p>
              <p>
                We have executed 500+ campaigns for more than 100 clients across
                multiple states, delivering consistent results and measurable
                impact.
              </p>
              <p>
                Beyond commercial success, we actively contribute to society
                through Anti-Drug Awareness and public welfare campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Milestones & Achievements
            </h2>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-[60px] left-0 right-0 h-1 bg-border rounded-full" />
            <div
              className="absolute top-[60px] left-0 h-1 bg-gradient-to-r from-secondary via-secondary to-secondary/50 rounded-full"
              style={{ width: '100%' }}
            />

            {/* Milestones Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center group"
                >
                  {/* Year Badge */}
                  <div className="relative z-10 mb-4">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <span className="font-display text-lg font-bold text-secondary">
                        {milestone.year.slice(-2)}'
                      </span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-secondary" />
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_16px_rgba(15,23,42,0.10),0_2px_6px_rgba(15,23,42,0.06)]
 transition-all duration-300 text-center w-full group-hover:-translate-y-2">
                    <span className="font-display text-2xl font-bold text-secondary block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Summary Bar */}
          <div className="mt-16 bg-white rounded-2xl p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="font-display text-2xl font-bold text-foreground block">2016</span>
                <span className="font-body text-sm text-muted-foreground">Started</span>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="font-display text-2xl font-bold text-foreground block">8+</span>
                <span className="font-body text-sm text-muted-foreground">Years</span>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="font-display text-2xl font-bold text-foreground block">100+</span>
                <span className="font-body text-sm text-muted-foreground">Clients</span>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="font-display text-2xl font-bold text-foreground block">500+</span>
                <span className="font-body text-sm text-muted-foreground">Campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <value.icon className="w-10 h-10 mx-auto mb-6 text-indigo-600" />
                <h3 className="text-2xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL IMPACT */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creating Positive Change in Communities
            </h2>
            <p className="text-indigo-100 mb-6">
              Our Anti-Drug Awareness campaigns have reached millions,
              contributing to healthier and more informed communities.
            </p>
            <p className="text-indigo-100 mb-8">
              We’ve received appreciation from government bodies for our
              contributions to public welfare initiatives.
            </p>

            <Link to="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Partner With Us
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <img
            src={roadshowImage}
            alt="Community Engagement"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
