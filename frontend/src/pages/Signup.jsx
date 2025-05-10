import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:8080/user/signup', {
        name,
        email,
        password
      })
      
      setMessage(response.data.message || 'Signup successful!')
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Create Your Account</h2>
        
        {message && (
          <div className="bg-green-700 text-green-100 p-3 rounded-lg mb-4 text-center">
            {message}
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              className="w-full px-4 py-2 rounded-lg border bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-300" 
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full px-4 py-2 rounded-lg border bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-300" 
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full px-4 py-2 rounded-lg border bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-300" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Already have an account? 
          <Link to="/login" className="text-purple-400 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  )
}