
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Mail, Phone } from "lucide-react";
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
              className={`${activeSection === "home" ? "text-red-600 font-medium" : "text-gray-700"}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`${activeSection === "about" ? "text-red-600 font-medium" : "text-gray-700"}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className={`${activeSection === "products" ? "text-red-600 font-medium" : "text-gray-700"}`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`${activeSection === "contact" ? "text-red-600 font-medium" : "text-gray-700"}`}
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
      <section id="home" className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">Treato</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Refreshments & Food</h2>
            <p className="text-lg text-gray-800 mb-6">
              Delicious, healthy options delivered fresh to your doorstep
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection("products")}
                className="bg-red-600 hover:bg-red-700"
              >
                Our Products
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute w-full h-full rounded-full bg-white/30 backdrop-blur-sm transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" 
                alt="Treato Healthy Food" 
                className="absolute w-full h-full object-contain p-4" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">About Treato</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                At Treato, we're dedicated to providing delicious, nutritious food options that make healthy eating easy and enjoyable. Our mission is to promote wellness through wholesome food that doesn't compromise on taste.
              </p>
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Fresh ingredients sourced locally</li>
                <li>Nutritionally balanced meals and snacks</li>
                <li>Convenient delivery to your doorstep</li>
                <li>Customizable options for dietary preferences</li>
                <li>Eco-friendly packaging</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-yellow-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded with a passion for making healthy eating accessible to everyone, Treato began as a small home kitchen operation serving nutritious snacks to local customers.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we've grown to serve businesses and individuals throughout the region, providing refreshing options that fuel both body and mind.
              </p>
              <p className="text-gray-700">
                Our team is committed to innovation, quality, and service - bringing you the best in healthy refreshments and meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">Our Products</h2>
          <p className="text-center text-gray-600 mb-10">Explore our range of healthy and delicious offerings</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Fruit Bowls" 
              description="Fresh, seasonal fruits combined in colorful, nutritious bowls. Perfect for a refreshing snack or light meal."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
            <ProductCard 
              title="Sprouts" 
              description="Nutrient-packed sprouts prepared with light seasoning. High in protein and essential vitamins."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
            <ProductCard 
              title="Salads" 
              description="Crisp, garden-fresh salads with a variety of toppings and homemade dressings."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
            <ProductCard 
              title="Thali" 
              description="Complete, balanced meals featuring multiple dishes for a satisfying dining experience."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
            <ProductCard 
              title="Fresh Juices" 
              description="Cold-pressed juices made from seasonal fruits and vegetables. No added sugar or preservatives."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
            <ProductCard 
              title="Healthy Snacks" 
              description="Nutritious, guilt-free snacks for any time of day. Perfect for on-the-go energy."
              image="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png"
            />
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-red-600 mb-8 text-center">Featured Items</h3>
            <Carousel className="max-w-md mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img 
                          src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" 
                          alt="Mixed Fruit Bowl" 
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h4 className="font-semibold text-lg">Premium Mixed Fruit Bowl</h4>
                        <p className="text-gray-600 text-center mt-2">Our bestseller featuring a seasonal selection of fresh fruits</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img 
                          src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" 
                          alt="Sprout Salad" 
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h4 className="font-semibold text-lg">Mixed Sprout Salad</h4>
                        <p className="text-gray-600 text-center mt-2">Protein-packed and flavorful with our signature dressing</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img 
                          src="/lovable-uploads/df235ab1-0bbd-4c01-a519-ccbaccad3700.png" 
                          alt="Mini Thali" 
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h4 className="font-semibold text-lg">Balanced Mini Thali</h4>
                        <p className="text-gray-600 text-center mt-2">A complete meal with perfectly portioned nutritious items</p>
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
      <section id="contact" className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p>6006306020</p>
                    <p>9419192452</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@treato.com</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Business Hours</p>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Delivery Areas</p>
                  <p>We currently service all major areas within the city limits. Contact us for specific location inquiries.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-yellow-400 text-red-600 p-4 rounded-lg flex items-center justify-center">
                  <p className="font-semibold text-lg text-center">Fruit Bowls</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-4 rounded-lg flex items-center justify-center">
                  <p className="font-semibold text-lg text-center">Sprouts</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-4 rounded-lg flex items-center justify-center">
                  <p className="font-semibold text-lg text-center">Salads</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-4 rounded-lg flex items-center justify-center">
                  <p className="font-semibold text-lg text-center">Thali</p>
                </div>
                <div className="bg-yellow-400 text-red-600 p-4 rounded-lg flex items-center justify-center sm:col-span-2">
                  <p className="font-semibold text-lg text-center">All Types of Refreshments</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="mb-4 font-semibold text-lg">Special Discounts for Bulk Orders</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-600 font-medium">
                  Call Now to Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Treato</h2>
                <p className="text-sm">Refreshments & Food</p>
              </div>
              <p className="text-gray-400 text-sm mt-2">Healthy eating made delicious</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-5 w-5" />
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
