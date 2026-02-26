import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Priceless CPA | Expert Tax and Crypto Business Strategies',
  description: 'Discover Priceless CPA for expert tax prep, crypto accounting, and business strategy. Simplify taxes and grow your business.',
  keywords: ['CPA', 'tax strategy', 'crypto accounting', 'business accounting', 'tax preparation'],
  authors: [{ name: 'Anthony Price' }],
  openGraph: {
    title: 'Priceless CPA | Expert Tax and Crypto Business Strategies',
    description: 'Discover Priceless CPA for expert tax prep, crypto accounting, and business strategy. Simplify taxes and grow your business.',
    url: 'https://priceless-cpa.vercel.app',
    siteName: 'Priceless CPA',
    images: [
      {
        url: 'https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1.webp',
        width: 500,
        height: 500,
        alt: 'Priceless CPA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priceless CPA | Expert Tax and Crypto Business Strategies',
    description: 'Discover Priceless CPA for expert tax prep, crypto accounting, and business strategy.',
    images: ['https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1.webp'],
  },
  icons: {
    icon: 'https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp',
    apple: 'https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap" 
          as="style" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
