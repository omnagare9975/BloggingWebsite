import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container">
          <h1 className="text-gradient text-4xl font-bold mb-4">Om Nagare Blog's Deployed Using the CloudFront AWS</h1>
          <p className="text-secondary mb-6">Your daily dose of tech, tutorials, and thoughts.</p>
          <Link to="/blog" className="btn-primary">Explore Blogs</Link>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-12">
        <div className="container grid grid-cols-3">
          <div className="blog-card">
            <h3 className="text-xl font-semibold mb-2">Getting Started with Node.js</h3>
            <p className="text-tertiary mb-4">Kickstart your backend journey with Node.js and Express.</p>
            <Link to="#" className="text-primary">Read more →</Link>
          </div>
          {/* Repeat for other cards */}
        </div>
      </section>
    </div>
  )
}