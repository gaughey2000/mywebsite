import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl font-bold text-primary">404</h1>
      <p className="text-secondary">That page could not be found.</p>
      <Link to="/" className="inline-block rounded-md border px-4 py-2 text-sm hover:bg-muted border-secondary text-primary">Back Home</Link>
    </section>
  )
}