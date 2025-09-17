"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function ProductCard({ title, description, icon: Icon, gradient }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:scale-105 border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:border-slate-600">
      {/* Hover glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${gradient} blur-xl`} />
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${gradient} blur-lg`} />
      
      {/* Card content */}
      <div className="relative bg-slate-800/70 backdrop-blur-sm h-full">
        <CardHeader className="relative">
          <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${gradient} w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-left text-white mb-2">{title}</CardTitle>
          <CardDescription className="text-left text-slate-300 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative pt-0">
          <Button variant="ghost" className="group/btn p-0 h-auto text-slate-200 hover:text-white transition-colors">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}