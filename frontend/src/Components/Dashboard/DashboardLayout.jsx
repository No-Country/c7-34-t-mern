import { Sidebar } from ".."

function DashboardLayout({ children }) {
  return (
    <div className="bg-indigo-100">
      <Sidebar />
      {children}
    </div>
  )
}
export default DashboardLayout
