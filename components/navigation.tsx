import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 px-8 lg:px-16 xl:px-24 py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          coinprofile
        </Link>
        <Link
          href="#"
          className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get started
        </Link>
      </div>
    </nav>
  )
}