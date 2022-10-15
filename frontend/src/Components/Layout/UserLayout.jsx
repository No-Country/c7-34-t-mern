import { Header, Sidebar } from ".."

function UserLayout({ children }) {
  return (
    <div className="overflow-x-hidden grid">
      <Header title={"Dashboard"} />
      <Sidebar />
      {children}
    </div>
  )
}
export default UserLayout
