import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  Mic, 
  Paperclip,
  Sparkles,
  MessageSquare,
  Clock
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your CampusAI assistant. I can help you with information about classes, facilities, dining, events, and more. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
      suggestions: [
        "What's for lunch today?",
        "Show me my class schedule",
        "Where is the library?",
        "Upcoming campus events"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
        suggestions: generateSuggestions(inputValue)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("dining") || lowerInput.includes("food") || lowerInput.includes("lunch")) {
      return "Today's dining options include fresh salads at Green Garden Café, pizza at Campus Corner, and our signature burgers at The Hub. All locations are open until 10 PM. Would you like to see specific menus or nutritional information?";
    }
    
    if (lowerInput.includes("library") || lowerInput.includes("study")) {
      return "The main library is located in the Academic Center, building A-12. We have quiet study areas on floors 2-4, group study rooms (reservable online), and 24/7 computer access with your student ID. Current occupancy is at 65%. Need directions or want to reserve a study room?";
    }
    
    if (lowerInput.includes("schedule") || lowerInput.includes("class")) {
      return "I can help you access your class schedule through the student portal. You can also add/drop courses until the end of next week. Your next class is Chemistry 101 in Science Building room 201 at 2:00 PM. Would you like me to set a reminder?";
    }
    
    if (lowerInput.includes("event") || lowerInput.includes("activity")) {
      return "Upcoming events this week include: Career Fair (Wednesday 10 AM-4 PM), Jazz Concert (Friday 7 PM), and the Annual Science Fair (Saturday). The most popular event is the Student Organization Fair happening tomorrow in the main quad. Interested in any specific type of event?";
    }
    
    return "I'd be happy to help you with that! I have access to information about academics, dining, facilities, events, transportation, and student services. Could you be more specific about what you're looking for?";
  };

  const generateSuggestions = (input: string): string[] => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("dining") || lowerInput.includes("food")) {
      return ["Show today's menu", "Dietary restrictions", "Meal plan balance", "Dining hours"];
    }
    
    if (lowerInput.includes("library")) {
      return ["Reserve study room", "Check book availability", "Research help", "Library hours"];
    }
    
    if (lowerInput.includes("schedule")) {
      return ["Add/drop courses", "Set class reminders", "View finals schedule", "Professor office hours"];
    }
    
    return ["Campus map", "Emergency contacts", "IT support", "Transportation"];
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Assistant</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  Online
                </Badge>
                <span className="text-xs text-muted-foreground">Powered by CampusAI</span>
              </div>
            </div>
          </div>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-gradient-hero text-white"
                  }`}>
                    {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  
                  <div className={`rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className="flex items-center space-x-1 mt-1 opacity-70">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Suggestions */}
              {message.sender === "ai" && message.suggestions && (
                <div className="ml-10 flex flex-wrap gap-2">
                  {message.suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex space-x-2 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-gradient-hero text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t pt-4">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about campus..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="pr-20"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Paperclip className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Mic className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="px-4"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};