"use client";

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-6 py-32 text-center overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
      
      {/* Logo */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-30 animate-pulse" />
        <h1 className="relative text-5xl md:text-7xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Markit.one
        </h1>
        <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-spin" />
      </div>
      
      {/* Tagline */}
      <p className="text-xl md:text-3xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
        One hub, many SaaS tools
      </p>
      
      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
          Watch Demo
        </Button>
      </div>
    </section>
  );
}