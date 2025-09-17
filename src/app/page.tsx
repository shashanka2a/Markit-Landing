import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Products Section */}
        <section className="px-6 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Our Products
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                Discover our suite of powerful tools designed to streamline your workflow and boost productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="FormEase"
                description="Build forms in minutes, no coding."
                iconName="FileText"
                gradient="from-blue-500 to-cyan-400"
                url="https://formease.xyz/"
              />
              <ProductCard
                title="QRBee"
                description="Generate & track QR codes effortlessly."
                iconName="QrCode"
                gradient="from-green-500 to-emerald-400"
                url="https://qrbee.xyz/"
              />
              <ProductCard
                title="HackHire"
                description="Streamline hiring with smart tools."
                iconName="Users"
                gradient="from-purple-500 to-pink-400"
                url="https://hackhire.dev/"
              />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}