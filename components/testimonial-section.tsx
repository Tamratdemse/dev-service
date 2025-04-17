import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "DevMatrix transformed our business with their custom CRM solution. Their team was professional, responsive, and delivered exactly what we needed.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "SJ",
    },
    {
      quote:
        "The mobile app DevMatrix built for us has received outstanding feedback from our users. Their attention to detail and user experience expertise is unmatched.",
      author: "Michael Chen",
      role: "Product Manager, InnovateCo",
      avatar: "MC",
    },
    {
      quote:
        "Working with DevMatrix was a game-changer for our startup. They understood our vision and helped us bring it to life with cutting-edge technology.",
      author: "Alex Rodriguez",
      role: "Founder, NextWave Solutions",
      avatar: "AR",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about working with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
                <p className="mb-6 text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
