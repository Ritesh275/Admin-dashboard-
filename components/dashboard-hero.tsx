"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, ShoppingBag } from "lucide-react"

export function DashboardHero() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-200" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=60&fit=crop"
              alt="Analytics"
              className="w-16 h-10 rounded-lg object-cover opacity-80"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Analytics Overview</h3>
          <p className="text-blue-100 text-sm mb-4">Track your business performance</p>
          <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
            View Details
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-green-200" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=60&fit=crop"
              alt="Team"
              className="w-16 h-10 rounded-lg object-cover opacity-80"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">User Management</h3>
          <p className="text-green-100 text-sm mb-4">Manage your user base</p>
          <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
            Manage Users
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <ShoppingBag className="h-8 w-8 text-purple-200" />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=60&fit=crop"
              alt="Sales"
              className="w-16 h-10 rounded-lg object-cover opacity-80"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Sales Dashboard</h3>
          <p className="text-purple-100 text-sm mb-4">Monitor your sales metrics</p>
          <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
            View Sales
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
