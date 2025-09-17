"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, FileText, QrCode, Users, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  iconName: "FileText" | "QrCode" | "Users";
  gradient: string;
  url: string;
}

const iconMap: Record<string, LucideIcon> = {
  FileText: FileText,
  QrCode: QrCode,
  Users: Users,
};

export function ProductCard({ title, description, iconName, gradient, url }: ProductCardProps) {
  const Icon = iconMap[iconName];
  
  if (!Icon) {
    console.error(`Icon "${iconName}" not found in iconMap`);
    return null;
  }
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Hover glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${gradient} blur-xl`} />
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br ${gradient} blur-lg`} />
      
      {/* Card content */}
      <div className="relative bg-slate-800/70 backdrop-blur-sm h-full">
        <CardHeader className="relative pb-4">
          <div className={`mb-6 p-6 rounded-2xl bg-gradient-to-br ${gradient} w-fit shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            <Icon className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-left text-white mb-4 text-xl">{title}</CardTitle>
          <CardDescription className="text-left text-slate-300 leading-relaxed text-sm min-h-[20px] mb-6">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative pt-0 pb-6">
          <Button 
            size="lg"
            className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-200 w-full justify-center py-3"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Try it now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}