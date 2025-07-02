import { Twitter } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sola Akindolu",
      handle: "@akindolu",
      text: "Coinprofile is a very well designed product. Love it, and recommend to anyone moving cash from US to NG.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Anthony Azekwoh",
      handle: "@AnthonyAzekwoh",
      text: "Coinprofile is an amazing service that has been invaluable to me as Nigerian in the NFT space, allowing me to sell quickly without hassle.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Ugwu",
      handle: "@iam_metamike",
      text: "Using Coinprofile, I can send money from the U.K. to Nigeria in about 5-10 minutes.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "David Nadwa",
      handle: "@justvibescode",
      text: "The new Coinprofile send flow feels like magic!!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full bg-purple-200 py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Don't just take our<br />word for it
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-5 border-2 border-gray-300 shadow-sm">
              <p className="text-gray-700 mb-4 text-base leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs">{testimonial.handle}</div>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}