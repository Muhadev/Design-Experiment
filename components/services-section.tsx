import { Send, CreditCard, Percent } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="w-full bg-red-300 py-24 px-8 lg:px-16 xl:px-24">
      <div className="max-w-8xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Send, spend and earn with crypto and cash
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Live your life on crypto. Make day-to-day spending a breeze with cash any time you need it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-12 border border-gray-300 shadow-sm">
            <div className="mb-8">
              <Send className="w-16 h-16 mx-auto text-gray-900 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Send</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Pay anyone, instantly</p>
          </div>

          <div className="bg-white rounded-2xl p-12 border border-gray-300 shadow-sm">
            <div className="mb-8">
              <CreditCard className="w-16 h-16 mx-auto text-gray-900 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Spend</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Get a debit card to spend anywhere</p>
          </div>

          <div className="bg-white rounded-2xl p-12 border border-gray-300 shadow-sm">
            <div className="mb-8">
              <Percent className="w-16 h-16 mx-auto text-gray-900 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Receive Dollar payments at a go</p>
          </div>
        </div>
      </div>
    </section>
  )
}