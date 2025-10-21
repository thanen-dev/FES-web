"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import { Label } from "@/components/ui/label" 

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    interests: "",
    newsletter: false,
  })

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - NO CHANGES NEEDED */}
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
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto bg-card/70 border-border shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="text-primary">Join</span> the Interest List
              </h2>
              {/* === THE FIX IS HERE === 
                  1. onSubmit={handleSubmit} is removed.
                  2. action is set to the FormSubmit endpoint using your inferred email.
                  3. method="POST" is required for external submission.
                  4. The 'name' attributes are CRITICAL for FormSubmit to send the data. 
              */}
              <form 
                action="https://formsubmit.co/Thanenpeou@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                {/* FormSubmit will automatically send an email to the address in the action URL.
                  The subject will be generated from the form fields.
                */}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="First Name" // Name is used as the email field title
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      // disabled={isSubmitting} - Removed
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="Last Name" // Name is used as the email field title
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      // disabled={isSubmitting} - Removed
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Personal Email
                    </label>
                    <Input
                      id="email"
                      name="Email" // Name is used as the email field title
                      type="email"
                      placeholder="your@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      // disabled={isSubmitting} - Removed
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium mb-2">
                      Year / Program
                    </label>
                    <Input
                      id="year"
                      name="Year/Program" // Name is used as the email field title
                      type="text"
                      placeholder="e.g., Sophomore, Economics"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      required
                      // disabled={isSubmitting} - Removed
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-2">
                    Specific Interests
                  </label>
                  <Textarea
                    id="interests"
                    name="Specific Interests" // Name is used as the email field title
                    rows={4}
                    placeholder="What topics/events are you interested in?"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    // disabled={isSubmitting} - Removed
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    name="Newsletter" // Name is used as the email field title
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                    // disabled={isSubmitting} - Removed
                  />
                  <label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Subscribe to our newsletter and future communications.
                  </label>
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