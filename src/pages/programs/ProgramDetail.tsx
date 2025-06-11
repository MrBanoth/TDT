import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users as UsersIcon, Heart, Home, Gift, HandHeart, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const programData = {
  'helping-poor': {
    id: 'helping-poor',
    title: 'Helping the Poor',
    icon: <Gift className="h-8 w-8 sm:h-12 sm:w-12 text-red-500" />,
    color: 'red',
    description: "Providing essential support and resources to uplift underprivileged communities and break the cycle of poverty",
    impact: "10,000+ lives transformed annually through our poverty alleviation programs",
    features: [
      "Food distribution drives and community kitchens",
      "Emergency financial assistance for basic needs",
      "Housing support and shelter programs",
      "Livelihood training and employment assistance",
      "Educational support for children from low-income families",
      "Healthcare access and medical assistance"
    ],
    stats: [
      { value: "10,000+", label: "Lives Impacted" },
      { value: "50+", label: "Communities Served" },
      { value: "1M+", label: "Meals Served" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3', alt: 'Helping the poor' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Helping the Poor Video' },
    ]
  },
  children: {
    id: 'children',
    title: "Children's Programmes",
    icon: <UsersIcon className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500" />,
    color: 'blue',
    description: "Comprehensive educational support and development programs for tribal children",
    impact: "Over 1,000 children supported annually",
    features: [
      "Educational scholarships and school supplies",
      "Nutritional support and meal programs",
      "Skill development workshops",
      "Computer literacy training",
      "Sports and cultural activities",
      "Mentorship programs"
    ],
    stats: [
      { value: "1,000+", label: "Children Impacted" },
      { value: "25+", label: "Schools Supported" },
      { value: "50+", label: "Workshops Conducted" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3', alt: 'Children learning' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Children Program Video' },
    ]
  },
  medical: {
    id: 'medical',
    title: 'Medical Camps',
    icon: <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-green-500" />,
    color: 'green',
    description: "Free healthcare services and medical assistance for tribal communities",
    impact: "50+ medical camps conducted yearly",
    features: [
      "Regular health checkups and screenings",
      "Free medicines and treatments",
      "Vaccination drives",
      "Maternal and child healthcare",
      "Health awareness programs",
      "Emergency medical assistance"
    ],
    stats: [
      { value: "5,000+", label: "Patients Treated" },
      { value: "50+", label: "Camps Conducted" },
      { value: "100+", label: "Villages Covered" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3', alt: 'Medical camp' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Medical Camp Video' },
    ]
  },
  women: {
    id: 'women',
    title: "Women's Empowerment",
    icon: <UsersIcon className="h-8 w-8 sm:h-12 sm:w-12 text-purple-500" />,
    color: 'purple',
    description: "Empowering women through skill development and economic independence programs",
    impact: "500+ women empowered annually",
    features: [
      "Vocational training programs",
      "Microfinance and self-help groups",
      "Health and hygiene awareness",
      "Legal rights education",
      "Leadership development",
      "Entrepreneurship support"
    ],
    stats: [
      { value: "500+", label: "Women Empowered" },
      { value: "30+", label: "Self-Help Groups" },
      { value: "100+", label: "Training Sessions" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3', alt: 'Women empowerment' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Women Empowerment Video' },
    ]
  },
  blanket: {
    id: 'blanket',
    title: 'Blanket Distribution',
    icon: <Home className="h-8 w-8 sm:h-12 sm:w-12 text-orange-500" />,
    color: 'orange',
    description: "Providing warmth and comfort to underprivileged communities during winter",
    impact: "5,000+ blankets distributed annually",
    features: [
      "Winter relief distribution",
      "Targeting remote and tribal areas",
      "Elderly and children focused",
      "Community engagement",
      "Volunteer participation",
      "Annual winter drive"
    ],
    stats: [
      { value: "5,000+", label: "Blankets Distributed" },
      { value: "50+", label: "Villages Covered" },
      { value: "10,000+", label: "Lives Touched" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1609355982379-5d5c3b7d79c3?ixlib=rb-4.0.3', alt: 'Blanket distribution' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Blanket Distribution Video' },
    ]
  },
  counseling: {
    id: 'counseling',
    title: 'Family Counseling',
    icon: <HandHeart className="h-8 w-8 sm:h-12 sm:w-12 text-teal-500" />,
    color: 'teal',
    description: "Supporting families through counseling and guidance services",
    impact: "200+ families supported annually",
    features: [
      "Family counseling sessions",
      "Marriage counseling",
      "Child and parent relationship guidance",
      "Mental health support",
      "Community support groups",
      "Crisis intervention"
    ],
    stats: [
      { value: "200+", label: "Families Supported" },
      { value: "500+", label: "Counseling Sessions" },
      { value: "10+", label: "Support Groups" }
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1507208773393-40d26b35a7ce?ixlib=rb-4.0.3', alt: 'Family counseling' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Family Counseling Video' },
    ]
  }
};

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programData[id as keyof typeof programData];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Program not found</h1>
          <Link to="/programs" className="mt-4 inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  const colorVariants = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700',
    },
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      button: 'bg-teal-600 hover:bg-teal-700',
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      button: 'bg-red-600 hover:bg-red-700',
    },
  };

  const colors = colorVariants[program.color as keyof typeof colorVariants] || colorVariants.blue;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className={`${colors.bg} py-12 sm:py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <Link 
                    to="/programmes" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Programmes
                  </Link>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  {program.title}
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/donate" 
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white ${colors.button} shadow-sm hover:shadow-md transition-all duration-200`}
                  >
                    Donate Now
                  </Link>
                  <Link 
                    to="/programs/gallery" 
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10 lg:pl-10 lg:border-l lg:border-gray-200 lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                  {program.media[0].type === 'video' ? (
                    <iframe
                      src={program.media[0].url}
                      title={program.media[0].title}
                      className="w-full h-80 object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={program.media[0].url}
                      alt={program.media[0].alt}
                      className="w-full h-80 object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full">
              {program.stats.map((stat, index) => (
                <div key={index} className="w-full">
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center h-full">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] xs:text-xs sm:text-[13px] text-gray-600 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Program</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Our {program.title.toLowerCase()} initiative is designed to address the specific needs of the 
                    communities we serve. Through targeted interventions and sustainable solutions, 
                    we aim to create lasting positive change.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className={`h-5 w-5 text-${program.color}-500 flex-shrink-0 mr-2 mt-0.5`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Impact</h3>
                  <p className="text-gray-700">
                    {program.impact} through our comprehensive programs and initiatives. 
                    We measure our success by the positive changes we see in the communities we serve.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className={`p-6 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Duration</p>
                        <p className="text-sm text-gray-900">Ongoing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Location</p>
                        <p className="text-sm text-gray-900">Tribal Regions, India</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UsersIcon className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Beneficiaries</p>
                        <p className="text-sm text-gray-900">Children, Women, Families</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white ${colors.button} shadow-sm hover:shadow-md transition-all duration-200`}
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery Preview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {program.media.slice(0, 4).map((item, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        {item.type === 'video' ? (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <Video className="h-8 w-8 text-gray-400" />
                          </div>
                        ) : (
                          <img
                            src={item.url}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/programs/gallery"
                      className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                    >
                      View all media <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;