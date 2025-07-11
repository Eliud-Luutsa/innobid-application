'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Users, Award, Code, MessageSquare, BarChart3 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNavigation } from "@/components/main-navigation"

interface TeamMember {
  id: number
  name: string
  position: string
  email: string
  linkedin: string
  bio: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eliud Luutsa",
    position: "CEO & Co-Founder",
    email: "eliud@innobid.net",
    linkedin: "https://www.linkedin.com/in/eliud-luutsa-578aa1128/",
    bio: "Visionary leader driving Innobid's mission to create inclusive procurement systems. Passionate about leveraging technology to address disparities and empower women and youth entrepreneurs in the global commerce ecosystem.",
    image: "/team/eliud-luutsa.jpg",
    icon: Award
  },
  {
    id: 2,
    name: "Wilbard Kangwiya",
    position: "COO & Co-Founder",
    email: "wilbard@innobid.net",
    linkedin: "https://www.linkedin.com/in/wilbard-kangwiya-a45914166/",
    bio: "Strategic operations leader focused on scaling Innobid's impact. Dedicated to building sustainable business models that create pathways for equitable distribution of government and private sector contracts.",
    image: "/team/wilbard-kangwiya.jpg",
    icon: Users
  },
  {
    id: 3,
    name: "Rachel Oyugi",
    position: "Technology Lead",
    email: "oyugirachel20@gmail.com",
    linkedin: "https://www.linkedin.com/in/rachel-oyugi-323323195/",
    bio: "Technical architect driving innovation in our e-procurement platform. Expert in AI and machine learning solutions that enhance transparency and efficiency in procurement processes.",
    image: "/team/rachel-oyugi.jpg",
    icon: Code
  },
  {
    id: 4,
    name: "Rejoice Amutenya",
    position: "Communications Lead",
    email: "rejoice.amutenya@gmail.com",
    linkedin: "https://www.linkedin.com/in/rejoice-amutenya/",
    bio: "Strategic communicator building bridges between technology and social impact. Focused on amplifying the voices of women and youth changemakers in the procurement ecosystem.",
    image: "/team/rejoice-amutenya.jpg",
    icon: MessageSquare
  },
  {
    id: 5,
    name: "Maria Kauhondamwa",
    position: "System Analyst",
    email: "mkauhondamwa@gmail.com",
    linkedin: "https://www.linkedin.com/in/maria-kauhondamwa-17750595/",
    bio: "Data-driven analyst optimizing procurement systems for maximum impact. Specialized in process simplification and providing relevant information to empower entrepreneurs.",
    image: "/team/maria-kauhondamwa.jpg",
    icon: BarChart3
  }
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/android.png"
                alt="InnoBid Logo"
                width={100}
                height={80}
                priority
              />
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex">
              <MainNavigation />
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/login"
                className="text-primary hover:text-primary/90"
              >
                Sign In
              </Link>
              <Link 
                href="/signup"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background pt-24 md:pt-32">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
              Meet Our Team
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate individuals driving Innobid's mission to create inclusive and transparent procurement systems that empower women and youth entrepreneurs.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  {/* Profile Image */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.position}`}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const icon = document.createElement('div');
                            icon.className = 'flex items-center justify-center w-full h-full';
                            icon.innerHTML = `<svg class="w-16 h-16 text-primary/60" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>`;
                            parent.appendChild(icon);
                          }
                        }}
                      />
                    </div>
                    {/* Position Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs">
                        {member.position}
                      </Badge>
                    </div>
                  </div>

                  {/* Name */}
                  <CardTitle className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {member.name}
                  </CardTitle>

                  {/* Contact Links */}
                  <div className="flex justify-center gap-3">
                    <Link
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors group-hover:scale-110"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors group-hover:scale-110"
                      title={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Our Team Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're united by our commitment to creating positive change through technology and innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Working together to achieve our shared mission of inclusion and empowerment
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Striving for the highest quality in everything we do
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuously exploring new ways to solve complex challenges
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to be part of the movement to create more inclusive and transparent procurement systems?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/signup">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t text-card-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/android.png"
                alt="InnoBid Logo"
                width={50}
                height={30}
              />
              <p className="text-sm text-muted-foreground mt-2">
                &copy; {new Date().getFullYear()} InnoBid. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 