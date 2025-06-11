import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  image: string;
  description: string;
  details: string[];
}

const AllEvents = () => {
  const navigate = useNavigate();

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Sample events data (in a real app, this would come from an API)
  const upcomingEvents: Event[] = [
    {
      id: "1",
      title: "Annual Health Camp",
      date: "2024-07-15",
      time: "9:00 AM - 5:00 PM",
      location: "Tribal Village, Telangana",
      description: "Free comprehensive health checkups, medicines, and health awareness programs for the tribal community.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3",
      participants: "200+ expected",
      type: "Health Camp",
      details: [
        "Free health check-ups",
        "Specialist consultations",
        "Free medicines distribution",
        "Health awareness sessions"
      ]
    },
    {
      id: "2",
      title: "Women's Empowerment Workshop",
      date: "2024-08-10",
      time: "10:00 AM - 4:00 PM",
      location: "Adilabad District, Telangana",
      description: "Skill development and entrepreneurship training for tribal women to promote self-reliance.",
      image: "https://images.unsplash.com/photo-1529154691717-33091991a2c9?ixlib=rb-4.0.3",
      participants: "50 women",
      type: "Workshop",
      details: [
        "Skill development training",
        "Entrepreneurship guidance",
        "Financial literacy",
        "Success stories sharing"
      ]
    },
    {
      id: "3",
      title: "Educational Scholarship Distribution",
      date: "2024-09-05",
      time: "11:00 AM - 2:00 PM",
      location: "Khammam, Telangana",
      description: "Awarding scholarships to meritorious tribal students to support their higher education.",
      image: "https://images.unsplash.com/photo-1523050853548-5d4093d06a2b?ixlib=rb-4.0.3",
      participants: "100 students",
      type: "Educational",
      details: [
        "Scholarship distribution ceremony",
        "Mentorship program launch",
        "Career guidance session",
        "Alumni interaction"
      ]
    },
    {
      id: "4",
      title: "Helping the Poor Initiative",
      type: "Relief Program",
      date: "2024-12-15",
      time: "10:00 AM - 4:00 PM",
      location: "Multiple Villages, Adilabad",
      participants: "500+ families",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3",
      description: "Winter relief program providing warm blankets and clothing to tribal families in remote areas.",
      details: [
        "Essential aid distribution",
        "Winter clothing drive",
        "Elderly care kits",
        "Children's winter essentials"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center text-primary hover:bg-primary/10 rounded-full px-4 py-2 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Events
              </Button>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charity-dark mb-4">
                All Upcoming Events
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover all our upcoming events and join us in making a difference in tribal communities.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/90 text-white backdrop-blur-sm">
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        <span>{formatDate(event.date)} • {event.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1.5 text-primary" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <ul className="space-y-1.5 mb-6">
                      {event.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary mr-2">•</span>
                          <span className="line-clamp-1">{detail}</span>
                        </li>
                      ))}
                      {event.details.length > 3 && (
                        <li className="text-sm text-gray-500">+{event.details.length - 3} more</li>
                      )}
                    </ul>
                    
                    <div className="mt-auto">
                      <Button 
                        onClick={() => navigate(`/events/${event.id}`)}
                        className="w-full bg-charity-dark hover:bg-charity-dark/90 text-white rounded-xl py-2.5 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        Learn More & Register
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
              Can't find what you're looking for?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to stay updated on upcoming events, volunteer opportunities, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-charity-dark hover:bg-charity-dark/90 text-white rounded-lg px-8 py-3 transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllEvents;
