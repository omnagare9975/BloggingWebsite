import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import AddBlog from './pages/AddBlog'
import Login from './pages/Login'
import Signup from './pages/Signup'
import axios from 'axios'

import './App.css'

export default function App() {
  const [blogs, setBlogs] = useState([])

  // Fetch blogs from the server when the app loads or when a new blog is added
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/show/blogs`)
      setBlogs(response.data)  // Update state with the latest blogs
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }

  // Call fetchBlogs when the component mounts
  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList blogs={blogs} />} />  {/* Pass blogs to BlogList */}
            <Route path="/blog/:id" element={<BlogDetail />} />  {/* New Route for Blog Detail */}
            <Route path="/addblog" element={<AddBlog setBlogs={setBlogs} />} /> {/* Pass setBlogs to AddBlog */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}
