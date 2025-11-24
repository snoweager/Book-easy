import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface BookingOption {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  capacity: number;
  location: string;
}

const bookingOptions: BookingOption[] = [
  {
    id: "1",
    title: "Standard Reservation",
    description: "Perfect for individuals or small groups",
    price: 49,
    duration: "1 hour",
    capacity: 4,
    location: "Downtown Center"
  },
  {
    id: "2",
    title: "Premium Experience",
    description: "Enhanced service with exclusive amenities",
    price: 99,
    duration: "2 hours",
    capacity: 6,
    location: "Premium Lounge"
  },
  {
    id: "3",
    title: "VIP Package",
    description: "Ultimate luxury experience",
    price: 199,
    duration: "4 hours",
    capacity: 10,
    location: "VIP Suite"
  }
];

const Bookings = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleBooking = (optionId: string) => {
    setSelectedOption(optionId);
    toast.success("Package selected! Proceeding to payment...");
    setTimeout(() => {
      navigate("/payment", { state: { bookingId: optionId } });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Select Your Package</h1>
              <p className="text-muted-foreground text-lg">
                Choose the perfect option for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookingOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-6 transition-all hover:shadow-lg ${
                    selectedOption === option.id ? "ring-2 ring-primary shadow-glow" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{option.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Up to {option.capacity} people</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{option.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold mb-4">
                        ${option.price}
                        <span className="text-sm text-muted-foreground font-normal">/session</span>
                      </div>
                      <Button
                        className="w-full bg-gradient-hero"
                        onClick={() => handleBooking(option.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bookings;
