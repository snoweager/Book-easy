import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Mail, Phone, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const bookings = [
    {
      id: "1",
      title: "Premium Experience",
      date: "2025-11-15",
      time: "2:00 PM",
      location: "Premium Lounge",
      status: "confirmed"
    },
    {
      id: "2",
      title: "Standard Reservation",
      date: "2025-11-20",
      time: "10:00 AM",
      location: "Downtown Center",
      status: "confirmed"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Header */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-gradient-hero text-white text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                    <p className="text-muted-foreground">Member since October 2025</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline">Edit Profile</Button>
              </div>
            </Card>

            {/* Bookings Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Bookings</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{booking.title}</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm sm:col-span-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{booking.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-between items-start md:items-end gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                          Confirmed
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
