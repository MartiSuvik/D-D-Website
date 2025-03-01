import { useState, useEffect, useRef } from 'react';
import ProductCollectionHero from '../components/productcollection/ProductCollectionHero';
import ProductCollectionVisionnaire from '../components/productcollection/ProductCollectionVisionnaire';
import ProductCollectionInfo from '../components/productcollection/ProductCollectionInfo';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ProductCollectionGallery from '../components/home/ProductGalleryContent';
import { HeroScrollDemo } from '../components/ui/HeroScrollDemo';

export default function Projects() {
  // ... state and hooks for Navbar & Footer
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerFooterContact = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const footerContactBtn = footerRef.current!.querySelector(
          '[data-footer-contact]'
        ) as HTMLButtonElement | null;
        if (footerContactBtn) footerContactBtn.click();
      }, 800);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        triggerFooterContact={triggerFooterContact}
      />
      <ProductCollectionHero />
      <ProductCollectionGallery />
      <ProductCollectionVisionnaire />
      <main>
        <HeroScrollDemo />
      </main>
      <ProductCollectionInfo />
      <Footer ref={footerRef} id="footer" />
    </div>
  );
}