import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About DevMatrix
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We&apos;re a young team of passionate developers with fresh
                perspectives and innovative approaches to software development.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl bg-background shadow-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="DevMatrix team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-2">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                A New Beginning
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in 2023, DevMatrix was born from a vision to bring fresh
                perspectives to the software development industry. We saw an
                opportunity to combine modern technologies with innovative
                approaches.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Though we&apos;re new to the scene, our team brings together
                diverse skills and a passion for creating exceptional software
                solutions that solve real business challenges.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Founded in 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Small, Agile Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Modern Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Growing Client Base</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="DevMatrix team meeting"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="DevMatrix office"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="DevMatrix coding"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="DevMatrix brainstorming"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our development methodology ensures successful project delivery
              every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements and define project scope.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "We create detailed designs and technical specifications.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies.",
              },
              {
                number: "04",
                title: "Delivery",
                description: "We deploy, test, and provide ongoing support.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Drives Us
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our core values shape our approach to software development and
                client relationships.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and creative approaches to solve complex problems.",
              },
              {
                title: "Quality",
                description:
                  "We're committed to delivering high-quality code and exceptional user experiences.",
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with our clients, treating their challenges as our own.",
              },
              {
                title: "Transparency",
                description:
                  "We believe in open communication and honest relationships with our clients.",
              },
              {
                title: "Adaptability",
                description:
                  "We stay flexible and responsive to changing requirements and technologies.",
              },
              {
                title: "Growth",
                description:
                  "We're constantly learning and improving our skills and processes.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
