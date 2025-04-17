import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                <Badge variant="outline" className="bg-background">
                  New in 2025
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Fresh Approach to Software Development
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We&apos;re a new team with fresh ideas, building innovative
                software solutions for the modern business landscape.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-background shadow-lg">
                <Image
                  src="/images/dev.jpg"
                  alt="DevMatrix software development"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                What We Do
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Core Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Modern software solutions built with the latest technologies and
                fresh perspectives.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Web Development",
                description:
                  "Modern websites and web applications with cutting-edge technologies.",
              },
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications for iOS and Android.",
              },
              {
                icon: <Database className="h-10 w-10" />,
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure for modern businesses.",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "Custom Software",
                description:
                  "Tailored software solutions for your specific business needs.",
              },
            ].map((service, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <div className="p-2 w-fit rounded-lg bg-secondary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Button variant="ghost" asChild className="mt-auto">
                    <Link href="/services">
                      Learn more <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
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
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="text-primary-foreground/90 md:text-xl">
                    Let&apos;s collaborate on your next project with fresh ideas
                    and modern approaches.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end lg:items-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Start a Conversation</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/services">Explore Services</Link>
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
