import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Brain, Code, Server, Database, Globe, Cpu } from "lucide-react";
import { insertContactMessageSchema } from "@shared/routes";
import { useContact } from "@/hooks/use-contact";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const contactMutation = useContact();
  
  const form = useForm({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const skills = [
    { icon: Brain, name: "Artificial Intelligence", level: "Intermediate" },
    { icon: Code, name: "Python & DSA", level: "Advanced" },
    { icon: Globe, name: "MERN Stack", level: "Intermediate" },
    { icon: Database, name: "SQL & Databases", level: "Intermediate" },
    { icon: Server, name: "Cloud (OCI)", level: "Certified" },
    { icon: Cpu, name: "Machine Learning", level: "Advanced" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Mohan Krishna
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Software Engineer & AI-DS Student building scalable web applications and intelligent machine learning solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5" asChild>
                <a href="/resume.pdf" target="_blank" download>
                  Download CV <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="https://github.com/mohannamburu18" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/mohan-krishna-198b00275" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mohannamburu1343@gmail.com" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* 
               Replacing image with a stylized code block/graphic since no specific photo was provided 
               Using Unsplash image as a placeholder for a 'tech workspace' vibe
            */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card aspect-square max-w-md mx-auto">
              {/* tech workspace laptop setup code */}
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span><br/>
                  &nbsp;&nbsp;name: <span className="text-green-400">"Mohan"</span>,<br/>
                  &nbsp;&nbsp;skills: [<span className="text-green-400">"AI"</span>, <span className="text-green-400">"Fullstack"</span>]<br/>
                  <span className="text-yellow-400">{"}"}</span>;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="About Me" subtitle="My Journey" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I am a passionate <strong className="text-foreground">Software Engineer</strong> and <strong className="text-foreground">AI-DS Student</strong> at Sastra Deemed University. My journey is driven by a curiosity to solve complex problems through code.
              </p>
              <p>
                With a strong foundation in <strong className="text-foreground">Computer Science</strong> and practical experience in web development and machine learning, I strive to build applications that are not just functional but also scalable and user-friendly.
              </p>
              <p>
                Currently, I am exploring the intersection of Generative AI and web technologies to create next-generation intelligent applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-border/50 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="p-2 bg-primary/10 rounded-lg text-primary"><Database className="w-5 h-5"/></span>
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-primary/20">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <h4 className="font-bold text-foreground">B.Tech CSE (AI & DS)</h4>
                      <p className="text-sm text-primary mb-1">Sastra Deemed University</p>
                      <p className="text-sm text-muted-foreground">CGPA: 7.59</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Experience" subtitle="Where I've Worked" />

          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

              {/* Experience Item */}
              <div className="relative md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold font-display">Software Engineer Intern</h3>
                  <p className="text-primary font-medium">Yuga Yatra Retail (OPC) Pvt Ltd</p>
                  <p className="text-sm text-muted-foreground mt-1">Jul 2025 – Sep 2025</p>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm relative">
                   {/* Mobile Timeline Dot */}
                   <div className="md:hidden absolute -left-[41px] top-6 w-6 h-6 rounded-full bg-card border-4 border-primary z-10" />
                   <div className="md:hidden absolute -left-[30px] top-6 bottom-[-50px] w-px bg-border" />

                   <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm">
                     <li>Developed and optimized web applications using modern frameworks.</li>
                     <li>Collaborated with cross-functional teams to define features.</li>
                     <li>Implemented scalable solutions improving system efficiency.</li>
                   </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Featured Projects" subtitle="My Work" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard 
              title="Credit Card Fraud Detection"
              description="A Machine Learning model achieving 100% accuracy using KNN and Logistic Regression to identify fraudulent transactions in real-time."
              tags={["Python", "Scikit-Learn", "ML"]}
              links={{ github: "https://github.com/mohannamburu18" }}
              delay={0}
            />
            <ProjectCard 
              title="E-Hospital Management"
              description="Comprehensive full-stack web application for managing patient records, doctor appointments, and hospital inventory efficiently."
              tags={["HTML/CSS", "JavaScript", "SQL", "PHP"]}
              links={{ github: "https://github.com/mohannamburu18" }}
              delay={0.1}
            />
            <ProjectCard 
              title="Explainable Loan Classifier"
              description="Advanced loan approval prediction system using XGBoost with SHAP (SHapley Additive exPlanations) for model interpretability."
              tags={["Python", "XGBoost", "SHAP", "AI"]}
              links={{ github: "https://github.com/mohannamburu18" }}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Skills & Tech" subtitle="My Arsenal" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-3 bg-secondary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10">
                  <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-semibold text-center mb-1 text-sm">{skill.name}</h4>
                <span className="text-xs text-muted-foreground">{skill.level}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/50 to-purple-500/50">
              <div className="bg-card rounded-xl px-8 py-4">
                <h3 className="text-lg font-bold mb-2">Certifications</h3>
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-secondary/20">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-right pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Contact Me" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold mb-6">Let's work together!</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:mohannamburu1343@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors group">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Me</p>
                    <p className="font-semibold text-foreground">mohannamburu1343@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918333829406" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors group">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Me</p>
                    <p className="font-semibold text-foreground">+91-8333829406</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background border-border/50 focus-visible:ring-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-background border-border/50 focus-visible:ring-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hello! I'd like to discuss..." className="min-h-[120px] bg-background border-border/50 focus-visible:ring-primary/50 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mohan Krishna Namburu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
