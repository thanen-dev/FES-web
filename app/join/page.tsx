"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    interests: "",
    newsletter: false,
  })

  const handleInputChange = (field: string, value: string) => {
    console.log("[v0] Input changed:", field, value)
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`FES Join Request - ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Year/Program: ${formData.year}\n` +
        `Interests: ${formData.interests}\n` +
        `Newsletter: ${formData.newsletter ? "Yes" : "No"}`,
    )

    window.location.href = `mailto:Thanenpeou@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join <span className="text-primary">FES</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Sign up to receive event invitations, our newsletter, and opportunities to get involved.
          </p>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto bg-card/70 border-border shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="text-primary">Join</span> the Interest List
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">University Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@dmuc.edu.kh"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="year">Year / Program</Label>
                    <Input
                      id="year"
                      name="year"
                      type="text"
                      required
                      placeholder="e.g., Sophomore, Economics"
                      value={formData.year}
                      onChange={(e) => handleInputChange("year", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interests">Specific Interests</Label>
                  <Textarea
                    id="interests"
                    name="interests"
                    rows={4}
                    placeholder="What topics/events are you interested in?"
                    value={formData.interests}
                    onChange={(e) => handleInputChange("interests", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                  />
                  <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Subscribe to our newsletter and future communications.
                  </Label>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Sign Up and Get Involved
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
