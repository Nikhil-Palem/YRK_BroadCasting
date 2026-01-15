import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactInfo = [
  { icon: MapPin, title: "Our Office", details: ["Dammaiguda Road, Hyderabad", "India - 500083"] },
  { icon: Phone, title: "Phone Number", details: ["+91 8977840333"] },
  { icon: Mail, title: "Email Address", details: ["yrkbroadcasting@gmail.com"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM"] },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        <div className="bg-white p-10 rounded-3xl shadow">
          {isSubmitted ? (
            <div className="text-center py-16">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
              <h3 className="text-xl mt-4 font-bold">Message Sent</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" required placeholder="Name" onChange={handleChange} value={formData.name} className="w-full p-3 border rounded" />
              <input name="email" required placeholder="Email" onChange={handleChange} value={formData.email} className="w-full p-3 border rounded" />
              <input name="phone" required placeholder="Phone" onChange={handleChange} value={formData.phone} className="w-full p-3 border rounded" />
              <input name="company" placeholder="Company" onChange={handleChange} value={formData.company} className="w-full p-3 border rounded" />
              <textarea name="message" required placeholder="Message" onChange={handleChange} value={formData.message} className="w-full p-3 border rounded h-32"></textarea>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded w-full flex justify-center items-center gap-2">
                Send <Send size={16} />
              </button>
            </form>
          )}
        </div>

        <div>
          {contactInfo.map((i, k) => (
            <div key={k} className="flex gap-4 p-4 shadow rounded mb-4">
              <i.icon className="text-indigo-600" />
              <div>
                <h4 className="font-bold">{i.title}</h4>
                {i.details.map((d, idx) => <p key={idx}>{d}</p>)}
              </div>
            </div>
          ))}

          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=17.498684,78.582817&z=15&output=embed"
            className="w-full h-[300px] rounded-xl border"
            loading="lazy"
          ></iframe>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
