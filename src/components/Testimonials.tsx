import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote, MessageSquare, Share2 } from 'lucide-react';

// Common card styles
// Common card styles
const cardBase = "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full";
const cardPadding = "p-4 sm:p-5";
const cardTitle = "text-base sm:text-lg font-semibold text-gray-900 leading-tight";
const cardText = "text-sm sm:text-base text-gray-600 leading-relaxed";
const cardButton = "mt-4 w-full bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors";
const cardMeta = "text-xs sm:text-sm text-gray-500 flex items-center";
const cardIcon = "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white flex-shrink-0";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'social'>('text');

  const videoStories = [
    {
      id: 1,
      title: 'Education Program',
      thumbnail: '/videos/education-thumb.jpg'
    },
    {
      id: 2,
      title: 'Clean Water',
      thumbnail: '/videos/water-thumb.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Camp',
      thumbnail: '/videos/healthcare-thumb.jpg'
    },
    {
      id: 4,
      title: 'School Program',
      thumbnail: '/videos/school-thumb.jpg'
    },
    {
      id: 5,
      platform: 'youtube',
      handle: 'Tribal Development',
      content: 'Documentary: Preserving Tribal Culture and Traditions. Watch now!',
      views: '45k',
      comments: '512',
      time: '1w ago'
    },
    {
      id: 6,
      platform: 'facebook',
      handle: 'Tribal Development Initiative',
      content: 'Thanks to your generous donations, we\'ve built 10 new homes for tribal families this month!',
      likes: '5.2k',
      comments: '421',
      shares: '890',
      time: '1w ago'
    }
  ];

  const testimonials = [
    {
      name: "Rahul Meena",
      role: "Community Leader, Rajasthan",
      content: "The education program has transformed our village. Our children now have access to quality education and a brighter future.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Priya Bhil",
      role: "Beneficiary, Madhya Pradesh",
      content: "The healthcare initiative saved my daughter's life. We are forever grateful for the support and care we received.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Arjun Gond",
      role: "Farmer, Chhattisgarh",
      content: "The agricultural training has helped me double my crop yield and improve my family's livelihood.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Meena Kumari",
      role: "Artisan, Odisha",
      content: "The handicraft training program has given me the skills to create beautiful products and earn a sustainable income.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Vijay Oraon",
      role: "Youth Leader, Jharkhand",
      content: "The skill development program has opened up new opportunities for the youth in our community.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Asha Tribal",
      role: "Student's Mother",
      content: "My daughter now goes to school regularly thanks to the scholarship program. She dreams of becoming a doctor.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
    }
  ];

  const PlatformIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-12 pb-20 bg-charity-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
            Stories of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hear from the communities and families whose lives have been transformed through our programs
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex space-x-1 sm:space-x-4">
              <button
                onClick={() => setActiveTab('text')}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors ${
                  activeTab === 'text'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Text Stories</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('social')}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors ${
                  activeTab === 'social'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span>Media Stories</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          {activeTab === 'text' && (
            <Carousel 
              className="w-full max-w-6xl mx-auto relative"
              opts={{
                align: 'center',
                loop: true,
              }}
            >
              <CarouselContent className="flex items-center">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-10/12 sm:basis-1/2 lg:basis-1/3 px-2 pb-4">
                    <div className={`${cardBase} group hover:-translate-y-1`}>
                      <div className={`${cardPadding} flex-1 flex flex-col`}>
                        <div className="flex items-start mb-4">
                          <div className={`${cardIcon} bg-primary/10 text-primary mr-3 sm:mr-4`}>
                            <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="relative mb-4 flex-1">
                          <p className={`${cardText} line-clamp-4`}>
                            "{testimonial.content}"
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                          <div className="flex space-x-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                              />
                            ))}
                          </div>
                          <button className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors">
                            Read Full Story →
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:left-4" />
              <CarouselNext className="right-0 sm:right-4" />
            </Carousel>
          )}



          {activeTab === 'social' && (
            <Carousel
              className="w-full max-w-6xl mx-auto relative"
              opts={{
                align: 'center',
                loop: true,
              }}
            >
              <CarouselContent className="flex items-center">
                {videoStories.map((story) => (
                  <CarouselItem key={story.id} className="basis-10/12 sm:basis-1/2 lg:basis-1/3 px-2 pb-4">
                    <div className={`${cardBase} group hover:-translate-y-1`}>
                      <div className="relative pb-[62.5%] bg-gray-100 overflow-hidden">
                        {/* Video Thumbnail with Play Button and Title */}
                        <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white/90 transition-colors mb-3">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-white bg-black/60 px-3 py-1 rounded-full text-sm sm:text-base">
                            {story.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:left-4" />
              <CarouselNext className="right-0 sm:right-4" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
