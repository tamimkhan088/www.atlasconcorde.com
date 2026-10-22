'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  Globe2,
  Heart,
  Menu,
  Search,
  Send,
  ShoppingCart,
  UserRound,
  X,
  MapPin,
} from 'lucide-react';

const heroSlides = [
  {
    eyebrow: 'Made in Italy · Since 1969',
    title: 'Italian Porcelain Tiles\nfor Every Surface',
    image:
      'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&h=1800&w=2600',
  },
  {
    eyebrow: 'New Collection · Boost Expression',
    title: 'A new chromatic side\nof poured concrete',
    image:
      'https://images.pexels.com/photos/6970057/pexels-photo-6970057.jpeg?auto=compress&cs=tinysrgb&h=1800&w=2600',
  },
  {
    eyebrow: 'Marvel Next · Marble Reimagined',
    title: 'Marvel becomes next.\nA new interpretation of marble',
    image:
      'https://images.pexels.com/photos/7587869/pexels-photo-7587869.jpeg?auto=compress&cs=tinysrgb&h=1800&w=2600',
  },
];

const collections = [
  {
    title: 'Concrete effect',
    image:
      'https://images.pexels.com/photos/4327417/pexels-photo-4327417.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Marble effect',
    image:
      'https://images.pexels.com/photos/4705924/pexels-photo-4705924.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Stone effect',
    image:
      'https://images.pexels.com/photos/18985513/pexels-photo-18985513.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Wood effect',
    image:
      'https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: '3D effect',
    image:
      'https://images.pexels.com/photos/40228976/pexels-photo-40228976.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Solid effect',
    image:
      'https://images.pexels.com/photos/5042025/pexels-photo-5042025.png?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
];

const productSystem = [
  {
    title: 'Floors and Walls',
    image:
      'https://images.pexels.com/photos/22589689/pexels-photo-22589689.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Outdoor',
    image:
      'https://images.pexels.com/photos/11866592/pexels-photo-11866592.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Large Sizes',
    image:
      'https://images.pexels.com/photos/1144871/pexels-photo-1144871.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Furniture',
    image:
      'https://images.pexels.com/photos/6970057/pexels-photo-6970057.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Slabs for Furniture',
    image:
      'https://images.pexels.com/photos/6315801/pexels-photo-6315801.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
];

const worlds = [
  {
    title: 'Boost Natural',
    subtitle: 'Biophilic stone surfaces',
    description:
      'Unique stone-effect surfaces, with a biophilic approach and sophisticated textures, for harmonious and multisensory environments.',
    image:
      'https://images.pexels.com/photos/18985513/pexels-photo-18985513.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    title: 'Log',
    subtitle: 'Wood reimagined',
    description:
      'A new understanding of wood, an elevation to an unmatched level of innovation.',
    image:
      'https://images.pexels.com/photos/6436757/pexels-photo-6436757.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    title: 'Boost Mix',
    subtitle: 'The modern concrete soul',
    description:
      'The modern soul of concrete effect: wide selection of colors, shades and textures.',
    image:
      'https://images.pexels.com/photos/4327417/pexels-photo-4327417.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    title: 'Marvel',
    subtitle: 'The marble benchmark',
    description:
      'Since 2010, the benchmark in the ceramic industry for marble-effect surfaces.',
    image:
      'https://images.pexels.com/photos/7587869/pexels-photo-7587869.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    title: '3D Wall',
    subtitle: 'Surfaces shaped by light',
    description:
      'The choice for design spaces. A wide range of 3D wall surfaces shaped by light.',
    image:
      'https://images.pexels.com/photos/40228990/pexels-photo-40228990.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
];

const ourPlaces = [
  { title: 'Atlas Concorde Park Studio', location: 'Italy' },
  { title: 'Atlas Concorde Studio Paris', location: 'France' },
  { title: 'Atlas Concorde Studio Milano', location: 'Italy' },
  { title: 'Atlas Concorde Studio London', location: 'UK' },
  { title: 'Atlas Concorde Studio Lyon', location: 'France' },
  { title: 'Atlas Concorde Studio Dubai', location: 'UAE' },
  { title: 'Atlas Concorde Studio Nashville', location: 'USA' },
];

const collaborations = [
  'Alberto Apostoli',
  'Piero Lissoni',
  'Elisa Ossino',
  'Matteo Brioni',
  'Mario Ferrarini',
  'Mattia Parmiggiani',
  'Studio Ferriani',
  'NOA',
  'AMDL CIRCLE',
  'Oneworks',
  'PARK',
  'HBA',
  'Zaha Hadid Architects',
  'Archea Associati',
];

const projects = [
  {
    title: 'Louvre Saint Honoré',
    description:
      'In the heart of Paris, the landmark of art and architecture embodies the dialogue between heritage and modernity through Atlas Concorde surfaces.',
    image:
      'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'Cantabrian Museum',
    description:
      'A fusion between the austerity of concrete and the softness of Boost Natural adorns the Cantabrian Maritime Museum in Santander, Spain.',
    image:
      'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'Fendi Château',
    description:
      'Atlas Concorde excellence graces the exclusive Fendi Château Residences Punta del Este, Uruguay.',
    image:
      'https://images.pexels.com/photos/7587862/pexels-photo-7587862.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'Villa Ladybug',
    description:
      'The innate elegance of porcelain tiles enhances the contemporary design of the Ladybug villa in Bodrum, Turkey.',
    image:
      'https://images.pexels.com/photos/31817164/pexels-photo-31817164.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
];

const news = [
  {
    title: 'Cersaie 2026',
    category: 'Event',
    image:
      'https://images.pexels.com/photos/14151374/pexels-photo-14151374.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
  {
    title: 'Atlas Concorde earns EcoVadis Gold',
    category: 'Sustainability',
    image:
      'https://images.pexels.com/photos/37475170/pexels-photo-37475170.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
  {
    title: 'La Terrazza Returns. Venice Awaits.',
    category: 'Event',
    image:
      'https://images.pexels.com/photos/31954208/pexels-photo-31954208.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
  {
    title: 'Clerkenwell Design Week 2026 — A New Space for Design',
    category: 'Event',
    image:
      'https://images.pexels.com/photos/29259889/pexels-photo-29259889.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
];

const inspirations = [
  {
    title: 'Contemporary sanctuary',
    image:
      'https://images.pexels.com/photos/12939823/pexels-photo-12939823.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-side inspiration-left',
  },
  {
    title: 'Modern minimalism',
    image:
      'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-main',
  },
  {
    title: 'Warm elegance',
    image:
      'https://images.pexels.com/photos/34119214/pexels-photo-34119214.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-side inspiration-right',
  },
];

const footerGroups = [
  {
    title: 'Products',
    links: ['Floors & Walls', 'Outdoor', 'Large Sizes', 'Furniture', 'Slabs for Furniture'],
  },
  {
    title: 'Collections',
    links: ['Marble effect', 'Concrete Effect', 'Wood Effect', 'Stone Effect', '3D effect'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Brands', 'Design', 'Atlas Concorde Studios', 'Work with us', 'Responsibility', 'Ethics & Compliance'],
  },
  {
    title: 'Brands',
    links: ['Atlas Concorde', 'Atlas Plan', 'Atlas Concorde Habitat', 'Atlas Concorde Solution'],
  },
  {
    title: 'Events',
    links: ['Cersaie 2026', 'Clerkenwell Design Week'],
  },
  {
    title: 'Contacts',
    links: ['Contact Form', 'Store Locator', 'Easynow', 'My Atlas', 'FAQ'],
  },
];

function PillButton({
  children,
  dark = false,
  onClick,
}: {
  children: React.ReactNode;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={`pill-button ${dark ? 'pill-dark' : ''}`} onClick={onClick}>
      {children}
      <ArrowRight size={17} strokeWidth={1.8} />
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [activeProduct, setActiveProduct] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [worldsIndex, setWorldsIndex] = useState(0);
  const [projectsIndex, setProjectsIndex] = useState(0);
  const heroTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    heroTimerRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, []);

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const toggleLike = (index: number) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-left">
          <button
            className="icon-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <button className="search-trigger">
            <Search size={19} />
            <span>Product search</span>
          </button>
        </div>
        <a href="#top" className="brand" aria-label="Atlas Concorde home">
          <span className="brand-mark">
            <span />
          </span>
          <span>atlas concorde</span>
        </a>
        <div className="header-actions">
          <Link href="/login" className="icon-button" aria-label="Account">
            <UserRound size={18} />
          </Link>
          <button className="icon-button" aria-label="Downloads">
            <Download size={18} />
          </button>
          <button className="icon-button" aria-label="Cart">
            <ShoppingCart size={18} />
          </button>
          <button className="language-button">
            <Globe2 size={17} /> <span>EN</span>
          </button>
        </div>
      </header>

      {/* MENU PANEL */}
      {menuOpen && (
        <nav className="menu-panel">
          {[
            'Floors & Walls',
            'Outdoor',
            'Collections',
            'Our Worlds',
            'Projects',
            'Contact',
          ].map((item) => (
            <a
              href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
              <ArrowRight size={18} />
            </a>
          ))}
        </nav>
      )}

      {/* HERO with auto-rotating slides */}
      <section className="hero" id="top">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-bg ${heroIndex === idx ? 'active' : ''}`}
            style={{
              opacity: heroIndex === idx ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
          >
            <img src={slide.image} alt={slide.title.replace('\n', ' ')} />
          </div>
        ))}
        <div className="hero-shade" />
        <div className="breadcrumb">
          <span>Home</span>
          <ChevronDown size={14} />
          <span>Floors &amp; Walls</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">{heroSlides[heroIndex].eyebrow}</p>
          <h1>{heroSlides[heroIndex].title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}</h1>
          <PillButton>Discover collections</PillButton>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={heroIndex === idx ? 'active' : ''}
              onClick={() => setHeroIndex(idx)}
            />
          ))}
        </div>
        <div className="scroll-cue">
          <ArrowDown size={18} />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section-pad" id="floors-&-walls">
        <div className="intro-copy">
          <p className="eyebrow warm">Atlas Concorde</p>
          <h2>Streamlined design for modern spaces</h2>
          <p className="body-copy">
            Discover the Atlas Concorde collections of{' '}
            <strong>wall and floor tiles</strong>. Proudly made in Italy, our
            range of <strong>porcelain tiles</strong> is ideal for those
            designers looking for seamless options to create beautifully
            put-together spaces.
          </p>
          <PillButton dark>Contact us</PillButton>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="inspiration section-pad" id="inspiration">
        <div className="section-heading-row">
          <h2>Get inspired</h2>
          <span className="section-index">01 / 05</span>
        </div>
        <div className="inspiration-grid">
          {inspirations.map((item, index) => (
            <article
              className={`inspiration-card ${item.className}`}
              key={item.title}
            >
              <img src={item.image} alt={item.title} />
              {index === 1 && (
                <>
                  <button
                    className={`heart-button ${liked[index] ? 'liked' : ''}`}
                    aria-label="Save inspiration"
                    onClick={() => toggleLike(index)}
                  >
                    <Heart
                      size={19}
                      fill={liked[index] ? 'currentColor' : 'none'}
                    />
                  </button>
                  <div className="card-bottom">
                    <span>View products</span>
                    <ArrowRight size={20} />
                  </div>
                </>
              )}
            </article>
          ))}
          <button className="next-button">
            Next <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* STORY / SEO TEXT */}
      <section className="story section-pad">
        <div className="story-inner">
          <p className="eyebrow warm">The art of surfaces</p>
          <h2>
            Wall &amp; floor porcelain tiles: high-end finishes for
            contemporary results
          </h2>
          <div className="story-text">
            <p>
              These days, the choice of <u>floor tiles</u> and{' '}
              <u>wall tiles</u> is crucial when thinking about any living
              space, whether residential or commercial, such as offices, bars,
              or shopping centres. In fact, they play a leading role because it
              is the choice of the material, the <strong>effect</strong>, and
              the <strong>texture</strong> of the floors and walls that produces
              the aesthetic, stylistic, and functional performance of the
              entire space.
            </p>
            <p>
              <strong>Porcelain tiles</strong> feature technical and design
              characteristics of the highest level and lend themselves to both
              indoor and <u>outdoor applications</u>. Atlas Concorde has a wide
              range of porcelain floor and wall tiles for decorating spaces of
              all sizes, combining to offer unique solutions that facilitate
              mixing and matching floors and walls within residential and
              commercial spaces.
            </p>
            <p>
              The superior technical performance of this material resists wear,
              temperature fluctuations and humidity. It is also hygienic, and
              requires minimal maintenance. Furthermore, porcelain tiles have a
              great design impact because they faithfully reproduce earthy
              finishes such as marble, wood, stone, concrete, and metal,
              preserving their tactile and visual sensations.
            </p>
          </div>
          <button className="text-button">
            Read more <ChevronDown size={16} />
          </button>
        </div>
      </section>

      {/* COLLECTIONS / EFFECTS GRID */}
      <section className="effects section-pad" id="collections">
        <div className="section-heading-row">
          <h2>Discover our collections</h2>
          <span className="section-index">02 / 05</span>
        </div>
        <div className="effect-grid">
          {collections.map((effect) => (
            <a
              href="#product-system"
              className="effect-card"
              key={effect.title}
            >
              <img src={effect.image} alt={effect.title} />
              <div className="effect-gradient" />
              <div className="effect-label">
                <span>{effect.title}</span>
                <ArrowRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCT SYSTEM SLIDER */}
      <section
        className="product-system section-pad"
        id="product-system"
      >
        <p className="eyebrow warm centered">A complete design language</p>
        <h2>Explore our product system</h2>
        <div className="outdoor-stage">
          <button
            className="slide-arrow slide-prev"
            aria-label="Previous slide"
            onClick={() =>
              setActiveProduct(
                (activeProduct - 1 + productSystem.length) %
                  productSystem.length
              )
            }
          >
            <ArrowRight size={21} />
          </button>
          <div className="outdoor-card">
            <img
              src={productSystem[activeProduct].image}
              alt={productSystem[activeProduct].title}
            />
            <div className="outdoor-overlay" />
            <h3>{productSystem[activeProduct].title}</h3>
          </div>
          <button
            className="slide-arrow slide-next"
            aria-label="Next slide"
            onClick={() =>
              setActiveProduct((activeProduct + 1) % productSystem.length)
            }
          >
            <ArrowRight size={21} />
          </button>
        </div>
        <div className="slide-dots">
          {productSystem.map((slide, index) => (
            <button
              aria-label={`Show ${slide.title}`}
              key={slide.title}
              className={activeProduct === index ? 'active' : ''}
              onClick={() => setActiveProduct(index)}
            />
          ))}
        </div>
        <div className="filter-box">
          <span>Type</span>
          <div className="filter-pills">
            {[
              'Floor tiles',
              'Wall tiles',
              'Decorative & Patterned Tiles',
              'Mosaic Tiles',
            ].map((filter) => (
              <button key={filter}>{filter}</button>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORLDS */}
      <section className="worlds section-pad" id="our-worlds">
        <div className="section-heading-row">
          <h2>Our Worlds</h2>
          <span className="section-index">03 / 05</span>
        </div>
        <div className="worlds-layout">
          <div className="worlds-nav">
            {worlds.map((world, index) => (
              <button
                key={world.title}
                className={`world-tab ${
                  worldsIndex === index ? 'active' : ''
                }`}
                onClick={() => setWorldsIndex(index)}
                onMouseEnter={() => setWorldsIndex(index)}
              >
                <span className="world-tab-title">{world.title}</span>
                <span className="world-tab-sub">{world.subtitle}</span>
              </button>
            ))}
          </div>
          <div className="worlds-display">
            <img
              src={worlds[worldsIndex].image}
              alt={worlds[worldsIndex].title}
              key={worldsIndex}
            />
            <div className="worlds-overlay" />
            <div className="worlds-content">
              <h3>{worlds[worldsIndex].title}</h3>
              <p>{worlds[worldsIndex].description}</p>
              <button className="worlds-link">
                Discover more <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PLACES */}
      <section className="places section-pad">
        <div className="section-heading-row">
          <h2>Our Places</h2>
          <span className="section-index">04 / 05</span>
        </div>
        <div className="places-grid">
          {ourPlaces.map((place) => (
            <div className="place-card" key={place.title}>
              <MapPin size={18} />
              <div>
                <span className="place-name">{place.title}</span>
                <span className="place-location">{place.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section className="collaborations section-pad">
        <div className="section-heading-row">
          <h2>Our collaborations</h2>
        </div>
        <div className="collab-grid">
          {collaborations.map((name) => (
            <div className="collab-item" key={name}>
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section-pad" id="projects">
        <div className="section-heading-row">
          <h2>Our projects</h2>
          <span className="section-index">05 / 05</span>
        </div>
        <div className="projects-slider">
          <button
            className="slide-arrow slide-prev"
            aria-label="Previous project"
            onClick={() =>
              setProjectsIndex(
                (projectsIndex - 1 + projects.length) % projects.length
              )
            }
          >
            <ArrowRight size={21} />
          </button>
          <div className="project-card">
            <div className="project-image">
              <img
                src={projects[projectsIndex].image}
                alt={projects[projectsIndex].title}
                key={projectsIndex}
              />
            </div>
            <div className="project-info">
              <h3>{projects[projectsIndex].title}</h3>
              <p>{projects[projectsIndex].description}</p>
              <button className="text-button">
                View project <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          <button
            className="slide-arrow slide-next"
            aria-label="Next project"
            onClick={() =>
              setProjectsIndex((projectsIndex + 1) % projects.length)
            }
          >
            <ArrowRight size={21} />
          </button>
        </div>
        <div className="slide-dots">
          {projects.map((proj, index) => (
            <button
              aria-label={`Show ${proj.title}`}
              key={proj.title}
              className={projectsIndex === index ? 'active' : ''}
              onClick={() => setProjectsIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="news-section section-pad">
        <div className="section-heading-row">
          <h2>Latest news</h2>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.title}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-body">
                <span className="news-category">{item.category}</span>
                <h3>{item.title}</h3>
                <button className="text-button">
                  Read more <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section section-pad" id="contact">
        <div className="contact-inner">
          <h2>Contact Us</h2>
          <p className="body-copy">
            Please select one of the categories below
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Professional</h3>
              <p>
                Select whether you are an architect, designer, contractor or
                investor.
              </p>
              <PillButton dark>Get in touch</PillButton>
            </div>
            <div className="contact-card">
              <h3>Private</h3>
              <p>
                Select whether you have to furnish or design your home.
              </p>
              <PillButton dark>Get in touch</PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        {/* Newsletter */}
        <div className="newsletter">
          <p className="eyebrow">Subscribe to our newsletter</p>
          {subscribed ? (
            <div className="subscribed">
              Thank you. You are now on the list.
            </div>
          ) : (
            <form onSubmit={submitNewsletter}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                required
              />
              <button aria-label="Subscribe">
                <Send size={36} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="socials">
            <span>◎</span>
            <span>in</span>
            <span>f</span>
            <span>p</span>
            <span>▶</span>
          </div>
          <button className="language-switch">
            <Globe2 size={16} /> English
          </button>
        </div>

        {/* Legal */}
        <div className="legal">
          <p>
            © Ceramiche Atlas Concorde S.p.A. Soc. Cap. Euro 6,032,000 fully
            paid Bus. Reg. of Mo no. 01282550365 R.E.A. no. 202376 Export Mo
            011971 Fiscal Code and VAT Code 01282550365
          </p>
          <div>
            <a href="#top">Legal Notice</a>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Cookie Policy</a>
            <a href="#top">Review your cookie choices</a>
            <a href="#top">General Sales Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
