import Link from "next/link"
import { MapPin, Clock, CalendarIcon, Users, Presentation, Lightbulb, PartyPopper, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-secondary overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FES <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Join us for exclusive workshops, guest lectures, and networking opportunities
          </p>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            What to <span className="text-primary">Expect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We host a variety of events throughout the year to help you grow professionally and personally
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Networking Events</h3>
                <p className="text-sm text-muted-foreground">Connect with peers, alumni, and industry professionals</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Presentation className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Panel Discussions</h3>
                <p className="text-sm text-muted-foreground">Engage with experts on current economic topics</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Talks & Lectures</h3>
                <p className="text-sm text-muted-foreground">Learn from guest speakers and thought leaders</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Social Events</h3>
                <p className="text-sm text-muted-foreground">Build friendships and community in a relaxed setting</p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">Develop practical skills through hands-on sessions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary">Upcoming</span> Events
          </h2>

          {/* Event Card 1 */}
          <Card className="mb-8 bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center border border-border">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm uppercase">Nov 2025</div>
                    <div className="text-xs mt-1 text-muted-foreground">6:00 PM</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">Inaugural Meet & Greet</h3>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">New</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Join us for our official launch event! Meet the founding team, learn about our plans for the year,
                    and connect with fellow economics enthusiasts.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>University Hall, Room 302</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button className="rounded-full">RSVP Now</Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Card 2 */}
          <Card className="mb-8 bg-card/70 border-border opacity-70">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center border border-border">
                    <div className="text-2xl font-bold text-primary">30</div>
                    <div className="text-sm uppercase">Nov 2025</div>
                    <div className="text-xs mt-1 text-muted-foreground">5:30 PM</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">Market Trends Workshop</h3>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Details coming soon! This workshop will explore current financial market trends and their economic
                    implications.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>TBA</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>90 minutes</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button disabled className="rounded-full">
                      RSVP Coming Soon
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">Want to be the first to know about new events?</p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/join">Join Our Mailing List</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">Past</span> Events
          </h2>
          <div className="text-center py-12">
            <CalendarIcon className="w-16 h-16 mx-auto mb-6 text-primary opacity-50" />
            <h3 className="text-xl font-bold mb-2">No Past Events Yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're just getting started! Check back after our inaugural event on November 15th.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
