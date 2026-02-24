import { Pin, List, ArrowLeft, MessageSquare, Clock, Trash2, ExternalLink } from "lucide-react";

export function MockupSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              See It In Action
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A clean, intuitive interface that stays out of your way until you need it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Floating Pin Button Mockup */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <Pin className="w-4 h-4 text-primary" />
                <h3 className="font-medium text-sm text-foreground">Floating Pin Button</h3>
              </div>
              
              <div className="relative bg-secondary rounded-md p-4 min-h-[180px] border border-border">
                <div className="space-y-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/20" />
                    <div className="flex-1 bg-background rounded-md p-2 text-xs text-muted-foreground">
                      How do I implement...
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/20" />
                    <div className="flex-1 bg-background rounded-md p-2 text-xs text-muted-foreground">
                      Here's a code example...
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-3 right-3">
                  <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                    <Pin className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-3">
                Click the floating pin to bookmark the current message instantly.
              </p>
            </div>

            {/* Bookmark List Mockup */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-4 h-4 text-primary" />
                <h3 className="font-medium text-sm text-foreground">Bookmark Panel</h3>
              </div>
              
              <div className="bg-secondary rounded-md border border-border overflow-hidden">
                <div className="p-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <img src="/favicon.png" className="w-4 h-4" alt="" />
                    <span className="text-sm font-medium text-foreground">ScrollStamp</span>
                  </div>
                </div>
                
                <div className="p-2 space-y-1">
                  {[
                    { title: "API endpoint code", time: "2 min ago", icon: MessageSquare },
                    { title: "Database schema", time: "15 min ago", icon: MessageSquare },
                    { title: "Important article", time: "1 hour ago", icon: ExternalLink },
                  ].map((bookmark, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-background group cursor-pointer">
                      <bookmark.icon className="w-3.5 h-3.5 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{bookmark.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {bookmark.time}
                        </p>
                      </div>
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-3">
                Access all your bookmarks from the extension popup.
              </p>
            </div>

            {/* Jump Back Mockup */}
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <ArrowLeft className="w-4 h-4 text-primary" />
                <h3 className="font-medium text-sm text-foreground">Instant Jump Back</h3>
              </div>
              
              <div className="relative bg-secondary rounded-md p-4 min-h-[180px] border border-border overflow-hidden">
                <div className="absolute top-2 right-2 w-1 h-full max-h-[160px] bg-border rounded-full">
                  <div className="absolute top-1/3 w-full h-8 bg-primary/50 rounded-full" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-2 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/20" />
                    <div className="flex-1 bg-background rounded-md p-2 h-7" />
                  </div>
                  <div className="flex gap-2 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/20" />
                    <div className="flex-1 bg-background rounded-md p-2 h-10" />
                  </div>
                  <div className="flex gap-2 ring-2 ring-primary rounded-md p-1">
                    <div className="w-5 h-5 rounded-full bg-primary/20" />
                    <div className="flex-1 bg-primary/5 rounded-md p-2 text-xs">
                      <span className="text-primary">Bookmarked content</span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/20" />
                    <div className="flex-1 bg-background rounded-md p-2 h-8" />
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-3">
                Click a bookmark to scroll right back to that exact message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
