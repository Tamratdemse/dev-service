import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react";
import Layout from "@/components/layout";

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description:
        "Modern websites and web applications with cutting-edge technologies.",
      features: [
        "Responsive web design",
        "Progressive web apps (PWAs)",
        "E-commerce solutions",
        "Content management systems",
        "Web portals and dashboards",
        "API development",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js"],
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS development",
        "Native Android development",
        "Cross-platform solutions",
        "Mobile app UI/UX design",
        "App store optimization",
        "Maintenance and updates",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses.",
      features: [
        "Cloud migration",
        "Infrastructure setup",
        "Serverless architecture",
        "Database management",
        "Cloud security",
        "Performance optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software",
      description:
        "Tailored software solutions for your specific business needs.",
      features: [
        "Business applications",
        "Process automation",
        "System integration",
        "API development",
        "SaaS product development",
        "Technical consulting",
      ],
      technologies: ["JavaScript", "Python", "Go", "TypeScript"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Modern software development solutions with a fresh perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={index % 2 === 1 ? "bg-muted/50" : ""}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 w-fit rounded-lg bg-secondary">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        What We Offer
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 md:pt-0">
                    <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="rounded-full bg-secondary px-3 py-1 text-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <CardFooter className="px-0 pt-4">
                      <Button asChild>
                        <Link href="/contact">
                          Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 sm:p-12">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to Get Started?
                  </h2>
                  <p className="text-primary-foreground/90 md:text-xl">
                    Let&apos;s discuss your project and how we can help bring
                    your ideas to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end lg:items-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
