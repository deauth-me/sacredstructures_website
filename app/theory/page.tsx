import Link from "next/link"
import { ArrowLeft, BookOpen, Church, Compass, PenTool, FileText } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"

// Removed the documents array as per the shift in focus

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-serif text-xl font-bold">
            Sacred Structures
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground">
              About
            </Link>
            <Link href="/theory" className="text-sm font-medium underline underline-offset-4">
              Theory
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-2">Architectural Theory</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Understanding the principles behind Catholic sacred spaces
          </p>

          <div className="prose max-w-none mb-12">
            <p>
              Catholic architectural theory represents a rich tradition that spans nearly two millennia, evolving
              through different historical periods while maintaining core theological principles. This page serves as an
              introduction to the fundamental concepts that have shaped Catholic sacred architecture throughout history.
            </p>
          </div>

          {/* Existing Cards Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Church className="h-5 w-5 text-primary" />
                  Theological Foundations
                </CardTitle>
                <CardDescription>Sacred space and divine presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Explore how Catholic theology informs architectural decisions, from the orientation of churches to the
                  symbolic meaning of domes, spires, and cruciform layouts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  Historical Styles
                </CardTitle>
                <CardDescription>From Early Christian to Modern</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Learn about the evolution of Catholic architectural styles through the ages, including Romanesque,
                  Gothic, Renaissance, Baroque, and contemporary approaches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-primary" />
                  Design Principles
                </CardTitle>
                <CardDescription>Form, function, and sacred geometry</CardDescription>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-serif text-2xl font-bold mb-6">Major Architectural Styles</h2>

          {/* Existing Styles */}
          <div className="space-y-8 mb-12">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/st-marks-basilica.jpg"
                  alt="Byzantine Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Byzantine (5th-15th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Characterized by domed structures, rich mosaics, and a focus on creating a mystical atmosphere through
                  light and decoration. Byzantine churches often feature a central dome representing heaven above a
                  square base representing earth.
                </p>
                <div className="flex gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Central dome
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">Mosaics</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Pendentives
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Romanesque (10th-12th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Defined by thick walls, round arches, sturdy pillars, and small windows. Romanesque churches convey a
                  sense of solidity and permanence, with an emphasis on horizontal lines and rhythmic repetition of
                  architectural elements.
                </p>
                <div className="flex gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Round arches
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Thick walls
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Barrel vaults
                  </span>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/santiago-de-compostela.jpg"
                  alt="Romanesque Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/chartres-cathedral.jpg"
                  alt="Gothic Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gothic (12th-16th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Known for pointed arches, ribbed vaults, flying buttresses, and large stained glass windows. Gothic
                  architecture emphasizes verticality and light, creating soaring spaces that direct the eye and spirit
                  upward toward heaven.
                </p>
                <div className="flex gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Pointed arches
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Flying buttresses
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Rose windows
                  </span>
                </div>
              </div>
            </div>

            {/* New Styles Sections */}

            <Separator /> {/* Separator before the new section */}

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Renaissance (15th-16th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Emerging from Italy, Renaissance architecture revived classical forms, emphasizing symmetry, proportion, and geometry. Churches of this era often feature domes, classical columns, and harmonious layouts reflecting humanist ideals and a renewed interest in antiquity.
                </p>
                <div className="flex gap-2 flex-wrap"> {/* Added flex-wrap for smaller screens */}
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Symmetry & Proportion
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Domes
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Classical orders
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Harmonious layouts
                  </span>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden order-1 md:order-2">
                 {/* Placeholder for Renaissance Image */}
                 {/* <Image
                  src="/images/renaissance-placeholder.jpg"
                  alt="Renaissance Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                /> */}
                <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    Image Placeholder (Renaissance)
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                 {/* Placeholder for Baroque Image */}
                 {/* <Image
                  src="/images/baroque-placeholder.jpg"
                  alt="Baroque Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                /> */}
                 <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    Image Placeholder (Baroque)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Baroque (17th-18th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Characterized by grandeur, drama, and elaborate ornamentation. Baroque churches use dynamic forms, rich materials, and dramatic lighting to evoke emotion and a sense of awe, often featuring complex curves, colossal columns, and ornate frescoes.
                </p>
                <div className="flex gap-2 flex-wrap"> {/* Added flex-wrap for smaller screens */}
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Drama & Emotion
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Elaborate ornament
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Dynamic forms
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Dramatic lighting
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Neoclassical & Revival Styles (18th-19th centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  A return to classical principles, emphasizing symmetry, simplicity, and monumental scale. Revival styles later drew inspiration from various historical periods (Gothic Revival, Romanesque Revival), adapting past forms with contemporary construction techniques.
                </p>
                <div className="flex gap-2 flex-wrap"> {/* Added flex-wrap for smaller screens */}
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Classical revival
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Symmetry & Simplicity
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Monumental scale
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Historical adaptations
                  </span>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden order-1 md:order-2">
                 {/* Placeholder for Neoclassical/Revival Image */}
                 {/* <Image
                  src="/images/neoclassical-revival-placeholder.jpg"
                  alt="Neoclassical & Revival Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                /> */}
                 <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    Image Placeholder (Neoclassical/Revival)
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                 {/* Placeholder for Modern Image */}
                 {/* <Image
                  src="/images/modern-placeholder.jpg"
                  alt="Modern Catholic Architecture"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                /> */}
                 <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    Image Placeholder (Modern)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Catholic Architecture (20th-21st centuries)</h3>
                <p className="text-muted-foreground mb-4">
                  Responding to contemporary materials, technologies, and theological understandings (especially post-Vatican II). Modern churches often feature abstract forms, innovative use of light and space, and a focus on community and liturgical function, ranging from minimalist designs to bold, sculptural structures.
                </p>
                <div className="flex gap-2 flex-wrap"> {/* Added flex-wrap for smaller screens */}
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Contemporary forms
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Innovative materials
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Focus on liturgy
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                    Abstract design
                  </span>
                </div>
              </div>
            </div>
            {/* End New Styles Sections */}

          </div> {/* Closing div for space-y-8 mb-12 */}

           {/* Removed the "Coming Soon" box */}

        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sacred Architecture. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
