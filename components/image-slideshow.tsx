"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSlideshowProps {
  images: string[]
  alt: string
}

export function ImageSlideshow({ images, alt }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="object-cover transition-opacity duration-500"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
