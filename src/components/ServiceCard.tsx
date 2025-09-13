import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceAction {
  label: string;
  variant: "default" | "outline";
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "open" | "closed";
  hours: string;
  details: string[];
  actions: ServiceAction[];
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  hours, 
  details, 
  actions 
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-hero p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge 
                  variant={status === "open" ? "secondary" : "destructive"}
                  className={status === "open" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                >
                  <div className={`w-2 h-2 rounded-full mr-1 ${
                    status === "open" ? "bg-green-500" : "bg-red-500"
                  }`}></div>
                  {status === "open" ? "Open" : "Closed"}
                </Badge>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>{hours}</span>
        </div>

        {isExpanded && (
          <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="bg-muted/50 rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Service Details:</h4>
              <ul className="space-y-1">
                {details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              className="flex-1"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};