"use client"

import { Phone, Instagram, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VehicleCard } from "@/components/vehicle-card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  const rangeRoverImages = [
    "/images/range-rover-ext-front.jpg",
    "/images/range-rover-led-headlights.jpg",
    "/images/range-rover-side-profile.jpg",
    "/images/range-rover-ext-side.jpg",
    "/images/range-rover-rear-quarter.jpg",
    "/images/range-rover-rear-angle.jpg",
    "/images/range-rover-rear-three-quarter.jpg",
    "/images/range-rover-sport-badge.jpg",
    "/images/range-rover-int-dashboard-full.jpg",
    "/images/range-rover-int-driver.jpg",
    "/images/range-rover-int-steering.jpg",
    "/images/range-rover-int-console.jpg",
    "/images/range-rover-int-gear.jpg",
    "/images/range-rover-int-sunroof.jpg",
    "/images/range-rover-panoramic-rear.jpg",
    "/images/range-rover-rear-seats-sunroof.jpg",
  ]

  const rangeRoverFeatures = [
    "Recently Imported Vehicle",
    "Duty Fully Paid",
    "Mileage: Delivery",
    "Automatic Transmission",
    "Engine: Petrol",
    "Reverse Camera + 360° Motion Sensor Cam",
    "LED Headlights with signature DRL",
    "Multi Steering Controls",
    "Wide Panoramic Roof",
    "Full Leather 8-way electric front seats",
    "2-way manual front headrest",
    "Power recline rear seats",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const fordRaptorImages = [
    "/images/screenshot-202026-01-08-20175338.png",
    "/images/raptor-front-grille.png",
    "/images/raptor-exterior-front.png",
    "/images/screenshot-202026-01-08-20175401.png",
    "/images/screenshot-202026-01-08-20175415.png",
    "/images/screenshot-202026-01-08-20175408.png",
    "/images/raptor-rear-quarter.png",
    "/images/screenshot-202026-01-08-20175435.png",
    "/images/raptor-tailgate-badge.png",
    "/images/screenshot-202026-01-08-20175558.png",
    "/images/screenshot-202026-01-08-20175541.png",
    "/images/raptor-dashboard-screen.png",
    "/images/raptor-interior-seats.png",
    "/images/raptor-steering-wheel.png",
    "/images/screenshot-202026-01-08-20175424.png",
    "/images/screenshot-202026-01-08-20175354.png",
    "/images/screenshot-202026-01-08-20175347.png",
  ]

  const fordRaptorFeatures = [
    "Excellent Condition",
    "Duty Fully Paid",
    "Mileage: 19,286km",
    "Automatic Transmission",
    "Engine: 2.0L Bi-Turbo Diesel",
    "Reverse Camera + OverHead Dual Cam",
    "Multi Steering Controls",
    "4X4",
    "Wide Monitoring Display Screen",
    "Bluetooth Interface + Wireless Charging Section",
    "Motion Sensors Right Round",
    "Sparkling Full Leather Interior",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const contact = "+263783935399"
  const instagram = "tcars.zim"

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2.5 rounded-lg">
              <Car className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tinashe Car Sales</h1>
              <p className="text-xs text-muted-foreground">Premium Luxury Vehicles</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent"
              onClick={() => window.open(`https://instagram.com/${instagram}`, "_blank")}
            >
              <Instagram className="h-4 w-4 mr-2" />@{instagram}
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={() => (window.location.href = `tel:${contact}`)}
            >
              <Phone className="h-4 w-4 mr-2" />
              {contact}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6 py-12">
            <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="text-foreground">Premium Vehicles,</span>
              <br />
              <span className="text-primary">Exceptional Service</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Discover our handpicked collection of luxury and premium vehicles. Every car is carefully selected, fully
              serviced, and ready for immediate delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg h-14 px-8"
                onClick={() => document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Inventory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-transparent"
                onClick={() => (window.location.href = `tel:${contact}`)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ScrollReveal>
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose Tinashe Car Sales?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-3 p-6 rounded-lg bg-card">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Verified Quality</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every vehicle is thoroughly inspected and comes with full documentation.
                </p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-card">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Competitive Pricing</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Get the best value for premium vehicles with transparent pricing.
                </p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-card">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-foreground">Trusted Service</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Professional support throughout your purchase journey and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Inventory Section */}
      <section id="inventory" className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">Current Inventory</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our exclusive selection of premium vehicles
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto space-y-8">
              <VehicleCard
                name="Ford Ranger Raptor Edition"
                model="Model: 2023"
                price="$95,000 USD"
                images={fordRaptorImages}
                features={fordRaptorFeatures}
                contact={contact}
              />

              <VehicleCard
                name="Range Rover Autobiography Sport Edition"
                model="Model: 2025"
                price="$270,000 USD"
                images={rangeRoverImages}
                features={rangeRoverFeatures}
                contact={contact}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
                Ready to Drive Your Dream Car?
              </h3>
              <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                Contact us today to schedule a viewing or get more information about any vehicle in our inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => (window.location.href = `tel:${contact}`)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {contact}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  onClick={() => window.open(`https://instagram.com/${instagram}`, "_blank")}
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Tinashe Car Sales</p>
                <p className="text-sm text-muted-foreground">Premium Luxury Vehicles</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${contact}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{contact}</span>
              </a>
              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@{instagram}</span>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Tinashe Car Sales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
