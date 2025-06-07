
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote, Headphones, MessageSquare, Instagram, Youtube, Facebook, Share2 } from 'lucide-react';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'audio' | 'social'>('text');

  const audioStories = [
    {
      id: 1,
      title: "Village Education Transformation",
      duration: "3:45",
      date: "15 May 2024",
      plays: "1.2k"
    },
    {
      id: 2,
      title: "Healthcare Success Stories",
      duration: "4:12",
      date: "22 May 2024",
      plays: "856"
    },
    {
      id: 3,
      title: "Women's Empowerment Journey",
      duration: "5:30",
      date: "30 May 2024",
      plays: "1.5k"
    }
  ];

  const socialStories = [
    {
      id: 1,
      platform: 'instagram',
      handle: '@tribal_trust',
      content: 'Transforming lives through education in rural communities. Swipe to see the impact! #EducationForAll',
      likes: '1.2k',
      comments: '243',
      time: '2h ago'
    },
    {
      id: 2,
      platform: 'youtube',
      handle: 'Tribal Development',
      content: 'Watch how we\'re making a difference in tribal communities. Link in bio!',
      views: '5.2k',
      time: '1d ago'
    },
    {
      id: 3,
      platform: 'facebook',
      handle: 'Tribal Development Trust',
      content: 'Our medical camp reached 500+ people this week. Read more about our healthcare initiatives on our website.',
      likes: '856',
      shares: '124',
      time: '3d ago'
    }
  ];

  const PlatformIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'youtube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'facebook':
        return <Facebook className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Beneficiary Mother",
      content: "The medical camp in our village was a blessing. My children received proper healthcare for the first time. The team was so caring and professional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Raj Kumar",
      role: "Community Leader",
      content: "Tribal Development Trust has transformed our village. The children's education program has given hope to many families who never dreamed of sending their kids to school.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sunita Devi",
      role: "Women's Group Member",
      content: "Through the women's empowerment program, I learned new skills and now run my own small business. I can support my family with dignity.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Mohan Singh",
      role: "Village Elder",
      content: "The counseling services helped my family during difficult times. The support and guidance we received was invaluable for our mental well-being.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Asha Tribal",
      role: "Student's Mother",
      content: "My daughter now goes to school regularly thanks to the scholarship program. She dreams of becoming a doctor to help her community.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
    }
  ];

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
                onClick={() => setActiveTab('audio')}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors ${
                  activeTab === 'audio'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Headphones className="w-4 h-4" />
                  <span>Audio Stories</span>
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
                  <span>Social Media</span>
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
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="shadow-xl border-0 charity-shadow h-full flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-semibold text-charity-dark">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                          
                          <div className="relative mb-4">
                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                            <p className="text-gray-700 leading-relaxed pl-6">
                              "{testimonial.content}"
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200"
              />
              <CarouselNext 
                className="right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200"
              />
            </Carousel>
          )}

          {activeTab === 'audio' && (
            <div className="w-full max-w-6xl mx-auto">
              <Carousel 
                className="w-full"
                opts={{
                  align: 'start',
                  loop: true,
                }}
              >
                <CarouselContent>
                  {audioStories.map((story) => (
                    <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="shadow-xl border-0 charity-shadow h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex-1">
                            <div className="flex items-center justify-center mb-4 bg-primary/10 rounded-full w-16 h-16 mx-auto">
                              <Headphones className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-charity-dark text-center mb-3">
                              {story.title}
                            </h3>
                            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                              <span>{story.duration}</span>
                              <span>{story.date}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                              <span>{story.plays} plays</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                              <span>Play Story</span>
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200" />
                <CarouselNext className="right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200" />
              </Carousel>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="w-full max-w-6xl mx-auto">
              <Carousel 
                className="w-full"
                opts={{
                  align: 'start',
                  loop: true,
                }}
              >
                <CarouselContent>
                  {socialStories.map((post) => (
                    <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="shadow-xl border-0 charity-shadow h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex-1">
                            <div className="flex items-center mb-4">
                              <div className="mr-3">
                                <PlatformIcon platform={post.platform} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-charity-dark">{post.handle}</h4>
                                <p className="text-xs text-gray-500">{post.time}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 mb-4">{post.content}</p>
                            <div className="flex items-center text-sm text-gray-500 space-x-4">
                              {post.likes && (
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                  {post.likes}
                                </span>
                              )}
                              {post.comments && (
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                                  {post.comments}
                                </span>
                              )}
                              {post.views && (
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  {post.views}
                                </span>
                              )}
                              {post.shares && (
                                <span className="flex items-center">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                  </svg>
                                  {post.shares}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="mt-6">
                            <a 
                              href="#" 
                              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-charity-dark px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
                              onClick={(e) => e.preventDefault()}
                            >
                              View Post
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200" />
                <CarouselNext className="right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200" />
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
