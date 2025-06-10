import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Home, Gift, HandHeart, Play, Search, LayoutGrid, BarChart4, ArrowRight } from 'lucide-react';

const Programmes = () => {
  // Hero Section
  const heroSection = (
    <section className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 leading-tight font-serif text-charity-dark">
          Our <span className="text-primary">Programmes</span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-16 bg-primary transform -translate-y-1/2 hidden sm:block"></div>
            <p className="text-lg sm:text-xl text-gray-700 relative pl-6 sm:pl-8">
              Empowering tribal communities through comprehensive development programs and 
              sustainable initiatives that create lasting impact across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  const programmes = [
    {
      title: "Children's Programmes",
      icon: <Users className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />,
      description: "Comprehensive educational support and development programs for tribal children",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
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
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
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
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
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
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
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
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
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
      {heroSection}
      
      {/* Programs Overview */}

      {/* Programs Grid Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Programs Grid */}
          <div className="space-y-12 sm:space-y-20">
            {programmes.map((programme, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-video">
                    <iframe
                      src={programme.video}
                      title={programme.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="p-4 sm:p-8 shadow-xl border-0 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl lg:rounded-3xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                        <div className={`p-2 rounded-lg ${
                          programme.title === "Children's Programmes" ? 'bg-blue-100' : 
                          programme.title === "Medical Camps" ? 'bg-green-100' : 
                          programme.title === "Women's Empowerment" ? 'bg-purple-100' : 
                          programme.title === "Blanket Distribution" ? 'bg-orange-100' : 
                          'bg-teal-100' // Default for Family Counseling and others
                        }`}>
                          {programme.icon}
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${
                          programme.title === "Children's Programmes" ? 'text-blue-700' : 
                          programme.title === "Medical Camps" ? 'text-green-700' : 
                          programme.title === "Women's Empowerment" ? 'text-purple-700' : 
                          programme.title === "Blanket Distribution" ? 'text-orange-700' : 
                          'text-teal-700' // Default for Family Counseling and others
                        }`}>
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
                              <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                                programme.title === "Children's Programmes" ? 'bg-blue-500' : 
                                programme.title === "Medical Camps" ? 'bg-green-500' : 
                                programme.title === "Women's Empowerment" ? 'bg-purple-500' : 
                                programme.title === "Blanket Distribution" ? 'bg-orange-500' : 
                                'bg-teal-500' // Default for Family Counseling and others
                              }`}>
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`p-3 sm:p-4 rounded-lg mb-6 ${
                        programme.title === "Children's Programmes" ? 'bg-blue-50 border border-blue-100' : 
                        programme.title === "Medical Camps" ? 'bg-green-50 border border-green-100' : 
                        programme.title === "Women's Empowerment" ? 'bg-purple-50 border border-purple-100' : 
                        programme.title === "Blanket Distribution" ? 'bg-orange-50 border border-orange-100' : 
                        'bg-teal-50 border border-teal-100' // Default for Family Counseling and others
                      }`}>
                        <p className={`font-semibold text-base sm:text-lg ${
                          programme.title === "Children's Programmes" ? 'text-blue-700' : 
                          programme.title === "Medical Camps" ? 'text-green-700' : 
                          programme.title === "Women's Empowerment" ? 'text-purple-700' : 
                          programme.title === "Blanket Distribution" ? 'text-orange-700' : 
                          'text-teal-700' // Default for Family Counseling and others
                        }`}>
                          Impact: <span className="font-normal">{programme.impact}</span>
                        </p>
                      </div>

                      <Link 
                        to="/programs/gallery"
                        className={`inline-flex items-center justify-center w-full sm:w-auto transition-all duration-300 transform hover:scale-105 ${
                          programme.title === "Children's Programmes" ? 'bg-blue-600 hover:bg-blue-700' : 
                          programme.title === "Medical Camps" ? 'bg-green-600 hover:bg-green-700' : 
                          programme.title === "Women's Empowerment" ? 'bg-purple-600 hover:bg-purple-700' : 
                          programme.title === "Blanket Distribution" ? 'bg-orange-600 hover:bg-orange-700' : 
                          'bg-teal-600 hover:bg-teal-700' // Default for Family Counseling and others
                        } text-white font-medium rounded-lg px-6 py-2.5 space-x-2`}
                      >
                        <span>View Gallery</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-charity-light/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block bg-charity-light text-charity-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
              How We Create Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures sustainable development and measurable impact in every community we serve
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector - only visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 -ml-px"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {[
                {
                  step: "1",
                  icon: <Search className="w-6 h-6 text-white" />,
                  title: "Community Assessment",
                  description: "We conduct thorough assessments to understand community needs and priorities through surveys, interviews, and data analysis.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "2",
                  icon: <LayoutGrid className="w-6 h-6 text-white" />,
                  title: "Program Design",
                  description: "Tailored programs are designed based on specific community requirements and sustainable development goals.",
                  color: "from-green-500 to-green-600"
                },
                {
                  step: "3",
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Implementation",
                  description: "Programs are implemented with active community participation, local leadership, and expert guidance.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: "4",
                  icon: <BarChart4 className="w-6 h-6 text-white" />,
                  title: "Monitoring & Evaluation",
                  description: "Regular monitoring and impact assessments ensure program effectiveness and guide continuous improvement.",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {/* Step indicator dot */}
                  <div className="hidden lg:block absolute top-8 left-1/2 -ml-2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 rounded-xl overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex justify-center mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-charity-light text-charity-dark text-sm font-bold">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-charity-dark text-center mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/our-approach" 
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium rounded-full px-6 py-3 text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Learn More About Our Approach
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Your support can help us expand these vital programs and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate" 
              className="inline-block bg-charity-dark text-white hover:bg-charity-dark/90 px-8 py-3 text-base font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Support Our Programs
            </Link>
            <Link 
              to="/events" 
              className="inline-block border-2 border-charity-dark text-charity-dark hover:bg-charity-dark hover:text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programmes;
