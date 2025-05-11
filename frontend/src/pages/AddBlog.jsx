import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'



export default function AddBlog({ setBlogs }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const showblogs = `${import.meta.env.VITE_API_BASE_URL}/show/blogs`;
  // Function to fetch all blogs and update the state
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(showblogs)
      setBlogs(response.data)  // Update parent component with the new blog list
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }


  
  const addBlogUrl = `${import.meta.env.VITE_API_BASE_URL}/addblog`;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      if (coverImage) formData.append('coverImage', coverImage)

      // Post the new blog
      await axios.post(addBlogUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      // Fetch updated blogs after submission
      fetchBlogs()

      // Redirect to the blog list page
      navigate('/blog')
    } catch (error) {
      console.error('Error creating blog:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="blog-form-container flex-center">
      <div className="blog-form-card">
        <h1 className="auth-title">📝 New Blog Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-tertiary mb-1">Blog Title</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title..."
              required 
              className="form-input w-full"
            />
          </div>
          
          <div>
            <label className="block text-tertiary mb-1">Cover Image</label>
            <input 
              type="file"
              onChange={(e) => setCoverImage(e.target.files[0])}
              accept="image/*"
              className="form-input w-full"
            />
          </div>

          <div>
            <label className="block text-tertiary mb-1">Content</label>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="8"
              placeholder="Write your blog here..."
              required 
              className="form-input w-full"
            />
          </div>

          <div className="text-center">
            <button 
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3"
            >
              {loading ? 'Publishing...' : '🚀 Publish Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
