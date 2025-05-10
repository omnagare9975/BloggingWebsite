import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BlogList() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/blogs')
        setBlogs(response.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-purple-400 mb-8">All Blogs</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog._id} className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-purple-700/30 transition">
              <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {blog.content.substring(0, 100)}...
              </p>
              <Link 
                to={`/blog/${blog._id}`} 
                className="text-purple-400 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}