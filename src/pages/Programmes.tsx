import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Home, Gift, HandHeart, Play } from 'lucide-react';

const Programmes = () => {
  const programmes = [
    {
      title: "Children's Programmes",
      icon: <Users className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />,
      description: "Comprehensive educational support and development programs for tribal children",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3",
      features: [
        "Educational scholarships and school supplies",
        "Nutritional support and meal programs",
        "Skill development workshops",
        "Computer literacy training",
        "Sports and cultural activities",
        "Mentorship programs"
      ],
      impact: "Over 1,000 children supported annually"
    },
    {
      title: "Medical Camps",
      icon: <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />,
      description: "Free healthcare services and medical assistance for tribal communities",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3",
      features: [
        "Regular health checkups and screenings",
        "Free medicines and treatments",
        "Vaccination drives",
        "Maternal and child healthcare",
        "Health awareness programs",
        "Emergency medical assistance"
      ],
      impact: "50+ medical camps conducted yearly"
    },
    {
      title: "Women's Empowerment",
      icon: <Home className="h-8 w-8 sm:h-12 sm:w-12 text-secondary" />,
      description: "Skill training and economic empowerment initiatives for tribal women",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3",
      features: [
        "Vocational training programs",
        "Self-help group formation",
        "Microfinance initiatives",
        "Entrepreneurship development",
        "Women's rights awareness",
        "Leadership development"
      ],
      impact: "300+ women empowered through our programs"
    },
    {
      title: "Blanket Distribution",
      icon: <Gift className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />,
      description: "Essential winter relief and clothing distribution during cold seasons",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3",
      features: [
        "Winter blanket distribution",
        "Warm clothing for children",
        "Emergency shelter assistance",
        "Seasonal relief programs",
        "Community-based distribution",
        "Regular needs assessment"
      ],
      impact: "2,000+ blankets distributed annually"
    },
    {
      title: "Family Counseling",
      icon: <HandHeart className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />,
      description: "Mental health support and family counseling services for tribal families",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
      features: [
        "Individual and family counseling",
        "Mental health awareness",
        "Conflict resolution support",
        "Substance abuse prevention",
        "Grief and trauma counseling",
        "Community healing programs"
      ],
      impact: "500+ families supported through counseling"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-charity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Programmes
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive development initiatives designed to address the core needs 
            of tribal communities and create lasting positive impact.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charity-dark mb-4 sm:mb-6">
              Transforming Lives Through Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive programs address the multifaceted challenges faced by tribal communities, 
              from healthcare and education to economic empowerment and social welfare.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="space-y-12 sm:space-y-20">
            {programmes.map((programme, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group cursor-pointer">
                    <img 
                      src={programme.image} 
                      alt={programme.title}
                      className="rounded-2xl shadow-2xl w-full h-64 sm:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="p-4 sm:p-8 shadow-xl border-0 h-full">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                        {programme.icon}
                        <h3 className="text-2xl sm:text-3xl font-bold text-charity-dark">
                          {programme.title}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                        {programme.description}
                      </p>
                      
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-semibold text-charity-dark mb-2 sm:mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {programme.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-3 sm:p-4 bg-charity-light rounded-lg mb-4">
                        <p className="text-primary font-semibold text-base sm:text-lg">
                          Impact: {programme.impact}
                        </p>
                      </div>

                      <Button className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto">
                        View Gallery
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 sm:py-20 bg-charity-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charity-dark mb-4 sm:mb-6">
              How We Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures maximum impact and sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Community Assessment",
                description: "We conduct thorough assessments to understand community needs and priorities"
              },
              {
                step: "2",
                title: "Program Design",
                description: "Tailored programs are designed based on specific community requirements"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Programs are implemented with active community participation and engagement"
              },
              {
                step: "4",
                title: "Monitoring & Evaluation",
                description: "Regular monitoring ensures program effectiveness and sustainable outcomes"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 gradient-charity rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-charity-dark mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Your support can help us expand these vital programs and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block">
              <button className="bg-white text-charity-dark hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Support Our Programs
              </button>
            </a>
            <a href="/events" className="inline-block">
              <button className="border-2 border-white text-white hover:bg-white hover:text-charity-dark px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto">
                Upcoming Events
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programmes;
