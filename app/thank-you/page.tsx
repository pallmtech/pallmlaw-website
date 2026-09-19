import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Confirmation page for a scheduled PallmLaw intro call.",
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
          Your 15-minute PallmLaw intro is on the calendar.
        </p>
        <p className="confirmation-copy">
          We will use the conversation to map how matters move today, where
          follow-up or visibility breaks down, and whether PallmLaw fits your
          firm's operating model.
        </p>
      </section>
    </main>
  );
}
