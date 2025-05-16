
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Phone, Award, Heart, Sparkles, Star, Salad, Sprout } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" alt="Treato Logo" className="h-10 w-10 rounded-full object-cover" />
            <h1 className="font-bold text-2xl text-red-600">Treato</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className={`${activeSection === "home" ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`${activeSection === "about" ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className={`${activeSection === "products" ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`${activeSection === "contact" ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-700">
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 animate-fade-in">Treato</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 drop-shadow-md">Refreshments & Food</h2>
            <p className="text-lg text-gray-800 mb-8 max-w-md">
              Delicious, healthy options delivered fresh to your doorstep. Nourish your body with our carefully crafted selections.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection("products")}
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Our Products
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 animate-fade-in">
              <div className="absolute w-full h-full rounded-full bg-white/40 backdrop-blur-sm transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" 
                alt="Treato Healthy Food" 
                className="absolute w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">About Treato</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <Heart className="text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Treato, we're dedicated to providing delicious, nutritious food options that make healthy eating easy and enjoyable. Our mission is to promote wellness through wholesome food that doesn't compromise on taste.
              </p>
              <div className="flex items-center mb-6">
                <Star className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Why Choose Us?</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mr-2 inline-block"></span>
                  <span>Fresh ingredients sourced locally</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mr-2 inline-block"></span>
                  <span>Nutritionally balanced meals and snacks</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mr-2 inline-block"></span>
                  <span>Convenient delivery to your doorstep</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mr-2 inline-block"></span>
                  <span>Customizable options for dietary preferences</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mr-2 inline-block"></span>
                  <span>Eco-friendly packaging</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award className="text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold">Our Story</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded with a passion for making healthy eating accessible to everyone, Treato began as a small home kitchen operation serving nutritious snacks to local customers.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, we've grown to serve businesses and individuals throughout the region, providing refreshing options that fuel both body and mind.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team is committed to innovation, quality, and service - bringing you the best in healthy refreshments and meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">Our Products</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-3"></div>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Explore our range of healthy and delicious offerings, carefully prepared to nourish your body and delight your taste buds</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Fruit Bowls" 
              description="Fresh, seasonal fruits combined in colorful, nutritious bowls. Perfect for a refreshing snack or light meal."
              image="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
            />
            <ProductCard 
              title="Sprouts" 
              description="Nutrient-packed sprouts prepared with light seasoning. High in protein and essential vitamins."
              image="https://images.unsplash.com/photo-1576343286280-f9a228010732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
            />
            <ProductCard 
              title="Salads" 
              description="Crisp, garden-fresh salads with a variety of toppings and homemade dressings."
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
            />
            <ProductCard 
              title="Thali" 
              description="Complete, balanced meals featuring multiple dishes for a satisfying dining experience."
              image="https://images.unsplash.com/photo-1546833998-877b37c3e5c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
            />
            <ProductCard 
              title="Fresh Juices" 
              description="Cold-pressed juices made from seasonal fruits and vegetables. No added sugar or preservatives."
              image="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            />
            <ProductCard 
              title="Healthy Snacks" 
              description="Nutritious, guilt-free snacks for any time of day. Perfect for on-the-go energy."
              image="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center">Featured Items</h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10"></div>
            <Carousel className="max-w-md mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-full h-56 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
                            alt="Mixed Fruit Bowl" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 text-center bg-white">
                          <h4 className="font-semibold text-lg mb-2">Premium Mixed Fruit Bowl</h4>
                          <p className="text-gray-600">Our bestseller featuring a seasonal selection of fresh fruits</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-full h-56 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
                            alt="Sprout Salad" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 text-center bg-white">
                          <h4 className="font-semibold text-lg mb-2">Mixed Sprout Salad</h4>
                          <p className="text-gray-600">Protein-packed and flavorful with our signature dressing</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-full h-56 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1564671546498-bbc2e02b1220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                            alt="Mini Thali" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 text-center bg-white">
                          <h4 className="font-semibold text-lg mb-2">Balanced Mini Thali</h4>
                          <p className="text-gray-600">A complete meal with perfectly portioned nutritious items</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-8 text-yellow-300">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-full mt-1">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-yellow-300 mb-2">Call Us</p>
                    <p className="text-xl mb-2 hover:text-yellow-200 transition-colors">6006306020</p>
                    <p className="text-xl hover:text-yellow-200 transition-colors">9419192452</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <p className="font-medium text-lg text-yellow-300">Business Hours</p>
                  </div>
                  <p className="mb-1 pl-7">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="pl-7">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <p className="font-medium text-lg text-yellow-300">Delivery Areas</p>
                  </div>
                  <p className="pl-7">We currently service all major areas within the city limits. Contact us for specific location inquiries.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-8 text-yellow-300">What We Offer</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                <div className="bg-yellow-400 text-red-600 p-5 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105 shadow-md">
                  <p className="font-semibold text-lg text-center">Fruit Bowls</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-5 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105 shadow-md">
                  <p className="font-semibold text-lg text-center">Sprouts</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-5 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105 shadow-md">
                  <p className="font-semibold text-lg text-center">Salads</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-5 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105 shadow-md">
                  <p className="font-semibold text-lg text-center">Thali</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-5 rounded-lg flex items-center justify-center sm:col-span-2 transform transition-transform duration-300 hover:scale-105 shadow-md">
                  <p className="font-semibold text-lg text-center">All Types of Refreshments</p>
                </div>
              </div>
              
              <div className="text-center bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <p className="mb-5 font-semibold text-xl text-yellow-300">Special Discounts for Bulk Orders</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-medium text-lg px-8 py-6 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  Call Now to Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" alt="Treato Logo" className="h-10 w-10 rounded-full object-cover" />
                <h2 className="text-2xl font-bold">Treato</h2>
                <p className="text-sm text-gray-400">Refreshments & Food</p>
              </div>
              <p className="text-gray-400 text-sm mt-2">Healthy eating made delicious</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-5 w-5 text-yellow-400" />
                <p>6006306020 / 9419192452</p>
              </div>
              <p className="text-gray-400 text-sm">© 2023 Treato. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 bg-white">
        <h3 className="font-semibold text-lg mb-3 text-red-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
