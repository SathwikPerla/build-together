import { Download, Settings, ToggleRight, FolderOpen, Pin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Download,
    title: "Clone or Download",
    description: "Get the extension from GitHub",
    code: "git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git"
  },
  {
    icon: Settings,
    title: "Open Extensions",
    description: "Navigate to chrome://extensions in your browser",
    highlight: "chrome://extensions"
  },
  {
    icon: ToggleRight,
    title: "Enable Developer Mode",
    description: "Toggle the switch in the top right corner"
  },
  {
    icon: FolderOpen,
    title: "Load Unpacked",
    description: "Click 'Load unpacked' and select the extension folder"
  },
  {
    icon: Pin,
    title: "Pin ScrollStamp",
    description: "Click the puzzle icon and pin ScrollStamp for easy access"
  },
];

export function InstallationSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16" id="install">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Easy Installation
            </h2>
            <p className="text-base text-muted-foreground">
              Get up and running in under a minute.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-3 mb-10">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="bg-card border border-border rounded-lg p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {step.code && (
                    <div className="mt-2 flex items-center gap-2">
                      <code className="flex-1 bg-secondary rounded-md px-3 py-2 text-sm font-mono text-foreground border border-border overflow-x-auto">
                        {step.code}
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="shrink-0"
                        onClick={copyCommand}
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {step.highlight && (
                    <code className="mt-2 inline-block bg-secondary rounded-md px-2 py-1 text-sm font-mono text-foreground border border-border">
                      {step.highlight}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick start CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download from GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
