"use client"

import { AppSidebar } from "./components/app-sidebar"
import { DashboardHeader } from "./components/dashboard-header"
import { StatsCards } from "./components/stats-cards"
import { RecentActivity } from "./components/recent-activity"
import { DataTable } from "./components/data-table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHero } from "./components/dashboard-hero"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <DashboardHeader />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <DashboardHero />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-inner md:min-h-min">
            <div className="p-6 space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dashboard
                </h2>
                <p className="text-gray-600 mt-2 text-lg">Here's what's happening with your business today.</p>
              </div>

              <StatsCards />

              <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2 bg-gradient-to-br from-white to-gray-50 shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
                    <CardTitle className="text-white">Revenue Overview</CardTitle>
                    <CardDescription className="text-indigo-100">Monthly revenue trends and analytics</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-[300px] w-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                        alt="Chart visualization"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                      <p className="absolute text-white font-semibold text-lg bg-blue-600/80 px-4 py-2 rounded-lg">
                        Interactive Chart Coming Soon
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <RecentActivity />
              </div>

              <DataTable />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
