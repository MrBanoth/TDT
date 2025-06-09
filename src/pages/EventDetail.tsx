import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data - in a real app, this would come from an API
const eventData = {
  id: 'tribal-heritage-festival',
  title: 'Tribal Heritage Festival',
  type: 'Cultural',
  date: '2023-11-15',
  time: '10:00 AM - 6:00 PM',
  location: 'Araku Valley, Andhra Pradesh',
  participants: '500+ expected',
  image: 'https://images.unsplash.com/photo-1540575469863-5c9a4a560541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  description: 'Join us for a vibrant celebration of tribal culture, traditions, and heritage. Experience traditional dances, music, crafts, and cuisine from various tribal communities across the region. This festival is a unique opportunity to learn about and appreciate the rich cultural diversity of tribal India.',
  details: [
    'Traditional dance and music performances',
    'Artisan market with authentic tribal crafts',
    'Cultural workshops and demonstrations',
    'Traditional food stalls',
    'Photo exhibition on tribal life',
    'Interactive sessions with tribal elders'
  ],
  about: 'The Tribal Heritage Festival is an annual event organized to promote and preserve the rich cultural heritage of tribal communities. It provides a platform for tribal artists to showcase their talents and for visitors to experience the diversity of indigenous cultures.'
};

const EventDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch event data based on the ID
  const event = eventData;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 sm:pb-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-primary hover:bg-primary/10 rounded-full px-4 py-2 transition-colors duration-200 inline-flex items-center text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5" />
            Back to Events
          </Button>
        </div>
        
        {/* Hero Section */}
        <section className="relative">
          <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charity-dark/90 via-charity-dark/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                <div className="inline-flex items-center mb-2 sm:mb-3">
                  <span className="bg-primary/20 text-primary text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  {event.title}
                </h1>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 md:gap-6 text-white/90 text-sm sm:text-base">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="truncate">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Content */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-charity-dark mb-6">About This Event</h2>
                  <p className="text-gray-700 mb-6">{event.about}</p>
                  
                  <h3 className="text-xl font-semibold text-charity-dark mt-8 mb-4">Event Highlights</h3>
                  <ul className="space-y-3 mb-8">
                    {event.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-charity-dark mt-8 mb-4">Detailed Description</h3>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  
                  <div className="bg-charity-light/30 p-6 rounded-xl border-l-4 border-primary mt-8">
                    <h3 className="text-xl font-semibold text-charity-dark mb-3">Additional Information</h3>
                    <p className="text-gray-700 mb-4">For more details about the event, please contact our event coordinator:</p>
                    <p className="text-gray-700">Email: events@tribaltrust.org</p>
                    <p className="text-gray-700">Phone: +91 98765 43210</p>
                  </div>
                </div>
              </div>
              
              {/* Registration Card */}
              <div className="lg:sticky lg:top-6 h-fit">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center">
                    <h3 className="text-xl font-bold mb-2">Register Now</h3>
                    <p className="text-white/90 text-sm">Secure your spot at this exciting event</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium text-right">{event.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-charity-dark hover:bg-charity-dark/90 text-white py-6 text-lg font-semibold rounded-xl">
                      Register Now
                    </Button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500">
                        Limited seats available. Register early to secure your spot!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link 
                    to="/events" 
                    className="inline-flex items-center text-charity-dark hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-charity-dark mb-6">
              Can't Make It to This Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Consider making a donation to support our ongoing efforts in tribal community development. 
              Your contribution helps us organize more events and reach more communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/donate" 
                className="inline-block bg-charity-dark text-white hover:bg-charity-dark/90 px-8 py-3 text-base font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Donate Now
              </Link>
              <Link 
                to="/events" 
                className="inline-block border-2 border-charity-dark text-charity-dark hover:bg-charity-dark hover:text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300"
              >
                View Other Events
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
