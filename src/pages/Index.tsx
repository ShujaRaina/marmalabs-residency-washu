import React from "react";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Community from "@/components/Community";
import Impact from "@/components/Impact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Community />
      <Impact />
    </main>
  );
};

export default Index;
