import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Mail, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Thank You Section */}
      <section className="py-20 min-h-[80vh] flex items-center bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-8 animate-in zoom-in duration-500" />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Thank You for <span className="text-primary">Signing Up!</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            We're excited to have you join the Finance & Economic Society community.
          </p>

          <div className="max-w-2xl mx-auto bg-card/50 border border-border rounded-lg p-8 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground mb-4">
              Your email client should have opened to send us your information. If it didn't open automatically, please
              email us directly at:
            </p>
            <a
              href="mailto:Thanenpeou@gmail.com"
              className="text-primary text-lg font-semibold hover:underline inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Thanenpeou@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link href="/">
              <Button size="lg" className="rounded-full">
                <Home className="w-5 h-5 mr-2" />
                Return to Homepage
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                View Upcoming Events
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            We'll be in touch soon with updates about upcoming events, workshops, and opportunities to get involved with
            FES.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
