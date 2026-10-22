'use client';

import { useState } from 'react';
import {
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button
            className="icon-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a href="/" className="search-trigger" style={{ textDecoration: 'none' }}>
            <Search size={19} />
            <span>Product search</span>
          </a>
        </div>
        <a href="/" className="brand" aria-label="Atlas Concorde home">
          <span className="brand-mark">
            <span />
          </span>
          <span>atlas concorde</span>
        </a>
        <div className="header-actions">
          <button className="icon-button" aria-label="Account">
            <UserRound size={18} />
          </button>
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

      {menuOpen && (
        <nav className="menu-panel">
          {[
            { label: 'Floors & Walls', href: '/#floors-&-walls' },
            { label: 'Outdoor', href: '/' },
            { label: 'Collections', href: '/#collections' },
            { label: 'Products', href: '/products' },
            { label: 'Our Worlds', href: '/#our-worlds' },
            { label: 'Projects', href: '/#projects' },
            { label: 'Contact', href: '/#contact' },
          ].map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="site-footer">
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

      <div className="footer-links">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a href="/#top" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

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

      <div className="legal">
        <p>
          © Ceramiche Atlas Concorde S.p.A. Soc. Cap. Euro 6,032,000 fully
          paid Bus. Reg. of Mo no. 01282550365 R.E.A. no. 202376 Export Mo
          011971 Fiscal Code and VAT Code 01282550365
        </p>
        <div>
          <a href="/#top">Legal Notice</a>
          <a href="/#top">Privacy Policy</a>
          <a href="/#top">Cookie Policy</a>
          <a href="/#top">Review your cookie choices</a>
          <a href="/#top">General Sales Conditions</a>
        </div>
      </div>
    </footer>
  );
}
