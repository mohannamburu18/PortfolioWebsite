import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl tracking-tight cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="p-2 bg-primary/20 rounded-lg">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span>Mohan<span className="text-primary">.dev</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:bg-muted rounded-md transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50 last:border-0 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-2" onClick={() => {
            setIsOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
}
