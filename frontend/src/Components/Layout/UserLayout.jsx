import { Header, Sidebar } from ".."

function UserLayout({ children }) {
  return (
    <div className="bg-indigo-100">
      <Header title={"Dashboard"} />
      <Sidebar />
      {children}
    </div>
  )
}
export default UserLayout
