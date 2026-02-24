import { useState } from "react";
import { 
  MessageSquare, 
  Globe, 
  Bookmark, 
  Eye, 
  Edit3, 
  Shield, 
  Zap, 
  Database,
  MousePointer,
  Navigation
} from "lucide-react";
import { cn } from "@/lib/utils";

const modes = [
  {
    id: "ai",
    name: "AI Chat Mode",
    version: "v2",
    icon: MessageSquare,
    description: "Message-level bookmarking designed specifically for AI conversations",
    features: [
      { icon: Bookmark, title: "Message Bookmarks", desc: "Save specific AI responses, not just scroll positions" },
      { icon: Zap, title: "Smart Detection", desc: "Automatically identifies message boundaries" },
      { icon: Database, title: "Persistent Storage", desc: "Bookmarks survive page refreshes and sessions" },
      { icon: Eye, title: "Visual Feedback", desc: "Clear indicators for saved messages" },
    ]
  },
  {
    id: "scroll",
    name: "Scroll Mode",
    version: "v1",
    icon: Globe,
    description: "Position-based bookmarking that works on any website",
    features: [
      { icon: MousePointer, title: "Any Website", desc: "Works on blogs, docs, articles, and more" },
      { icon: Navigation, title: "Precise Position", desc: "Returns to exact scroll location" },
      { icon: Database, title: "Context Preview", desc: "Saves text snippet for easy identification" },
      { icon: Eye, title: "Visual Marker", desc: "See exactly where you left off" },
    ]
  }
];

const coreFeatures = [
  { icon: MousePointer, title: "One-Click Bookmarking", desc: "Pin important content instantly" },
  { icon: Eye, title: "Visual Feedback", desc: "Clear confirmation when bookmarks are saved" },
  { icon: Edit3, title: "Editable Titles", desc: "Rename bookmarks for easy organization" },
  { icon: Shield, title: "Robust Error Handling", desc: "Graceful fallbacks and clear error messages" },
];

export function FeaturesSection() {
  const [activeMode, setActiveMode] = useState("ai");
  const currentMode = modes.find(m => m.id === activeMode)!;

  return (
    <section className="py-16" id="features">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Two Modes, One Extension
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Whether you're deep in an AI conversation or reading a long article, 
              ScrollStamp has you covered.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-secondary border border-border rounded-md p-1 flex gap-1">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "px-5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                    activeMode === mode.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <mode.icon className="w-4 h-4" />
                  {mode.name}
                  <span className="text-xs opacity-70">({mode.version})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Content */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <currentMode.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{currentMode.name}</h3>
                <p className="text-sm text-muted-foreground">{currentMode.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {currentMode.features.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-md bg-secondary/50 border border-border"
                >
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-0.5">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">Core Features</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card border border-border rounded-lg p-5 text-center"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
