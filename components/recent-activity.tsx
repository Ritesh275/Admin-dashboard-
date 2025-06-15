"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    initials: "OM",
    amountColor: "text-green-600",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    initials: "JL",
    amountColor: "text-green-600",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    initials: "IN",
    amountColor: "text-green-600",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    initials: "WK",
    amountColor: "text-green-600",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    initials: "SD",
    amountColor: "text-green-600",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-white">Recent Sales</CardTitle>
        <CardDescription className="text-blue-100">You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Avatar className="h-10 w-10 ring-2 ring-blue-200">
                <AvatarImage src={sale.avatar || "/placeholder.svg"} alt="Avatar" />
                <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold">
                  {sale.initials}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-semibold leading-none text-gray-900">{sale.name}</p>
                <p className="text-sm text-gray-500">{sale.email}</p>
              </div>
              <div className={`ml-auto font-bold text-lg ${sale.amountColor}`}>{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
