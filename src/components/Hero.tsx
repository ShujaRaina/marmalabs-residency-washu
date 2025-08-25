import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Users } from "lucide-react";
import washUCollaboration from "@/assets/washu-collaboration.jpg";
import GetInvolvedModal from "./GetInvolvedModal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <MapPin size={14} className="mr-2" />
                Washington University in St. Louis
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  MarmaLabs
                </span>
                <br />
                <span className="text-foreground">
                  Hacker House
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A safe, vibrant space for WashU students to build, learn, and launch — 
                partnered with the national <strong>Residency</strong> network.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <GetInvolvedModal />
              
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.livetheresidency.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Explore The Residency
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>Builder-first community</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="w-fit">
                  24/7 Access
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={washUCollaboration} 
                alt="WashU students collaborating in modern workspace"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    The Future of Building at WashU
                  </h3>
                  <p className="text-sm text-gray-600">
                    Join the next generation of builders, researchers, and entrepreneurs 
                    transforming ideas into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}