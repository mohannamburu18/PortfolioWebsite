import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  delay?: number;
}

export function ProjectCard({ title, description, tags, links, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card hover:bg-muted/30 border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border/50">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {links?.github && (
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
          )}
          {links?.demo && (
            <Button size="sm" asChild className="gap-2">
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
