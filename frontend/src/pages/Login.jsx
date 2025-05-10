import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password
      })
      
      // Store the token (you might want to use context or state management)
      localStorage.setItem('token', response.data.token)
      
      // Redirect to home or dashboard
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-zinc-800 text-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Login to Your Account</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="mt-1 block w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:ring focus:ring-purple-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="mt-1 block w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:ring focus:ring-purple-300 focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <Link to="#" className="text-purple-400 hover:underline">Forgot password?</Link>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?
          <Link to="/signup" className="text-purple-400 hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  )
}