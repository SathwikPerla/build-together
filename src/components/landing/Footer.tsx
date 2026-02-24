import { Github, Heart, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="ScrollStamp" className="w-6 h-6" />
              <span className="font-medium text-sm text-foreground">ScrollStamp</span>
              <span className="px-2 py-0.5 rounded-md bg-secondary text-xs font-medium text-muted-foreground border border-border">v2.1</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="mailto:scrollstamp.dev@gmail.com"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contact / Feedback: scrollstamp.dev@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-destructive" /> by Sathwik Perla
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} ScrollStamp. Open source
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
