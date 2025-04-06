import { Outlet } from 'react-router'

import { AppSidebar } from '@/app/components/app-sidebar'
// import { Sidebar } from '@/app/components/Sidebar'
// import { Topbar } from '@/app/components/Topbar'
import { SidebarProvider } from '@/components/ui/sidebar'

export const HomeLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  )
}

export default HomeLayout
