"use client";

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { MarkitLogo } from "./MarkitLogo";

export function Hero() {
  return (
    <section className="relative px-6 py-32 text-center overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
      
      {/* Logo */}
      <div className="mb-8 relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-30 animate-pulse" />
        <div className="relative">
          <MarkitLogo size="xl" variant="default" className="mx-auto" />
          <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-spin" />
        </div>
      </div>
      
      {/* Supporting line */}
      <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
        Simplify forms, QR codes, and hiring — all in one place.
      </p>
      
      {/* Tagline */}
      <p className="text-sm md:text-base text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
        One hub, many SaaS tools
      </p>
      
      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="secondary" size="lg" className="bg-slate-800/50 border border-slate-600/50 text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm">
          Watch Demo
        </Button>
      </div>
    </section>
  );
}