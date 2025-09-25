export default function Footer() {
    return (
      <footer className="border-t mt-16">
        <div className="container-default py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} My Website</p>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href="mailto:you@example.com" className="hover:underline">Email</a>
          </div>
        </div>
      </footer>
    )
  }