import { Users, Mail, Linkedin, Github } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Thanen Peou",
      role: "Co-Founder",
      bio: "Passionate about finance and economics, dedicated to building a community of learners and future leaders.",
      image: "/thanen.jpg",
      email: "thanenpeou@fes.com",
      linkedin: "https://www.linkedin.com/in/thanen-p-9a907227a/",
      github: "#",
    },
    {
      name: "Kokchhe Ou",
      role: "Co-Founder",
      bio: "Enthusiastic about economic policy and financial markets, committed to creating impactful learning experiences.",
      image: "/chhe.jpg",
      email: "kokchheou@fes.com",
      linkedin: "https://www.linkedin.com/in/kokchhe-ou-078295350/",
      github: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Meet Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The People Behind <span className="text-primary">FES</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We're a dedicated team of students passionate about finance, economics, and building a thriving community
              of learners.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We're always looking for passionate individuals to help grow FES. If you're interested in finance,
              economics, and making an impact, we'd love to hear from you.
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Users className="w-5 h-5" />
              Join Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
