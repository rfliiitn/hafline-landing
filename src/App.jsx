import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Star,
  Shield,
  Leaf,
  Award,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Send,
} from "lucide-react";

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <MarketplaceLinks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-yellow-400">HAFLINE</div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
          <a
            href="#products"
            className="hover:text-yellow-400 transition-colors"
          >
            Products
          </a>
          <a
            href="#testimonials"
            className="hover:text-yellow-400 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          Get Updates
        </button>
      </nav>
    </motion.header>
  );
}
// Hero Component
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-gray-800"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2070&q=80")',
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          HAFLINE
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-4 text-yellow-400 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          New Brand • Coming Soon • Limited Edition
        </motion.p>

        <motion.p
          className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          🔥 GRAND OPENING PROMO • Up to 50% OFF • Free Shipping • Early Bird
          Special 🔥 <br />
          Be the first to experience premium streetwear that defines your style.
        </motion.p>

        <motion.button
          onClick={scrollToProducts}
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Collection
        </motion.button>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Story</h2>

          <p className="text-lg text-gray-300 mb-8">
            HAFLINE was born from a vision to bridge the gap between street
            style and premium fashion. We believe that modern apparel should not
            only look good but also tell a story – your story. Every piece in
            our collection is carefully crafted to embody the spirit of
            contemporary urban culture.
          </p>

          <p className="text-lg text-gray-300 mb-12">
            Our commitment goes beyond fashion. We're dedicated to sustainable
            practices, ethical production, and creating pieces that stand the
            test of time. When you wear HAFLINE, you're not just wearing clothes
            – you're wearing confidence, authenticity, and a lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {[
            {
              icon: Shield,
              title: "Quality",
              desc: "Premium materials and craftsmanship in every piece",
            },
            {
              icon: Leaf,
              title: "Sustainable",
              desc: "Environmentally conscious production and sourcing",
            },
            {
              icon: Award,
              title: "Authentic",
              desc: "Genuine designs that reflect modern urban culture",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-900 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Showcase Component
function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0);

  const products = [
    {
      name: "Urban Edge Hoodie",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Premium streetwear hoodie with contemporary cut",
      price: "Rp 299,000",
    },
    {
      name: "Minimal Tee Collection",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Essential t-shirts with modern aesthetic",
      price: "Rp 149,000",
    },
    {
      name: "Statement Jacket",
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Bold outerwear that makes an impact",
      price: "Rp 449,000",
    },
    {
      name: "Comfort Joggers",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      desc: "Stylish comfort for everyday wear",
      price: "Rp 224,000",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-400">
            Discover our launch collection with exclusive offers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </span>
                  <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-bold">
                    50% OFF
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-3">{product.desc}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-gray-500 line-through text-sm">
                    Rp {parseInt(product.price.replace(/[^\d]/g, "")) * 2}
                  </span>
                  <span className="text-yellow-400 font-bold">
                    {product.price}
                  </span>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-300 mb-1">Coming Soon to:</p>
                  <div className="text-xs text-gray-400">
                    Shopee • Tokopedia • Instagram
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Marketplace Links Component
function MarketplaceLinks() {
  const marketplaces = [
    {
      name: "Shopee",
      logo: "🛍️",
      url: import.meta.env.VITE_SHOPEE_URL || "#",
      color: "bg-orange-600",
    },
    {
      name: "Tokopedia",
      logo: "🏪",
      url: import.meta.env.VITE_TOKOPEDIA_URL || "#",
      color: "bg-green-600",
    },
    {
      name: "TikTok Shop",
      logo: "🎵",
      url: import.meta.env.VITE_TIKTOK_SHOP_URL || "#",
      color: "bg-black",
    },
    {
      name: "Instagram",
      logo: "📷",
      url: import.meta.env.VITE_INSTAGRAM_URL || "#",
      color: "bg-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Follow Our Launch</h2>
          <p className="text-lg text-gray-400">
            Stay connected for exclusive updates and early access
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto flex-wrap">
          {marketplaces.map((marketplace, index) => (
            <motion.a
              key={index}
              href={marketplace.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`${marketplace.color} px-4 py-2 rounded-full text-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2 text-sm font-semibold`}
              >
                <span className="text-lg">{marketplace.logo}</span>
                <span>{marketplace.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Sarah K.",
      text: "HAFLINE pieces are incredible! The quality is outstanding and the designs are so fresh and modern. I get compliments every time I wear them.",
      rating: 5,
      location: "Jakarta",
    },
    {
      name: "Mike R.",
      text: "Finally found a brand that gets street style right. The fits are perfect and the materials feel premium. Definitely worth the investment.",
      rating: 5,
      location: "Bandung",
    },
    {
      name: "Lisa M.",
      text: "Love how HAFLINE combines comfort with style. Their hoodies are my go-to for both casual and semi-formal occasions.",
      rating: 5,
      location: "Surabaya",
    },
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400">
            Real feedback from real customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center"
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-lg text-gray-300 mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <h3 className="text-xl font-bold text-yellow-400">
              {testimonials[current].name}
            </h3>
            <p className="text-gray-400">{testimonials[current].location}</p>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-yellow-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setMessage(
        "Thank you for subscribing! We'll keep you updated with our latest collections."
      );
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const waNumber = import.meta.env.VITE_WA_NUMBER || "+6281234567890";
    const message = encodeURIComponent(
      "Hello HAFLINE! I'm interested in your products."
    );
    window.open(
      `https://wa.me/${waNumber.replace("+", "")}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Subscribe to our newsletter and be the first to know about new drops
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Newsletter Subscription</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </div>

            {message && (
              <motion.p
                className="mt-4 text-green-400 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {message}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact via WhatsApp
              </button>

              <div className="text-center text-gray-400">
                <p className="mb-2">Or reach out to us at:</p>
                <p className="font-semibold">hello@hafline.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">HAFLINE</h3>
            <p className="text-gray-400 mb-4">
              Modern apparel for the contemporary lifestyle. Quality, style, and
              sustainability in every piece.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href={
                  import.meta.env.VITE_INSTAGRAM_URL ||
                  "https://instagram.com/hafline"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={
                  import.meta.env.VITE_TIKTOK_URL ||
                  "https://tiktok.com/@hafline"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HAFLINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
