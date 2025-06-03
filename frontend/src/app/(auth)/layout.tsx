import { P } from "@/components/custom/p";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="flex-1 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 md:flex items-center justify-center p-8 hidden relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Geometric decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/15 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative z-10 max-w-lg">
          <div className="mb-6">
            <h1
              className={cn(
                "text-5xl font-bold text-white tracking-tight mb-2",
                "bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              )}
            >
              Telemonetize
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
          </div>

          <P className="text-blue-50 text-lg leading-relaxed mb-6">
            The only platform that is able to monetize your telegram group with
            powerful analytics and seamless integration.
          </P>

          <div className="flex items-center space-x-4 text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-sm">Easy Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full h-full flex items-center justify-center p-6 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Content wrapper with glass effect */}
        <div className="relative z-10 w-full max-w-md">
          <div className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-xl border border-white/20 p-8">
            {children}
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce delay-1000 hidden lg:block"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-purple-500/20 rounded-full animate-bounce delay-500 hidden lg:block"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-indigo-500/20 rounded-full animate-bounce hidden lg:block"></div>
      </div>
    </main>
  );
};

export default Layout;
