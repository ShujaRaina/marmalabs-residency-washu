import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Mic, Code, Users, Coffee } from "lucide-react";
import hackerHouseWorkspace from "@/assets/hacker-house-workspace.jpg";

export default function Community() {
  const programs = [
    {
      icon: <Code size={20} />,
      title: "Hack Nights",
      description: "Weekly collaborative coding sessions and project development",
      schedule: "Every Tuesday & Thursday"
    },
    {
      icon: <Mic size={20} />,
      title: "Speaker Series",
      description: "Industry leaders, successful founders, and researchers share insights",
      schedule: "Monthly events"
    },
    {
      icon: <Users size={20} />,
      title: "Demo Days",
      description: "Showcase your projects to peers, mentors, and potential investors",
      schedule: "Quarterly showcases"
    },
    {
      icon: <Coffee size={20} />,
      title: "Social Events",
      description: "Community building, networking, and relaxed collaboration",
      schedule: "Ongoing"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="default" className="mb-4 bg-community text-community-foreground">
                Community
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                A Safe, <span className="bg-gradient-community bg-clip-text text-transparent">Vibrant Community</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Builder-first environment with 24/7 collaboration. A social, safe culture that 
                replaces outdated social spaces with a constructive hub for innovation.
              </p>
            </div>

            <div className="grid gap-4">
              {programs.map((program, index) => (
                <Card key={index} className="border-community/20 hover:shadow-community transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-community p-2 rounded-lg text-white">
                        {program.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{program.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Calendar size={12} className="mr-1" />
                            {program.schedule}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-subtle p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-community" size={24} />
                <h3 className="text-lg font-semibold">24/7 Builder Access</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Round-the-clock access to collaborative workspaces, high-speed internet, 
                whiteboards, and all the tools you need to bring your ideas to life.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Secure Entry</Badge>
                <Badge variant="secondary">Dedicated Workstations</Badge>
                <Badge variant="secondary">Meeting Rooms</Badge>
                <Badge variant="secondary">Maker Space</Badge>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-community">
              <img 
                src={hackerHouseWorkspace} 
                alt="Vibrant hacker house workspace with students building projects"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-community">24/7</div>
                    <div className="text-xs text-gray-600">Access</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-community">50+</div>
                    <div className="text-xs text-gray-600">Builders</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-community">12+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}