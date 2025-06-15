"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-white border-gray-200 pl-8 md:w-[200px] lg:w-[336px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto h-10 w-10 relative border-gray-200 hover:bg-blue-50"
            >
              <Bell className="h-4 w-4 text-gray-600" />
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-xs text-white font-bold shadow-lg">
                3
              </div>
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-md -m-1 mb-2">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-4 hover:bg-blue-50">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-gray-900">New user registered</p>
                <p className="text-xs leading-none text-blue-600">2 minutes ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4 hover:bg-green-50">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-gray-900">Order completed</p>
                <p className="text-xs leading-none text-green-600">1 hour ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4 hover:bg-purple-50">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-gray-900">System update</p>
                <p className="text-xs leading-none text-purple-600">3 hours ago</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
