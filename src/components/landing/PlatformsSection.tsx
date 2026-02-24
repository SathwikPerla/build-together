import { Globe, AlertTriangle, ShieldAlert, Bot, Sparkles, Brain, Search, Zap, MessageSquare } from "lucide-react";

const platforms = [
  { name: "ChatGPT", icon: MessageSquare },
  { name: "Claude", icon: Brain },
  { name: "Gemini", icon: Sparkles },
  { name: "Perplexity", icon: Search },
  { name: "Grok", icon: Zap },
  { name: "DeepSeek", icon: Bot },
];

export function PlatformsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Works With Your Favorite AI Tools
            </h2>
            <p className="text-base text-muted-foreground">
              Seamless integration with all major AI chat platforms.
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="bg-card border border-border rounded-lg p-5 text-center"
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <platform.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm text-foreground">{platform.name}</h3>
              </div>
            ))}
          </div>

          {/* Universal Badge */}
          <div className="bg-card border border-primary/20 rounded-lg p-5 text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Works on ALL Websites</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Scroll Mode works on any webpage - blogs, documentation, articles, and more.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Protected Websites</p>
                  <p className="text-sm text-muted-foreground">
                    Some sites with restricted editors, embedded tools, or custom scroll containers may have limited bookmark support. The bookmark will be saved, but automatic scroll-to-position may not work on these protected pages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4" />
              <span>Note: PDF files are not currently supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
