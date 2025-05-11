import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

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
    
    const singnup = `${import.meta.env.VITE_API_BASE_URL}/user/signup`
    try {
      const response = await axios.post(singnup, {
        name,
        email,
        password
      })
      
      setMessage(response.data.message || 'Signup successful!')
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Your Account</h2>
        
        {message && (
          <div className="success-message mb-4">
            {message}
          </div>
        )}
        
        {error && (
          <div className="error-message mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-tertiary mb-1">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              className="form-input w-full"
            />
          </div>

          <div>
            <label className="block text-tertiary mb-1">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="form-input w-full"
            />
          </div>

          <div>
            <label className="block text-tertiary mb-1">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="form-input w-full"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full py-2"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-tertiary mt-4 text-sm">
          Already have an account? 
          <Link to="/login" className="text-primary ml-1">Login</Link>
        </p>
      </div>
    </div>
  )
}