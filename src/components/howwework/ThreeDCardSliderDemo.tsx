import React from 'react';
import { ThreeDCardSlider } from '../ui/3DCardSlider';
import { MapPin, Pencil, PenTool as Tool, Compass } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Visit our **New York** showroom or connect via email for a **personalized consultation**.',
    icon: <MapPin className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Personal design consultation',
      'Space assessment',
      'Style preferences discussion',
      'Budget planning',
    ],
  },
  {
    id: 2,
    title: 'Concept',
    description: 'Receive **tailored sketches** that bring your **vision to life**.',
    icon: <Pencil className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1600428610161-e98636332e98?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Detailed sketches',
      '3D visualizations',
      'Material selections',
      'Color palette development',
    ],
  },
  {
    id: 3,
    title: 'Craftsmanship',
    description: '**Experience** exquisite Italian craftsmanship where every detail is meticulously **executed to perfection**.',
    icon: <Tool className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?q=80&w=2940&auto=format&fit=crop',
    details: [
      'Master artisan selection',
      'Premium material sourcing',
      'Handcrafted excellence',
      'Quality assurance',
    ],
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Your bespoke order is prepared and delivered with flawless precision, **ensuring your space** is transformed **effortlessly**.',
    icon: <Compass className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1464029902023-f42eba355bde?q=80&w=2940&auto=format&fit=crop',
    details: [
      'White glove delivery',
      'Professional installation',
      'Final inspection',
      'Client walkthrough',
    ],
  },
];

export const ThreeDCardSliderDemo: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[linear-gradient(to_bottom,white_70%,#1A1A1A_60%)] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-8">
          How We Work
        </h2>
        <p className="text-black/70 text-center max-w-2xl mx-auto mb-16 text-lg">
          Our process is designed to bring your vision to life with precision and care.
          From initial consultation to final delivery, we ensure a seamless experience.
        </p>
        
        <ThreeDCardSlider 
          slides={slides} 
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
};