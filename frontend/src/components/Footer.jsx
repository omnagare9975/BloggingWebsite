import '../App.css'
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-center py-4 text-gray-400">
      &copy; {new Date().getFullYear()} Om Nagare Blog's. All rights reserved.
    </footer>
  )
}