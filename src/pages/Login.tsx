import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Leaf, Building2, ShieldCheck, Calculator, Bot, TrendingUp, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Login = () => {
  const [userType, setUserType] = useState<"industry" | "ngo">("industry");

  const features = [
    {
      icon: Calculator,
      title: "Carbon Calculator",
      description: "Calculate industry-level emissions with precision",
      color: "earth"
    },
    {
      icon: Bot,
      title: "AI Recommendations",
      description: "Get personalized advice to reduce emissions",
      color: "ocean"
    },
    {
      icon: ShieldCheck,
      title: "MRV Reports",
      description: "Transparent monitoring and verification",
      color: "carbon"
    },
    {
      icon: Award,
      title: "Blockchain Credits",
      description: "Secure, tamper-proof carbon credits",
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/80 via-ocean/60 to-earth/80" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Carbonix</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            Beta Platform
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold leading-tight">
                  Welcome to the Future of{" "}
                  <span className="text-primary">Carbon Credits</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Revolutionizing blue carbon ecosystems through blockchain technology, 
                  transparent verification, and intelligent emission management.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-white/70">Tons CO2 Offset</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-white/70">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-white/70">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-strong border-0">
              <CardHeader className="space-y-4 text-center">
                <CardTitle className="text-2xl font-bold text-carbon">
                  Sign In to Carbonix
                </CardTitle>
                <CardDescription className="text-carbon/70">
                  Access your carbon management dashboard
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Tabs value={userType} onValueChange={(value) => setUserType(value as "industry" | "ngo")}>
                  <TabsList className="grid w-full grid-cols-2 bg-muted">
                    <TabsTrigger value="industry" className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4" />
                      <span>Industry</span>
                    </TabsTrigger>
                    <TabsTrigger value="ngo" className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>NGO/Gov</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="industry" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry-email">Email Address</Label>
                      <Input 
                        id="industry-email" 
                        type="email" 
                        placeholder="your.company@example.com"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry-password">Password</Label>
                      <Input 
                        id="industry-password" 
                        type="password" 
                        placeholder="Enter your password"
                        className="h-11"
                      />
                    </div>
                    <Button className="w-full" variant="hero" size="lg">
                      Access Industry Dashboard
                    </Button>
                    <div className="text-xs text-muted-foreground text-center">
                      Track emissions • Calculate carbon footprint • Purchase credits
                    </div>
                  </TabsContent>

                  <TabsContent value="ngo" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="ngo-email">Email Address</Label>
                      <Input 
                        id="ngo-email" 
                        type="email" 
                        placeholder="verifier@organization.org"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ngo-password">Password</Label>
                      <Input 
                        id="ngo-password" 
                        type="password" 
                        placeholder="Enter your password"
                        className="h-11"
                      />
                    </div>
                    <Button className="w-full" variant="ocean" size="lg">
                      Access Verification Portal
                    </Button>
                    <div className="text-xs text-muted-foreground text-center">
                      Generate MRV reports • Verify projects • Issue credits
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4 pt-4 border-t">
                  <div className="text-center space-y-2">
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                    </span>
                    <Link to="/register" className="text-sm text-primary hover:underline font-medium">
                      Get started free
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="relative z-10 px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Blockchain Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Verified Credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;