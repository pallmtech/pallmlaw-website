import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | LawOps",
  description: "Confirmation page for a scheduled LawOps intro call.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ThankYouPage() {
  return (
    <main className="confirmation-shell">
      <section className="confirmation-card">
        <p className="section-tag">Appointment Confirmed</p>
        <h1>Thank you for booking.</h1>
        <p className="confirmation-lede">
          Your 15-minute LawOps intro is on the calendar.
        </p>
        <p className="confirmation-copy">
          We will use this time to understand how your Estate Planning firm runs
          matters today, where visibility breaks down, and whether LawOps is a fit.
        </p>
        <div className="inline-cta-row confirmation-actions">
          <Link className="button button-primary" href="/">
            Back To Site
          </Link>
          <Link className="button button-secondary" href="/estate-planning">
            View Estate Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
