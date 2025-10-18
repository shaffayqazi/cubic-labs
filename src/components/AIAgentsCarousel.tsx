"use client";

import { Card, CardFooter, Image, Button } from "@heroui/react";
import { useState, useRef } from "react";

const aiAgents = [
  {
    id: 1,
    category: "GENERAL PROBLEM SOLVERS",
    title: "Data Entry AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    workflows: ["Catalog Entry", "ID & Document Extraction"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    category: "GENERAL PROBLEM SOLVERS",
    title: "RFP AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop",
    workflows: ["Document Review for RFP Requirements", "Compliance Checks", "Proposal Drafting and Formatting"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 3,
    category: "RETAIL & E-COMMERCE",
    title: "Supply Chain Monitoring AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    workflows: ["Order Processing", "Product Returns Request Handling", "Order Fulfillment"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 4,
    category: "CUSTOMER SERVICE",
    title: "Customer Experience AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1676277791608-ac3b5a0a8d30?w=400&h=300&fit=crop",
    workflows: ["Loyalty Program Management", "Customer Feedback Processing", "FAQ Assistance"],
    gradient: "from-teal-500/20 to-green-500/20",
  },
  {
    id: 5,
    category: "FINANCE & ACCOUNTING",
    title: "Invoice Processing AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop",
    workflows: ["Invoice Data Extraction", "Payment Reconciliation", "Expense Categorization"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 6,
    category: "HR & RECRUITMENT",
    title: "Recruitment AI Agent",
    subtitle: "WORKFLOWS",
    image: "https://images.unsplash.com/photo-1676299081449-35435d92a21c?w=400&h=300&fit=crop",
    workflows: ["Resume Screening", "Interview Scheduling", "Candidate Communication"],
    gradient: "from-pink-500/20 to-purple-500/20",
  },
];

export default function AIAgentsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370; // card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              AI Agents
            </span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Discover our suite of intelligent AI agents designed to automate and optimize your business workflows
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background-accent/90 backdrop-blur-md border border-border hover:border-primary rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Right Scroll Button */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background-accent/90 backdrop-blur-md border border-border hover:border-primary rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 px-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {aiAgents.map((agent) => (
              <div key={agent.id} className="flex-none w-[350px] snap-start">
                <Card
                  className="border border-border/50 bg-background-accent/30 backdrop-blur-sm hover:scale-105 hover:border-primary/50 transition-all duration-300 shadow-xl overflow-visible"
                  radius="lg"
                >
                  {/* Card Image with Gradient Overlay */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      alt={agent.title}
                      className="object-cover w-full"
                      height={200}
                      src={agent.image}
                      width={350}
                      radius="none"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient}`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 bg-background-secondary/95 backdrop-blur-sm rounded-b-2xl">
                    {/* Category Badge - Now positioned better */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30">
                        {agent.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{agent.title}</h3>
                    <p className="text-xs text-primary font-semibold mb-4 uppercase tracking-wide">{agent.subtitle}</p>
                    
                    {/* Workflows List - Fixed visibility */}
                    <div className="space-y-2.5 mb-20">
                      {agent.workflows.map((workflow, index) => (
                        <div
                          key={index}
                          className="text-sm text-foreground-muted bg-background-accent/60 px-3 py-2.5 rounded-xl border border-border/30 hover:border-primary/40 transition-colors"
                        >
                          {workflow}
                        </div>
                      ))}
                    </div>

                    {/* Card Footer - Fixed positioning */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-5 py-3 bg-background-accent/95 backdrop-blur-md border-t border-border/30 rounded-b-2xl">
                      <p className="text-sm text-foreground-muted font-medium">Available now</p>
                      <Button
                        className="bg-gradient-to-r from-primary/80 to-primary-light/80 hover:from-primary hover:to-primary-light text-white font-semibold border-none shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all"
                        size="sm"
                        radius="full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105 px-8"
              size="lg"
              radius="full"
            >
              View All AI Agents
              <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L11 10L7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
