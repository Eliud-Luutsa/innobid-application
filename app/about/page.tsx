'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Target, Eye, Heart, Shield, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNavigation } from "@/components/main-navigation"
import { useState } from "react"

// Partner data
const partners = [
  {
    id: 1,
    name: "FasterCapital",
    logo: "/images/fastercapital-logo.png", 
    tag: "Resource Mobilisation and Strategic Partner",
    description: "FasterCapital has been instrumental in providing comprehensive resource mobilization support and strategic guidance, enabling Innobid to scale our e-procurement platform and reach more women and youth entrepreneurs across the region."
  },
  {
    id: 2,
    name: "AccountabilityLab",
    logo: "/images/accountabilitylab-logo.png", 
    tag: "Strategic Partner",
    description: "AccountabilityLab has been a key strategic partner in our mission to create transparent and accountable procurement systems. Their expertise in governance and transparency has helped us develop robust mechanisms that ensure fair and equitable access to procurement opportunities for women and youth entrepreneurs."
  },
  {
    id: 3,
    name: "Innovation Hub Africa",
    logo: "/images/partner3.png",
    tag: "Technology Partner",
    description: "Innovation Hub Africa has provided technical expertise and mentorship, helping us develop cutting-edge AI solutions for transparent procurement processes."
  },
  {
    id: 4,
    name: "Women in Tech Initiative",
    logo: "/images/partner4.png",
    tag: "Community Partner",
    description: "This partnership has been crucial in connecting us with women entrepreneurs and providing insights into the specific challenges they face in procurement processes."
  },
  {
    id: 5,
    name: "Youth Empowerment Network",
    logo: "/images/partner5.png",
    tag: "Impact Partner",
    description: "The Youth Empowerment Network has helped us understand and address the unique barriers young entrepreneurs face, shaping our platform's youth-focused features."
  },
  {
    id: 6,
    name: "Digital Transformation Alliance",
    logo: "/images/partner6.png",
    tag: "Innovation Partner",
    description: "This alliance has provided valuable insights into digital transformation strategies, helping us build a more robust and scalable e-procurement solution."
  }
]

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsPerView = 2
  const totalSlides = Math.ceil(partners.length / cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getVisiblePartners = () => {
    const startIndex = currentSlide * cardsPerView
    return partners.slice(startIndex, startIndex + cardsPerView)
  }

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
              About Innobid
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innobid is a tech startup that provides tech-for-good solutions that include women and youth into the national and global commerce and finance systems by leveraging innovative technology.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Description Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our pioneer solution is an e-procurement system that leverages AI to boost efficiency and transparency in procurement. The system is on a mission to address procurement disparities that affect women and youth entrepreneurs through process simplification, providing relevant information and access to capital as well as fostering fairness and transparency with the aim of creating pathways for more equitable distribution of government, global development and private sector contracts.
              </p>
            </div>
          </section>

          {/* Mission & Vision Cards */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To address disparities preventing youth and women changemakers from unlocking the most value from national and global commerce and finance systems through innovative technology.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading tech-for-good organization fostering the inclusion of youth and women changemakers into national and global commerce and finance systems.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creating pathways for women and youth to access opportunities in commerce and finance
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fostering trust through open and honest procurement processes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leveraging cutting-edge technology to solve complex challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enabling changemakers to unlock their full potential
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creating measurable positive change in communities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ensuring fair and equal access to opportunities for all
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Partners Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Partners
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're proud to collaborate with organizations that share our vision of creating more inclusive and transparent procurement systems. Our partners provide invaluable support through investment, strategic guidance, and community connections.
              </p>
            </div>

            {/* Partners Slider */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {getVisiblePartners().map((partner) => (
                  <Card key={partner.id} className="rounded-xl hover:shadow-lg transition-shadow border-primary/20">
                    <CardHeader className="text-center pb-4">
                      {/* Partner Logo */}
                      <div className="mx-auto mb-4 p-4 bg-primary/5 rounded-lg w-24 h-24 flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Partner Tag */}
                      <div className="flex justify-center mb-2">
                        <Badge variant="secondary" className="w-fit">
                          {partner.tag}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg font-semibold text-primary">
                        {partner.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="rounded-full w-10 h-10 p-0"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary' : 'bg-primary/20'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="rounded-full w-10 h-10 p-0"
                  disabled={currentSlide === totalSlides - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the movement to create more inclusive and transparent procurement systems that empower women and youth entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/signup">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t text-card-foreground py-8 mt-20">
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