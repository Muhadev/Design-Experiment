import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PaymentSection from "@/components/payment-section"
// import CardSection from "@/components/card-section"
import TestimonialsSection from "@/components/testimonials-section"
import TrustSection from "@/components/trust-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {" "}
        {/* Add padding top for fixed navigation */}
        <HeroSection />
        <ServicesSection />
        <PaymentSection />
        {/* <CardSection /> */}
        <TestimonialsSection />
        <TrustSection />
        <Footer />
      </div>
    </main>
  )
}
