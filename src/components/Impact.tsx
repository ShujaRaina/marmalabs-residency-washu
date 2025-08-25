import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, DollarSign, Network, ExternalLink } from "lucide-react";

export default function Impact() {
  const impacts = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Talent Magnet",
      description: "Keep top WashU students in St. Louis and attract national builders through Residency network"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Midwest Flagship", 
      description: "Establish WashU as the model campus hacker house beyond the coasts"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Deal Flow Engine",
      description: "Residency + partners gain early access to WashU-born ventures and Midwest opportunities"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Ecosystem Catalyst",
      description: "Align with NGA, Cortex, and BioSTL to grow St. Louis into a builder hub"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4 bg-accent text-accent-foreground">
            Impact & Vision
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Why <span className="bg-gradient-hero bg-clip-text text-transparent">Now</span>, Why WashU
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            St. Louis is at an inflection point. The $1.7B National Geospatial-Intelligence Agency HQ 
            is opening now, anchoring the city as a national hub for geospatial + AI talent.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-hero p-3 rounded-full w-fit mx-auto text-white">
                  {impact.icon}
                </div>
                <CardTitle className="text-lg">{impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* University Strengths & St. Louis Context */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Badge variant="default" className="bg-primary">University</Badge>
                WashU Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Top-Tier Research</h4>
                <p className="text-muted-foreground text-sm">
                  World-class strengths in neuroscience, BME, quantum computing, and AI. 
                  Strong builder culture but under-leveraged in entrepreneurship.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Proven Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Student Enterprise Program, The Hatchery course, ArchHacks, and venture competitions 
                  show existing entrepreneurial energy waiting to be channeled.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Badge variant="default" className="bg-secondary">St. Louis</Badge>
                City Momentum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-secondary mb-2">$1.7B NGA Investment</h4>
                <p className="text-muted-foreground text-sm">
                  The National Geospatial-Intelligence Agency HQ opening creates unprecedented 
                  opportunities for geospatial and AI innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Growing Ecosystem</h4>
                <p className="text-muted-foreground text-sm">
                  Cortex, BioSTL, and emerging biotech startups create a foundation. 
                  Students demand constructive alternatives to outdated social culture.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Opportunity */}
        <Card className="mt-12 bg-gradient-community/5 border-community/20">
          <CardContent className="p-8 text-center">
            <Network className="w-12 h-12 mx-auto mb-4 text-community" />
            <h3 className="text-2xl font-bold mb-4">
              First Midwest Node in <span className="text-community">The Residency</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              MarmaLabs would make St. Louis the Midwest's first node in The Residency network, 
              connecting WashU students to a national ecosystem of builders and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="community" size="lg">
                Join the Movement
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.livetheresidency.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Learn About The Residency
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}