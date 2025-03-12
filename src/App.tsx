import React, { useState, useEffect } from 'react';
import {   Menu, ChevronRight, Star, Diamond, Phone, Mail, MapPin, Clock, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'featured', 'categories', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
      title: "Timeless Elegance",
      subtitle: "Eternal Beauty",
      text: "Discover our curated collection of fine jewelry, where each piece tells a story of craftsmanship, passion, and timeless sophistication."
    },
    {
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80",
      title: "Luxury Collection",
      subtitle: "Precious Moments",
      text: "Experience the extraordinary with our exclusive selection of handcrafted jewelry pieces."
    },
    {
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80",
      title: "Bespoke Design",
      subtitle: "Your Vision",
      text: "Create your perfect piece with our master craftsmen and bring your dreams to life."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 lg:hidden hover:text-gold-500 transition-colors" />
              <div className="flex items-center">
                <Diamond className="h-8 w-8 text-gold-500 mr-2" />
                <h1 className="text-3xl font-serif font-bold text-gray-900">Sri jewellery</h1>
              </div>
            </div>
            <div className="hidden lg:flex space-x-12">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-gray-700 hover:text-gold-500 transition-colors font-medium tracking-wide ${activeSection === 'home' ? 'text-gold-500' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('featured')}
                className={`text-gray-700 hover:text-gold-500 transition-colors font-medium tracking-wide ${activeSection === 'featured' ? 'text-gold-500' : ''}`}
              >
                Featured
              </button>
              <button 
                onClick={() => scrollToSection('categories')}
                className={`text-gray-700 hover:text-gold-500 transition-colors font-medium tracking-wide ${activeSection === 'categories' ? 'text-gold-500' : ''}`}
              >
                Categories
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-gray-700 hover:text-gold-500 transition-colors font-medium tracking-wide ${activeSection === 'contact' ? 'text-gold-500' : ''}`}
              >
                Contact
              </button>
            </div>
            {/* <div className="flex items-center space-x-6">
              <Search className="h-6 w-6 text-gray-600 hover:text-gold-500 transition-colors cursor-pointer" />
              <Heart className="h-6 w-6 text-gray-600 hover:text-gold-500 transition-colors cursor-pointer" />
              <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-gold-500 transition-colors cursor-pointer" />
            </div> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative pt-20">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-[700px]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-shadow">
                      {slide.title}<br />
                      <span className="text-gold-200">{slide.subtitle}</span>
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-white/90 font-light leading-relaxed">
                      {slide.text}
                    </p>
                    <div className="mt-10">
                      <a
                        href="#"
                        className="inline-flex items-center px-8 py-4 border-2 border-gold-200 text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                      >
                        Explore Collection
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-white hover:!text-gold-200 transition-colors">
            <ChevronLeft className="h-8 w-8" />
          </div>
          <div className="swiper-button-next !text-white hover:!text-gold-200 transition-colors">
            <ChevronRight className="h-8 w-8" />
          </div>
        </Swiper>
      </div>

      {/* Featured Products */}
      <div id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "Diamond Eternity Ring",
              // price: "$2,499",
              image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
            },
            {
              name: "Pearl Drop Earrings",
              // price: "$899",
              image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80"
            },
            {
              name: "Sapphire Pendant",
              // price: "$1,299",
              image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
            }
          ].map((product, index) => (
            <div key={index} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 hover-shine">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {/* <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" /> */}
                </button>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-serif font-medium text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                </div>
                {/* <p className="mt-2 text-xl font-medium text-gold-600">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div id="categories" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Shop by Category</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Necklaces",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80"
              },
              {
                name: "Rings",
                image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
              },
              {
                name: "Earrings",
                image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80"
              },
              {
                name: "Bracelets",
                image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80"
              }
            ].map((category, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl hover-shine">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">{category.name}</h3>
                      <span className="inline-block px-4 py-2 border border-white/30 text-white text-sm rounded-full backdrop-blur-sm bg-white/10 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Collection
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">We're here to assist you with any questions about our collections.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Visit Our Boutique</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="mt-1 text-gray-600">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="mt-1 text-gray-600">+1 (310) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="mt-1 text-gray-600">contact@lumiere.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">Hours</h4>
                      <p className="mt-1 text-gray-600">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Book an Appointment</h3>
                <p className="text-gray-600 mb-4">
                  For a personalized shopping experience, schedule a private consultation with our jewelry experts.
                </p>
                <button className="inline-flex items-center px-6 py-3 border-2 border-gold-500 text-base font-medium rounded-md text-gold-600 hover:bg-gold-500 hover:text-white transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Diamond className="h-8 w-8 text-gold-400 mr-2" />
                <h3 className="text-2xl font-serif font-bold">Sir jewellery</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Crafting timeless pieces that celebrate life's precious moments. Each creation is a testament to elegance and sophistication.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-6">Subscribe to receive updates and exclusive offers.</p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>© 2024 Lumière. All rights reserved.</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
