import { Sidebar } from ".."

function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
export default DashboardLayout
