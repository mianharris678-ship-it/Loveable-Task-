import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Bot, Cpu, Radar, Eye, Wifi, Wrench, Gauge, Activity, Factory, Zap,
  ShieldCheck, Rocket, Sparkles, ChevronRight, Mail, Phone, MapPin,
  Linkedin, Github, Facebook, MessageCircle, Cog, CircuitBoard, Cloud,
  Camera, Thermometer, Wind, Waves, Layers, ArrowRight, Check, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-robotics.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
      <Technologies />
      <Portfolio />
      <WhyUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* --------------------------- Navigation --------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Services", "Products", "Industries", "Portfolio", "Contact"];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <div className="w-9 h-9 rounded-lg grid place-items-center neon-border shrink-0">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold tracking-wider text-sm sm:text-base truncate">ROBOTICS<span className="text-primary">&</span>SENSORS</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
          ))}
        </nav>
        <Button size="sm" className="bg-gradient-to-r from-accent to-primary text-primary-foreground shrink-0" asChild>
          <a href="#contact">Get Started<ArrowRight className="w-4 h-4 ml-1" /></a>
        </Button>
      </div>
    </header>
  );
}

/* --------------------------- Hero --------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Circuit grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.18 210 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.18 210 / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animation: `float ${4 + (i % 5)}s ease-in-out infinite, pulse-glow ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
            boxShadow: "0 0 12px currentColor",
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div style={{ animation: "fade-up 0.8s ease-out" }}>
          <Badge variant="outline" className="mb-6 neon-border text-primary bg-primary/5">
            <Sparkles className="w-3 h-3 mr-1.5" /> Next-Gen Automation Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
            Building the Future with{" "}
            <span className="gradient-text text-glow">Robotics & Intelligent Sensors</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Innovative Automation • Smart Sensors • AI Robotics • Industrial IoT Solutions engineered for tomorrow's factories.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]" asChild>
              <a href="#services">Explore Solutions <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button size="lg" variant="outline" className="neon-border bg-transparent hover:bg-primary/10" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "15+", l: "Years" },
              { v: "200+", l: "Projects" },
              { v: "80+", l: "Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative" style={{ animation: "fade-up 1s ease-out 0.2s both" }}>
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden neon-border" style={{ boxShadow: "var(--shadow-glow)" }}>
            <img src={heroImg} alt="Humanoid robot and robotic arm working with AI holographic interface" width={1920} height={1200} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -top-4 -right-4 glass rounded-xl p-3 flex items-center gap-2 text-xs" style={{ animation: "float 5s ease-in-out infinite" }}>
            <div className="w-2 h-2 rounded-full bg-primary" style={{ animation: "pulse-glow 2s infinite" }} />
            <span>AI Vision Active</span>
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 text-xs" style={{ animation: "float 6s ease-in-out infinite 1s" }}>
            <div className="text-muted-foreground">Sensor Uptime</div>
            <div className="text-primary font-bold">99.98%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Section wrapper --------------------------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Badge variant="outline" className="neon-border text-primary mb-4 bg-primary/5">{eyebrow}</Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {sub && <p className="text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

/* --------------------------- About --------------------------- */
function About() {
  const items = [
    { icon: Bot, label: "Robotics Engineering" },
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: CircuitBoard, label: "Embedded Systems" },
    { icon: Radar, label: "Sensor Technology" },
    { icon: Factory, label: "Industrial Automation" },
    { icon: Eye, label: "Machine Vision" },
    { icon: Wifi, label: "Internet of Things" },
    { icon: Cog, label: "Smart Manufacturing" },
  ];
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="About Us" title="Engineering Intelligence into Every Machine" sub="We design, build, and deploy robotic and sensor systems that turn ordinary operations into intelligent, self-optimizing workflows." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card key={it.label} className="glass p-6 group hover:neon-border transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold">{it.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Services --------------------------- */
function Services() {
  const services = [
    { icon: Bot, title: "Industrial Robotics", desc: "Robotic arms, cobots, and integrated cells for precision manufacturing." },
    { icon: Cog, title: "Automation Systems", desc: "End-to-end line automation with reliability and traceability built-in." },
    { icon: Radar, title: "Smart Sensors", desc: "Precision sensing modules for temperature, pressure, motion, and vision." },
    { icon: Layers, title: "PLC & SCADA", desc: "Rockwell, Siemens, and open protocol integration with real-time dashboards." },
    { icon: CircuitBoard, title: "Embedded Systems", desc: "Custom firmware and low-power hardware for connected devices." },
    { icon: Eye, title: "AI Vision Systems", desc: "Deep-learning inspection, defect detection, and 3D vision pipelines." },
    { icon: Wifi, title: "IoT Monitoring", desc: "Cloud-native telemetry, edge gateways, and secure data pipelines." },
    { icon: Activity, title: "Predictive Maintenance", desc: "ML models that predict failures before they impact production." },
    { icon: Zap, title: "Robotic Process Automation", desc: "Software bots that eliminate repetitive tasks across the enterprise." },
    { icon: Rocket, title: "R&D Services", desc: "Prototype to product — accelerating your roadmap from lab to line." },
    { icon: Wrench, title: "Electronic Design", desc: "PCB design, schematics, DFM, and turnkey manufacturing." },
    { icon: Sparkles, title: "Custom Engineering", desc: "Bespoke solutions engineered around your unique operational needs." },
  ];
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Services" title="Solutions Across the Automation Stack" sub="From individual sensors to complete AI-driven factories, we deliver the full spectrum of robotics engineering." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="glass p-6 group hover:neon-border transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 text-primary text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Products --------------------------- */
function Products() {
  const products = [
    { icon: Bot, name: "Industrial Robotic Arm", tag: "6-Axis", spec: "±0.02mm repeatability", features: ["Payload 20kg", "Reach 1.8m", "IP67"] },
    { icon: Rocket, name: "Autonomous Mobile Robot", tag: "AMR", spec: "SLAM navigation", features: ["500kg payload", "8hr battery", "LiDAR + Vision"] },
    { icon: Factory, name: "AGV Robot", tag: "AGV", spec: "Magnetic + laser guided", features: ["1000kg load", "Fleet ready", "Safety PLd"] },
    { icon: Camera, name: "Vision Inspection Camera", tag: "AI Vision", spec: "12MP CMOS", features: ["Deep learning", "60 FPS", "Multi-spectral"] },
    { icon: Radar, name: "Proximity Sensors", tag: "Sensor", spec: "Inductive / capacitive", features: ["IO-Link", "IP69K", "M8/M12"] },
    { icon: Thermometer, name: "Temperature Sensors", tag: "Sensor", spec: "-200°C to +850°C", features: ["Pt100 / RTD", "0.1°C accuracy", "MODBUS"] },
    { icon: Gauge, name: "Pressure Sensors", tag: "Sensor", spec: "0–1000 bar", features: ["4–20mA", "0.25% FS", "Explosion proof"] },
    { icon: Wind, name: "Gas Sensors", tag: "Sensor", spec: "CO / CO₂ / VOC / NOx", features: ["NDIR tech", "Cloud sync", "Alarm relay"] },
    { icon: Waves, name: "Ultrasonic Sensors", tag: "Sensor", spec: "20mm – 10m range", features: ["Non-contact", "Fluid safe", "Adaptive"] },
    { icon: Radar, name: "LiDAR Sensors", tag: "LiDAR", spec: "360° / 200m range", features: ["3D point cloud", "ROS driver", "Automotive grade"] },
    { icon: Camera, name: "AI Camera Modules", tag: "Edge AI", spec: "NPU 4 TOPS", features: ["Edge inference", "GStreamer", "PoE+"] },
    { icon: Cloud, name: "IoT Gateway", tag: "Gateway", spec: "4G / 5G / WiFi 6", features: ["MQTT / OPC-UA", "TPM 2.0", "Docker ready"] },
  ];
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Products" title="Precision Hardware, Purpose-Built" sub="A catalog of production-grade robotics and sensor modules, ready for integration into your workflow." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => (
            <Card key={p.name} className="glass p-5 group hover:neon-border transition-all hover:-translate-y-1">
              <div className="aspect-video rounded-lg mb-4 bg-gradient-to-br from-primary/15 via-accent/5 to-transparent grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.72 0.18 210 / 0.3), transparent 60%)" }} />
                <p.icon className="w-14 h-14 text-primary relative group-hover:scale-110 transition-transform" />
                <Badge className="absolute top-2 right-2 bg-primary/20 text-primary border-primary/30 text-[10px]">{p.tag}</Badge>
              </div>
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{p.spec}</p>
              <ul className="space-y-1 mb-4">
                {p.features.map((f) => (
                  <li key={f} className="text-xs flex items-center gap-1.5 text-muted-foreground">
                    <Check className="w-3 h-3 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button size="sm" variant="outline" className="w-full neon-border bg-transparent hover:bg-primary/10 text-xs">
                Learn More <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Industries --------------------------- */
function Industries() {
  const industries = [
    "Manufacturing", "Automotive", "Healthcare", "Agriculture",
    "Smart Cities", "Warehousing", "Energy", "Oil & Gas",
    "Education", "Research Labs",
  ];
  const icons = [Factory, Cog, Activity, Sparkles, Wifi, Layers, Zap, Gauge, Rocket, CircuitBoard];
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Industries" title="Trusted Across Verticals" sub="Our platforms power mission-critical operations across ten industries worldwide." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = icons[i];
            return (
              <Card key={ind} className="glass p-6 text-center group hover:neon-border transition-all hover:-translate-y-1">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium">{ind}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Technologies --------------------------- */
function Technologies() {
  const tech = [
    "AI", "Machine Learning", "Computer Vision", "ROS", "Python", "C++",
    "Arduino", "Raspberry Pi", "ESP32", "STM32", "PLC", "SCADA",
    "MQTT", "TensorFlow", "OpenCV", "Edge Computing", "Cloud IoT",
  ];
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Tech Stack" title="Built on Industry-Leading Platforms" />
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <Badge key={t} variant="outline" className="glass neon-border text-sm py-2 px-4 hover:bg-primary/10 hover:text-primary transition-all cursor-default">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Portfolio --------------------------- */
function Portfolio() {
  const projects = [
    { title: "Automated Production Line", cat: "Manufacturing" },
    { title: "Smart Robotic Arm", cat: "Robotics" },
    { title: "AI Inspection System", cat: "Vision" },
    { title: "Autonomous Delivery Robot", cat: "Mobile Robotics" },
    { title: "Sensor Monitoring Dashboard", cat: "IoT" },
    { title: "Warehouse Automation", cat: "Logistics" },
    { title: "Smart Agriculture Robot", cat: "AgriTech" },
    { title: "Vision Quality Inspection", cat: "Quality" },
  ];
  const iconMap = [Factory, Bot, Eye, Rocket, Activity, Layers, Sparkles, Camera];
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title="Selected Deployments" sub="Real-world systems delivering measurable results across industries." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => {
            const Icon = iconMap[i];
            return (
              <div key={p.title} className="group relative rounded-xl overflow-hidden aspect-[4/5] neon-border cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
                <div className="absolute inset-0 grid place-items-center">
                  <Icon className="w-20 h-20 text-primary/60 group-hover:scale-110 group-hover:text-primary transition-all" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/30 text-[10px]">{p.cat}</Badge>
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Why Us --------------------------- */
function WhyUs() {
  const reasons = [
    { icon: ShieldCheck, title: "Experienced Engineers", desc: "A team of 25+ specialists across robotics, AI, and embedded design." },
    { icon: Sparkles, title: "Innovative Solutions", desc: "R&D-first culture producing patented, differentiated technology." },
    { icon: Check, title: "Reliable Products", desc: "Rigorous QA and 99.98% field uptime across active deployments." },
    { icon: Rocket, title: "Global Standards", desc: "CE, UL, ISO 9001 and functional-safety certified." },
    { icon: Zap, title: "Fast Support", desc: "24/7 remote diagnostics and on-site response teams." },
    { icon: Wrench, title: "Custom Development", desc: "Turnkey engineering shaped to your operations, not templates." },
    { icon: Star, title: "High Quality", desc: "Industrial-grade components and rigorous burn-in testing." },
    { icon: Gauge, title: "Cost Effective", desc: "Proven ROI models — most deployments pay back inside 18 months." },
  ];
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Why Choose Us" title="Engineered Excellence, Delivered" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <Card key={r.title} className="glass p-6 hover:neon-border transition-all">
              <r.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Stats --------------------------- */
function useCounter(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { n, ref };
}

function StatItem({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const { n, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
        {n}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="glass neon-border p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8">
            <StatItem value={200} label="Projects" />
            <StatItem value={80} label="Clients" />
            <StatItem value={25} label="Engineers" />
            <StatItem value={15} label="Years" />
            <StatItem value={99} label="Satisfaction" suffix="%" />
          </div>
        </Card>
      </div>
    </section>
  );
}

/* --------------------------- Testimonials --------------------------- */
function Testimonials() {
  const items = [
    { name: "Elena Marquez", role: "Head of Ops, AutoDrive Motors", quote: "Their vision inspection system cut our defect rate by 63% inside a quarter. Best automation partner we've engaged." },
    { name: "Rajesh Kumar", role: "CTO, MedTech Solutions", quote: "Precision, reliability, and an engineering team that actually understands medical-grade requirements. Exceptional." },
    { name: "Sophie Laurent", role: "Plant Director, Nordic Foods", quote: "The AMR fleet transformed our warehouse. ROI in 14 months, and the sensor telemetry gives us predictive control." },
    { name: "Ahmed Al-Farsi", role: "VP Engineering, GulfEnergy", quote: "Robust, explosion-proof sensors delivering flawless uptime on our offshore rigs for over three years." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="Testimonials" title="What Clients Say" />
        <Card className="glass neon-border p-8 sm:p-12 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg sm:text-xl mb-6 min-h-[6rem]">"{items[i].quote}"</p>
          <div className="font-semibold">{items[i].name}</div>
          <div className="text-sm text-muted-foreground">{items[i].role}</div>
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */
function FAQ() {
  const faqs = [
    { q: "How do you approach robotics integration into existing lines?", a: "We start with a site audit and digital twin, then design integration points that minimize downtime and preserve existing infrastructure." },
    { q: "How do I choose the right sensors for my application?", a: "Our engineers evaluate accuracy, environment, protocol, and lifecycle costs — then recommend the ideal sensor mix backed by field data." },
    { q: "Can you deliver full turnkey industrial automation?", a: "Yes. From electrical design to PLC/SCADA, HMI, robotics, safety validation, and commissioning — one accountable partner." },
    { q: "What does an IoT deployment timeline look like?", a: "Typical pilots run 4–8 weeks; production rollouts follow in 2–4 months depending on device count and integration complexity." },
    { q: "How do you implement AI in production environments?", a: "We use edge-first inference with cloud model management, containerized deployment, drift monitoring, and human-in-the-loop review." },
    { q: "What support and SLAs do you offer?", a: "24/7 remote monitoring, on-site response, spare-parts stocking, and configurable SLAs from 4h to next-business-day." },
  ];
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="glass rounded-xl px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* --------------------------- Contact --------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Contact" title="Let's Build the Future Together" sub="Reach out to discuss your robotics, sensor, or automation project." />
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
                  <Input placeholder="Your name" className="bg-input/50 border-border" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="you@company.com" className="bg-input/50 border-border" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Company</label>
                <Input placeholder="Company name" className="bg-input/50 border-border" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
                <Textarea rows={5} placeholder="Tell us about your project..." className="bg-input/50 border-border" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-accent to-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                Send Message <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </Card>
          <div className="space-y-4">
            <Card className="glass p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-semibold truncate">+1 (555) 010-2024</div>
              </div>
            </Card>
            <Card className="glass p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold truncate">hello@robotics-sensors.com</div>
              </div>
            </Card>
            <Card className="glass p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Address</div>
                <div className="font-semibold">200 Innovation Drive, Silicon Valley, CA</div>
              </div>
            </Card>
            <Card className="glass p-2 h-48 relative overflow-hidden neon-border">
              <div className="absolute inset-0 grid place-items-center">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(oklch(0.72 0.18 210 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.18 210 / 0.4) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <MapPin className="w-10 h-10 text-primary relative" style={{ animation: "pulse-glow 2s infinite" }} />
              </div>
            </Card>
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Facebook, label: "Facebook" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="w-12 h-12 glass rounded-lg grid place-items-center hover:neon-border hover:text-primary transition-all">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Footer --------------------------- */
function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-border/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg grid place-items-center neon-border">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold tracking-wider">ROBOTICS<span className="text-primary">&</span>SENSORS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Building the future with robotics, intelligent sensors, and AI-powered automation.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Github, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-9 h-9 glass rounded-lg grid place-items-center hover:text-primary hover:neon-border transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Quick Links" items={["About", "Services", "Products", "Portfolio", "Contact"]} />
          <FooterCol title="Services" items={["Robotics", "Automation", "AI Vision", "IoT", "R&D"]} />
          <div>
            <h4 className="font-semibold text-sm mb-4">Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-3">Get engineering insights and product updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Email" className="bg-input/50 text-sm" />
              <Button size="sm" className="bg-gradient-to-r from-accent to-primary text-primary-foreground shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-6 border-t border-border/40 flex flex-wrap justify-between items-center gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Robotics & Sensors. All rights reserved.</div>
          <div>Engineered with precision.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-sm mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href={`#${i.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
