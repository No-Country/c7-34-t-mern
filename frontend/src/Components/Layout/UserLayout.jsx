import { Header, Sidebar } from ".."

function UserLayout({ children }) {
  return (
    <div className="overflow-x-hidden grid bg-indigo-50 max-h-screen">
      <Header title={"Dashboard"} />
      <Sidebar />
      {children}
    </div>
  )
}
export default UserLayout
