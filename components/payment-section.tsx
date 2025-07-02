export default function PaymentSection() {
  return (
    <section className="w-full bg-yellow-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* First section - Pay anyone instantly */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          {/* Left side - Text and Card */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pay anyone, instantly</h2>
              <p className="text-lg text-gray-700">
                Send and receive money anytime, anywhere. It's fast, free, and seamless.
              </p>
            </div>

            {/* Black debit card */}
            <div className="w-72 h-44 bg-black rounded-xl p-5 text-white relative">
              <div className="text-sm mb-6">coinprofile</div>
              <div className="text-lg mb-4">**** **** **** 5879</div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-gray-300">VALID THRU</div>
                  <div className="text-sm">03/04</div>
                </div>
                <div>
                  <div className="text-xs text-gray-300">CVV</div>
                  <div className="text-sm">***</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-7 h-7 bg-gray-400 rounded-full opacity-80"></div>
                  <div className="w-7 h-7 bg-gray-600 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Payment form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl p-6 shadow-lg w-80 transform rotate-3">
              <div className="mb-4">
                <p className="text-sm text-gray-600">1 BTC = 23,159,868.73 NGN</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Send</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value="0.0123121" 
                      className="flex-1 p-3 border rounded-lg" 
                      readOnly 
                    />
                    <div className="bg-gray-100 px-4 py-3 rounded-lg border">BTC</div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Receive</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value="100,000.00" 
                      className="flex-1 p-3 border rounded-lg" 
                      readOnly 
                    />
                    <div className="bg-gray-100 px-4 py-3 rounded-lg border">NGN</div>
                  </div>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second section - Get a debit card */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get a debit card to spend anywhere</h3>
            <p className="text-lg text-gray-700">
              Spend effortlessly with your Coinprofile card in 150+ currencies with no hidden fees
            </p>
          </div>
          
          {/* Interest payments card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl p-5 shadow-lg w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Interest paid</div>
                      <div className="w-16 h-2 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+ $1.5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Interest paid</div>
                      <div className="w-12 h-2 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+ $1.5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Interest paid</div>
                      <div className="w-14 h-2 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">+ $1.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third section - Receive Dollar payments */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Another black card */}
          <div className="w-72 h-44 bg-black rounded-xl p-5 text-white relative">
            <div className="text-sm mb-6">coinprofile</div>
            <div className="text-lg mb-4">**** **** **** 5879</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs text-gray-300">VALID THRU</div>
                <div className="text-sm">03/04</div>
              </div>
              <div>
                <div className="text-xs text-gray-300">CVV</div>
                <div className="text-sm">***</div>
              </div>
              <div className="flex gap-1">
                <div className="w-7 h-7 bg-gray-400 rounded-full opacity-80"></div>
                <div className="w-7 h-7 bg-gray-600 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Right side - Text and interest card */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Receive Dollar payments at a go</h3>
              <p className="text-lg text-gray-700">
                Send and receive payments for international gigs easy and fast.
              </p>
            </div>

            {/* Small interest payments mockup */}
            <div className="bg-white rounded-xl p-4 shadow-lg w-72 transform rotate-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">Interest paid</div>
                      <div className="w-12 h-1.5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm font-medium">+ $1.5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">Interest paid</div>
                      <div className="w-10 h-1.5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm font-medium">+ $1.5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">←</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-900">Interest paid</div>
                      <div className="w-14 h-1.5 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm font-medium">+ $1.5</span>
                </div>
              </div>
            </div>

            {/* Additional debit card text */}
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Get a debit card to spend anywhere</h4>
              <p className="text-gray-700">
                Spend effortlessly with your Coinprofile card in 150+ currencies with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}