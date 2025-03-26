import { Outlet } from 'react-router'

import { Sidebar } from '@/app/components/Sidebar'
import { Topbar } from '@/app/components/Topbar'

export const HomeLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-50">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
