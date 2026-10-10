import React from "react";

function App2() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-500">
            DevSpace
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">About</a>
          </div>

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
              🚀 Build Faster. Scale Better.
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Build your
              <span className="text-blue-500"> next project </span>
              faster.
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-xl">
              A modern platform that helps developers build,
              manage and deploy powerful applications faster.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold">
                Get Started
              </button>

              <button className="border border-slate-700 hover:bg-slate-800 px-7 py-3 rounded-lg font-semibold">
                Learn More
              </button>

            </div>
          </div>

          {/* Right Dashboard Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl">

            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-800 rounded-xl p-5">
                <p className="text-slate-400 text-sm">
                  Users
                </p>
                <h3 className="text-3xl font-bold mt-2">
                  12.8K
                </h3>
                <p className="text-green-400 text-sm mt-2">
                  ↑ 18.4%
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <p className="text-slate-400 text-sm">
                  Revenue
                </p>
                <h3 className="text-3xl font-bold mt-2">
                  $48K
                </h3>
                <p className="text-green-400 text-sm mt-2">
                  ↑ 24.2%
                </p>
              </div>

              <div className="col-span-2 bg-slate-800 rounded-xl p-5 h-40">

                <p className="text-slate-400 text-sm mb-5">
                  Performance
                </p>

                <div className="flex items-end gap-3 h-20">
                  <div className="bg-blue-500 w-full h-8 rounded-t"></div>
                  <div className="bg-blue-500 w-full h-12 rounded-t"></div>
                  <div className="bg-blue-500 w-full h-10 rounded-t"></div>
                  <div className="bg-blue-500 w-full h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-full h-14 rounded-t"></div>
                  <div className="bg-blue-500 w-full h-20 rounded-t"></div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold">
              FEATURES
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Everything you need
            </h2>

            <p className="text-slate-400 mt-4">
              Powerful tools designed for modern developers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card */}
            <div className="bg-slate-950 border border-slate-800 p-7 rounded-xl hover:border-blue-500 transition">
              <div className="text-4xl mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-semibold">
                Fast Performance
              </h3>

              <p className="text-slate-400 mt-3">
                Optimized infrastructure delivers fast and
                reliable performance.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-7 rounded-xl hover:border-blue-500 transition">
              <div className="text-4xl mb-5">
                🔒
              </div>

              <h3 className="text-xl font-semibold">
                Secure
              </h3>

              <p className="text-slate-400 mt-3">
                Your applications and data are protected
                with modern security standards.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-7 rounded-xl hover:border-blue-500 transition">
              <div className="text-4xl mb-5">
                📊
              </div>

              <h3 className="text-xl font-semibold">
                Analytics
              </h3>

              <p className="text-slate-400 mt-3">
                Track your application performance with
                powerful analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                10K+
              </h3>
              <p className="text-slate-400 mt-2">
                Developers
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                500+
              </h3>
              <p className="text-slate-400 mt-2">
                Companies
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                99.9%
              </h3>
              <p className="text-slate-400 mt-2">
                Uptime
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">
                24/7
              </h3>
              <p className="text-slate-400 mt-2">
                Support
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to build something amazing?
          </h2>

          <p className="text-blue-100 mt-4">
            Start building your next project today.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100">
            Get Started
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <h3 className="font-bold text-xl">
            DevSpace
          </h3>

          <p className="text-slate-500 text-sm">
            © 2026 DevSpace. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App2;