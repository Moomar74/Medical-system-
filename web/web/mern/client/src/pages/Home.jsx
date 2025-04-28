import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Autoplay failed:', error);
        // Show play button if autoplay fails
        setIsVideoLoaded(false);
      });
    }
  }, []);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsVideoLoaded(true);
      }).catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  };

  return (
    <section className="hero-bg">
      {!isVideoLoaded && (
        <div className="preloader">
          <button className="play-button" onClick={handlePlayVideo} aria-label="Play hero video">
            Play Video
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="hero-video"
        poster="/assets/hero-poster.jpg"
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Brighten Your Smile With Us</h1>
        <p className="hero-tagline">Expert Dental Care for a Confident Smile</p>
        <div className="hero-buttons">
          <button aria-label="Book a Re-Examination Appointment" className="hero-button primary">
            Book a Re-Examination
          </button>
          <button aria-label="Learn More About Our Services" className="hero-button secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ iconClass, title, description }) {
  return (
    <div className="service-card">
      <i className={iconClass} aria-hidden="true"></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ServicesSection() {
  const services = [
    { iconClass: "fa-solid fa-tooth", title: "Teeth Cleaning", description: "Professional cleaning to keep your teeth sparkling." },
    { iconClass: "fa-solid fa-face-smile", title: "Whitening", description: "Brighten your smile with our safe whitening treatments." },
    { iconClass: "fa-solid fa-teeth", title: "Braces", description: "Straighten your teeth with our modern orthodontic solutions." },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { iconClass: "fa-solid fa-certificate", title: "Certified Doctors", description: "Our team is highly trained and certified." },
    { iconClass: "fa-solid fa-tools", title: "Modern Equipment", description: "State-of-the-art technology for best results." },
    { iconClass: "fa-solid fa-user-friends", title: "Friendly Staff", description: "We make your visit comfortable and pleasant." },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <i className={reason.iconClass} aria-hidden="true"></i>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p> {/* Fixed: Use reason.description */}
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing service! My smile has never been better!" },
    { name: "Jane Smith", feedback: "The staff was so friendly and professional." },
    { name: "Mike Johnson", feedback: "Modern equipment and quick procedures!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="testimonial-card">
              <p className="feedback">"{testimonial.feedback}"</p>
              <p className="name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About Us</Link>
        <Link to="/locations" className="footer-link">Locations</Link>
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>© 2025 Dental Clinic. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <div className="section-divider"></div>
      <ServicesSection />
      <div className="section-divider"></div>
      <WhyChooseUs />
      <div className="section-divider"></div>
      <TestimonialSlider />
      <div className="section-divider"></div>
      <Footer />
    </div>
  );
}

export default Home;