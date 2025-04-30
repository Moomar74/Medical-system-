import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import herovideo from '../assets/hero-video.mp4';

function HeroSection() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [heroMessage, setHeroMessage] = useState('Brighten Your Smile With Us');

  useEffect(() => {
    const messages = [
      'Brighten Your Smile With Us',
      'Transform Your Dental Care',
      'Smile Confidently Today',
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setHeroMessage(messages[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsVideoPlaying(true);
      }).catch((error) => {
        console.error('Video playback failed:', error);
        setIsVideoPlaying(false);
      });
    }
  };

  return (
    <section className="hero-bg">
      {!isVideoPlaying && (
        <div className="video-fallback">
          <button className="play-button" onClick={handlePlayVideo} aria-label="Play hero video">
            Play Video
          </button>
          <p className="error-message">Unable to load video. Click to retry.</p>
        </div>
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster="/path/to/fallback-image.jpg"
        className="hero-video"
        onError={(e) => {
          console.error('Video error:', e);
          setIsVideoPlaying(false);
        }}
        onCanPlay={() => {
          handlePlayVideo();
        }}
      >
        <source src={herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-text">{heroMessage}</h1>
        <p className="hero-tagline">Expert Dental Care for a Confident Smile</p>
        <div className="hero-buttons">
          <Link to="/booking" className="hero-button primary" aria-label="Book a Re-Examination Appointment">
            Book Now
          </Link>
          <Link to="/services" className="hero-button secondary" aria-label="Learn More About Our Services">
            Discover Services
          </Link>
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
    { iconClass: "fa-solid fa-tooth", title: "Teeth Cleaning", description: "Precision cleaning for a radiant smile." },
    { iconClass: "fa-solid fa-face-smile", title: "Whitening", description: "Advanced whitening for brilliant teeth." },
    { iconClass: "fa-solid fa-teeth", title: "Orthodontics", description: "Modern solutions for perfect alignment." },
  ];

  return (
    <section className="services-section">
      <h2>Our Expertise</h2>
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
    { iconClass: "fa-solid fa-certificate", title: "Certified Experts", description: "Board-certified dental specialists." },
    { iconClass: "fa-solid fa-tools", title: "Advanced Technology", description: "Cutting-edge tools for optimal results." },
    { iconClass: "fa-solid fa-user-friends", title: "Patient-Centric Care", description: "Warm, personalized service." },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <i className={reason.iconClass} aria-hidden="true"></i>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
    { name: "John Doe", feedback: "Exceptional care transformed my smile!" },
    { name: "Jane Smith", feedback: "Professional and welcoming team." },
    { name: "Mike Johnson", feedback: "Top-notch service, highly recommend!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <h2>Client Testimonials</h2>
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
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/locations" className="footer-link">Locations</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" title="Follow us on Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" title="Follow us on Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" title="Follow us on Instagram">
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
      <Helmet>
        <title>Dental Clinic - Expert Dental Care</title>
        <meta name="description" content="Transform your smile with our professional dental services, including cleaning, whitening, and orthodontics." />
      </Helmet>
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