"use client";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Twitter, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        {/* CTA Section */}
        <div className="text-center mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-slate-700/50 backdrop-blur-sm">
          <h3 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Start building smarter workflows today — free.
          </h3>
          <p className="text-slate-300 mb-2 max-w-2xl mx-auto">
            Join thousands of teams already using Markit.one to boost their productivity.
          </p>
          <p className="text-sm text-slate-400 mb-6">
            No credit card required
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Separator className="mb-12 bg-slate-700/50" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Markit.one
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Streamlining your workflow with powerful SaaS tools.
            </p>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-white">Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">FormEase</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">QRBee</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">HackHire</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Privacy</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-10 w-10 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-slate-700/50" />
        
        <div className="text-center text-sm text-slate-500">
          © 2024 Markit.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}