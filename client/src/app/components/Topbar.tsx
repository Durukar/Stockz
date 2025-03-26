import {
  Bell,
  HelpCircle,
  Moon,
  Package,
  Search,
  Settings,
  Sun,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Topbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
            <Package className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Stockz
          </span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden max-w-md flex-1 px-8 md:block">
        <div className="relative">
          <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Pesquisar..."
            className="h-9 w-full border-gray-200 bg-gray-50 pr-4 pl-9 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 md:gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-[10px]">
            3
          </Badge>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <Settings className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="sm" className="ml-2 gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <User className="h-5 w-5" />
          </div>
          <span className="hidden text-sm font-medium text-gray-700 md:inline-block dark:text-gray-300">
            Usuário
          </span>
        </Button>
      </div>
    </header>
  )
}
