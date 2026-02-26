import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-deep flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Image 
          src="https://pricelesscpa.com/wp-content/uploads/2025/07/PCPALogotipo1-60x60.webp" 
          alt="Priceless CPA Logo" 
          width={80} 
          height={80}
          className="mx-auto mb-8 rounded-xl"
        />
        <h1 className="font-display text-6xl text-gold mb-4">404</h1>
        <h2 className="font-display text-2xl text-text-white mb-4">Page Not Found</h2>
        <p className="text-text-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-gold hover:bg-gold-light text-bg-deep px-6 py-3 rounded-lg font-semibold transition"
          >
            Go Home
          </Link>
          <a 
            href="https://calendly.com/pricelesscpa/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-bg-deep px-6 py-3 rounded-lg font-semibold transition"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  )
}
