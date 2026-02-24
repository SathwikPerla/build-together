import { Star, Heart, Users, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StarCTASection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-border rounded-lg p-10">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 border border-primary/20">
                <Star className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              If ScrollStamp Saved You Time,
              <br />
              Show Some Love!
            </h2>

            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stars help other developers discover this tool. Your support means the world to an indie developer! Share it with your friends too!
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-lg font-semibold text-foreground">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Open</span>
                </div>
                <p className="text-xs text-muted-foreground">Source</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-lg font-semibold text-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Free</span>
                </div>
                <p className="text-xs text-muted-foreground">Forever</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-lg font-semibold text-foreground">
                  <GitFork className="w-4 h-4 text-primary" />
                  <span>MIT</span>
                </div>
                <p className="text-xs text-muted-foreground">License</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Star className="w-5 h-5 mr-2" />
                Star on GitHub
                <Heart className="w-4 h-4 ml-2 opacity-70" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
