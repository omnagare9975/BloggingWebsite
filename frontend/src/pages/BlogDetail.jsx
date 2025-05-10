import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`/api/blogs/${id}`)
        setBlog(response.data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  if (!blog) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Blog not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">{blog.title}</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>

        {blog.coverImage && (
          <img 
            src={`/uploads/${blog.coverImage}`} 
            alt={blog.title} 
            className="mt-6 rounded-lg w-full max-w-2xl mx-auto"
          />
        )}
      </div>
    </div>
  )
}