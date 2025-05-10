import '../App.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center py-4 text-tertiary">
        &copy; {new Date().getFullYear()} Om Nagare Blog's. All rights reserved.
      </div>
    </footer>
  )
}