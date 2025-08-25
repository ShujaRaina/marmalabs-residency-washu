import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Zap, Target, Lightbulb, Rocket } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* The Gap */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="destructive" className="mb-4">
              The Gap
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              WashU Needs a <span className="bg-gradient-hero bg-clip-text text-transparent">Builder Hub</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/20">
              <CardHeader>
                <Building className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-lg">World-Class Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  WashU excels in neuroscience, biomedical engineering, and computer science, 
                  but students lack a dedicated space to transform research into products.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <Users className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-lg">Scattered Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students run businesses and compete in venture competitions, 
                  but there's no central hub to connect builders and foster collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <Zap className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-lg">Missing Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike SF, NYC, and Boston, St. Louis has no structured hacker house 
                  community to channel WashU's innovation potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Solution */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4 bg-builder text-builder-foreground">
              The Solution
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              A <span className="bg-gradient-community bg-clip-text text-transparent">Vibrant Builder Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A safe, vibrant space for students to build, learn, and launch — 
              partnered with the national Residency network to bring coastal hacker house culture to WashU.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-builder/20 hover:shadow-community transition-all duration-300">
              <CardHeader>
                <Target className="w-8 h-8 text-builder mb-2" />
                <CardTitle className="text-lg">Builder-First Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  WashU's "Learn by Doing" culture through StEP, The Hatchery, 
                  and competitions creates the perfect foundation.
                </p>
                <div className="text-sm text-builder font-medium">
                  Examples: Wash U Wash, Panda Provisions, ArchHacks
                </div>
              </CardContent>
            </Card>

            <Card className="border-builder/20 hover:shadow-community transition-all duration-300">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-builder mb-2" />
                <CardTitle className="text-lg">Research Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Faculty and students collaborate at the frontier, especially in 
                  neuroscience and biomedical engineering.
                </p>
                <div className="text-sm text-builder font-medium">
                  Examples: Human Connectome Project, Next NGA West
                </div>
              </CardContent>
            </Card>

            <Card className="border-builder/20 hover:shadow-community transition-all duration-300">
              <CardHeader>
                <Rocket className="w-8 h-8 text-builder mb-2" />
                <CardTitle className="text-lg">National Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect to The Residency's houses in SF, NYC, and Boston. 
                  Create Midwest deal flow and national opportunities.
                </p>
                <div className="text-sm text-builder font-medium">
                  Pipeline: Residency + local partners back ventures
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}