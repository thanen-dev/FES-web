import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background/90 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/fes-logo.png" alt="FES Logo" width={48} height={48} />
              <span className="text-xl font-bold font-serif">FES</span>
            </div>
            <p className="text-muted-foreground">Mastering Money, Shaping Nations.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <a
              href="mailto:Thanenpeou@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors block mb-2"
            >
              Thanenpeou@gmail.com
            </a>
            <a
              href="https://dmuc.edu.kh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors block"
            >
              De Montfort University Cambodia
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2025 FES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
