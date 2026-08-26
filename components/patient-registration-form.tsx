'use client'

import type React from 'react'
import { useState } from 'react'
import { HeartPulse } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FieldProps = {
  id: string
  label: string
  children: React.ReactNode
  required?: boolean
  className?: string
}

function Field({ id, label, children, required, className }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
    </div>
  )
}

const fieldClasses =
  'h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

export function PatientRegistrationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5">
      {/* Blue header */}
      <header className="bg-primary px-6 py-6 text-primary-foreground sm:px-8">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-foreground/15"
            aria-hidden="true"
          >
            <HeartPulse className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-xl font-semibold leading-tight text-balance">
              Patient Registration
            </h1>
            <p className="text-sm text-primary-foreground/80">
              Eldama Ravine Hospital
            </p>
          </div>
        </div>
      </header>

      {submitted ? (
        <div className="px-6 py-12 text-center sm:px-8" role="status">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <HeartPulse className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Registration submitted
          </h2>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">
            Thank you. Our front desk team will review your details and confirm
            your appointment shortly.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            Register another patient
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8 sm:py-8">
          {/* Personal details */}
          <section aria-labelledby="section-personal">
            <h2
              id="section-personal"
              className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Personal details
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="fullName"
                label="Full name"
                required
                className="sm:col-span-2"
              >
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Wanjiru Kamau"
                  className={fieldClasses}
                />
              </Field>

              <Field id="dob" label="Date of birth" required>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className={fieldClasses}
                />
              </Field>

              <Field id="gender" label="Gender" required>
                <select
                  id="gender"
                  name="gender"
                  required
                  defaultValue=""
                  className={fieldClasses}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </Field>
            </div>
          </section>

          {/* Contact details */}
          <section aria-labelledby="section-contact" className="mt-8">
            <h2
              id="section-contact"
              className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Contact details
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="phone" label="Contact number" required>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="0712 345 678"
                  className={fieldClasses}
                />
              </Field>

              <Field id="email" label="Email address" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="wanjiru@example.co.ke"
                  className={fieldClasses}
                />
              </Field>

              <Field
                id="address"
                label="Home address"
                required
                className="sm:col-span-2"
              >
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  autoComplete="street-address"
                  required
                  placeholder="P.O. Box 45, Eldama Ravine, Baringo County"
                  className={`${fieldClasses} h-auto resize-none py-2.5 leading-relaxed`}
                />
              </Field>
            </div>
          </section>

          {/* Emergency contact */}
          <section aria-labelledby="section-emergency" className="mt-8">
            <h2
              id="section-emergency"
              className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Emergency contact
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="emergencyName" label="Contact name" required>
                <input
                  id="emergencyName"
                  name="emergencyName"
                  type="text"
                  required
                  placeholder="Otieno Omondi"
                  className={fieldClasses}
                />
              </Field>

              <Field id="emergencyPhone" label="Contact number" required>
                <input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  type="tel"
                  required
                  placeholder="0723 987 654"
                  className={fieldClasses}
                />
              </Field>
            </div>
          </section>

          {/* Visit */}
          <section aria-labelledby="section-visit" className="mt-8">
            <h2
              id="section-visit"
              className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Visit information
            </h2>
            <Field id="reason" label="Reason for visit" required>
              <textarea
                id="reason"
                name="reason"
                rows={3}
                required
                placeholder="Briefly describe your symptoms or reason for the appointment"
                className={`${fieldClasses} h-auto resize-none py-2.5 leading-relaxed`}
              />
            </Field>
          </section>

          <div className="mt-8 flex flex-col-reverse items-center gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">*</span> Required fields
            </p>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Submit registration
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
