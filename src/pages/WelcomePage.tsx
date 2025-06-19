// WelcomePage component

const WelcomePage = () => {
  const features = [
    {
      title: "Component-Based",
      description: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      icon: "🧩"
    },
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
      icon: "📝"
    },
    {
      title: "Learn Once, Write Anywhere",
      description: "We don't make assumptions about the rest of your technology stack, so you can develop new features without rewriting existing code.",
      icon: "🚀"
    }
  ];

  const techStack = [
    { name: "React", version: "19.1.0", color: "text-blue-400" },
    { name: "TypeScript", version: "5.8.3", color: "text-blue-600" },
    { name: "Vite", version: "6.3.5", color: "text-purple-400" },
    { name: "Tailwind CSS", version: "4.1.10", color: "text-cyan-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              R
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">React</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A JavaScript library for building user interfaces. Create dynamic, interactive web applications 
            with a component-based architecture that scales from simple pages to complex applications.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 text-center hover:bg-gray-600/50 transition-colors duration-300">
                <h3 className={`text-lg font-semibold ${tech.color} mb-2`}>
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-sm">v{tech.version}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Choose React?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              This React application is set up with TypeScript for type safety, Vite for fast development, 
              and Tailwind CSS for rapid UI development. Everything you need to build modern web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Coding
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p className="mb-2">Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS</p>
          <p className="text-sm">© 2025 Your React Application</p>
        </footer>
      </div>
    </div>
  );
};

export default WelcomePage;