import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <div className="container-default py-10">{children}</div>
      </main>
      <Footer />
    </div>
  )
}