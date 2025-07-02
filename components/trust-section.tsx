import { MessageCircle, Shield, Lock } from "lucide-react"

export default function TrustSection() {
  return (
    <section className="w-full bg-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">You can count on us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We're passionate about making everyday financial life of our customers as easy, seamless and delightful as
            possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="mb-4">
              <MessageCircle className="w-12 h-12 mx-auto text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 support</h3>
            <p className="text-gray-600 text-sm">We're always here to help</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="mb-4">
              <Shield className="w-12 h-12 mx-auto text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fraud Protection</h3>
            <p className="text-gray-600 text-sm">We follow AML/KYC standards</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="mb-4">
              <Lock className="w-12 h-12 mx-auto text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">With 2FA, only you can access your account</p>
          </div>
        </div>
      </div>
    </section>
  )
}