
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    years: 0,
    programs: 0
  });

  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const stepTime = 50; // 50ms intervals
      const steps = duration / stepTime;
      
      const targets = {
        students: 14000,
        years: 9, // Since 2015
        programs: 6
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedStats({
          students: Math.floor(targets.students * progress),
          years: Math.floor(targets.years * progress),
          programs: Math.floor(targets.programs * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepTime);
    };

    animateStats();
  }, []);

  // Continuous scroll animation
  useEffect(() => {
    const scrollContainer = document.querySelector('.stats-scroll-container');
    if (!scrollContainer) return;

    const scrollHeight = scrollContainer.scrollHeight / 2; // Since we duplicate the items
    let scrollPosition = 0;
    const scrollSpeed = 30; // Pixels per second
    let lastTimestamp = 0;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      scrollPosition += (scrollSpeed * delta) / 1000; // Convert to seconds
      
      // Reset scroll position when we've scrolled one full cycle
      if (scrollPosition >= scrollHeight) {
        scrollPosition = 0;
      }

      if (scrollContainer) {
        scrollContainer.scrollTop = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    let animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const trustees = [
    {
      name: "BANOTH SRINIVAS NAIK",
      role: "Founder & President",
      description: "Visionary leader dedicated to tribal development and community empowerment",
      image: "/aboutuspage/FOUNDER.jpg",
      detailImage: "/aboutuspage/FOUNDER.jpg"
    },
    {
      name: "BANOTH LALITHAMMA",
      role: "Trustee",
      description: "Passionate advocate for women's empowerment and children's welfare",
      image: "/aboutuspage/TRUSTEE.jpg",
      detailImage: "/aboutuspage/TRUSTEE.jpg"
    },
    {
      name: "R. SURESH NAIK",
      role: "Trustee",
      description: "Experienced administrator focusing on sustainable development initiatives",
      image: "/aboutuspage/TRUST-MEMBER.jpg",
      detailImage: "/aboutuspage/TRUST-MEMBER.jpg"
    },
  ];

  const values = [
    {
      title: "Community First",
      description: "We prioritize the needs and voices of tribal communities in all our initiatives",
    },
    {
      title: "Cultural Respect",
      description: "Preserving and honoring tribal traditions while promoting development",
    },
    {
      title: "Sustainable Impact",
      description: "Creating long-term solutions that empower communities to thrive independently",
    },
    {
      title: "Transparency",
      description: "Maintaining open communication and accountability in all our operations",
    },
  ];

  const stats = [
    { 
      number: animatedStats.students.toLocaleString(), 
      label: "students", 
      description: "children supported",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    { 
      number: `Since 2015`, 
      label: "founded", 
      description: `${animatedStats.years} years of service`,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    { 
      number: `${animatedStats.programs} programs`, 
      label: "offering", 
      description: "comprehensive initiatives",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            About Our Organization
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            Dedicated to empowering tribal communities through comprehensive development programs 
            and sustainable initiatives across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-12 sm:pb-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">Mission & Vision</h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-charity-dark mb-3 sm:mb-4">MISSION</h3>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      To provide both tribal and rural communities with excellent 
                      development opportunities within a wide range of educational, 
                      economic and healthcare initiatives as well as other social 
                      programmes at the grassroots, community and regional levels.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-charity-dark mb-3 sm:mb-4">VISION</h3>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      To assume the role of a leader in the development of tribal and rural 
                      communities through sustainable initiatives that preserve cultural heritage 
                      while promoting modern development opportunities across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Continuous Scrolling Stats */}
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
              <div className="stats-scroll-container h-full overflow-y-hidden">
                <div className="flex flex-col">
                  {/* Duplicate the stats for seamless looping */}
                  {[...stats, ...stats].map((stat, index) => (
                    <div key={`${stat.label}-${index}`} className="flex items-center space-x-4 sm:space-x-6 bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8 min-h-[120px] sm:min-h-[150px] flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary">
                        <img 
                          src={stat.image} 
                          alt={stat.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charity-dark">
                          {stat.number}
                        </div>
                        <div className="text-base sm:text-lg text-gray-700">{stat.label}</div>
                        <div className="text-sm text-gray-500">{stat.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Gradient fade effect at top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-charity-light to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-charity-light to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - moved before core values */}
      <section className="py-12 sm:py-20 bg-charity-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charity-dark mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Tribal Development Trust was founded with a simple yet powerful vision: 
                to create meaningful change in the lives of tribal communities across India. 
                Our journey began when our founders witnessed firsthand the challenges faced 
                by tribal populations in accessing basic healthcare, education, and economic opportunities.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                What started as a small initiative to provide medical camps in remote tribal areas 
                has grown into a comprehensive organization addressing multiple facets of tribal development. 
                Today, we work across various states, implementing programs that have touched the lives 
                of thousands of families.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our approach is rooted in respect for tribal culture and traditions, ensuring that 
                development initiatives enhance rather than replace the rich heritage of these communities.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3" 
                alt="Our story" 
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
                Our Core Values
              </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our approach to tribal development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow border-0 shadow-md charity-shadow">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-charity rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-charity-dark mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-20 bg-charity-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
                Our Leadership Team
              </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders committed to transforming tribal communities across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trustees.map((trustee, index) => {
              // Create URL-friendly ID for routing
              const memberId = trustee.name.replace(/\./g, '').replace(/\s+/g, '-').toUpperCase();
              
              return (
                <Link 
                  key={index} 
                  to={`/profile/${memberId}`}
                  className="group h-full block"
                >
                  <Card className="h-full flex flex-col border-0 shadow-lg charity-shadow hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative overflow-hidden rounded-t-lg h-48 sm:h-64 flex-shrink-0">
                      <div className="absolute inset-0 w-full h-full">
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                          <img 
                            src={trustee.image} 
                            alt={trustee.name}
                            className="w-full h-[120%] object-cover object-top"
                            style={{
                              objectPosition: 'center 20%',
                              ...(trustee.name.includes('LALITHAMMA') || trustee.name.includes('SURESH NAIK') 
                                ? { objectPosition: 'center 10%' }
                                : {})
                            }}
                            onError={(e) => {
                              console.error('Error loading image:', trustee.image);
                              (e.target as HTMLImageElement).style.border = '2px solid red';
                            }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-4 sm:p-6 text-center group-hover:bg-charity-light/20 transition-colors duration-300">
                      <h3 className="text-lg sm:text-xl font-bold text-charity-dark mb-2">
                        {trustee.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2 sm:mb-3">
                        {trustee.role}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                        {trustee.description}
                      </p>
                      <div className="mt-3 text-sm text-primary font-medium">
                        View Profile →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
