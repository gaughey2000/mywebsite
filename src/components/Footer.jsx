export default function Footer() {
    return (
      <footer className="border-t mt-16 border-secondary-30">
        <div className="container-default py-8 text-sm text-secondary flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} <span className="text-primary">My Website</span></p>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline text-primary">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline text-primary">LinkedIn</a>
            <a href="mailto:you@example.com" className="hover:underline text-primary">Email</a>
          </div>
        </div>
      </footer>
    )
  }