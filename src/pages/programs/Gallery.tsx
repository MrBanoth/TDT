import { NavLink } from 'react-router-dom';
import { ArrowLeft, Image, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const programs = [
  {
    id: 'children',
    title: "Children's Programmes",
    color: 'blue',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3', alt: 'Children learning' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Children Program Video' },
      // Add more media items as needed
    ]
  },
  {
    id: 'medical',
    title: 'Medical Camps',
    color: 'green',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3', alt: 'Medical camp' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Medical Camp Video' },
    ]
  },
  // Add more programs as needed
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        {/* Back Button */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <NavLink 
              to="/programmes" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programmes
            </NavLink>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Programs Gallery</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the impact of our programs through photos and videos from our initiatives.
            </p>
          </div>

          {programs.map((program) => (
            <section key={program.id} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold text-${program.color}-700`}>
                  {program.title}
                </h2>
                <NavLink 
                  to={`/programs/${program.id}`}
                  className="inline-flex items-center px-4 py-2 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  View Details <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </NavLink>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.media.map((item, index) => (
                  <div key={index} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    {item.type === 'image' ? (
                      <>
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Image className="h-10 w-10 text-white" />
                        </div>
                      </>
                    ) : (
                      <div className="aspect-video bg-black">
                        <iframe
                          src={item.url}
                          title={item.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
