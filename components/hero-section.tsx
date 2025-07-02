"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Smartphone, Play } from "lucide-react"

export default function HeroSection() {
  const [sendAmount, setSendAmount] = useState("0.67837838")
  const [receiveAmount, setReceiveAmount] = useState("502")
  const [exchangeRate, setExchangeRate] = useState(1537.5)
  const [sendCurrency, setSendCurrency] = useState("USD")
  const [receiveCurrency, setReceiveCurrency] = useState("NGN")

  // Simulate fetching exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      // In a real app, you'd fetch from an API like exchangerate-api.com
      // For demo purposes, using a static rate
      setExchangeRate(1537.5)
    }
    fetchExchangeRate()
  }, [])

  const handleSendAmountChange = (value: string) => {
    setSendAmount(value)
    const numValue = Number.parseFloat(value) || 0
    if (sendCurrency === "USD" && receiveCurrency === "NGN") {
      setReceiveAmount((numValue * exchangeRate).toFixed(2))
    } else if (sendCurrency === "NGN" && receiveCurrency === "USD") {
      setReceiveAmount((numValue / exchangeRate).toFixed(8))
    }
  }

  const handleReceiveAmountChange = (value: string) => {
    setReceiveAmount(value)
    const numValue = Number.parseFloat(value) || 0
    if (receiveCurrency === "NGN" && sendCurrency === "USD") {
      setSendAmount((numValue / exchangeRate).toFixed(8))
    } else if (receiveCurrency === "USD" && sendCurrency === "NGN") {
      setSendAmount((numValue * exchangeRate).toFixed(2))
    }
  }

  const swapCurrencies = () => {
    const tempCurrency = sendCurrency
    const tempAmount = sendAmount
    setSendCurrency(receiveCurrency)
    setReceiveCurrency(tempCurrency)
    setSendAmount(receiveAmount)
    setReceiveAmount(tempAmount)
  }

  return (
    <section className="w-full bg-orange-50 pt-32 pb-24 px-8 lg:px-16 xl:px-24">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-12">
              <span className="whitespace-nowrap">Save, spend and earn in</span> <span className="block">dollars</span>
            </h1>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-gray-700 font-medium">Send and receive money from anywhere</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-gray-700 font-medium">Spend internationally with your USD card</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-gray-700 font-medium">Save and stash your Dollars without worries</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 flex items-center gap-3 text-lg">
              <Smartphone className="w-5 h-5" />
              Get the app
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-3 bg-transparent text-lg"
            >
              <Play className="w-5 h-5" />
              See how it works
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border max-w-sm ml-auto">
          <div className="mb-3">
            <p className="text-sm text-gray-600">1 USD = {exchangeRate.toFixed(2)} NGN</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Send</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={sendAmount}
                  onChange={(e) => handleSendAmountChange(e.target.value)}
                  className="flex-1 text-sm"
                  step="any"
                />
                <Select value={sendCurrency} onValueChange={setSendCurrency}>
                  <SelectTrigger className="w-16 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="NGN">NGN</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Receive</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={receiveAmount}
                  onChange={(e) => handleReceiveAmountChange(e.target.value)}
                  className="flex-1 text-sm"
                  step="any"
                />
                <Select value={receiveCurrency} onValueChange={setReceiveCurrency}>
                  <SelectTrigger className="w-16 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NGN">NGN</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 text-sm">
              Send money within 10 minutes
            </Button>
          </div>
        </div>
      </div>

      {/* Backed by section - centered and inline */}
      <div className="mt-16 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-gray-600 text-lg">Backed by</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              <span className="text-2xl font-bold text-gray-900">celo</span>
            </div>
            <div className="bg-black text-white px-4 py-2 text-lg font-bold rounded">Y Combinator</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900">flori</span>
              <span className="text-lg text-gray-600">ventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}