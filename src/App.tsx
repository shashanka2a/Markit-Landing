import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import { FileText, QrCode, Users } from "lucide-react";

export default function App() {
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
                description="Create beautiful, responsive forms with ease. Collect data, manage submissions, and integrate with your favorite tools."
                icon={FileText}
                gradient="from-blue-500 to-cyan-400"
              />
              <ProductCard
                title="QRBee"
                description="Generate, customize, and track QR codes for all your needs. Perfect for marketing campaigns and digital experiences."
                icon={QrCode}
                gradient="from-green-500 to-emerald-400"
              />
              <ProductCard
                title="HackHire"
                description="Streamline your hiring process with smart tools for candidate tracking, interview scheduling, and team collaboration."
                icon={Users}
                gradient="from-purple-500 to-pink-400"
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