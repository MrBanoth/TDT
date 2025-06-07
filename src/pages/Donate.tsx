
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Package, Utensils, Gift, Heart, Phone, Shield, Users, Clock } from 'lucide-react';

const Donate = () => {
  const donationTypes = [
    {
      title: "Financial Donations",
      icon: <DollarSign className="h-12 w-12 text-white" />,
      description: "Monetary contributions that help fund our various programs and initiatives",
      gradient: "bg-gradient-to-br from-primary to-primary/80",
      options: [
        "Monthly recurring donations",
        "One-time contributions",
        "Program-specific funding",
        "Emergency relief fund",
        "Educational scholarships",
        "Medical camp support"
      ],
      impact: "₹1000 can provide medical care for 5 families",
      action: "Donate Money"
    },
    {
      title: "Material Donations",
      icon: <Package className="h-12 w-12 text-white" />,
      description: "Physical items and supplies that directly benefit tribal communities",
      gradient: "bg-gradient-to-br from-secondary to-secondary/80",
      options: [
        "Blankets and warm clothing",
        "Educational materials and books",
        "Medical supplies and medicines",
        "School supplies and stationery",
        "Sports equipment",
        "Hygiene and sanitation items"
      ],
      impact: "Your donated items reach families directly",
      action: "Donate Materials"
    },
    {
      title: "Food Donations",
      icon: <Utensils className="h-12 w-12 text-white" />,
      description: "Nutritious food items and groceries for tribal families and children",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
      options: [
        "Rice, wheat, and grains",
        "Pulses and lentils",
        "Cooking oil and spices",
        "Nutritional supplements",
        "Baby food and formula",
        "Fresh fruits and vegetables"
      ],
      impact: "Feed a family of 5 for a week",
      action: "Donate Food"
    },
    {
      title: "Volunteer Support",
      icon: <Heart className="h-12 w-12 text-white" />,
      description: "Various other ways you can contribute to our mission",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      options: [
        "Volunteer your time and skills",
        "Professional services (legal, medical)",
        "Transportation assistance",
        "Equipment and technology",
        "Event sponsorship",
        "Awareness campaigns"
      ],
      impact: "Your skills and time are invaluable",
      action: "Get Involved"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Payments",
      description: "Bank-level security for all transactions"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Direct Impact",
      description: "100% of donations reach communities"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Process",
      description: "Donation process takes less than 2 minutes"
    }
  ];

  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-charity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Make a
                <span className="block text-secondary">Difference</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Your generosity can transform lives and create lasting impact in tribal communities. 
                Choose how you'd like to contribute to our mission.
              </p>
              
              <div className="flex items-center space-x-4 text-white/80">
                <Heart className="h-6 w-6 text-red-300 fill-current" />
                <span className="text-lg font-medium">Every contribution matters</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-charity-dark mb-6">Quick Donation</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {quickAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="h-12 text-lg font-semibold hover:bg-primary hover:text-white border-2 border-primary/20 hover:border-primary transition-all"
                  >
                    ₹{amount.toLocaleString()}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-4 mb-6">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none text-lg"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 py-3 text-lg font-semibold rounded-xl">
                  Donate Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {feature.icon}
                    </div>
                    <p className="text-xs font-medium text-gray-600">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Ways to Contribute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to support our mission and make a meaningful impact in tribal communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className={`${type.gradient} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                      <p className="opacity-90">{type.description}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-charity-dark mb-4">What we accept:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {type.options.slice(0, 4).map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600 text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl mb-6">
                    <p className="text-primary font-semibold text-sm">
                      💡 {type.impact}
                    </p>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    {type.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Pickup Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Volunteer Pickup Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Can't deliver your donations? No problem! Our dedicated volunteers can pick up 
              your material and food donations directly from your location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3" 
                alt="Volunteer pickup service" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <Card className="p-8 shadow-xl border-0">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-charity-dark mb-6">
                    How Pickup Works
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charity-dark mb-1">Contact Us</h4>
                        <p className="text-gray-600">Call or message us with details about your donation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charity-dark mb-1">Schedule Pickup</h4>
                        <p className="text-gray-600">We'll arrange a convenient time for collection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charity-dark mb-1">Safe Collection</h4>
                        <p className="text-gray-600">Our volunteers will collect your donations safely</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charity-dark mb-1">Direct Impact</h4>
                        <p className="text-gray-600">Your donations reach tribal communities quickly</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-charity-light rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-charity-dark">Contact for Pickup</p>
                        <p className="text-gray-600">Call us to schedule your donation pickup</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 gradient-charity hover:opacity-90 transition-opacity">
                    Schedule Pickup
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-charity-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charity-dark mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donations create real change in tribal communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { amount: "₹500", impact: "Provides medical care for 1 family for a month" },
              { amount: "₹1,000", impact: "Supports educational materials for 5 children" },
              { amount: "₹2,500", impact: "Funds a complete health checkup camp" },
              { amount: "₹5,000", impact: "Sponsors vocational training for 2 women" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">
                    {item.amount}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Making a Difference Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of supporters who are helping us transform tribal communities. 
            Your contribution, no matter the size, creates lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-charity-dark hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-charity-dark px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
