import React from "react";
import { Link } from "react-router-dom";

interface CallToActionProps {
  triggerFooterContact: () => void;
  scrollToProjects: () => void;
}

const HowWeWorkCallToAction: React.FC<CallToActionProps> = ({  }) => {
  // Implement the proper footer contact trigger functionality
  const handleConsultationClick = () => {
    const footerElement = document.querySelector('#footer');
    if (footerElement instanceof HTMLElement) {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      window.scrollTo({
        top: scrollHeight - windowHeight,
        behavior: 'smooth',
      });

      setTimeout(() => {
        const footerContactBtn = document.querySelector('[data-footer-contact]') as HTMLButtonElement;
        if (footerContactBtn) {
          footerContactBtn.click();
        }
      }, 800);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl font-serif text-white mb-4">
          Transform Your Vision Into Reality
        </h2>
        <p className="text-xl text-white/60 mb-12">
          Book Your Complimentary Consultation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handleConsultationClick} 
            className="px-8 py-4 bg-[#C4A661] text-black text-lg font-medium rounded hover:scale-105 transition-all duration-300"
          >
            Schedule Consultation
          </button>
          <Link 
            to="/productscollection" 
            className="px-8 py-4 border border-white text-white text-lg font-medium rounded hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            View Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkCallToAction;