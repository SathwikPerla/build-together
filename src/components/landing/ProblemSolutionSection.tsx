import { AlertCircle, CheckCircle2, ArrowRight, ScrollText, Search, Clock, MessageSquare, Brain, RefreshCw, Layers } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Problem We Solve
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              When you ask LLMs to help build projects or solve problems, the AI provides step-by-step guidance. 
              But as you continue working, things get complicated.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Problem Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Pain Points</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    Continuing the Same Thread
                  </h4>
                  <ul className="space-y-2.5 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ScrollText className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Conversations grow extremely long</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Search className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Important instructions get buried far above</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Excessive scrolling breaks focus and workflow</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Layers className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Threads become heavy, performance may degrade</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2 text-sm">
                    <RefreshCw className="w-4 h-4 text-muted-foreground" />
                    Starting a New Thread?
                  </h4>
                  <ul className="space-y-2.5 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Brain className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Impossible to transfer 100% of the context</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <MessageSquare className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Must re-explain the entire problem</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Mental flow is disrupted completely</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-md bg-secondary border border-border">
                <p className="text-sm text-muted-foreground italic">
                  "Where was that architecture decision Claude gave me 2 hours ago? I've been scrolling for 5 minutes..."
                </p>
              </div>
            </div>

            {/* Arrow for mobile */}
            <div className="flex lg:hidden justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
            </div>

            {/* Solution Card */}
            <div className="bg-card border border-primary/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">ScrollStamp's Solution</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm">
                Turn long AI chats into navigable, structured workspaces instead of endless scrolls.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Bookmark exact AI messages or steps with one click",
                  "Instantly jump back to important instructions",
                  "Stay in the same conversation without losing context",
                  "Organize long, step-by-step problem-solving sessions",
                  "Persistent storage that survives page refreshes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Use Cases */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {["🤖 AI Project Building", "👨‍💻 Coding & Debugging", "🎓 Learning & Studying", "🌐 Long Articles & Docs"].map((label, i) => (
                  <div key={i} className="p-2.5 rounded-md bg-secondary border border-border text-center">
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-md bg-primary/5 border border-primary/10">
                <p className="text-sm text-primary font-medium">
                  ✨ Pin it. Find it. Stay focused. Every time.
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card border border-border rounded-lg px-8 py-4">
              <p className="text-base font-medium text-foreground">
                ScrollStamp is for people who <span className="text-primary">work through long AI conversations</span>, 
                don't want to restart threads, and want to <span className="text-primary">stay focused and efficient</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
