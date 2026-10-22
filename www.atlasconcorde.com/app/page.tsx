'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
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
} from 'lucide-react';

const inspirations = [
  {
    title: 'Luce di Carrara',
    image:
      'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-side inspiration-left',
  },
  {
    title: 'Contemporary sanctuary',
    image:
      'https://images.pexels.com/photos/12939823/pexels-photo-12939823.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-main',
  },
  {
    title: 'Warm minimalism',
    image:
      'https://images.pexels.com/photos/34119214/pexels-photo-34119214.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
    className: 'inspiration-side inspiration-right',
  },
];

const effects = [
  {
    title: 'Concrete effect',
    image:
      'https://images.pexels.com/photos/7828174/pexels-photo-7828174.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Marble effect',
    image:
      'https://images.pexels.com/photos/6315801/pexels-photo-6315801.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Stone effect',
    image:
      'https://images.pexels.com/photos/5998045/pexels-photo-5998045.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: 'Wood effect',
    image:
      'https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
  {
    title: '3D effect',
    image:
      'https://images.pexels.com/photos/10854279/pexels-photo-10854279.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800',
  },
];

const outdoorSlides = [
  {
    title: 'Outdoor',
    image:
      'https://images.pexels.com/photos/12715456/pexels-photo-12715456.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Architecture',
    image:
      'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Open air',
    image:
      'https://images.pexels.com/photos/36394720/pexels-photo-36394720.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
  {
    title: 'Pure volumes',
    image:
      'https://images.pexels.com/photos/34378030/pexels-photo-34378030.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  },
];

const footerGroups = [
  { title: 'Products', links: ['Floors & Walls', 'Outdoor', 'Large Sizes', 'Furniture', 'Slabs for Furniture'] },
  { title: 'Collections', links: ['Marble effect', 'Concrete Effect', 'Wood Effect', 'Stone Effect', '3D effect'] },
  { title: 'Company', links: ['About Us', 'Brands', 'Design', 'Atlas Concorde Studios', 'Work with us', 'Responsibility', 'Ethics & Compliance'] },
  { title: 'Brands', links: ['Atlas Concorde', 'Atlas Plan', 'Atlas Concorde Habitat', 'Atlas Concorde Solution'] },
  { title: 'Events', links: ['Cersaie 2025', 'Clerkenwell Design Week'] },
  { title: 'Contacts', links: ['Contact Form', 'Store Locator', 'Easynow', 'My Atlas', 'FAQ'] },
];

function PillButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <button className={`pill-button ${dark ? 'pill-dark' : ''}`}>
      {children}
      <ArrowRight size={17} strokeWidth={1.8} />
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeOutdoor, setActiveOutdoor] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-left">
          <button className="icon-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <button className="search-trigger"><Search size={19} /><span>Product search</span></button>
        </div>
        <a href="#top" className="brand" aria-label="Atlas Concorde home">
          <span className="brand-mark"><span /></span>
          <span>atlas concorde</span>
        </a>
        <div className="header-actions">
          <button className="icon-button" aria-label="Account"><UserRound size={18} /></button>
          <button className="icon-button" aria-label="Downloads"><Download size={18} /></button>
          <button className="icon-button" aria-label="Cart"><ShoppingCart size={18} /></button>
          <button className="language-button"><Globe2 size={17} /> <span>EN</span></button>
        </div>
      </header>

      {menuOpen && (
        <nav className="menu-panel">
          {['Floors & Walls', 'Outdoor', 'Collections', 'Inspiration', 'About Atlas Concorde', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item} onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={18} /></a>
          ))}
        </nav>
      )}

      <section className="hero" id="top">
        <img src="https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&h=1800&w=2600" alt="Minimal modern interior with pale stone finishes" />
        <div className="hero-shade" />
        <div className="breadcrumb"><span>Home</span><ChevronDown size={14} /><span>Floors &amp; Walls</span></div>
        <div className="hero-content">
          <p className="eyebrow">Made in Italy · Since 1969</p>
          <h1>Porcelain tiles<br />for Floors &amp; Walls</h1>
          <PillButton>All products</PillButton>
        </div>
        <div className="scroll-cue"><ArrowDown size={18} /><span>Scroll to explore</span></div>
      </section>

      <section className="intro section-pad" id="floors-&-walls">
        <div className="intro-copy">
          <p className="eyebrow warm">Atlas Concorde</p>
          <h2>Streamlined design for modern spaces</h2>
          <p className="body-copy">Discover the Atlas Concorde collections of <strong>wall and floor tiles</strong>. Proudly made in Italy, our range of <strong>porcelain tiles</strong> is ideal for those designers looking for seamless options to create beautifully put-together spaces.</p>
          <PillButton>Contact us</PillButton>
        </div>
      </section>

      <section className="inspiration section-pad" id="inspiration">
        <div className="section-heading-row"><h2>Get inspired</h2><span className="section-index">01 / 03</span></div>
        <div className="inspiration-grid">
          {inspirations.map((item, index) => (
            <article className={`inspiration-card ${item.className}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              {index === 1 && <button className={`heart-button ${liked ? 'liked' : ''}`} aria-label="Save inspiration" onClick={() => setLiked(!liked)}><Heart size={19} fill={liked ? 'currentColor' : 'none'} /></button>}
              {index === 1 && <div className="card-bottom"><span>View products</span><ArrowRight size={20} /></div>}
            </article>
          ))}
          <button className="next-button">Next <ArrowRight size={18} /></button>
        </div>
      </section>

      <section className="story section-pad">
        <div className="story-inner">
          <p className="eyebrow warm">The art of surfaces</p>
          <h2>Wall &amp; floor porcelain tiles: high-end finishes for contemporary results</h2>
          <div className="story-text">
            <p>These days, the choice of <u>floor tiles</u> and <u>wall tiles</u> is crucial when thinking about any living space, whether residential or commercial, such as offices, bars, or shopping centres. In fact, they play a leading role because it is the choice of the material, the <strong>effect</strong>, and the <strong>texture</strong> of the floors and walls that produces the aesthetic, stylistic, and functional performance of the entire space.</p>
            <p><strong>Porcelain tiles</strong> feature technical and design characteristics of the highest level and lend themselves to both indoor and <u>outdoor applications</u>.</p>
          </div>
          <button className="text-button">Read more <ChevronDown size={16} /></button>
        </div>
      </section>

      <section className="effects section-pad" id="collections">
        <div className="effect-grid">
          {effects.map((effect) => (
            <a href="#product-system" className="effect-card" key={effect.title}>
              <img src={effect.image} alt={effect.title} />
              <div className="effect-gradient" />
              <div className="effect-label"><span>{effect.title}</span><ArrowRight size={20} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="product-system section-pad" id="product-system">
        <p className="eyebrow warm centered">A complete design language</p>
        <h2>Explore our product system</h2>
        <div className="outdoor-stage">
          <button className="slide-arrow slide-prev" aria-label="Previous slide" onClick={() => setActiveOutdoor((activeOutdoor - 1 + outdoorSlides.length) % outdoorSlides.length)}><ArrowRight size={21} /></button>
          <div className="outdoor-card">
            <img src={outdoorSlides[activeOutdoor].image} alt={outdoorSlides[activeOutdoor].title} />
            <div className="outdoor-overlay" />
            <h3>{outdoorSlides[activeOutdoor].title}</h3>
          </div>
          <button className="slide-arrow slide-next" aria-label="Next slide" onClick={() => setActiveOutdoor((activeOutdoor + 1) % outdoorSlides.length)}><ArrowRight size={21} /></button>
        </div>
        <div className="slide-dots">{outdoorSlides.map((slide, index) => <button aria-label={`Show ${slide.title}`} key={slide.title} className={activeOutdoor === index ? 'active' : ''} onClick={() => setActiveOutdoor(index)} />)}</div>
        <div className="filter-box"><span>Type</span><div className="filter-pills">{['Floor tiles', 'Wall tiles', 'Decorative & Patterned Tiles', 'Mosaic Tiles'].map((filter) => <button key={filter}>{filter}</button>)}</div></div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="newsletter">
          <p className="eyebrow">Subscribe to our newsletter</p>
          {subscribed ? <div className="subscribed">Thank you. You are now on the list.</div> : <form onSubmit={submitNewsletter}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" aria-label="Email address" required /><button aria-label="Subscribe"><Send size={36} strokeWidth={1.5} /></button></form>}
        </div>
        <div className="footer-links">{footerGroups.map((group) => <div key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <a href="#top" key={link}>{link}</a>)}</div>)}</div>
        <div className="footer-bottom"><div className="socials"><span>◎</span><span>in</span><span>f</span><span>p</span><span>▶</span></div><button className="language-switch"><Globe2 size={16} /> English</button></div>
        <div className="legal"><p>© Ceramiche Atlas Concorde S.p.A. Soc. Cap. Euro 6,032,000 fully paid Bus. Reg. of Mo no. 01282550365 R.E.A. no. 202376 Export Mo 011971 Fiscal Code and VAT Code 01282550365</p><div><a href="#top">Legal Notice</a><a href="#top">Privacy Policy</a><a href="#top">Cookie Policy</a><a href="#top">Review your cookie choices</a><a href="#top">General Sales Conditions</a></div></div>
      </footer>
    </main>
  );
}
