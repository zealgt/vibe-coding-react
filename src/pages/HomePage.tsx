const HomePage = () => {
  const stats = [
    { number: "500M+", label: "Websites Built", icon: "🌐" },
    { number: "10M+", label: "Developers", icon: "👨‍💻" },
    { number: "200K+", label: "Companies", icon: "🏢" },
    { number: "95%", label: "Performance", icon: "⚡" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with real-time inventory",
      tech: ["React", "TypeScript", "Node.js"],
      color: "from-web-green-500 to-web-green-600",
      icon: "🛒"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and engagement tracking in real-time",
      tech: ["React", "D3.js", "Firebase"],
      color: "from-web-green-400 to-web-green-500",
      icon: "📊"
    },
    {
      title: "Video Streaming App",
      description: "High-quality video streaming with adaptive bitrate",
      tech: ["React", "WebRTC", "AWS"],
      color: "from-web-green-600 to-web-green-700",
      icon: "🎬"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI with natural language processing",
      tech: ["React", "OpenAI", "Python"],
      color: "from-web-green-300 to-web-green-400",
      icon: "🤖"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-web-green-900 to-neutral-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold text-white mb-6">
            Build the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-web-green-400 via-web-green-300 to-web-green-200">
              {" "}Future
            </span>
          </h1>
          <p className="text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover amazing projects built with React. From simple websites to complex applications,
            see what's possible when creativity meets cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-web-green-500 to-web-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-web-green-600 hover:to-web-green-700 transition-all duration-300 shadow-2xl hover:shadow-web-green-500/25">
              Explore Projects
            </button>
            <button className="border-2 border-web-green-400 text-web-green-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-web-green-400 hover:text-neutral-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-web-green-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-neutral-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-white text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
            Real-world applications built with React showcasing modern development practices
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700 hover:border-web-green-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-web-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-neutral-700/50 text-neutral-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-web-green-400 font-semibold hover:text-web-green-300 transition-colors duration-300 flex items-center group">
                    View Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-web-green-500/10 via-web-green-400/10 to-web-green-600/10 rounded-3xl p-12 border border-web-green-400/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers building the next generation of web applications with React.
            Start your journey today and bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-web-green-500 to-web-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-web-green-600 hover:to-web-green-700 transition-all duration-300 shadow-lg hover:shadow-web-green-500/25">
              Start Building Now
            </button>
            <button className="border border-web-green-400 text-web-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-web-green-400 hover:text-neutral-900 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;