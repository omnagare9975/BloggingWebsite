import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/blog/${id}`)
        setBlog(response.data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [id])

  if (loading) return <div className="min-h-screen flex-center">Loading...</div>
  if (!blog) return <div className="min-h-screen flex-center">Blog not found</div>

  return (
    <div className="blog-detail-container py-8">
      <div className="container">
        <h1 className="text-gradient text-4xl font-bold mb-4">{blog.title}</h1>
        
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>

        {blog.coverImage && (
          <img 
            src={`/uploads/${blog.coverImage}`} 
            alt={blog.title} 
            className="mt-6 rounded-lg w-full"
          />
        )}
      </div>
    </div>
  )
}