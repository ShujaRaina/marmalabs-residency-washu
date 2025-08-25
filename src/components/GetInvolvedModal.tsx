import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X, Users, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Collaborator {
  id: string;
  name: string;
  academicDivision: string;
  major: string;
}

interface IdeaSubmission {
  title: string;
  description: string;
  collaborators: Collaborator[];
  submitterName: string;
  submitterEmail: string;
  submitterDivision: string;
  submitterMajor: string;
}

interface ExplorerApplication {
  name: string;
  email: string;
  academicDivision: string;
  major: string;
  interests: string;
  why: string;
}

export default function GetInvolvedModal() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("idea");
  
  // Idea submission state
  const [ideaData, setIdeaData] = useState<IdeaSubmission>({
    title: "",
    description: "",
    collaborators: [],
    submitterName: "",
    submitterEmail: "",
    submitterDivision: "",
    submitterMajor: "",
  });

  // Explorer application state
  const [explorerData, setExplorerData] = useState<ExplorerApplication>({
    name: "",
    email: "",
    academicDivision: "",
    major: "",
    interests: "",
    why: "",
  });

  // New collaborator state
  const [newCollaborator, setNewCollaborator] = useState<Omit<Collaborator, 'id'>>({
    name: "",
    academicDivision: "",
    major: "",
  });

  const addCollaborator = () => {
    if (newCollaborator.name && newCollaborator.academicDivision && newCollaborator.major) {
      const collaborator: Collaborator = {
        ...newCollaborator,
        id: Date.now().toString(),
      };
      setIdeaData(prev => ({
        ...prev,
        collaborators: [...prev.collaborators, collaborator]
      }));
      setNewCollaborator({ name: "", academicDivision: "", major: "" });
    }
  };

  const removeCollaborator = (id: string) => {
    setIdeaData(prev => ({
      ...prev,
      collaborators: prev.collaborators.filter(c => c.id !== id)
    }));
  };

  const handleIdeaSubmit = () => {
    console.log("Idea submitted:", ideaData);
    // Here you would send the data to your backend
    alert("Thank you! Your idea has been submitted. We'll be in touch soon!");
    setOpen(false);
  };

  const handleExplorerSubmit = () => {
    console.log("Explorer application submitted:", explorerData);
    // Here you would send the data to your backend
    alert("Thank you! Your explorer application has been submitted. We'll be in touch soon!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="shadow-glow">
          Get Involved
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Join MarmaLabs
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="idea" className="flex items-center gap-2">
              <Lightbulb size={16} />
              Submit an Idea
            </TabsTrigger>
            <TabsTrigger value="explorer" className="flex items-center gap-2">
              <Users size={16} />
              Apply as Explorer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="idea" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="submitter-name">Full Name</Label>
                    <Input
                      id="submitter-name"
                      value={ideaData.submitterName}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, submitterName: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="submitter-email">Email</Label>
                    <Input
                      id="submitter-email"
                      type="email"
                      value={ideaData.submitterEmail}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, submitterEmail: e.target.value }))}
                      placeholder="your.email@wustl.edu"
                    />
                  </div>
                  <div>
                    <Label htmlFor="submitter-division">Academic Division</Label>
                    <Input
                      id="submitter-division"
                      value={ideaData.submitterDivision}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, submitterDivision: e.target.value }))}
                      placeholder="e.g., School of Engineering"
                    />
                  </div>
                  <div>
                    <Label htmlFor="submitter-major">Major</Label>
                    <Input
                      id="submitter-major"
                      value={ideaData.submitterMajor}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, submitterMajor: e.target.value }))}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Idea Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Idea</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="idea-title">Project Title</Label>
                    <Input
                      id="idea-title"
                      value={ideaData.title}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="What are you building?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="idea-description">Description</Label>
                    <Textarea
                      id="idea-description"
                      value={ideaData.description}
                      onChange={(e) => setIdeaData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your idea, what problem it solves, and how you plan to build it..."
                      rows={8}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Collaborators Section */}
            <Card>
              <CardHeader>
                <CardTitle>Collaborators (Optional)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Existing collaborators */}
                {ideaData.collaborators.length > 0 && (
                  <div className="space-y-2">
                    <Label>Current Collaborators:</Label>
                    <div className="flex flex-wrap gap-2">
                      {ideaData.collaborators.map((collab) => (
                        <Badge key={collab.id} variant="secondary" className="flex items-center gap-2">
                          <span>{collab.name} - {collab.major}</span>
                          <X 
                            size={14} 
                            className="cursor-pointer hover:text-destructive" 
                            onClick={() => removeCollaborator(collab.id)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add new collaborator */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="collab-name">Name</Label>
                    <Input
                      id="collab-name"
                      value={newCollaborator.name}
                      onChange={(e) => setNewCollaborator(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Collaborator name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="collab-division">Division</Label>
                    <Input
                      id="collab-division"
                      value={newCollaborator.academicDivision}
                      onChange={(e) => setNewCollaborator(prev => ({ ...prev, academicDivision: e.target.value }))}
                      placeholder="Academic division"
                    />
                  </div>
                  <div>
                    <Label htmlFor="collab-major">Major</Label>
                    <Input
                      id="collab-major"
                      value={newCollaborator.major}
                      onChange={(e) => setNewCollaborator(prev => ({ ...prev, major: e.target.value }))}
                      placeholder="Major"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button 
                      type="button" 
                      onClick={addCollaborator}
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      <Plus size={16} className="mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleIdeaSubmit} 
              className="w-full" 
              variant="default"
              size="lg"
              disabled={!ideaData.submitterName || !ideaData.submitterEmail || !ideaData.title || !ideaData.description}
            >
              Submit Idea
            </Button>
          </TabsContent>

          <TabsContent value="explorer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Explorer Application</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Join MarmaLabs as an explorer - learn, build, and be part of our community without a specific project in mind.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="explorer-name">Full Name</Label>
                    <Input
                      id="explorer-name"
                      value={explorerData.name}
                      onChange={(e) => setExplorerData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="explorer-email">Email</Label>
                    <Input
                      id="explorer-email"
                      type="email"
                      value={explorerData.email}
                      onChange={(e) => setExplorerData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@wustl.edu"
                    />
                  </div>
                  <div>
                    <Label htmlFor="explorer-division">Academic Division</Label>
                    <Input
                      id="explorer-division"
                      value={explorerData.academicDivision}
                      onChange={(e) => setExplorerData(prev => ({ ...prev, academicDivision: e.target.value }))}
                      placeholder="e.g., School of Engineering"
                    />
                  </div>
                  <div>
                    <Label htmlFor="explorer-major">Major</Label>
                    <Input
                      id="explorer-major"
                      value={explorerData.major}
                      onChange={(e) => setExplorerData(prev => ({ ...prev, major: e.target.value }))}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="explorer-interests">Areas of Interest</Label>
                  <Textarea
                    id="explorer-interests"
                    value={explorerData.interests}
                    onChange={(e) => setExplorerData(prev => ({ ...prev, interests: e.target.value }))}
                    placeholder="What areas of technology, research, or entrepreneurship interest you?"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="explorer-why">Why MarmaLabs?</Label>
                  <Textarea
                    id="explorer-why"
                    value={explorerData.why}
                    onChange={(e) => setExplorerData(prev => ({ ...prev, why: e.target.value }))}
                    placeholder="Tell us why you want to be part of the MarmaLabs community and what you hope to learn or contribute..."
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleExplorerSubmit} 
                  className="w-full" 
                  variant="default"
                  size="lg"
                  disabled={!explorerData.name || !explorerData.email || !explorerData.interests || !explorerData.why}
                >
                  Submit Explorer Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
