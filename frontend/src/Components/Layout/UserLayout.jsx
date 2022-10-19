import { Header, Sidebar } from ".."

function UserLayout({ children }) {
  return (
    <div className="overflow-x-hidden grid bg-gradient-to-r from-indigo-50 to-indigo-100 h-screen">
      <Header title={"Dashboard"} />
      <Sidebar />
      {children}
    </div>
  )
}
export default UserLayout
