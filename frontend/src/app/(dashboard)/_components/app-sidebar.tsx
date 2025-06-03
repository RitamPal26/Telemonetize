"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  RiBubbleChartFill,
  RiMoneyDollarCircleFill,
  RiUserCommunityFill,
} from "@remixicon/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard/overview",
    icon: RiBubbleChartFill,
    badge: null,
    description: "Analytics & insights",
  },
  {
    title: "Groups",
    url: "/dashboard/groups",
    icon: RiUserCommunityFill,
    badge: "NEW",
    description: "Manage telegram groups",
  },
  {
    title: "Payout",
    url: "/dashboard/payout",
    icon: RiMoneyDollarCircleFill,
    badge: "NEW",
    description: "Earnings & payments",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-800 bg-slate-950"
    >
      {/* Header */}
      <SidebarHeader className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-blue-500/20">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950"></div>
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h3 className="font-bold text-white text-lg leading-tight">
              Telemonetize
            </h3>
            <p className="text-slate-400 text-sm font-medium">
              Premium Dashboard
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-6">
        {/* Main Navigation */}
        <SidebarGroup className="space-y-3">
          <SidebarGroupLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wider px-3 mb-4">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative group h-auto min-h-[60px] p-0 rounded-xl transition-all duration-200 overflow-hidden",
                        "hover:bg-slate-800/80 hover:shadow-lg hover:shadow-slate-900/50",
                        isActive && [
                          "bg-gradient-to-r from-blue-600 to-purple-600",
                          "shadow-lg shadow-blue-500/25",
                          "hover:from-blue-700 hover:to-purple-700",
                          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent",
                        ]
                      )}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center w-full p-4"
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-r-full shadow-lg shadow-yellow-500/50"></div>
                        )}

                        <div className="flex items-center space-x-4 flex-1 relative z-10">
                          {/* Icon container */}
                          <div
                            className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0",
                              isActive
                                ? "bg-white/20 shadow-inner"
                                : "bg-slate-800 group-hover:bg-slate-700"
                            )}
                          >
                            <item.icon
                              className={cn(
                                "w-5 h-5 transition-colors duration-200",
                                isActive
                                  ? "text-white"
                                  : "text-slate-300 group-hover:text-white"
                              )}
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 group-data-[collapsible=icon]:hidden min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className={cn(
                                  "font-semibold text-sm leading-tight truncate",
                                  isActive
                                    ? "text-white"
                                    : "text-slate-200 group-hover:text-white"
                                )}
                              >
                                {item.title}
                              </span>
                              {item.badge && (
                                <span
                                  className={cn(
                                    "px-2 py-1 text-xs rounded-md font-bold uppercase tracking-wide flex-shrink-0 ml-2",
                                    item.badge === "NEW"
                                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                      : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                                  )}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p
                              className={cn(
                                "text-xs leading-tight truncate",
                                isActive
                                  ? "text-white/80"
                                  : "text-slate-400 group-hover:text-slate-300"
                              )}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
