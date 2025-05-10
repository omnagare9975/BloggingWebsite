import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      if (coverImage) {
        formData.append('coverImage', coverImage)
      }

      // Replace with your actual API endpoint
      await axios.post('/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      
      navigate('/blog')
    } catch (error) {
      console.error('Error creating blog:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center text-gray-200 font-sans">
      <div className="bg-[#1a1a2e] p-10 rounded-2xl shadow-2xl w-full max-w-2xl border border-purple-800">
        <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center tracking-wider">📝 New Blog Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title */}
          <div>
            <label htmlFor="title" className="block text-sm text-purple-300 mb-1">Blog Title</label>
            <input 
              type="text" 
              id="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title..." 
              required 
              className="w-full px-4 py-3 bg-[#121212] text-white border border-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          {/* Cover Image */}
          <div>
            <label htmlFor="coverImage" className="block text-sm text-purple-300 mb-1">Cover Image</label>
            <input 
              type="file" 
              id="coverImage" 
              onChange={(e) => setCoverImage(e.target.files[0])}
              accept="image/*"
              className="w-full px-4 py-2 bg-[#121212] text-white border border-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 file:bg-purple-700 file:border-0 file:rounded-md file:px-4 file:py-2 file:text-white file:cursor-pointer"
            />
          </div>

          {/* Blog Content */}
          <div>
            <label htmlFor="content" className="block text-sm text-purple-300 mb-1">Content</label>
            <textarea 
              id="content" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="8" 
              placeholder="Write your blog here..." 
              required 
              className="w-full px-4 py-3 bg-[#121212] text-white border border-purple-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold tracking-wide transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Publishing...' : '🚀 Publish Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}