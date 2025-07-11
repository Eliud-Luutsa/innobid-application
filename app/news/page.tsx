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
    summary: "Innobid, a Kenyan tech startup focused on creating inclusive procurement systems, has received backing from FasterCapital to scale its AI-powered e-procurement platform. The investment will help Innobid expand its mission to address procurement disparities affecting women and youth entrepreneurs through innovative technology solutions.",
    fullContent: `Innobid, a Kenyan tech startup focused on creating inclusive procurement systems, has received backing from FasterCapital to scale its AI-powered e-procurement platform. The investment will help Innobid expand its mission to address procurement disparities affecting women and youth entrepreneurs through innovative technology solutions.

The partnership with FasterCapital represents a significant milestone for Innobid as it seeks to revolutionize procurement processes across Africa. The startup's platform leverages artificial intelligence and machine learning to enhance transparency, efficiency, and fairness in government and private sector procurement.

"Our mission is to create pathways for more equitable distribution of government, global development, and private sector contracts," said Eliud Luutsa, CEO and Co-Founder of Innobid. "This backing from FasterCapital will enable us to scale our impact and reach more entrepreneurs who have been traditionally excluded from these opportunities."

The investment will support Innobid's expansion plans, including:
• Enhanced AI capabilities for bid analysis and anomaly detection
• Platform improvements to serve more users across different regions
• Strategic partnerships with government agencies and development organizations
• Community outreach programs to empower women and youth entrepreneurs

FasterCapital's support aligns with Innobid's vision of becoming the leading tech-for-good organization fostering the inclusion of youth and women changemakers into national and global commerce and finance systems.`,
    author: "Innobid Team",
    date: "2024-12-15",
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
    sourceUrl: "https://www.your-community.org/article",
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
                  <div className="prose prose-sm max-w-none">
                    {article.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
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