import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

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
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password
      })
      
      localStorage.setItem('token', response.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to Your Account</h2>
        
        {error && (
          <div className="error-message mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="flex justify-between items-center text-sm text-tertiary">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <Link to="#" className="text-primary">Forgot password?</Link>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-2"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-tertiary mt-6 text-sm">
          Don't have an account?
          <Link to="/signup" className="text-primary ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  )
}