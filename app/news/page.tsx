'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, User, ChevronDown, ChevronUp, Newspaper, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MainNavigation } from "@/components/main-navigation"

interface NewsArticle {
  id: number
  title: string
  summary: string
  fullContent?: string
  author: string
  date: string
  source: string
  sourceUrl?: string
  image: string
  category: 'press-release' | 'article' | 'update'
  featured?: boolean
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "FasterCapital Backs Innobid's AI-Powered E-Procurement Solution to Boost Market Access",
    summary: "Innobid, a pioneering AI-enabled e-procurement tech startup focused on enhancing transparency and equity in procurement, today announced a strategic partnership with FasterCapital through its LaunchUp program. This collaboration aims to accelerate Innobid's market entry and scale its innovative solution across government, private, and global development sectors.",
    fullContent: `Innobid, a pioneering AI-enabled e-procurement tech startup focused on enhancing transparency and equity in procurement, today announced a strategic partnership with FasterCapital through its LaunchUp program. This collaboration aims to accelerate Innobid's market entry and scale its innovative solution across government, private, and global development sectors, primarily targeting Africa and emerging markets. The partnership leverages FasterCapital's global reach and expertise to validate Innobid's product-market fit and fast-track capital raising and business growth.

## Market Opportunity & Problem Statement

The global procurement market is estimated to reach over $10 trillion, yet remains plagued by inefficiencies, corruption, and exclusion—especially for women and youth-owned MSMEs. Innobid targets procurement disparities using AI-driven automation and transparency tools, enabling fairer and more inclusive workflows.

## Startup Solution & Differentiation

Innobid's platform automates bid screening, legal compliance, risk assessment, and anomaly detection. A citizen engagement module invites public monitoring, enhancing accountability. With a majority female and fully youth-owned leadership, Innobid blends technology with community oversight and capacity building, setting it apart from competitors.

## FasterCapital Partnership Value

Through the LaunchUp program, Innobid gains tailored mentorship, global investor access, and strategic guidance. This collaboration accelerates product refinement and targets a $100,000 funding milestone while expanding market reach.

## Quotes

**Hesham Zreik, CEO of FasterCapital:**
"Innobid exemplifies the kind of innovative, impact-driven startup that LaunchUp aims to empower. Their focus on using AI to address real-world procurement challenges while promoting inclusion aligns perfectly with our mission to support transformative solutions."

**Eliud Luutsa, CEO & Co-Founder of Innobid:**
"Our partnership with FasterCapital validates Innobid's mission to democratize access for women and youth entrepreneurs in the procurement ecosystem. This collaboration will accelerate our ability to scale impact and create more equitable opportunities across Africa and emerging markets."

## Growth Plans

Innobid plans to onboard anchor clients and complete pilot projects with government agencies in Africa. Future plans include building a sales engine, launching training academies, and expanding analytics/mobile access for rural suppliers.

## About Innobid

Founded in 2022 and majority female-owned, Innobid uses AI to simplify procurement processes and enhance equity, targeting underserved entrepreneurs.

## About FasterCapital

Founded in 2014, FasterCapital is a global venture builder and incubator helping startups with funding, development, and go-to-market strategy.

## Contact

📩 rasha.almasri@fastercapital.com  
🌍 www.fastercapital.com  
📞 +971 555 855 663`,
    author: "Innobid Team",
    date: "2025-07-06",
    source: "Innobid Press Release",
    image: "/news/fastercapital-backing.jpg",
    category: 'press-release',
    featured: true
  },
  {
    id: 2,
    title: "Young entrepreneurs tackle corruption in Kenya",
    summary: "A feature article highlighting how young entrepreneurs, including Innobid's founders, are leveraging technology to combat corruption in procurement processes across Kenya.",
    author: "Ye! Community",
    date: "2024-11-20",
    source: "International Trade Center's Ye! Community",
    sourceUrl: "https://social.yecommunity.com/news/1358449",
    image: "/news/ye-community-article.jpg",
    category: 'article'
  }
]

export default function NewsPage() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const toggleArticle = (articleId: number) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'press-release':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
      case 'article':
        return 'bg-green-500/10 text-green-700 dark:text-green-400'
      case 'update':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'press-release':
        return 'Press Release'
      case 'article':
        return 'Article'
      case 'update':
        return 'Update'
      default:
        return 'News'
    }
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
              News & Updates
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, and developments from Innobid as we work to create more inclusive and transparent procurement systems.
            </p>
          </div>
        </div>
      </div>

      {/* News Articles */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Article Image */}
                  <div className="w-full md:w-48 h-48 md:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={192}
                      height={128}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.className = 'flex items-center justify-center w-full h-full';
                          icon.innerHTML = `<svg class="w-12 h-12 text-primary/60" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                          </svg>`;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  </div>

                  {/* Article Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className={getCategoryColor(article.category)}>
                        {getCategoryLabel(article.category)}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="text-xl md:text-2xl font-bold text-primary leading-tight">
                      {article.title}
                    </CardTitle>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Newspaper className="h-4 w-4" />
                        {article.source}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="flex items-center gap-3">
                      {article.fullContent && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleArticle(article.id)}
                          className="flex items-center gap-2"
                        >
                          {expandedArticle === article.id ? (
                            <>
                              <ChevronUp className="h-4 w-4" />
                              Read Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              Read More
                            </>
                          )}
                        </Button>
                      )}
                      
                      {article.sourceUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex items-center gap-2"
                        >
                          <Link href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            View Source
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Expanded Content */}
              {expandedArticle === article.id && article.fullContent && (
                <CardContent className="pt-0">
                  <Separator className="mb-6" />
                  
                  {/* Hero Image for FasterCapital Press Release */}
                  {article.id === 1 && (
                    <div className="w-full flex justify-center my-6">
                      <img 
                        src="/images/press-release.png" 
                        alt="FasterCapital backs Innobid press release" 
                        className="rounded-lg shadow-lg max-w-3xl w-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="prose prose-sm max-w-none space-y-6">
                    {article.fullContent.split('\n\n').map((paragraph, index) => {
                      // Check if paragraph starts with ## (markdown header)
                      if (paragraph.startsWith('## ')) {
                        const title = paragraph.replace('## ', '');
                        return (
                          <div key={index} className="mt-8 mb-4">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                              {title}
                            </h3>
                          </div>
                        );
                      }
                      // Check if paragraph contains ** (bold text)
                      if (paragraph.includes('**')) {
                        const parts = paragraph.split('**');
                        return (
                          <div key={index} className="space-y-2">
                            {parts.map((part, partIndex) => {
                              if (partIndex % 2 === 1) {
                                // Bold text
                                return (
                                  <span key={partIndex} className="font-semibold text-primary">
                                    {part}
                                  </span>
                                );
                              } else {
                                // Regular text
                                return part;
                              }
                            })}
                          </div>
                        );
                      }
                      // Regular paragraph
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to our newsletter to receive the latest news and updates about Innobid's mission to create inclusive procurement systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/signup">
                  Subscribe to Updates
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Media Team
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