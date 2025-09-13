import { CampusHeader } from "@/components/CampusHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ChatInterface } from "@/components/ChatInterface";
import { InformationModule } from "@/components/InformationModule";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  Utensils, 
  Users, 
  GraduationCap,
  MessageSquare,
  Calendar,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const campusServices = [
    {
      title: "Academic Services",
      description: "Class schedules, registration, academic advising, and transcript requests",
      icon: GraduationCap,
      status: "open" as const,
      hours: "8:00 AM - 5:00 PM",
      details: [
        "Online course registration available 24/7",
        "Academic advisors available by appointment",
        "Transcript requests processed within 3-5 business days"
      ],
      actions: [
        { label: "Student Portal", variant: "default" as const },
        { label: "Schedule Appointment", variant: "outline" as const }
      ]
    },
    {
      title: "Library Services",
      description: "Study spaces, research assistance, book lending, and digital resources",
      icon: BookOpen,
      status: "open" as const,
      hours: "7:00 AM - 12:00 AM",
      details: [
        "Over 500,000 books and digital resources",
        "24/7 computer lab access with student ID",
        "Group study rooms reservable online"
      ],
      actions: [
        { label: "Reserve Room", variant: "default" as const },
        { label: "Research Help", variant: "outline" as const }
      ]
    },
    {
      title: "Dining Services",
      description: "Campus restaurants, meal plans, and nutrition information",
      icon: Utensils,
      status: "open" as const,
      hours: "6:30 AM - 10:00 PM",
      details: [
        "5 dining locations across campus",
        "Vegetarian, vegan, and gluten-free options",
        "Mobile ordering available through campus app"
      ],
      actions: [
        { label: "View Menus", variant: "default" as const },
        { label: "Meal Plans", variant: "outline" as const }
      ]
    },
    {
      title: "Student Services",
      description: "Financial aid, housing, health services, and student support",
      icon: Users,
      status: "open" as const,
      hours: "8:30 AM - 4:30 PM",
      details: [
        "Financial aid counseling and applications",
        "Housing assignments and maintenance requests",
        "Mental health and wellness resources"
      ],
      actions: [
        { label: "Make Appointment", variant: "default" as const },
        { label: "Emergency Help", variant: "outline" as const }
      ]
    },
    {
      title: "Campus Events",
      description: "Upcoming events, activities, and campus announcements",
      icon: Calendar,
      status: "open" as const,
      hours: "Ongoing",
      details: [
        "Career fairs and networking events",
        "Cultural celebrations and performances",
        "Academic lectures and seminars"
      ],
      actions: [
        { label: "Event Calendar", variant: "default" as const },
        { label: "RSVP Events", variant: "outline" as const }
      ]
    },
    {
      title: "Campus Navigation",
      description: "Building locations, parking information, and transportation",
      icon: MapPin,
      status: "open" as const,
      hours: "24/7",
      details: [
        "Interactive campus map with directions",
        "Real-time shuttle tracking",
        "Parking availability and permit information"
      ],
      actions: [
        { label: "Campus Map", variant: "default" as const },
        { label: "Shuttle Times", variant: "outline" as const }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CampusHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                CampusAI
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your intelligent campus companion for instant assistance with academics, 
              facilities, dining, and student services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="mr-2 h-5 w-5" />
                View Campus Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all the services and resources available to help you succeed in your academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                status={service.status}
                hours={service.hours}
                details={service.details}
                actions={service.actions}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Chat and Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            {/* Chat Interface */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
                <p className="text-lg text-muted-foreground">
                  Get instant answers to your questions about campus life, academics, and services
                </p>
              </div>
              <ChatInterface />
            </div>
            
            {/* Information Module */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">Campus Information</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive details about schedules, facilities, and campus resources
                </p>
              </div>
              <InformationModule />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency and Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Emergency & Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader className="text-center pb-4">
                  <Phone className="h-8 w-8 text-destructive mx-auto mb-2" />
                  <CardTitle className="text-destructive">Emergency</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold mb-2">911</p>
                  <p className="text-sm text-muted-foreground">For life-threatening emergencies</p>
                  <Button variant="outline" size="sm" className="mt-3 border-destructive text-destructive hover:bg-destructive/10">
                    Campus Safety: (555) 123-4567
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="text-center pb-4">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">Campus Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl font-bold mb-2">(555) 123-HELP</p>
                  <p className="text-sm text-muted-foreground">Student services & assistance</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Call Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardHeader className="text-center pb-4">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-accent">IT Help Desk</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl font-bold mb-2">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">Technical assistance</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Submit Ticket
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-bold">CampusAI</span>
              </div>
              <p className="text-background/70 text-sm">
                Intelligent campus information system providing 24/7 assistance to students.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Course Catalog</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Campus Map</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Events Calendar</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Academic Advising</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Library Resources</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Health Services</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Career Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/70 text-sm">
              © 2024 CampusAI. All rights reserved. Powered by artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
