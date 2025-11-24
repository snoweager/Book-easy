import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Book Your Perfect
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Seamless bookings, instant confirmations, and unforgettable experiences. 
              Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/bookings">
                <Button size="lg" className="bg-gradient-hero shadow-glow hover:opacity-90 transition-opacity">
                  Start Booking
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BookEasy?</h2>
            <p className="text-muted-foreground">Everything you need for a perfect booking experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Easy Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Book your appointments with just a few clicks
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Instant Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Get immediate booking confirmations
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
                Your transactions are safe and encrypted
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Star className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Top Rated</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of satisfied users
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users who trust BookEasy for their reservations
            </p>
            <Link to="/signin">
              <Button size="lg" variant="secondary" className="shadow-lg hover:scale-105 transition-transform">
                Create Your Account
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
