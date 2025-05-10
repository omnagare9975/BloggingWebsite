import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-zinc-900 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4">Om Nagare Blog's</h1>
          <p className="text-lg text-gray-300 mb-6">Your daily dose of tech, tutorials, and thoughts.</p>
          <Link to="/blog" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-purple-700/30 transition">
            <h3 className="text-xl font-semibold text-white mb-2">Getting Started with Node.js</h3>
            <p className="text-sm text-gray-400 mb-4">Kickstart your backend journey with Node.js and Express.</p>
            <Link to="#" className="text-purple-400 font-medium hover:underline">Read more →</Link>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-purple-700/30 transition">
            <h3 className="text-xl font-semibold text-white mb-2">Why Tailwind CSS Rocks</h3>
            <p className="text-sm text-gray-400 mb-4">Build fast and maintain consistent UI with Tailwind.</p>
            <Link to="#" className="text-purple-400 font-medium hover:underline">Read more →</Link>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-purple-700/30 transition">
            <h3 className="text-xl font-semibold text-white mb-2">Build a REST API</h3>
            <p className="text-sm text-gray-400 mb-4">Create and test RESTful APIs with Express.js.</p>
            <Link to="#" className="text-purple-400 font-medium hover:underline">Read more →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}