import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tinashe Car Sales | Premium Luxury Cars for Sale in Zimbabwe | Range Rover, Toyota, Ford",
  description:
    "Buy premium luxury vehicles in Zimbabwe. Tinashe Car Sales offers Range Rover, Toyota Land Cruiser, Ford Ranger Raptor with full duty paid, verified quality. Best prices on imported luxury cars. Contact +263783935399",
  keywords: [
    "luxury cars Zimbabwe",
    "premium vehicles for sale",
    "Range Rover Zimbabwe",
    "Toyota Land Cruiser 300",
    "Ford Ranger Raptor",
    "imported cars Zimbabwe",
    "duty paid vehicles",
    "luxury car dealer",
    "SUV for sale Zimbabwe",
    "Tinashe Car Sales",
    "used luxury cars",
    "4x4 vehicles Zimbabwe",
  ],
  authors: [{ name: "Tinashe Car Sales" }],
  creator: "Tinashe Car Sales",
  publisher: "Tinashe Car Sales",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://tinashecarsales.com",
    title: "Tinashe Car Sales - Premium Luxury Vehicles in Zimbabwe",
    description:
      "Your trusted dealer for Range Rover, Toyota Land Cruiser, Ford Ranger Raptor. Fully duty paid, verified quality, competitive prices.",
    siteName: "Tinashe Car Sales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinashe Car Sales - Premium Luxury Cars in Zimbabwe",
    description: "Quality Range Rover, Toyota, Ford vehicles. Duty paid. Best prices. Contact +263783935399",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "Tinashe Car Sales",
              description: "Premium luxury vehicle dealer in Zimbabwe specializing in Range Rover, Toyota, and Ford",
              url: "https://tinashecarsales.com",
              telephone: "+263783935399",
              priceRange: "$$$$",
              image: "https://tinashecarsales.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZW",
                addressLocality: "Zimbabwe",
              },
              sameAs: ["https://instagram.com/tcars.zim"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
