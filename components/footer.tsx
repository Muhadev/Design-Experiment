import { Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The easiest way to save, spend and earn in Dollars</h2>
          </div>

          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors">
              <span>→</span>
              <span>Got questions? Talk to us</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors">
              <span>→</span>
              <span>Join our community</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">coinprofile</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-6">Learn more about Coinprofile</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Legal
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Resources
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Security
              </Link>
              <Link href="#" className="block text-white hover:text-gray-300 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-6">Stay in touch</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <span className="text-sm font-bold">TT</span>
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400">1209 Orange Street, Wilmington, Delaware, United States.</p>
            <p className="text-gray-400">+1(206) 922-8971</p>
          </div>
        </div>
      </div>
    </footer>
  )
}