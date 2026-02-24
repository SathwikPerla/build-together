import { Scroll, Pin, RotateCcw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Scroll,
    title: "Browse & Scroll",
    description: "Read through your AI conversation or web content as usual",
  },
  {
    icon: Pin,
    title: "Click the Pin",
    description: "Tap the floating button to bookmark the current position or message",
  },
  {
    icon: RotateCcw,
    title: "Return Instantly",
    description: "Click any bookmark to jump right back to that exact spot",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16" id="how-it-works">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-base text-muted-foreground">
              Three simple steps to never lose your place again.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-6 relative">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 text-center relative z-10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
