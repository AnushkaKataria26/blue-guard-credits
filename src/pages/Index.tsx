import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Leaf, Building2, ShieldCheck, Calculator, Bot, TrendingUp, Award, BarChart3, Globe, Zap } from "lucide-react";
import heroGradient from "@/assets/hero-gradient.jpg";
import ctaGradient from "@/assets/cta-gradient.jpg";

const Index = () => {
  const stats = [
    { label: "Tons CO2 Offset", value: "1M+", color: "earth" },
    { label: "Active Projects", value: "500+", color: "ocean" },
    { label: "Countries", value: "50+", color: "primary" },
    { label: "Organizations", value: "1000+", color: "carbon" }
  ];

  const tools = [
    {
      icon: Calculator,
      title: "Carbon Calculator",
      description: "Calculate emissions across all scopes with industry-specific factors",
      color: "earth"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard", 
      description: "Real-time insights and trends for informed decision making",
      color: "ocean"
    },
    {
      icon: Globe,
      title: "Marketplace",
      description: "Trade verified carbon credits with transparent pricing",
      color: "primary"
    },
    {
      icon: Award,
      title: "Blockchain Security",
      description: "Immutable records and transparent verification process",
      color: "carbon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">Carbonix</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/login">
            <Button variant="hero">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroGradient})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/40 via-transparent to-earth/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              Transform Your Impact with{" "}
              <span className="text-primary">Carbon Credits</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              The most comprehensive platform for managing carbon credits, tracking emissions, 
              and building a sustainable future. Connect corporates and NGOs in one transparent ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="xl">Start Your Journey</Button>
              </Link>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-ocean">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Powerful Tools & Analytics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced features to streamline your carbon management workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center p-8 shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-card rounded-lg flex items-center justify-center mx-auto">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaGradient})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-ocean/50 to-earth/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">
              Ready to Make a Real Impact?
            </h2>
            <p className="text-xl leading-relaxed">
              Join thousands of organizations already using Carbonix to build a sustainable future
            </p>
            <Link to="/login">
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-carbon text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Carbonix</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                The world's leading platform for carbon credit management and sustainability tracking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-white/70">
                <div>Features</div>
                <div>Pricing</div>
                <div>Documentation</div>
                <div>API</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-white/70">
                <div>Help Center</div>
                <div>Status</div>
                <div>Community</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-white/70">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Press</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            © 2024 Carbonix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
