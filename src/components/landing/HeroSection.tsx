import { Star, Download, MessageSquare, Globe, Sparkles, Pin, List, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "ChatGPT" },
  { name: "Claude" },
  { name: "Gemini" },
  { name: "Perplexity" },
  { name: "Grok" },
  { name: "DeepSeek" },
];

export function HeroSection() {
  return (
    <section className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-sm text-muted-foreground mb-6 border border-border">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Chrome Extension</span>
              <span className="text-border">•</span>
              <span>v2.1 Hybrid</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Never Lose Your Place Again
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Smart bookmarking for AI conversations and web content. 
              Pin important moments. Return instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="https://github.com/SathwikPerla/ScrollStamp/archive/refs/heads/v2.1-hybrid.zip" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Extension
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary"
                asChild
              >
                <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                  <Star className="w-4 h-4 mr-2" />
                  Star on GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-primary" />
                <span>AI Chat Mode</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>Scroll Mode</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-2">Works with</p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span 
                    key={platform.name}
                    className="px-3 py-1 rounded-md bg-secondary border border-border text-xs font-medium text-foreground"
                  >
                    {platform.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - product visual */}
          <div className="hidden lg:block">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {/* Mini mockup of the extension popup */}
              <div className="flex items-center gap-2 pb-3 border-b border-border">
                <img src="/favicon.png" className="w-5 h-5" alt="" />
                <span className="text-sm font-medium text-foreground">ScrollStamp</span>
                <span className="ml-auto text-xs text-muted-foreground">3 bookmarks</span>
              </div>
              
              {[
                { title: "API endpoint code", time: "2 min ago", icon: Pin },
                { title: "Database schema design", time: "15 min ago", icon: Pin },
                { title: "Architecture decision", time: "1 hour ago", icon: Pin },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-md bg-secondary/50 border border-border hover:bg-secondary transition-colors">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              ))}

              <div className="pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Click to jump back instantly</span>
                <List className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
