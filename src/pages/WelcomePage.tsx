// PayWise-inspired landing page component

const WelcomePage = () => {
  const features = [
    {
      title: "PayTag System",
      description: "Fast recipients easily using unique PayTag like @username123 instead of complex account numbers.",
      icon: "👤"
    },
    {
      title: "Instant Transfers",
      description: "Send money instantly with real-time processing and immediate confirmation receipts.",
      icon: "⚡"
    },
    {
      title: "Secure Authorization",
      description: "Every transaction requires your 6-digit PIN with automatic security lockout protection.",
      icon: "🔒"
    },
    {
      title: "Digital Receipts",
      description: "Get detailed e-Bills for every transaction that you can save and share as images.",
      icon: "📱"
    },
    {
      title: "Transaction History",
      description: "Track all your transfers with detailed transaction history and easy-to-access transaction details.",
      icon: "📊"
    },
    {
      title: "Mobile Optimized",
      description: "Seamlessly integrated with our existing mobile banking app for familiar experience.",
      icon: "📲"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Find Recipient",
      description: "Enter the recipient's PayTag (@username123)"
    },
    {
      number: "2", 
      title: "Enter Details",
      description: "Add amount and optional memo"
    },
    {
      number: "3",
      title: "Review & Confirm",
      description: "Verify all transaction details"
    },
    {
      number: "4",
      title: "Authorize",
      description: "Enter your 6-digit PIN to complete"
    }
  ];

  const securityFeatures = [
    {
      title: "PIN Protection",
      description: "Every transaction requires your secure 6-digit PIN.",
      icon: "🔐"
    },
    {
      title: "Auto-Lock",
      description: "Automatic lockout after 3 failed PIN attempts.",
      icon: "🔒"
    },
    {
      title: "Validation",
      description: "Real-time recipient and balance verification.",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            New P2P Transfer Feature
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Send Money<br />
            <span className="text-blue-600">Fast & Simple</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            PayWise makes peer-to-peer transfers effortless. Split bills, send money to
            family, or pay friends instantly with just a PayTag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Transferring →
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for seamless peer-to-peer transfers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Send money in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Experience Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Experience PayWise<br />
                On Your Mobile
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Try our interactive demo! Enter recipient details and see how easy
                it is to send money.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Instant recipient validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Real-time balance checking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Automatic transaction receipts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete transaction history</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-3xl p-8 max-w-sm w-full shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Send Money</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">To PayTag</label>
                      <input 
                        type="text" 
                        placeholder="@username123" 
                        className="w-full p-3 border border-gray-200 rounded-lg"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Amount (₿)</label>
                      <input 
                        type="text" 
                        placeholder="0.00" 
                        className="w-full p-3 border border-gray-200 rounded-lg text-2xl font-bold"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Memo (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="What's this for?" 
                        className="w-full p-3 border border-gray-200 rounded-lg"
                        readOnly
                      />
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Bank-Level Security
            </h2>
            <p className="text-xl text-blue-200">
              Your money and data are protected with enterprise-grade security measures
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Using PayWise?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying fast, secure P2P transfers
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  P
                </div>
                <span className="text-white font-bold text-xl">PayWise</span>
              </div>
              <p className="text-blue-200">
                Fast, simple, and secure peer-to-peer transfers for your mobile banking app.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-blue-200">
                <li>PayTag System</li>
                <li>Instant Transfers</li>
                <li>Digital Receipts</li>
                <li>Transaction History</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Security</h4>
              <ul className="space-y-2 text-blue-200">
                <li>PIN Protection</li>
                <li>Auto Lock Features</li>
                <li>Bank-Level Encryption</li>
                <li>Real-time Validation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-200">© 2024 PayWise. All rights reserved. Part of your trusted mobile banking experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;