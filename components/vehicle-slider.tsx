"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VehicleSliderProps {
  images: string[]
  alt: string
}

export function VehicleSlider({ images, alt }: VehicleSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-card shadow-2xl">
        {images.map((image, index) => (
          <img
            key={image}
            src={image || "/placeholder.svg"}
            alt={`${alt} - Image ${index + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105",
            )}
          />
        ))}
      </div>

      {/* Navigation Buttons - Show on hover */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-md hover:bg-background border-2 border-primary/50 hover:border-primary shadow-lg h-12 w-12"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-7 w-7 text-primary" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-md hover:bg-background border-2 border-primary/50 hover:border-primary shadow-lg h-12 w-12"
        onClick={goToNext}
      >
        <ChevronRight className="h-7 w-7 text-primary" />
      </Button>

      {/* Thumbnail Navigation - Clickable dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 bg-background/90 backdrop-blur-md p-4 rounded-xl border-2 border-primary/30 shadow-xl">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "rounded-full transition-all duration-300 cursor-pointer border-2",
              index === currentIndex
                ? "bg-primary w-12 h-3 border-primary shadow-lg shadow-primary/50"
                : "bg-muted w-3 h-3 border-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-125 hover:border-primary/50",
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md px-4 py-2 rounded-lg border-2 border-primary/30 shadow-lg">
        <span className="text-sm font-semibold text-foreground">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
