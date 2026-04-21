
import { Outlet } from 'react-router'
import Navbar from '../../shared/components/Navbar'
import Sidebar from '../../shared/components/Sidebar'

const DashboardLayout = () => {
  return (

    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto custom-scrollbar px-3 py-1">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
