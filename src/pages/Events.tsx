
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, Heart } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Medical Camp",
      date: "2024-07-15",
      time: "9:00 AM - 5:00 PM",
      location: "Tribal Village, Telangana",
      description: "Free comprehensive health checkups, medicines, and health awareness programs for the tribal community.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3",
      participants: "Expected 200+ participants",
      type: "Medical Camp"
    },
    {
      title: "Women's Empowerment Workshop",
      date: "2024-07-22",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Warangal",
      description: "Skill development workshop focusing on traditional crafts, modern techniques, and entrepreneurship opportunities.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3",
      participants: "Limited to 50 women",
      type: "Workshop"
    },
    {
      title: "Children's Educational Fair",
      date: "2024-08-05",
      time: "9:30 AM - 3:00 PM",
      location: "Government School, Khammam",
      description: "Educational activities, book distribution, and scholarship announcements for tribal children.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3",
      participants: "300+ children expected",
      type: "Educational"
    },
    {
      title: "Blanket Distribution Drive",
      date: "2024-12-15",
      time: "11:00 AM - 4:00 PM",
      location: "Multiple Villages, Adilabad",
      description: "Winter relief program providing warm blankets and clothing to tribal families in remote areas.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3",
      participants: "500+ families to benefit",
      type: "Relief Program"
    }
  ];

  const pastEvents = [
    {
      title: "Community Health Awareness Program",
      date: "2024-05-20",
      location: "Tribal Settlement, Karimnagar",
      description: "Successfully conducted health awareness sessions reaching 150+ families.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
      impact: "150 families educated on health practices"
    },
    {
      title: "Skill Development Training",
      date: "2024-04-10",
      location: "Training Center, Nizamabad",
      description: "Vocational training program for tribal youth in computer skills and digital literacy.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
      impact: "40 youth trained successfully"
    },
    {
      title: "Family Counseling Session",
      date: "2024-03-15",
      location: "Community Hall, Mahabubabad",
      description: "Mental health awareness and family counseling services provided to tribal families.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3",
      impact: "60 families received counseling support"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-charity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Events & Activities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us in our mission to transform tribal communities through various events, 
            workshops, and development programs throughout the year.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our upcoming initiatives and help us make a difference in tribal communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-charity-dark mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {event.description}
                  </p>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Learn More & Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-charity-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Recent Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the positive impact of our recent events and programs in tribal communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charity-dark mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-accent font-semibold text-sm">
                      Impact: {event.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Become a Volunteer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our dedicated team of volunteers and help us organize impactful events 
              that transform tribal communities across India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 gradient-charity rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charity-dark mb-2">Event Support</h3>
                <p className="text-gray-600">Help organize and manage our various community events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-charity rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charity-dark mb-2">Community Outreach</h3>
                <p className="text-gray-600">Engage directly with tribal communities and families</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-charity rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charity-dark mb-2">Program Planning</h3>
                <p className="text-gray-600">Assist in planning and coordinating development programs</p>
              </div>
            </div>
            
            <Button size="lg" className="gradient-charity hover:opacity-90 transition-opacity px-8 py-4">
              Join as Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support Our Events
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your donations help us organize more events and reach more communities in need. 
            Every contribution makes a difference.
          </p>
          <a href="/donate">
            <Button size="lg" className="bg-white text-charity-dark hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              Donate to Support Events
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
