import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ChevronRight, Star } from 'lucide-react';
import sampleImage from '../public/sample.png';
import image from '../public/image.png'
import './App.css';

const services = [
  { title: "Men's Haircut", price: "$25", description: "Classic haircut for men." },
  { title: "Haircut & Beard Combo", price: "$35", description: "Get a fresh cut and beard trim." },
  { title: "The Works", price: "$50", description: "Haircut, shave, and treatment." },
  { title: "Hot Towel Shave", price: "$30", description: "Relaxing hot towel shave." },
  { title: "Beard Trim", price: "$15", description: "Shape and style your beard." },
  { title: "Kids Haircut", price: "$20", description: "Haircut for children (12 & under)." },
];

const testimonials = [
  { name: "Mike Johnson", rating: 5, comment: "I've been getting my hair cut here for years. The attention to detail is unmatched!" },
  { name: "David Martinez", rating: 4, comment: "Great service! They really listen to what you want." },
  { name: "Chris Taylor", rating: 5, comment: "The hot towel shave is amazing. Highly recommend!" },
];

const faqData = [
  { category: 'General', question: 'Do I need an appointment or can I walk in?', answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure availability.' },
  { category: 'Services', question: 'How long does a typical haircut take?', answer: 'A standard haircut usually takes around 30 to 45 minutes depending on the service.' },
  { category: 'Pricing', question: 'What form of payment do you accept?', answer: 'We accept cash, credit/debit cards, and most major mobile payment platforms.' },
  { category: 'Support', question: 'Do you offer any loyalty programs or discounts?', answer: 'Yes! We have monthly promotions and a loyalty punch card for repeat customers.' },
  { category: 'Services', question: 'What hair products do you use and sell?', answer: "We use and sell premium men's grooming products from brands like Uppercut Deluxe, Layrite, and American Crew. Our barbers can recommend the best products for your hair type and style." },
];

const categories = ['All', 'General', 'Services', 'Pricing', 'Support'];

const BarberShopWebsite = () => {
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);
  const filteredFAQs = faqData.filter(faq => filter === 'All' || faq.category === filter);

  return (
    <div className="barber-shop-website">
      {/* Header */}
      <header className="header">
        <div className="header-content">
        <h1 className="logo">
  <img src="/image.png" alt="Fama Barber Shop & Beauty Salon Logo" />
  
</h1><span>Fama Barber Shop & Beauty Salon</span>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <a href="#book" className="book-button">+19408081569</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero-modern">
        <div className="hero-background">
          <img src="/sample.png" alt="Fama Barber Shop" className="hero-img" />
          <div className="hero-gradient-overlay" />
        </div>
        <div className="hero-modern-content">
          <motion.h1 className="hero-modern-title" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, ease: "easeOut", repeat: Infinity }}>
            Welcome to Fama Barber Shop & Beauty Salon
          </motion.h1>
          <p className="hero-modern-subtitle">
            Where tradition meets modern style. From timeless cuts to the freshest fades, we craft looks that turn heads.
          </p>
          <a href="#services" className="hero-modern-btn">Explore Our Services</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-container">
          {[1, 2, 3, 4].map(i => <div key={i} className={`triangle-circle extra-circle-${i}`}></div>)}
          <div className="about-content">
            <h2 className="about-title">Welcome to Fama Barber Shop & Beauty Salon</h2>
            <p className="about-description">
              Fama Barber Shop & Beauty Salon is not just a place for a haircut—it's an experience...
            </p>
            <a href="#services" className="about-cta">Explore Our Services</a>
          </div>
          <div className="about-image">
            <img src={sampleImage} alt="Barber Shop Interior" />
          </div>
        </div>
      </section><hr />

      {/* Services */}
      <section id="services" className="services-section">
        <img src="/scissors-icon.svg" alt="" className="side-icon left" />
        <img src="/comb-icon.svg" alt="" className="side-icon right" />
        <div className="services-container">
          <h2 className="section-title">Our Service Prices</h2>
          <p className="section-subtitle">Choose from our range of professional barbering services.</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section><hr />

      {/* Testimonials */}
      <section id="testimonials" className="section testimonials-modern">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="extra-triangle" style={{ top: `${10 * i}%`, left: `${(i * 7) % 100}%` }}></div>
        ))}
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-modern-card"
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} className="star-icon-filled" />)}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <p className="testimonial-name">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section><hr />

      {/* FAQ */}
      <section id="faqs" className="faq-section">
        <h2 className="section-title">Common Questions</h2>
        <div className="faq-controls">
          {categories.map(cat => (
            <button
              key={cat}
              className={`faq-category-button ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer" style={{ maxHeight: openIndex === index ? '200px' : '0', opacity: openIndex === index ? 1 : 0, transition: 'all 0.3s ease', overflow: 'hidden' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section><hr />

      {/* Contact */}
      <section id="contact" className="contact-section">
      
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p><strong>Address:</strong> 518 Acme St unit 101, Denton, TX 76205</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@famabarber.com</p>
            <h4>Opening Hours</h4>
            <p>Mon - Fri: 9:00 AM – 7:00 PM</p>
            <p>Saturday: 10:00 AM – 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Select Service:</label>
              <select id="service" required>
                <option value="">-- Choose a Service --</option>
                {services.map((s, idx) => <option key={idx} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section><hr />


      <section id="gallery" className="gallery-section">
  <h2 className="section-title">Gallery</h2>
  <p className="section-subtitle">Explore the style and atmosphere at Fama Barber Shop & Beauty Salon.</p>
  <div className="gallery-grid">
    <div className="gallery-item">
      <img src="/public/20250513_1528_Barber and Salon Interiors_simple_compose_01jv4h7c3yexz8ze9048ssc1d7.png" alt="Barbering in Action" className="gallery-image" />
    </div>
    <div className="gallery-item">
      <img src="/public/20250513_1528_Barber and Salon Interiors_simple_compose_01jv4h7c3xe9ksr2x6xqxhgwk9.png" alt="Haircut Styles" className="gallery-image" />
    </div>
    <div className="gallery-item">
      <img src="/public/20250513_1219_Barbershop and Salon_simple_compose_01jv46cdgye3fvjdqkmad58y1w.png" alt="Barber Shop Interior" className="gallery-image" />
    </div>
    <div className="gallery-item">
      <img src="/public/20250513_1219_Barbershop and Salon_simple_compose_01jv46cdgxfj2tb2ax3jgfxkjc.png" alt="Beard Styling" className="gallery-image" />
    </div>
    
  </div>
</section><hr />



      {/* Location */}
      <section id="location" className="location-full-section">
        <h2 className="section-title">Visit Our Shop</h2>
        <div className="location-container">
          <div className="map-embed">
            <iframe title="Fama Barber Shop Location" src="https://www.google.com/maps/embed?..." width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} loading="lazy" allowFullScreen></iframe>
          </div>
          <div className="location-details">
            <h3>Our Address</h3>
            <div className="contact-item"><MapPin className="contact-icon" /><p>518 Acme St unit 101, Denton, TX 76205, United States</p></div>
            <div className="contact-item"><Phone className="contact-icon" /><p>+1 940-808-1569</p></div>
            <div className="contact-buttons">
              <a href="https://www.google.com/maps/place/..." target="_blank" rel="noopener noreferrer" className="directions-button"><ChevronRight className="button-icon" /> Get Directions</a>
              <a href="tel:+19408081569" className="call-us-button"><Phone className="button-icon" /> Call Us</a>
            </div>
          </div>
        </div>
      </section><hr />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 className="footer-logo">Fama Barber Shop</h2>
            <p className="footer-description">Premium grooming experience in Denton, TX. Classic cuts with a modern touch.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📍 518 Acme St unit 101, Denton, TX</p>
            <p>📞 +1 940-808-1569</p>
            <p>✉️ info@famabarbershop.com</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Fama Barber Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BarberShopWebsite;