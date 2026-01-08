"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VehicleSlider } from "./vehicle-slider"

interface VehicleCardProps {
  name: string
  model: string
  price: string
  images: string[]
  features: string[]
  contact: string
}

export function VehicleCard({ name, model, price, images, features, contact }: VehicleCardProps) {
  const handleContact = () => {
    window.location.href = `tel:${contact}`
  }

  return (
    <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300">
      <div className="aspect-[16/10] relative">
        <VehicleSlider images={images} alt={name} />
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{model}</p>
            </div>
            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 whitespace-nowrap">{price}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-foreground leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={handleContact}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call to Purchase
        </Button>
      </CardContent>
    </Card>
  )
}
