import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = {
  'BANOTH-SRINIVAS-NAIK': {
    name: 'BANOTH SRINIVAS NAIK',
    role: 'Founder & President',
    image: '/aboutuspage/FOUNDER.jpg',
    description: 'A visionary leader with over 20 years of experience in tribal development and social work. His dedication to uplifting tribal communities has been the driving force behind our organization\'s success.',
    details: [
      'Founder and Chief Functionary of the organization',
      '20+ years of experience in tribal development',
      'Expert in community mobilization and social entrepreneurship',
      'Recipient of multiple awards for social service'
    ],
    quote: 'Empowering tribal communities is not just our mission, it\'s our responsibility.'
  },
  'BANOTH-LALITHAMMA': {
    name: 'BANOTH LALITHAMMA',
    role: 'Trustee',
    image: '/aboutuspage/TRUSTEE.jpg',
    description: 'A dedicated social worker with a passion for women empowerment and education in tribal areas. Her work has transformed the lives of countless women and children.',
    details: [
      '15+ years of experience in women empowerment',
      'Specializes in education and skill development',
      'Leads multiple self-help group initiatives',
      'Advocate for tribal women\'s rights'
    ],
    quote: 'Education is the most powerful tool to break the cycle of poverty.'
  },
  'R-SURESH-NAIK': {
    name: 'R. SURESH NAIK',
    role: 'Trustee & Agricultural Development Head',
    image: '/aboutuspage/TRUST-MEMBER.jpg',
    description: 'A distinguished development professional with over 15 years of experience in sustainable agriculture and rural development. Mr. Suresh Naik has been instrumental in transforming agricultural practices in tribal areas through innovative and sustainable methods. His expertise in water conservation and organic farming has significantly improved crop yields and livelihoods of tribal farmers across the region.',
    details: [
      'Pioneered sustainable agriculture initiatives benefiting 5,000+ tribal farmers',
      'Led the implementation of water conservation projects across 100+ villages',
      'Established 25+ Farmer Producer Organizations (FPOs) to empower tribal farmers',
      'Conducted 200+ training programs on organic farming and soil health management',
      'Recipient of the \'Krishibhushan\' Award for outstanding contribution to agriculture',
      'Developed community-based seed banks preserving 50+ indigenous crop varieties'
    ],
    quote: 'Empowering tribal farmers with sustainable agricultural practices is not just about increasing yields, but about preserving our heritage and ensuring food security for future generations.'
  }
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const member = id ? teamMembers[id as keyof typeof teamMembers] : null;

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen bg-charity-light">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-charity-dark mb-4">Member Not Found</h1>
          <Link to="/about" className="text-primary hover:underline">
            Back to Our Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charity-light">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link 
          to="/about" 
          className="inline-flex items-center text-charity-dark hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Our Team
        </Link>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: member.name.includes('LALITHAMMA') || member.name.includes('SURESH NAIK') ? 'center 10%' : 'center 20%' }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {member.role}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-charity-dark mb-4">
                  {member.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {member.description}
                </p>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-charity-dark mb-4">Key Contributions</h3>
                  <ul className="space-y-3">
                    {member.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="bg-charity-light/50 border-l-4 border-primary px-6 py-4 rounded-r-lg">
                  <p className="text-charity-dark italic">"{member.quote}"</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
