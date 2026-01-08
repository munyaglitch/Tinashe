"use client"

import { Phone, Instagram, Car, Shield, DollarSign, Wrench, Award, Sparkles } from "lucide-react"
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

  const landCruiserImages = [
    "/images/toyota-exterior-side.png",
    "/images/toyota-front-view.png",
    "/images/toyota-front-grille.png",
    "/images/toyota-rear-view.png",
    "/images/toyota-interior-dashboard.png",
    "/images/toyota-steering-wheel.png",
    "/images/toyota-center-console.png",
    "/images/toyota-front-seats-sunroof.png",
    "/images/toyota-rear-seats.png",
    "/images/toyota-rear-climate.png",
    "/images/landcruiser-side-profile.png",
    "/images/landcruiser-rear-quarter.png",
    "/images/landcruiser-rear-three-quarter.png",
    "/images/landcruiser-profile-view.png",
    "/images/landcruiser-front-view.png",
    "/images/landcruiser-taillight-badge.png",
    "/images/landcruiser-center-console.png",
    "/images/landcruiser-dashboard-cluster.png",
    "/images/landcruiser-front-interior.png",
    "/images/landcruiser-rear-interior.png",
  ]

  const landCruiserFeatures = [
    "Model: 2024",
    "Excellent Condition",
    "Recently Imported Vehicle",
    "Duty Fully Paid!",
    "BrandNew (Delivery Mileage)",
    "Automatic Transmission",
    "Engine: 3.3L Turbo Diesel",
    "Multi Steering Controls",
    "Reverse Camera + 360° Motion Sensor Cam",
    "Wide Sunroof Installed",
    "Auto DayTime Lights",
    "Spacious Executive Vehicle",
    "Premium Package",
    "Wide Multi Functional Display Unit",
    "Nice Mags Right Round",
    "Rear Entertainment Quality System",
    "3rd Row Seats",
    "Sparkling Full Leather Interior",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const mercedesC200Images = [
    "/images/mercedes-c200-side-profile.jpg",
    "/images/mercedes-c200-front-quarter.jpg",
    "/images/mercedes-c200-rear-view.jpg",
    "/images/mercedes-c200-rear-quarter.jpg",
    "/images/mercedes-c200-three-quarter.jpg",
    "/images/mercedes-c200-rear-angle.jpg",
    "/images/mercedes-c200-side-view.jpg",
    "/images/mercedes-c200-badge-detail.jpg",
    "/images/mercedes-c200-dashboard.jpg",
    "/images/mercedes-c200-center-console.jpg",
  ]

  const mercedesC200Features = [
    "Model: 2015",
    "Excellent Condition",
    "Recently Imported Vehicle",
    "Duty Fully Paid!",
    "Mileage: 51,876km",
    "Automatic Transmission",
    "Engine: 2.0L Petrol",
    "Reverse Camera + 360° Motion Sensor Cam",
    "Premium Edition Package",
    "Sport Package + Eco Mode",
    "Running DayTime LED Lights",
    "Intelligent Technological Features Installed",
    "Sportish Body",
    "Multi Steering Controls",
    "USB Ports + Bluetooth Interface",
    "Rear Entertainment",
    "Door Mercedes Refactor Light",
    "Sparkling Full Red Leather Interior",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const mercedesA45Images = [
    "/images/screenshot-202026-01-08-20184704.png", // Front three-quarter view
    "/images/screenshot-202026-01-08-20184653.png", // Front view
    "/images/screenshot-202026-01-08-20184714.png", // Front close-up with badge
    "/images/screenshot-202026-01-08-20184722.png", // Side/rear three-quarter with spoiler
    "/images/screenshot-202026-01-08-20184732.png", // Rear view with A45 badge
    "/images/screenshot-202026-01-08-20184635.png", // Rear close-up with AMG badge and taillights
    "/images/screenshot-202026-01-08-20184623.png", // Interior rear seats with red accents
    "/images/screenshot-202026-01-08-20184739.png", // Interior gear shifter with red lighting
  ]

  const mercedesA45Features = [
    "Model: 2016",
    "Excellent Condition",
    "Duty Full Paid!",
    "Mileage: 76,522km",
    "Automatic Transmission",
    "Engine: 2.0L Turbo Charged Petrol",
    "Angry Body",
    "Multi Steering Controls",
    "Reverse Camera",
    "Eco Mode + Sport Package",
    "Service Record (Crocco Motors)",
    "Rear Spoiler Installed",
    "Peddle Shifters",
    "Full Spec AMG Unit",
    "Auto DayTime Lights",
    "Well Maintained Vehicle",
    "Loud Exhaust",
    "Dope Mags Right Round",
    "Sparkling Leather Bucket AMG Interior",
    "Harman Kardon Quality System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const toyotaAurisImages = [
    "/images/screenshot-202026-01-08-20192153.png",
    "/images/screenshot-202026-01-08-20192207.png",
    "/images/screenshot-202026-01-08-20192135.png",
    "/images/screenshot-202026-01-08-20192214.png",
    "/images/screenshot-202026-01-08-20192128.png",
    "/images/screenshot-202026-01-08-20192145.png",
    "/images/screenshot-202026-01-08-20192200.png",
    "/images/screenshot-202026-01-08-20192105.png",
    "/images/screenshot-202026-01-08-20192112.png",
    "/images/screenshot-202026-01-08-20192119.png",
    "/images/screenshot-202026-01-08-20192049.png",
    "/images/screenshot-202026-01-08-20192057.png",
    "/images/screenshot-202026-01-08-20192033.png",
    "/images/screenshot-202026-01-08-20192041.png",
  ]

  const toyotaAurisFeatures = [
    "Model: 2016",
    "Excellent Condition",
    "Recently Imported Vehicle",
    "Duty Fully Paid!",
    "Mileage: 52,855km",
    "Automatic Transmission",
    "Engine: 1.5L Petrol + Hybrid Battery",
    "Reverse Camera + 360° Motion Sensor Cam",
    "Multi Steering Controls",
    "Auto DayTime Lights",
    "Eco Mode + Sport Mode",
    "Sparkling Half Leather Interior",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const toyotaHiluxImages = [
    "/images/hilux-front-three-quarter.png",
    "/images/hilux-front-grille.png",
    "/images/hilux-side-profile.png",
    "/images/hilux-side-rear-view.png",
    "/images/hilux-rear-three-quarter.png",
    "/images/hilux-rear-view.png",
    "/images/hilux-interior-full.png",
    "/images/hilux-dashboard-screen.png",
    "/images/hilux-steering-wheel.png",
    "/images/hilux-rear-interior.png",
  ]

  const toyotaHiluxFeatures = [
    "Model: 2025",
    "Excellent Condition",
    "Mileage: Delivery",
    "Automatic Transmission",
    "Engine: 2.8L Diesel",
    "SA Make",
    "4X4 Package",
    "Reverse Camera + 360° Dual Cam",
    "Multi Steering Controls",
    "Eco Mode + PWR Mode",
    "Auto DayTime Lights",
    "Motion Sensors Right Round",
    "Sparkling Full Fabric Interior",
    "Quality Sound System",
    "Solid Suspension",
    "Luxurious Drive",
  ]

  const contact = "+263783935399"
  const instagram = "tcars.zim"

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-3 rounded-xl shadow-lg ring-2 ring-primary/30">
              <Car className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tinashe Car Sales</h1>
              <p className="text-xs text-muted-foreground font-medium">Premium Luxury Vehicles</p>
            </div>
          </div>

          <nav className="flex items-center gap-3" role="navigation" aria-label="Main navigation">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
              onClick={() => window.open(`https://instagram.com/${instagram}`, "_blank")}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4 mr-2" />@{instagram}
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-md transition-all"
              onClick={() => (window.location.href = `tel:${contact}`)}
              aria-label="Call us now"
            >
              <Phone className="h-4 w-4 mr-2" />
              {contact}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto space-y-8 py-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border-2 border-primary/50 mb-4">
                <Award className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-semibold text-primary-foreground">
                  Zimbabwe's Premier Luxury Car Dealer
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
                <span className="text-foreground">Premium Vehicles,</span>
                <br />
                <span className="text-primary">Exceptional Service</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Discover our handpicked collection of{" "}
                <strong className="text-foreground">
                  luxury Range Rover, Toyota Land Cruiser, Mercedes-AMG, Ford Ranger, Toyota Auris Hybrid, and Toyota
                  Hilux GD6
                </strong>{" "}
                vehicles. Every car is carefully selected, <em>fully serviced</em>, and ready for immediate delivery
                with <strong className="text-primary">duty fully paid</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg h-16 px-10 shadow-xl transition-all hover:scale-105"
                  onClick={() => document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="View our vehicle inventory"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  View Luxury Inventory
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-16 px-10 bg-transparent border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105"
                  onClick={() => (window.location.href = `tel:${contact}`)}
                  aria-label="Contact us by phone"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ScrollReveal>
        <section className="py-20 bg-muted/10 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Why Choose <span className="text-primary">Tinashe Car Sales</span>?
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for premium luxury vehicles in Zimbabwe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="group text-center space-y-4 p-8 rounded-2xl bg-card border-2 border-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Verified Quality</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every luxury vehicle is thoroughly inspected with full documentation and{" "}
                  <strong>duty fully paid</strong>
                </p>
              </div>

              <div className="group text-center space-y-4 p-8 rounded-2xl bg-card border-2 border-secondary hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all hover:-translate-y-1">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all">
                  <DollarSign className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Best Prices</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Competitive pricing on Range Rover, Toyota Land Cruiser, Ford, Toyota Auris Hybrid, and Toyota Hilux
                  GD6 with transparent, no-hidden-fees policy
                </p>
              </div>

              <div className="group text-center space-y-4 p-8 rounded-2xl bg-card border-2 border-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all">
                  <Wrench className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Full Service</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Professional maintenance and support for all imported vehicles throughout ownership
                </p>
              </div>

              <div className="group text-center space-y-4 p-8 rounded-2xl bg-card border-2 border-secondary hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all hover:-translate-y-1">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all">
                  <Award className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Trusted Reputation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Years of experience delivering premium vehicles with exceptional customer satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Inventory Section */}
      <section id="inventory" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Current <span className="text-primary">Luxury Inventory</span>
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Explore our exclusive selection of{" "}
                <strong>
                  Range Rover, Toyota Land Cruiser 300, Mercedes-AMG A45, Ford Ranger Raptor, Toyota Auris Hybrid, and
                  Toyota Hilux GD6
                </strong>{" "}
                premium vehicles
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto space-y-12">
              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Toyota LandCruiser 300 Series ZX Edition"
                  model="Model: 2024"
                  price="$168,000 USD"
                  images={landCruiserImages}
                  features={landCruiserFeatures}
                  contact={contact}
                />
                <meta itemProp="name" content="Toyota LandCruiser 300 Series ZX Edition 2024" />
                <meta itemProp="brand" content="Toyota" />
                <meta itemProp="model" content="Land Cruiser 300 Series ZX" />
                <meta itemProp="vehicleModelDate" content="2024" />
                <meta itemProp="price" content="168000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Ford Ranger Raptor Edition"
                  model="Model: 2023"
                  price="$95,000 USD"
                  images={fordRaptorImages}
                  features={fordRaptorFeatures}
                  contact={contact}
                />
                <meta itemProp="name" content="Ford Ranger Raptor Edition 2023" />
                <meta itemProp="brand" content="Ford" />
                <meta itemProp="model" content="Ranger Raptor" />
                <meta itemProp="vehicleModelDate" content="2023" />
                <meta itemProp="price" content="95000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Mercedes-Benz A45 4MATIC AMG Edition"
                  model="Model: 2016"
                  price="$24,000 USD"
                  images={mercedesA45Images}
                  features={mercedesA45Features}
                  contact={contact}
                />
                <meta itemProp="name" content="Mercedes-Benz A45 4MATIC AMG Edition 2016" />
                <meta itemProp="brand" content="Mercedes-Benz" />
                <meta itemProp="model" content="A45 4MATIC AMG" />
                <meta itemProp="vehicleModelDate" content="2016" />
                <meta itemProp="price" content="24000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Mercedes-Benz C200 W205 Edition"
                  model="Model: 2015"
                  price="$23,000 USD"
                  images={mercedesC200Images}
                  features={mercedesC200Features}
                  contact={contact}
                />
                <meta itemProp="name" content="Mercedes-Benz C200 W205 Edition 2015" />
                <meta itemProp="brand" content="Mercedes-Benz" />
                <meta itemProp="model" content="C200 W205" />
                <meta itemProp="vehicleModelDate" content="2015" />
                <meta itemProp="price" content="23000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Range Rover Autobiography Sport Edition"
                  model="Model: 2025"
                  price="$270,000 USD"
                  images={rangeRoverImages}
                  features={rangeRoverFeatures}
                  contact={contact}
                />
                <meta itemProp="name" content="Range Rover Autobiography Sport Edition 2025" />
                <meta itemProp="brand" content="Land Rover" />
                <meta itemProp="model" content="Range Rover Autobiography Sport" />
                <meta itemProp="vehicleModelDate" content="2025" />
                <meta itemProp="price" content="270000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Toyota Auris NewShape Hybrid Edition"
                  model="Model: 2016"
                  price="$14,500 USD"
                  images={toyotaAurisImages}
                  features={toyotaAurisFeatures}
                  contact={contact}
                />
                <meta itemProp="name" content="Toyota Auris NewShape Hybrid Edition 2016" />
                <meta itemProp="brand" content="Toyota" />
                <meta itemProp="model" content="Auris Hybrid" />
                <meta itemProp="vehicleModelDate" content="2016" />
                <meta itemProp="price" content="14500" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>

              <article itemScope itemType="https://schema.org/Car">
                <VehicleCard
                  name="Toyota Hilux GD6 DoubleCab Edition"
                  model="Model: 2025"
                  price="$70,000 USD"
                  images={toyotaHiluxImages}
                  features={toyotaHiluxFeatures}
                  contact={contact}
                />
                <meta itemProp="name" content="Toyota Hilux GD6 DoubleCab Edition 2025" />
                <meta itemProp="brand" content="Toyota" />
                <meta itemProp="model" content="Hilux GD6 DoubleCab" />
                <meta itemProp="vehicleModelDate" content="2025" />
                <meta itemProp="price" content="70000" />
                <meta itemProp="priceCurrency" content="USD" />
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h3 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance leading-tight">
                Ready to Drive Your Dream Luxury Car?
              </h3>
              <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
                Contact us today for personalized service and exclusive deals on Range Rover, Toyota Land Cruiser,
                Mercedes-AMG, Ford Ranger, Toyota Auris Hybrid, and Toyota Hilux GD6 vehicles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg h-16 px-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl transition-all hover:scale-105"
                  onClick={() => (window.location.href = `tel:${contact}`)}
                  aria-label="Call us now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {contact}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-16 px-10 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
                  onClick={() => window.open(`https://instagram.com/${instagram}`, "_blank")}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow @{instagram}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-lg">
                  <Car className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-xl text-foreground">Tinashe Car Sales</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Zimbabwe's trusted dealer for premium Range Rover, Toyota Land Cruiser, Mercedes-AMG, Ford, Toyota Auris
                Hybrid, and Toyota Hilux GD6 luxury vehicles. All vehicles fully serviced with duty paid.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-foreground">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${contact}`} className="hover:text-primary transition-colors">
                    {contact}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-primary" />
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @{instagram}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-foreground">Brands</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Range Rover Autobiography</li>
                <li>Toyota Land Cruiser 300</li>
                <li>Mercedes-AMG Performance</li>
                <li>Ford Ranger Raptor</li>
                <li>Mercedes-Benz C-Class</li>
                <li>Toyota Auris Hybrid</li>
                <li>Toyota Hilux GD6</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2026 Tinashe Car Sales. All rights reserved. Premium luxury vehicle dealer in Zimbabwe.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
