import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Thermometer,
  Wifi,
  Car,
  Coffee,
  Book,
  AlertCircle,
  TrendingUp,
  Activity
} from "lucide-react";

export const InformationModule = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="space-y-6">
      {/* Quick Status */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <span>Campus Status</span>
          </CardTitle>
          <CardDescription>{currentDate} • {currentTime}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4 text-orange-500" />
              <span className="text-sm">72°F</span>
              <Badge variant="secondary">Sunny</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="text-sm">2,847 on campus</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="h-4 w-4 text-green-500" />
              <span className="text-sm">Parking 67%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="h-4 w-4 text-primary" />
              <span className="text-sm">WiFi Excellent</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Information */}
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Today's Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Career Fair 2024</p>
                    <p className="text-xs text-muted-foreground">Student Union Building</p>
                  </div>
                </div>
                <Badge variant="outline">10:00 AM</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-accent rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Guest Lecture: AI in Education</p>
                    <p className="text-xs text-muted-foreground">Science Auditorium</p>
                  </div>
                </div>
                <Badge variant="outline">2:00 PM</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Jazz Concert</p>
                    <p className="text-xs text-muted-foreground">Music Hall</p>
                  </div>
                </div>
                <Badge variant="outline">7:00 PM</Badge>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="facilities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Facility Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Book className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Main Library</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Open</Badge>
                    <span className="text-xs text-muted-foreground">65% capacity</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Coffee className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium">Campus Café</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Open</Badge>
                    <span className="text-xs text-muted-foreground">Low wait</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">Fitness Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-orange-100 text-orange-800">Busy</Badge>
                    <span className="text-xs text-muted-foreground">85% capacity</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Car className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">North Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-yellow-100 text-yellow-800">Limited</Badge>
                    <span className="text-xs text-muted-foreground">23 spots left</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Interactive Campus Map
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Campus Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Registration Reminder</p>
                    <p className="text-xs text-blue-600">Spring semester registration closes in 3 days</p>
                    <span className="text-xs text-blue-500">2 hours ago</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="h-4 w-4 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">High Traffic Alert</p>
                    <p className="text-xs text-amber-600">North parking lot is nearly full. Consider using shuttle service</p>
                    <span className="text-xs text-amber-500">1 hour ago</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">System Update</p>
                    <p className="text-xs text-green-600">Student portal maintenance completed successfully</p>
                    <span className="text-xs text-green-500">3 hours ago</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};