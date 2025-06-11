
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const ProgramsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    
    // Only consider it a swipe if the movement is significant
    if (Math.abs(diff) > 30) {
      setIsSwiping(true);
      e.preventDefault(); // Prevent scrolling while swiping
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    
    const diff = touchStartX.current - touchEndX.current;
    
    // Swipe left (next slide)
    if (diff > 30) {
      setCurrentSlide((prev) => (prev + 1) % programImages.length);
    } 
    // Swipe right (previous slide)
    else if (diff < -30) {
      setCurrentSlide((prev) => (prev - 1 + programImages.length) % programImages.length);
    }
    
    setIsSwiping(false);
  };

  // Swipe handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % programImages.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + programImages.length) % programImages.length),
    trackMouse: true,
    preventScrollOnSwipe: true
  });

  const programImages = [
    {
      title: "Children's Education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Educational support and scholarships for tribal children"
    },
    {
      title: "Health Camps",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      description: "Free healthcare services in remote tribal areas"
    },
    {
      title: "Women's Empowerment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
      description: "Skill development and economic empowerment for women"
    },
    {
      title: "Community Development",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Building stronger communities together"
    },
    {
      title: "Family Support",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Counseling and support services for families"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % programImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [autoPlay, programImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto relative select-none"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      {...swipeHandlers}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-xl sm:rounded-2xl">
        <div 
          className={`flex transition-transform duration-300 ease-out h-full ${
            isSwiping ? 'transition-none' : ''
          }`}
          style={{ 
            transform: `translateX(calc(-${currentSlide * 100}% + ${isSwiping ? (touchStartX.current - touchEndX.current) : 0}px))`
          }}
        >
          {programImages.map((program, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-lg charity-shadow overflow-hidden group cursor-pointer h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
                <div className="relative h-full">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                    <h3 className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 md:mb-3">{program.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {programImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-primary scale-100' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramsCarousel;
